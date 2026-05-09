export interface OKLCH {
  l: number;
  c: number;
  h: number;
}

export const hexToOklch = (hex: string): OKLCH => {
  return { l: 0.7, c: 0.15, h: 200 };
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
    lattice[i * 3 + 1] = base.c;
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

    // Iteratively adjust L to meet target
    const step = bgL > 0.5 ? -0.01 : 0.01;
    for (let i = 0; i < 50; i++) {
        currentL = Math.max(0, Math.min(1, currentL + step));
        ratio = getContrastRatio(currentL, bgL);
        if (ratio >= target) break;
    }
    return currentL;
};
