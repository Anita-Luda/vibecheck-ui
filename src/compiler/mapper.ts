import { U, RenderMap } from '../../contracts/abi';
import { STYLE_PRESETS } from '../styles/presets';
import { enforceContrast } from '../utils/okLch';

export const mapUToRenderMap = (u: U): RenderMap => {
  const preset = STYLE_PRESETS[u.p];
  const cssVars: Record<string, string> = {};

  const bgL = u.darkMode ? 0.15 : 0.98;
  const targetContrast = u.contrastMode === 'AAA' ? 7 : u.contrastMode === 'AA' ? 4.5 : 1;

  // 1. Color Lattice (OKLCH)
  for (let i = 0; i < 11; i++) {
    const offset = i * 3;
    let l = u.t.color.lattice[offset];
    let c = u.t.color.lattice[offset + 1];
    let h = u.t.color.lattice[offset + 2];

    if (u.grayscale) c = 0;
    if (u.darkMode) l = 1 - l;

    if (targetContrast > 1) {
        l = enforceContrast(l, bgL, targetContrast);
    }

    cssVars[`--color-raw-${i}`] = `oklch(${l * 100}% ${c} ${h})`;
  }

  // 2. Functional Roles
  if (u.darkMode) {
      cssVars['--color-dominant'] = `var(--color-raw-9)`;
      cssVars['--color-bg'] = `var(--color-raw-10)`;
  } else {
      cssVars['--color-dominant'] = `var(--color-raw-1)`;
      cssVars['--color-bg'] = `var(--color-raw-0)`;
  }

  cssVars['--color-support'] = u.darkMode ? `var(--color-raw-8)` : `var(--color-raw-2)`;
  cssVars['--color-surface'] = u.darkMode ? `var(--color-raw-9)` : `var(--color-raw-1)`;

  const supportLimit = u.w[1];
  const accentWeight = 1 - supportLimit;
  const accentIndex = accentWeight > 0.4 ? 7 : accentWeight > 0.1 ? 5 : 3;

  cssVars['--color-accent'] = `var(--color-raw-${accentIndex})`;
  cssVars['--color-interaction'] = `var(--color-raw-${accentIndex + 1})`;

  // 3. Style Overrides & Presets
  cssVars['--font-family'] = u.o?.fontFamily || preset.typography.family;
  cssVars['--radius-base'] = `${u.o?.radiusBase !== undefined ? u.o.radiusBase : preset.radius[1]}px`;
  cssVars['--shadow-style'] = preset.shadows[0] === 'hard' ? '4px 4px 0px 0px black' :
                            preset.shadows[0] === 'soft' ? '0 10px 15px -3px rgb(0 0 0 / 0.1)' : 'none';

  // 4. Spacing (Apply manual multiplier if exists)
  const spacingMultiplier = u.o?.spacingBase !== undefined ? u.o.spacingBase / 16 : 1;
  u.t.spacing.scale.forEach((val, i) => {
    cssVars[`--spacing-${i}`] = `${val * spacingMultiplier}px`;
  });

  u.t.radius.scale.forEach((val, i) => {
      cssVars[`--radius-${i}`] = `${val === 9999 ? '9999px' : (val * (u.o?.radiusBase !== undefined ? u.o.radiusBase / 8 : 1)) + 'px'}`;
  });

  return {
    cssVars,
    layoutBindings: Array.from(u.r.map),
  };
};
