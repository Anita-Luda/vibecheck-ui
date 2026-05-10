import { U, RenderMap, ColorFamily } from '../../contracts/abi';
import { STYLE_PRESETS } from '../styles/presets';
import { generateFamilyLattice } from './colorCompiler';

export const mapUToRenderMap = (u: U): RenderMap => {
  const preset = STYLE_PRESETS[u.p];
  const cssVars: Record<string, string> = {};

  // 1. Generate All Families Lattices
  const familyMap = new Map<string, string[]>();
  u.families.forEach(f => {
      familyMap.set(f.id, generateFamilyLattice(f.base, f.config));
  });

  // Default fallback family (grayscale) if needed
  const defaultLattice = Array.from({length: 11}, (_, i) => `oklch(${(1 - i/10) * 100}% 0 0)`);

  const getLattice = (id: string) => familyMap.get(id) || defaultLattice;

  // 2. Semantic Roles Mapping (Global)
  const roleLattices = {
      dominant: getLattice(u.roles.dominant),
      secondary: getLattice(u.roles.secondary),
      accent: getLattice(u.roles.accent),
      support: getLattice(u.roles.support),
      muted: getLattice(u.roles.muted),
      destructive: getLattice(u.roles.destructive),
      neutral: getLattice(u.roles.neutral),
      overlay: getLattice(u.roles.overlay),
  };

  const getShade = (lattice: string[], index: number) => {
      // In dark mode, we might want to invert index or shift it
      // Standard 50-950 scale: 50 is index 0 (light), 950 is index 10 (dark)
      return lattice[index];
  };

  // 3. Weight-based redistribution (Dynamic Hierarchy)
  // Components map to roles based on weights.
  // Weight w[0] (60% threshold), w[1] (90% threshold)
  u.r.map.forEach((val, i) => {
      const norm = val / 65535;
      let lattice = roleLattices.dominant;
      if (norm > u.w[0]) lattice = roleLattices.secondary;
      if (norm > u.w[1]) lattice = roleLattices.accent;

      // Check for per-component overrides
      const override = u.overrides?.[`c-${i}`];
      if (override?.familyId) {
          lattice = getLattice(override.familyId);
      }

      const shadeIndex = override?.shadeIndex !== undefined ? override.shadeIndex : (u.darkMode ? 2 : 9);
      cssVars[`--color-role-${i}`] = getShade(lattice, shadeIndex);
      cssVars[`--color-role-${i}-hover`] = getShade(lattice, u.darkMode ? Math.min(10, shadeIndex + 1) : Math.max(0, shadeIndex - 1));
      cssVars[`--color-role-${i}-active`] = getShade(lattice, u.darkMode ? Math.min(10, shadeIndex + 2) : Math.max(0, shadeIndex - 2));
      cssVars[`--color-role-${i}-bg`] = getShade(lattice, u.darkMode ? 9 : 0);
      cssVars[`--color-role-${i}-border`] = getShade(lattice, u.darkMode ? 7 : 2);
  });

  // 4. Global Tokens (Total Tokenization)
  cssVars['--color-bg'] = u.darkMode ? getShade(roleLattices.neutral, 10) : getShade(roleLattices.neutral, 0);
  cssVars['--color-surface'] = u.darkMode ? getShade(roleLattices.neutral, 9) : getShade(roleLattices.neutral, 0);
  cssVars['--color-surface-raised'] = u.darkMode ? getShade(roleLattices.neutral, 8) : getShade(roleLattices.neutral, 0);

  cssVars['--color-text-primary'] = u.darkMode ? getShade(roleLattices.neutral, 0) : getShade(roleLattices.neutral, 10);
  cssVars['--color-text-secondary'] = u.darkMode ? getShade(roleLattices.neutral, 2) : getShade(roleLattices.neutral, 7);
  cssVars['--color-text-accent'] = getShade(roleLattices.accent, u.darkMode ? 3 : 7);

  // 5. Geometry & Deep Redistribution
  const borderMult = u.o?.borderThickness !== undefined ? u.o.borderThickness : (u.darkMode ? 1 : 1.5);
  cssVars['--border-width'] = `${borderMult}px`;

  const shadowMult = u.o?.shadowBlur !== undefined ? u.o.shadowBlur : 1;
  cssVars['--shadow-intensity'] = `${shadowMult}`;

  const motionMult = u.o?.motionIntensity !== undefined ? u.o.motionIntensity : 1;
  cssVars['--motion-duration'] = `${0.3 * motionMult}s`;

  // 6. Style Presets
  cssVars['--font-family'] = u.o?.fontFamily || preset.typography.family;
  const baseRadius = u.o?.radiusBase !== undefined ? u.o.radiusBase : preset.radius[1];
  cssVars['--radius-base'] = `${baseRadius}px`;

  const spacingBase = u.o?.spacingBase || 16;
  const spacingMultiplier = spacingBase / 16;
  [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16].forEach(val => {
      cssVars[`--spacing-${val}`] = `${val * 4 * spacingMultiplier}px`;
  });

  return {
    cssVars,
    layoutBindings: Array.from(u.r.map),
  };
};
