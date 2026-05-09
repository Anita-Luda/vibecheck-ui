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
