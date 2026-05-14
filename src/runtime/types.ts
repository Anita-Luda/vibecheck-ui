import { U } from '../../contracts/abi';
import { STYLE_PRESETS } from '../styles/presets';

export * from '../../contracts/abi';
export * from '../../contracts/events';
export * from '../../contracts/heap';
export * from '../../contracts/renderMap';

export function createInitialU(): U {
  const defaultPreset = STYLE_PRESETS['startup-saas'];
  return {
    t: {
      color: {
        lattice: Array(101).fill(null).map((_, i) => ({
          l: i / 100,
          c: 0,
          h: 0,
          step: i * 10
        }))
      },
      spacing: { base: defaultPreset.spacingBase, scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128] },
      radius: { base: defaultPreset.radiusBase, scale: [0, 2, 4, 8, 12, 16, 24, 32] },
      typography: {
        family: defaultPreset.typography.family,
        sizeBase: defaultPreset.typography.sizeBase,
        scale: [10, 12, 14, 16, 20, 24, 32, 40, 48, 64]
      },
      motion: { scale: [0, 100, 200, 300, 500, 700, 1000] }
    },
    r: {
      size: 7,
      map: new Uint16Array([0, 1, 2, 3, 4, 5, 6]) // 0: primary, 1: secondary, 2: accent, 3: neutral, 4: success, 5: warning, 6: danger
    },
    x: {
      rows: 12,
      cols: 12,
      data: new Float64Array(144).fill(0)
    },
    m: 0 // Default Mode: 60/30/10
  };
}
