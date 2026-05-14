import { U } from '../../contracts/abi';

export const computeDensityHeuristic = (u: U) => {
  const spacing = u.t.spacing.scale;
  const avgSpacing = Array.from(spacing).reduce((a, b) => a + b, 0) / spacing.length;
  const density = 1 - (avgSpacing / 100);

  return {
    overload: density > 0.8,
    chaos: Array.from(u.x).reduce((a, b) => a + Math.abs(b), 0) / u.x.length,
    densityValue: density
  };
};

export const computeDensitySignal = (u: U): Float64Array => {
  const signal = new Float64Array(1);
  const scale = u.t.spacing.scale;
  signal[0] = Array.from(scale).reduce((a, b) => a + b, 0) / scale.length;
  return signal;
};
