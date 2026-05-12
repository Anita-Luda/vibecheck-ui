import { U, RenderMap, ColorFamily, OKLCH } from '../../contracts/abi';
import { STYLE_PRESETS } from '../styles/presets';
import { PRESET_PALETTES } from '../styles/palettes';
import { generateFamilyLattice } from './colorCompiler';

export const mapUToRenderMap = (u: U): RenderMap => {
  const preset = STYLE_PRESETS[u.p];
  const presetPalette = PRESET_PALETTES[u.p];
  const cssVars: Record<string, string> = {};

  // 1. Generate All Families Lattices
  const familyMap = new Map<string, string[]>();

  const resolveFamilyBase = (f: ColorFamily): OKLCH => {
      if (u.useGrayscalePresets) return { l: f.base.l, c: 0, h: f.base.h };
      if (u.applyPresetColors) {
          if (f.id === 'primary') return presetPalette.primary;
          if (f.id === 'accent') return presetPalette.accent;
          if (f.id === 'neutral') return presetPalette.neutral;
      }
      return f.base;
  };

  u.families.forEach(f => {
      const base = resolveFamilyBase(f);
      familyMap.set(f.id, generateFamilyLattice(base, f.config));
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

  // 6. Style Presets & Visual Language Layers
  const vl = preset.visual;
  cssVars['--font-family'] = u.o?.fontFamily || preset.typography.family;
  cssVars['--font-weight-normal'] = `${preset.typography.weights[0]}`;
  cssVars['--font-weight-bold'] = `${preset.typography.weights[1] || 700}`;
  cssVars['--line-height-base'] = '1.5';
  cssVars['--line-height-tight'] = '1.2';

  // Visual Language layer tokens
  cssVars['--vl-skeuo'] = `${vl.skeuomorphism}`;
  cssVars['--vl-realism'] = `${vl.realism}`;
  cssVars['--vl-noise'] = `${u.o?.noiseLevel ?? vl.noise}`;
  cssVars['--vl-softness'] = `${vl.softness}`;
  cssVars['--vl-blur'] = `${u.o?.shadowBlur ?? 4}px`;

  // Specific Visual Styles
  if (u.p.startsWith('glass')) {
      cssVars['--glass-bg'] = u.darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.7)';
      cssVars['--glass-border'] = 'rgba(255,255,255,0.2)';
      cssVars['--glass-blur'] = '12px';
  } else {
      cssVars['--glass-bg'] = 'transparent';
      cssVars['--glass-border'] = 'transparent';
      cssVars['--glass-blur'] = '0px';
  }

  if (u.p.startsWith('soft-neumorphic')) {
      const shade = u.darkMode ? '0,0,0' : '255,255,255';
      const shadow = u.darkMode ? 'rgba(0,0,0,0.5)' : 'rgba(163,177,198,0.6)';
      cssVars['--neumorph-light'] = u.darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,1)';
      cssVars['--neumorph-shadow'] = shadow;
  }

  const baseRadius = u.o?.radiusBase !== undefined ? u.o.radiusBase : preset.radius[1];
  cssVars['--radius-xs'] = `${baseRadius * 0.25}px`;
  cssVars['--radius-sm'] = `${baseRadius * 0.5}px`;
  cssVars['--radius-base'] = `${baseRadius}px`;
  cssVars['--radius-lg'] = `${baseRadius * 1.5}px`;
  cssVars['--radius-xl'] = `${baseRadius * 2.5}px`;
  cssVars['--radius-full'] = '9999px';

  const spacingBase = u.o?.spacingBase || 16;
  const spacingMultiplier = spacingBase / 16;
  [0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64].forEach(val => {
      cssVars[`--spacing-${val}`.replace('.', '_')] = `${val * 4 * spacingMultiplier}px`;
  });

  // Semantic Layout Tokens
  cssVars['--container-padding'] = 'var(--spacing-8)';
  cssVars['--section-gap'] = 'var(--spacing-12)';
  cssVars['--card-padding'] = 'var(--spacing-6)';
  cssVars['--input-padding-x'] = 'var(--spacing-4)';
  cssVars['--input-padding-y'] = 'var(--spacing-2)';

  // Shadow Depths
  const s = parseFloat(cssVars['--shadow-intensity']);
  cssVars['--shadow-sm'] = `0 1px 2px 0 rgba(0,0,0,${0.05 * s})`;
  cssVars['--shadow-base'] = `0 4px 6px -1px rgba(0,0,0,${0.1 * s}), 0 2px 4px -1px rgba(0,0,0,${0.06 * s})`;
  cssVars['--shadow-lg'] = `0 10px 15px -3px rgba(0,0,0,${0.1 * s}), 0 4px 6px -2px rgba(0,0,0,${0.05 * s})`;
  cssVars['--shadow-xl'] = `0 20px 25px -5px rgba(0,0,0,${0.1 * s}), 0 10px 10px -5px rgba(0,0,0,${0.04 * s})`;
  cssVars['--shadow-inner'] = `inset 0 2px 4px 0 rgba(0,0,0,${0.06 * s})`;

  return {
    cssVars,
    layoutBindings: Array.from(u.r.map),
  };
};
