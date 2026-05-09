import { U, RenderMap, OKLCH } from '../../contracts/abi';
import { STYLE_PRESETS } from '../styles/presets';
import { enforceContrast } from '../utils/okLch';

export const mapUToRenderMap = (u: U): RenderMap => {
  const preset = STYLE_PRESETS[u.p];
  const cssVars: Record<string, string> = {};

  const bgL = u.darkMode ? 0.05 : 0.99;
  const targetContrast = u.contrastMode === 'AAA' ? 7 : u.contrastMode === 'AA' ? 4.5 : 1;

  const getLatticeColor = (base: OKLCH, index: number, isBg = false): string => {
      // index 0 = 50, index 10 = 950
      // 50 is light, 950 is dark in light mode.
      // We want a scale from 0.98 down to 0.1
      let l = 0.98 - (index * 0.088);
      let c = base.c;
      let h = base.h;

      if (u.grayscale) c = 0;
      if (u.darkMode) l = 1 - l;

      if (!isBg && targetContrast > 1) {
          l = enforceContrast(l, bgL, targetContrast);
      }

      return `oklch(${l * 100}% ${c} ${h})`;
  };

  const baseColor: OKLCH = { l: 0.6, c: u.t.color.lattice[1], h: u.t.color.lattice[2] };

  // 1. Color Lattice (50-950 scale)
  for (let i = 0; i < 11; i++) {
    cssVars[`--color-raw-${i}`] = getLatticeColor(baseColor, i);
  }

  // 2. Role Engine (60/30/10 redistribution)
  const domL = getLatticeColor(baseColor, u.darkMode ? 1 : 9);
  const supL = getLatticeColor(baseColor, u.darkMode ? 2 : 8);
  const accL = getLatticeColor(u.colorMode !== 'mono' && u.secondaryColor ? u.secondaryColor : baseColor, 5);
  const intL = getLatticeColor(u.colorMode === 'trio' && u.tertiaryColor ? u.tertiaryColor : baseColor, 4);

  // Map each component index to a color based on u.r.map and u.w thresholds
  const maxUint16 = 65535;
  u.r.map.forEach((val, i) => {
      const norm = val / maxUint16;
      let color = domL;
      if (norm > u.w[0]) color = supL;
      if (norm > u.w[1]) color = accL;
      cssVars[`--color-role-${i}`] = color;
  });

  // 3. Functional Roles (Fallbacks)
  cssVars['--color-bg'] = u.darkMode ? `oklch(8% 0.01 ${baseColor.h})` : `oklch(99.5% 0.002 ${baseColor.h})`;
  cssVars['--color-surface'] = u.darkMode ? `oklch(12% 0.015 ${baseColor.h})` : `oklch(100% 0 0)`;
  cssVars['--color-support'] = supL;
  cssVars['--color-accent'] = accL;
  cssVars['--color-interaction'] = intL;

  cssVars['--color-text'] = u.darkMode ? `oklch(98% 0.005 ${baseColor.h})` : `oklch(5% 0.01 ${baseColor.h})`;
  cssVars['--color-text-muted'] = u.darkMode ? `oklch(75% 0.02 ${baseColor.h})` : `oklch(40% 0.04 ${baseColor.h})`;

  // 4. Style Overrides & Presets
  cssVars['--font-family'] = u.o?.fontFamily || preset.typography.family;

  const baseRadius = u.o?.radiusBase !== undefined ? u.o.radiusBase : preset.radius[1];
  cssVars['--radius-base'] = `${baseRadius}px`;
  cssVars['--radius-sm'] = `${baseRadius * 0.5}px`;
  cssVars['--radius-lg'] = `${baseRadius * 2}px`;
  cssVars['--radius-full'] = '9999px';

  // Dynamic Shadow based on preset
  let shadowValue = 'none';
  if (preset.shadows.includes('subtle')) shadowValue = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
  if (preset.shadows.includes('soft')) shadowValue = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
  if (preset.shadows.includes('hard')) shadowValue = '4px 4px 0px 0px rgba(0,0,0,1)';
  if (preset.shadows.includes('neon')) shadowValue = `0 0 10px ${cssVars['--color-accent']}, 0 0 20px ${cssVars['--color-accent']}44`;
  cssVars['--shadow-style'] = shadowValue;

  const spacingMultiplier = u.o?.spacingBase !== undefined ? u.o.spacingBase / 16 : 1;
  u.t.spacing.scale.forEach((val, i) => {
    cssVars[`--spacing-${i}`] = `${val * spacingMultiplier}px`;
  });

  return {
    cssVars,
    layoutBindings: Array.from(u.r.map),
  };
};
