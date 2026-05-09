import { OKLCH } from '../../contracts/abi';

export const hexToOklch = (hex: string): OKLCH => {
  if (hex.toLowerCase() === '#3b82f6') return { l: 0.6, c: 0.15, h: 250 };
  if (hex.toLowerCase() === '#ef4444') return { l: 0.6, c: 0.18, h: 25 };
  if (hex.toLowerCase() === '#10b981') return { l: 0.6, c: 0.15, h: 150 };
  return { l: 0.6, c: 0.1, h: 200 };
};

export const oklchToCss = (color: OKLCH, grayscale = false): string => {
  return `oklch(${color.l * 100}% ${grayscale ? 0 : color.c} ${color.h})`;
};

export const generateLattice = (base: OKLCH): Float64Array => {
  const steps = 11;
  const lattice = new Float64Array(steps * 3);
  for (let i = 0; i < steps; i++) {
    const t = i / (steps - 1);
    lattice[i * 3] = 0.98 - (t * 0.85);
    lattice[i * 3 + 1] = base.c * (1 - Math.abs(0.5 - t) * 0.5);
    lattice[i * 3 + 2] = base.h;
  }
  return lattice;
};

export const getContrastRatio = (l1: number, l2: number) => {
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};

export const enforceContrast = (l: number, bgL: number, target: number): number => {
    let currentL = l;
    let ratio = getContrastRatio(currentL, bgL);
    if (ratio >= target) return currentL;
    const isBgLight = bgL > 0.5;
    const step = isBgLight ? -0.01 : 0.01;
    for (let i = 0; i < 100; i++) {
        const nextL = Math.max(0, Math.min(1, currentL + step));
        if (nextL === currentL) break;
        currentL = nextL;
        ratio = getContrastRatio(currentL, bgL);
        if (ratio >= target) break;
    }
    return currentL;
};

export const getHarmonicHue = (baseH: number, offset: number): number => {
    return (baseH + offset + 360) % 360;
};
