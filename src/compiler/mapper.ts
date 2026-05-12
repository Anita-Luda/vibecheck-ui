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
    if (u.useGrayscalePresets && !u.applyPresetColors) return { l: f.base.l, c: 0, h: f.base.h };
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

  const defaultLattice = Array.from({length: 11}, (_, i) => `oklch(${(1 - i/10) * 100}% 0 0)`);
  const getLattice = (id: string) => familyMap.get(id) || defaultLattice;

  // 2. Semantic Roles Mapping
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

  const getShade = (lattice: string[], index: number) => lattice[index];

  // 3. Weight-based redistribution
  u.r.map.forEach((val, i) => {
      const norm = val / 65535;
      let lattice = roleLattices.dominant;
      if (norm > u.w[0]) lattice = roleLattices.secondary;
      if (norm > u.w[1]) lattice = roleLattices.accent;

      const override = u.overrides?.[`c-${i}`];
      if (override?.familyId) lattice = getLattice(override.familyId);

      const shadeIndex = override?.shadeIndex !== undefined ? override.shadeIndex : (u.darkMode ? 2 : 9);
      cssVars[`--color-role-${i}`] = getShade(lattice, shadeIndex);
      cssVars[`--color-role-${i}-hover`] = getShade(lattice, u.darkMode ? Math.min(10, shadeIndex + 1) : Math.max(0, shadeIndex - 1));
      cssVars[`--color-role-${i}-active`] = getShade(lattice, u.darkMode ? Math.min(10, shadeIndex + 2) : Math.max(0, shadeIndex - 2));
      cssVars[`--color-role-${i}-bg`] = getShade(lattice, u.darkMode ? 9 : 0);
      cssVars[`--color-role-${i}-border`] = getShade(lattice, u.darkMode ? 7 : 2);
  });

  // 4. Global Tokens
  cssVars['--color-bg'] = u.darkMode ? getShade(roleLattices.neutral, 10) : getShade(roleLattices.neutral, 0);
  cssVars['--color-surface'] = u.darkMode ? getShade(roleLattices.neutral, 9) : getShade(roleLattices.neutral, 0);
  cssVars['--color-surface-raised'] = u.darkMode ? getShade(roleLattices.neutral, 8) : getShade(roleLattices.neutral, 0);
  cssVars['--color-text-primary'] = u.darkMode ? getShade(roleLattices.neutral, 0) : getShade(roleLattices.neutral, 10);
  cssVars['--color-text-secondary'] = u.darkMode ? getShade(roleLattices.neutral, 2) : getShade(roleLattices.neutral, 7);
  cssVars['--color-text-accent'] = getShade(roleLattices.accent, u.darkMode ? 3 : 7);

  // 5. Geometry & Effects
  const borderMult = (u.customizing && u.o?.borderThickness !== undefined) ? u.o.borderThickness : preset.borderThickness;
  cssVars['--border-width'] = `${borderMult}px`;

  const shadowMult = (u.customizing && u.o?.shadowBlur !== undefined) ? u.o.shadowBlur : preset.shadowBlur;
  cssVars['--shadow-intensity'] = `${shadowMult}`;

  const motionMult = (u.customizing && u.o?.motionIntensity !== undefined) ? u.o.motionIntensity : 1;
  cssVars['--motion-duration'] = `${0.3 * motionMult}s`;

  // 6. Visual Language (Deep Mapping)
  const vl = preset.visual;
  cssVars['--font-family'] = (u.customizing && u.o?.fontFamily) || preset.typography.family;
  cssVars['--font-weight-normal'] = `${preset.typography.weights[0]}`;
  cssVars['--font-weight-bold'] = `${preset.typography.weights[1] || 700}`;
  cssVars['--font-size-base'] = `${preset.typography.sizeBase}px`;

  cssVars['--vl-text-transform'] = vl.textTransform;
  cssVars['--vl-letter-spacing'] = vl.letterSpacing;
  cssVars['--vl-line-height'] = vl.lineHeight;
  cssVars['--vl-text-shadow'] = vl.textShadow;
  cssVars['--vl-font-smoothing'] = vl.fontSmoothing === 'antialiased' ? 'antialiased' : 'auto';

  cssVars['--vl-skeuo'] = `${vl.skeuomorphism}`;
  cssVars['--vl-realism'] = `${vl.realism}`;
  cssVars['--vl-noise'] = `${(u.customizing && u.o?.noiseLevel !== undefined) ? u.o.noiseLevel : vl.noise}`;
  cssVars['--vl-softness'] = `${vl.softness}`;
  cssVars['--vl-opacity'] = `${vl.opacity}`;
  cssVars['--vl-cursor'] = vl.cursor;
  cssVars['--vl-user-select'] = vl.userSelect;

  cssVars['--vl-filter'] = vl.filter || 'none';
  cssVars['--vl-mix-blend'] = vl.mixBlend || 'normal';
  cssVars['--vl-bg-blend'] = vl.bgBlend || 'normal';
  cssVars['--vl-transform'] = vl.transform || 'none';
  cssVars['--vl-perspective'] = vl.perspective || 'none';

  // Backdrop Logic
  if (vl.backdrop === 'glass') {
      cssVars['--backdrop-filter'] = `blur(12px) saturate(180%)`;
      cssVars['--backdrop-bg'] = u.darkMode ? 'rgba(17, 25, 40, 0.75)' : 'rgba(255, 255, 255, 0.7)';
  } else if (vl.backdrop === 'frosted') {
      cssVars['--backdrop-filter'] = `blur(20px) brightness(1.2)`;
      cssVars['--backdrop-bg'] = u.darkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.4)';
  } else if (vl.backdrop === 'blur') {
      cssVars['--backdrop-filter'] = `blur(8px)`;
      cssVars['--backdrop-bg'] = 'transparent';
  } else {
      cssVars['--backdrop-filter'] = 'none';
      cssVars['--backdrop-bg'] = 'transparent';
  }

  // Shadow Mapping
  if (vl.shadowType === 'neon') {
      const accent = roleLattices.accent[5];
      cssVars['--box-shadow'] = `0 0 5px ${accent}, 0 0 20px ${accent}`;
  } else if (vl.shadowType === 'hard') {
      cssVars['--box-shadow'] = u.darkMode ? '4px 4px 0px rgba(0,0,0,1)' : '4px 4px 0px rgba(0,0,0,0.2)';
  } else if (vl.shadowType === 'inner') {
      cssVars['--box-shadow'] = 'inset 2px 2px 5px rgba(0,0,0,0.2)';
  } else if (vl.shadowType === 'soft') {
      cssVars['--box-shadow'] = `0 10px 25px -5px rgba(0,0,0,${0.1 * shadowMult})`;
  } else {
      cssVars['--box-shadow'] = 'none';
  }

  // Background Overrides
  if (preset.background) {
      cssVars['--vl-bg-image'] = preset.background.image || 'none';
      cssVars['--vl-bg-size'] = preset.background.size || 'auto';
      cssVars['--vl-bg-position'] = preset.background.position || 'center';
      cssVars['--vl-bg-repeat'] = preset.background.repeat || 'no-repeat';
  } else {
      cssVars['--vl-bg-image'] = 'none';
  }

  const baseRadius = (u.customizing && u.o?.radiusBase !== undefined) ? u.o.radiusBase : preset.radiusBase;
  cssVars['--radius-xs'] = `${baseRadius * 0.25}px`;
  cssVars['--radius-sm'] = `${baseRadius * 0.5}px`;
  cssVars['--radius-base'] = `${baseRadius}px`;
  cssVars['--radius-lg'] = `${baseRadius * 1.5}px`;
  cssVars['--radius-xl'] = `${baseRadius * 2.5}px`;
  cssVars['--radius-full'] = '9999px';

  const spacingBase = (u.customizing && u.o?.spacingBase !== undefined) ? u.o.spacingBase : preset.spacingBase;
  const spacingMultiplier = spacingBase / 16;
  [0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64].forEach(val => {
      cssVars[`--spacing-${val}`.replace('.', '_')] = `${val * 4 * spacingMultiplier}px`;
  });

  return {
    cssVars,
    layoutBindings: Array.from(u.r.map),
  };
};
