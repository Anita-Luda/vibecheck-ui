import { U, ModeId } from '../../contracts/abi';
import { PresetId } from '../styles/presets';
import { generateLattice, hexToOklch } from '../utils/okLch';

export interface RuntimeConfig {
  initialU: U;
}

export const createInitialU = (): U => {
  const baseColor = hexToOklch('#3b82f6');
  return {
    t: {
      color: { lattice: generateLattice(baseColor) },
      spacing: { scale: new Float64Array([0, 4, 8, 12, 16, 24, 32, 48, 64, 96]) },
      radius: { scale: new Float64Array([0, 2, 4, 8, 12, 16, 24, 9999]) },
      typography: { scale: new Float64Array([12, 14, 16, 18, 20, 24, 30, 36, 48, 60]) },
      motion: { scale: new Float64Array([0, 100, 200, 300, 500, 700, 1000]) }
    },
    r: { size: 10, map: new Uint16Array(10).fill(0) },
    x: new Float64Array(100).fill(0),
    m: 0 as ModeId,
    p: 'sharp-prof' as PresetId,
    darkMode: false,
    grayscale: false,
    contrastMode: 'none',
    w: [0.6, 0.9],
    o: {
        radiusBase: 8,
        spacingBase: 16
    },
    colorMode: 'mono'
  };
};
