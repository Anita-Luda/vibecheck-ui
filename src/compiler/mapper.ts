import { U, RenderMap, ColorFamily, OKLCH } from '../../contracts/abi';
import { STYLE_PRESETS } from '../styles/presets';
import { PRESET_PALETTES } from '../styles/palettes';
import { generateTonalPalette } from './colorCompiler';

export const mapUToRenderMap = (u: U): RenderMap => {
  const preset = STYLE_PRESETS[u.p];
  const presetPalette = PRESET_PALETTES[u.p];
  const cssVars: Record<string, string> = {};

  // 1. Core Tonal Scale
  let basePalette: string[];
  const grayBase: OKLCH = { l: 0.5, c: 0, h: 0 };
  const customBase = u.masterColor || { l: 0.5, c: 0.1, h: 200 };

  if (u.colorSource === 'grayscale') {
      basePalette = generateTonalPalette(grayBase, true);
  } else if (u.colorSource === 'custom') {
      basePalette = generateTonalPalette(customBase);
  } else {
      basePalette = generateTonalPalette(presetPalette.primary);
  }

  basePalette.forEach((color, i) => {
      cssVars[`--color-tone-${i * 10}`] = color;
  });

  const getTone = (tone: number) => basePalette[Math.min(100, Math.round(tone / 10))];

  // 2. Visual Language Mapping
  const vl = preset.visual;
  Object.entries(vl).forEach(([key, value]) => {
      if (typeof value === 'string' || typeof value === 'number') {
          const cssKey = `--vl-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
          cssVars[cssKey] = String(value);
      }
  });

  cssVars['--color-bg'] = u.darkMode ? getTone(1000) : getTone(0);
  cssVars['--color-surface'] = u.darkMode ? getTone(900) : getTone(50);
  cssVars['--color-surface-raised'] = u.darkMode ? getTone(800) : getTone(100);
  cssVars['--color-text-primary'] = u.darkMode ? getTone(0) : getTone(1000);
  cssVars['--color-text-secondary'] = u.darkMode ? getTone(300) : getTone(700);

  // 3. THE ROLE ENGINE (ENHANCED v8)
  const functionalRoles = [
      'primary', 'secondary', 'accent', 'support', 'muted', 'destructive', 'neutral',
      'success', 'warning', 'info'
  ];

  // Hierarchy Weight (u.w[1]) affects global intensity
  const hierarchyWeight = u.w[1] || 1;

  const getFamilyForRole = (roleName: string, roleIdx: number): string => {
      const sliderVal = (u.r.map[roleIdx] || 5) / 10; // 0..1
      const dominanceWeight = u.w[0] || 1;

      // Core distribution logic based on Mode + Dominance
      // If dominance is high, everything gravitates towards the dominant family
      if (dominanceWeight > 1.5 && sliderVal > 0.3) return 'dominant';

      if (u.m === 0) { // 60/30/10
          if (roleName === 'primary') return sliderVal > 0.2 ? 'dominant' : 'secondary';
          if (roleName === 'secondary') return sliderVal > 0.5 ? 'secondary' : 'neutral';
          if (roleName === 'accent') return sliderVal > 0.7 ? 'accent' : 'secondary';
      } else if (u.m === 1) { // 30/30/40
          if (roleName === 'primary') return sliderVal > 0.4 ? 'accent' : 'dominant';
          if (roleName === 'secondary') return sliderVal > 0.4 ? 'dominant' : 'secondary';
          return 'secondary';
      } else if (u.m === 2) { // 10/30/60
          if (roleName === 'primary') return 'neutral';
          if (roleName === 'secondary') return 'muted';
          return 'dominant';
      }
      return roleName;
  };

  functionalRoles.forEach((roleName, roleIdx) => {
      const colorRole = getFamilyForRole(roleName, roleIdx);

      let familyBase: OKLCH;
      const grayBase: OKLCH = { l: 0.5, c: 0, h: 0 };

      const familyId = (u.roles as any)[colorRole] || (u.roles as any)[roleName];
      const customFamily = u.families.find(f => f.id === familyId);

      if (customFamily) {
          familyBase = customFamily.base;
      } else if (u.colorSource === 'grayscale') {
          familyBase = grayBase;
      } else if (u.colorSource === 'custom' && u.masterColor) {
          const shift = (functionalRoles.indexOf(roleName) * 40) % 360;
          familyBase = { ...u.masterColor, h: (u.masterColor.h + shift) % 360 };
      } else {
          familyBase = (presetPalette as any)[colorRole] || (presetPalette as any)[roleName] || presetPalette.primary;
      }

      const rolePalette = generateTonalPalette(familyBase, u.colorSource === 'grayscale');
      const getRoleTone = (tone: number) => rolePalette[Math.min(100, Math.round(tone / 10))];

      [100, 200, 300, 400, 500, 600, 700, 800, 900].forEach(toneVal => {
          cssVars[`--color-role-${roleName}-${toneVal}`] = getRoleTone(toneVal);
      });

      let tone = u.darkMode ? 400 : 600;
      if (roleName === 'success') tone = u.darkMode ? 400 : 500;
      if (roleName === 'warning') tone = u.darkMode ? 500 : 600;
      if (roleName === 'info') tone = u.darkMode ? 400 : 600;

      const sliderValue = u.r.map[roleIdx] || 5;
      // Tone shifted by slider AND hierarchy weight
      const toneShift = (sliderValue - 5) * 40 * hierarchyWeight;
      tone = Math.max(0, Math.min(1000, tone + toneShift));

      cssVars[`--color-role-${roleName}`] = getRoleTone(tone);
      cssVars[`--color-role-${roleName}-hover`] = getRoleTone(u.darkMode ? Math.min(1000, tone + 100) : Math.max(0, tone - 100));
      cssVars[`--color-role-${roleName}-active`] = getRoleTone(u.darkMode ? Math.min(1000, tone + 200) : Math.max(0, tone - 200));
      cssVars[`--color-role-${roleName}-bg`] = getRoleTone(u.darkMode ? 900 : 50);
      cssVars[`--color-role-${roleName}-border`] = getRoleTone(u.darkMode ? 700 : 300);
      cssVars[`--color-role-${roleName}-text`] = u.darkMode ? getRoleTone(0) : getRoleTone(1000);
  });

  // 4. Geometry & Effects (Hierarchy aware)
  const borderMult = ((u.customizing && u.o?.borderThickness !== undefined) ? u.o.borderThickness : preset.borderThickness) * hierarchyWeight;
  cssVars['--border-width'] = `${borderMult}px`;

  const shadowMult = ((u.customizing && u.o?.shadowBlur !== undefined) ? u.o.shadowBlur : preset.shadowBlur) * hierarchyWeight;
  cssVars['--shadow-intensity'] = `${shadowMult}`;

  cssVars['--font-family'] = (u.customizing && u.o?.fontFamily) || preset.typography.family;

  const baseRadius = ((u.customizing && u.o?.radiusBase !== undefined) ? u.o.radiusBase : preset.radiusBase) * (1/hierarchyWeight);
  cssVars['--radius-base'] = `${baseRadius}px`;

  const spacingBase = (u.customizing && u.o?.spacingBase !== undefined) ? u.o.spacingBase : preset.spacingBase;
  const spacingMultiplier = spacingBase / 16;

  [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 40, 48, 64].forEach(val => {
      cssVars[`--spacing-${val}`] = `${val * 4 * spacingMultiplier}px`;
  });

  // PRESET PADDING FIX: Ensure mockups use semantic container padding
  cssVars['--container-padding'] = vl.padding || `${6 * 4 * spacingMultiplier}px`;
  cssVars['--section-gap'] = vl.gap || `${12 * 4 * spacingMultiplier}px`;
  cssVars['--item-gap'] = `${4 * 4 * spacingMultiplier}px`;
  cssVars['--card-padding'] = `${6 * 4 * spacingMultiplier}px`;

  return {
    cssVars,
    layoutBindings: Array.from(u.r.map),
  };
};
