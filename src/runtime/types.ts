import { U, PresetId } from '../../contracts/abi';
import { STYLE_PRESETS } from '../styles/presets';

export * from '../../contracts/abi';
export * from '../../contracts/events';
export * from '../../contracts/heap';
export * from '../../contracts/renderMap';

export function createInitialU(): U {
  const defaultPreset = STYLE_PRESETS['startup-saas'];
  const initialU: U = {
    t: {
      color: {
        lattice: new Float64Array(303).fill(0)
      },
      spacing: {
          base: defaultPreset.spacingBase,
          scale: new Float64Array([0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128])
      },
      radius: {
          base: defaultPreset.radiusBase,
          scale: new Float64Array([0, 2, 4, 8, 12, 16, 24, 32])
      },
      typography: {
        family: defaultPreset.typography.family,
        sizeBase: defaultPreset.typography.sizeBase,
        scale: new Float64Array([10, 12, 14, 16, 20, 24, 32, 40, 48, 64])
      },
      motion: {
          scale: new Float64Array([0, 100, 200, 300, 500, 700, 1000])
      }
    },
    r: {
      size: 7,
      map: new Uint16Array([0, 1, 2, 3, 4, 5, 6])
    },
    x: new Float64Array(144).fill(0),
    m: 0,
    p: 'startup-saas' as PresetId,
    darkMode: false,
    grayscale: false,
    contrastMode: 'none',
    customizing: false,
    w: [1, 1],
    families: [],
    roles: {
        dominant: '',
        secondary: '',
        accent: '',
        support: '',
        muted: '',
        destructive: '',
        neutral: '',
        overlay: '',
        success: '',
        warning: '',
        info: ''
    },
    device: 'desktop',
    densityMode: 'normal',
    colorSource: 'preset',
    colorMode: 'mono',
    applyPresetColors: true,
    useGrayscalePresets: false
  };
  return initialU;
}
