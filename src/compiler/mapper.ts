import { U, RenderMap, ColorFamily, OKLCH } from '../../contracts/abi';
import { STYLE_PRESETS } from '../styles/presets';
import { PRESET_PALETTES } from '../styles/palettes';
import { generateTonalPalette } from './colorCompiler';

export const mapUToRenderMap = (u: U): RenderMap => {
  const preset = STYLE_PRESETS[u.p];
  const presetPalette = PRESET_PALETTES[u.p];
  const cssVars: Record<string, string> = {};

  // 1. Select the base tonal palette source
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

  // Generate 0-1000 CSS variables (Step 10)
  basePalette.forEach((color, i) => {
      cssVars[`--color-tone-${i * 10}`] = color;
  });

  const getTone = (tone: number) => basePalette[Math.min(100, Math.round(tone / 10))];

  // 2. Visual Language (Deep Mapping)
  const vl = preset.visual;

  // Map every property in the exhaustive schema to a CSS variable
  Object.entries(vl).forEach(([key, value]) => {
      if (typeof value === 'string' || typeof value === 'number') {
          const cssKey = `--vl-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
          cssVars[cssKey] = String(value);
      }
  });

  // Core App Tones (Preset-aware)
  cssVars['--color-bg'] = u.darkMode ? getTone(1000) : getTone(0);
  cssVars['--color-surface'] = u.darkMode ? getTone(900) : getTone(50);
  cssVars['--color-surface-raised'] = u.darkMode ? getTone(800) : getTone(100);

  cssVars['--color-text-primary'] = u.darkMode ? getTone(0) : getTone(1000);
  cssVars['--color-text-secondary'] = u.darkMode ? getTone(300) : getTone(700);
  cssVars['--color-text-muted'] = u.darkMode ? getTone(500) : getTone(500);

  // 3. Weight-based redistribution (Dynamic Hierarchy)
  // Mapping roles based on u.m (ModeId)
  // 0 -> 60/30/10 (Dominant/Secondary/Accent)
  // 1 -> 30/30/40
  // 2 -> 10/30/60
  // 3 -> custom

  const roleDefinitions = [
      { name: 'primary', weight: 0.6 },
      { name: 'secondary', weight: 0.3 },
      { name: 'accent', weight: 0.1 },
      { name: 'support', weight: 0.05 },
      { name: 'muted', weight: 0.05 },
      { name: 'destructive', weight: 0.05 },
      { name: 'neutral', weight: 0.05 }
  ];

  // Adjust weights based on mode
  if (u.m === 0) {
      roleDefinitions[0].weight = 0.6;
      roleDefinitions[1].weight = 0.3;
      roleDefinitions[2].weight = 0.1;
  } else if (u.m === 1) {
      roleDefinitions[0].weight = 0.3;
      roleDefinitions[1].weight = 0.3;
      roleDefinitions[2].weight = 0.4;
  } else if (u.m === 2) {
      roleDefinitions[0].weight = 0.1;
      roleDefinitions[1].weight = 0.3;
      roleDefinitions[2].weight = 0.6;
  }

  roleDefinitions.forEach((roleDef, i) => {
      const roleName = roleDef.name;
      // Generate tonal scale for each family
      let familyBase: OKLCH;
      const grayBase: OKLCH = { l: 0.5, c: 0, h: 0 };

      // Determine which family to use for this role
      // Check u.roles mapping first
      const familyId = (u.roles as any)[roleName];
      const family = u.families.find(f => f.id === familyId);

      if (family) {
          familyBase = family.base;
      } else if (u.colorSource === 'grayscale') {
          familyBase = grayBase;
      } else if (u.colorSource === 'custom' && u.masterColor) {
          // In custom mode, secondary/accent might be shifted from master
          const shift = (i * 40) % 360;
          familyBase = { ...u.masterColor, h: (u.masterColor.h + shift) % 360 };
      } else {
          familyBase = (presetPalette as any)[roleName] || presetPalette.primary;
      }

      const rolePalette = generateTonalPalette(familyBase, u.colorSource === 'grayscale');
      const getRoleTone = (tone: number) => rolePalette[Math.min(100, Math.round(tone / 10))];

      // Tone selection based on weight and dark mode
      // Higher weight -> more prominent/vibrant
      let tone = u.darkMode ? 400 : 600;
      if (roleDef.weight > 0.5) tone = u.darkMode ? 300 : 700;
      if (roleDef.weight < 0.1) tone = u.darkMode ? 500 : 500;

      if (roleName === 'muted') tone = 500;
      if (roleName === 'neutral') tone = u.darkMode ? 200 : 800;

      // Apply Role Sliders (u.r.map)
      // Slider index corresponds to roleDefinitions index
      const sliderValue = u.r.map[i] || 5; // 0-10 scale, 5 is neutral
      const toneOffset = (sliderValue - 5) * 40;
      tone = Math.max(0, Math.min(1000, tone + toneOffset));

      cssVars[`--color-role-${roleName}`] = getRoleTone(tone);
      cssVars[`--color-role-${roleName}-hover`] = getRoleTone(u.darkMode ? Math.min(1000, tone + 100) : Math.max(0, tone - 100));
      cssVars[`--color-role-${roleName}-active`] = getRoleTone(u.darkMode ? Math.min(1000, tone + 200) : Math.max(0, tone - 200));
      cssVars[`--color-role-${roleName}-bg`] = getRoleTone(u.darkMode ? 900 : 50);
      cssVars[`--color-role-${roleName}-border`] = getRoleTone(u.darkMode ? 700 : 300);
      cssVars[`--color-role-${roleName}-text`] = u.darkMode ? getRoleTone(0) : getRoleTone(1000);

      // Map back to index for legacy components
      cssVars[`--color-role-${i}`] = cssVars[`--color-role-${roleName}`];
      cssVars[`--color-role-${i}-hover`] = cssVars[`--color-role-${roleName}-hover`];
      cssVars[`--color-role-${i}-active`] = cssVars[`--color-role-${roleName}-active`];
      cssVars[`--color-role-${i}-bg`] = cssVars[`--color-role-${roleName}-bg`];
      cssVars[`--color-role-${i}-border`] = cssVars[`--color-role-${roleName}-border`];
  });

  // 4. Background Overrides
  if (preset.background) {
      cssVars['--vl-bg-image'] = preset.background.image || 'none';
      cssVars['--vl-bg-size'] = preset.background.size || 'auto';
      cssVars['--vl-bg-position'] = preset.background.position || 'center';
      cssVars['--vl-bg-repeat'] = preset.background.repeat || 'no-repeat';
      cssVars['--vl-bg-blend'] = vl.backgroundBlend || 'normal';
  }

  // 5. Geometry & Effects
  const borderMult = (u.customizing && u.o?.borderThickness !== undefined) ? u.o.borderThickness : preset.borderThickness;
  cssVars['--border-width'] = `${borderMult}px`;

  const shadowMult = (u.customizing && u.o?.shadowBlur !== undefined) ? u.o.shadowBlur : preset.shadowBlur;
  cssVars['--shadow-intensity'] = `${shadowMult}`;

  const motionMult = (u.customizing && u.o?.motionIntensity !== undefined) ? u.o.motionIntensity : 1;
  cssVars['--motion-duration'] = `${0.3 * motionMult}s`;

  cssVars['--font-family'] = (u.customizing && u.o?.fontFamily) || preset.typography.family;
  cssVars['--font-weight-normal'] = `${preset.typography.weights[0]}`;
  cssVars['--font-weight-bold'] = `${preset.typography.weights[1] || 700}`;
  cssVars['--font-size-base'] = `${preset.typography.sizeBase}px`;

  // Backdrop Logic
  if (vl.backdropFilter === 'glass') {
      cssVars['--backdrop-filter'] = `blur(12px) saturate(180%)`;
      cssVars['--backdrop-bg'] = u.darkMode ? 'rgba(17, 25, 40, 0.75)' : 'rgba(255, 255, 255, 0.7)';
  } else if (vl.backdropFilter === 'frosted') {
      cssVars['--backdrop-filter'] = `blur(20px) brightness(1.2)`;
      cssVars['--backdrop-bg'] = u.darkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.4)';
  } else {
      cssVars['--backdrop-filter'] = vl.backdropFilter || 'none';
      cssVars['--backdrop-bg'] = 'transparent';
  }

  // Shadow Mapping
  const shadowColor = getTone(u.darkMode ? 1000 : 800);
  if (vl.shadowType === 'neon') {
      const glow = getTone(400);
      cssVars['--box-shadow'] = `0 0 5px ${glow}, 0 0 20px ${glow}`;
  } else if (vl.shadowType === 'hard') {
      cssVars['--box-shadow'] = `4px 4px 0px ${shadowColor}`;
  } else if (vl.shadowType === 'inner') {
      cssVars['--box-shadow'] = `inset 2px 2px 5px ${shadowColor}`;
  } else if (vl.shadowType === 'soft') {
      cssVars['--box-shadow'] = `0 10px 25px -5px rgba(0,0,0,${0.1 * shadowMult})`;
  } else {
      cssVars['--box-shadow'] = vl.boxShadow || 'none';
  }

  const baseRadius = (u.customizing && u.o?.radiusBase !== undefined) ? u.o.radiusBase : preset.radiusBase;
  cssVars['--radius-xs'] = `${baseRadius * 0.25}px`;
  cssVars['--radius-sm'] = `${baseRadius * 0.5}px`;
  cssVars['--radius-base'] = `${baseRadius}px`;
  cssVars['--radius-lg'] = `${baseRadius * 1.5}px`;
  cssVars['--radius-xl'] = `${baseRadius * 2.5}px`;
  cssVars['--radius-full'] = '9999px';

  const spacingBase = (u.customizing && u.o?.spacingBase !== undefined) ? u.o.spacingBase : preset.radiusBase; // Wait, preset.spacingBase was intended
  const realSpacingBase = (u.customizing && u.o?.spacingBase !== undefined) ? u.o.spacingBase : preset.spacingBase;

  const spacingMultiplier = realSpacingBase / 16;

  let densityMultiplier = 1;
  if (vl.density === 'airy') densityMultiplier = 1.5;
  if (vl.density === 'compact') densityMultiplier = 0.75;
  if (vl.density === 'tight') densityMultiplier = 0.5;

  [0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64].forEach(val => {
      const pixelValue = val * 4 * spacingMultiplier * densityMultiplier;
      cssVars[`--spacing-${val}`.replace('.', '_')] = `clamp(${pixelValue * 0.5}px, ${val * 0.25}vw, ${pixelValue}px)`;
  });

  // Semantic Layout Mapping
  cssVars['--container-padding'] = cssVars['--spacing-8'];
  cssVars['--section-gap'] = cssVars['--spacing-12'];
  cssVars['--card-padding'] = cssVars['--spacing-6'];
  cssVars['--item-gap'] = cssVars['--spacing-4'];
  cssVars['--input-padding'] = `${parseFloat(cssVars['--spacing-3']) / 2}px ${cssVars['--spacing-4']}`;

  return {
    cssVars,
    layoutBindings: Array.from(u.r.map),
  };
};
