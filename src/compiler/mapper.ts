import { U, RenderMap } from '../../contracts/abi';
import { getModeDistribution } from '../modes/modeTable';
import { STYLE_PRESETS } from '../styles/presets';

export const mapUToRenderMap = (u: U): RenderMap => {
  const distribution = getModeDistribution(u.m);
  const preset = STYLE_PRESETS[u.p];
  const cssVars: Record<string, string> = {};

  for (let i = 0; i < 11; i++) {
    const offset = i * 3;
    let l = u.t.color.lattice[offset];
    let c = u.t.color.lattice[offset + 1];
    let h = u.t.color.lattice[offset + 2];

    if (u.grayscale) c = 0;
    if (u.darkMode) l = 1 - l;

    cssVars[`--color-raw-${i}`] = `oklch(${l * 100}% ${c} ${h})`;
  }

  const weights = distribution.weights;

  if (u.darkMode) {
      cssVars['--color-dominant'] = `var(--color-raw-9)`;
      cssVars['--color-bg'] = `var(--color-raw-10)`;
  } else {
      cssVars['--color-dominant'] = `var(--color-raw-1)`;
      cssVars['--color-bg'] = `var(--color-raw-0)`;
  }

  cssVars['--color-support'] = u.darkMode ? `var(--color-raw-8)` : `var(--color-raw-2)`;
  cssVars['--color-surface'] = u.darkMode ? `var(--color-raw-9)` : `var(--color-raw-1)`;

  const accentIndex = weights[2] > 0.4 ? 7 : 5;
  cssVars['--color-accent'] = `var(--color-raw-${accentIndex})`;
  cssVars['--color-interaction'] = `var(--color-raw-${accentIndex + 1})`;

  cssVars['--font-family'] = preset.typography.family;
  cssVars['--radius-base'] = `${preset.radius[1]}px`;
  cssVars['--shadow-style'] = preset.shadows[0] === 'hard' ? '4px 4px 0px 0px black' :
                            preset.shadows[0] === 'soft' ? '0 10px 15px -3px rgb(0 0 0 / 0.1)' : 'none';

  u.t.spacing.scale.forEach((val, i) => {
    cssVars[`--spacing-${i}`] = `${val}px`;
  });

  u.t.radius.scale.forEach((val, i) => {
      cssVars[`--radius-${i}`] = `${val === 9999 ? '9999px' : val + 'px'}`;
  });

  return {
    cssVars,
    layoutBindings: Array.from(u.r.map),
  };
};
