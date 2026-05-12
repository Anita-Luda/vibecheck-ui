import { U, ModeId, ColorFamily } from '../../contracts/abi';
import { PresetId } from '../styles/presets';
import { generateLattice, hexToOklch } from '../utils/okLch';
import { getHexLattice } from '../compiler/colorCompiler';

export interface RuntimeConfig {
  initialU: U;
}

export const createInitialU = (): U => {
  const baseColor = hexToOklch('#3b82f6');
  const neutralColor = hexToOklch('#94a3b8');
  const accentColor = hexToOklch('#ef4444');

  const families: ColorFamily[] = [
      {
          id: 'primary',
          name: 'Primary Blue',
          base: baseColor,
          lattice: getHexLattice(baseColor),
          config: { range: [0.05, 0.98], chromaCap: 0.4, method: 'perceptual' }
      },
      {
          id: 'neutral',
          name: 'Neutral Slate',
          base: neutralColor,
          lattice: getHexLattice(neutralColor),
          config: { range: [0.05, 0.98], chromaCap: 0.05, method: 'perceptual' }
      },
      {
          id: 'accent',
          name: 'Accent Red',
          base: accentColor,
          lattice: getHexLattice(accentColor),
          config: { range: [0.1, 0.9], chromaCap: 0.4, method: 'perceptual' }
      }
  ];

  return {
    t: {
      color: { lattice: generateLattice(baseColor) },
      spacing: { scale: new Float64Array([0, 4, 8, 12, 16, 24, 32, 48, 64, 96]) },
      radius: { scale: new Float64Array([0, 2, 4, 8, 12, 16, 24, 9999]) },
      typography: { scale: new Float64Array([12, 14, 16, 18, 20, 24, 30, 36, 48, 60]) },
      motion: { scale: new Float64Array([0, 100, 200, 300, 500, 700, 1000]) }
    },
    r: { size: 10, map: new Uint16Array(10).fill(0).map((_, i) => (i / 10) * 65535) },
    x: new Float64Array(100).fill(0),
    m: 0 as ModeId,
    p: 'sharp-prof' as PresetId,
    darkMode: false,
    grayscale: false,
    contrastMode: 'none',
    w: [0.6, 0.9],
    o: {
        radiusBase: 8,
        spacingBase: 16,
        borderThickness: 1.5,
        shadowBlur: 1,
        motionIntensity: 1
    },
    families,
    roles: {
        dominant: 'primary',
        secondary: 'primary',
        accent: 'accent',
        support: 'primary',
        muted: 'neutral',
        destructive: 'accent',
        neutral: 'neutral',
        overlay: 'neutral'
    },
    device: 'desktop',
    densityMode: 'normal',
    colorMode: 'mono',
    applyPresetColors: false,
    useGrayscalePresets: true
  };
};
