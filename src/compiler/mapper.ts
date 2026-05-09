import { U, RenderMap, OKLCH } from '../../contracts/abi';
import { STYLE_PRESETS } from '../styles/presets';
import { enforceContrast } from '../utils/okLch';

export const mapUToRenderMap = (u: U): RenderMap => {
  const preset = STYLE_PRESETS[u.p];
  const cssVars: Record<string, string> = {};

  const bgL = u.darkMode ? 0.1 : 0.98;
  const targetContrast = u.contrastMode === 'AAA' ? 7 : u.contrastMode === 'AA' ? 4.5 : 1;

  const getLatticeColor = (base: OKLCH, index: number, isBg = false): string => {
      let l = 0.98 - (index * 0.085);
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

  // 1. Color Lattice
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
  cssVars['--color-bg'] = u.darkMode ? `oklch(12% 0.01 ${baseColor.h})` : `oklch(99% 0.005 ${baseColor.h})`;
  cssVars['--color-surface'] = u.darkMode ? `oklch(18% 0.02 ${baseColor.h})` : `oklch(100% 0 0)`;
  cssVars['--color-support'] = supL;
  cssVars['--color-accent'] = accL;
  cssVars['--color-interaction'] = intL;

  cssVars['--color-text'] = u.darkMode ? `oklch(95% 0.01 ${baseColor.h})` : `oklch(15% 0.02 ${baseColor.h})`;
  cssVars['--color-text-muted'] = u.darkMode ? `oklch(70% 0.03 ${baseColor.h})` : `oklch(45% 0.05 ${baseColor.h})`;

  // 3. Style Overrides
  cssVars['--font-family'] = u.o?.fontFamily || preset.typography.family;
  cssVars['--radius-base'] = `${u.o?.radiusBase !== undefined ? u.o.radiusBase : preset.radius[1]}px`;

  const shadowValue = preset.shadows[0] === 'hard' ? '4px 4px 0px 0px rgba(0,0,0,1)' :
                     preset.shadows[0] === 'soft' ? '0 10px 25px -5px rgba(0,0,0,0.1)' :
                     preset.shadows[0] === 'neon' ? `0 0 15px ${cssVars['--color-accent']}` : 'none';
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
