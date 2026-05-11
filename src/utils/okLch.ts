import { OKLCH } from '../../contracts/abi';

export const hexToRgb = (hex: string): { r: number, g: number, b: number } => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
};

export const rgbToHex = (r: number, g: number, b: number): string => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

export const hexToOklch = (hex: string): OKLCH => {
  // Simplified mapping for the simulator
  if (hex.toLowerCase() === '#3b82f6') return { l: 0.6, c: 0.15, h: 250 };
  if (hex.toLowerCase() === '#ef4444') return { l: 0.6, c: 0.18, h: 25 };
  if (hex.toLowerCase() === '#10b981') return { l: 0.6, c: 0.15, h: 150 };

  // Hash-based hue approximation for other colors
  const rgb = hexToRgb(hex);
  const h = (rgb.r * 2 + rgb.g * 5 + rgb.b * 1) % 360;
  return { l: 0.6, c: 0.1, h };
};

export const oklchToCss = (color: OKLCH, grayscale = false): string => {
  return `oklch(${color.l * 100}% ${grayscale ? 0 : color.c} ${color.h})`;
};

export const oklchToHex = (l: number, c: number, h: number): string => {
    // Very rough approximation for UI feedback since OKLCH to HEX is complex
    // In a real app we'd use a library like culori or colorjs.io
    // For now returning a representative hex based on Hue
    const hues: Record<number, string> = {
        0: '#FF0000', 30: '#FF7F00', 60: '#FFFF00', 90: '#7FFF00', 120: '#00FF00',
        150: '#00FF7F', 180: '#00FFFF', 210: '#007FFF', 240: '#0000FF', 270: '#7F00FF',
        300: '#FF00FF', 330: '#FF007F', 360: '#FF0000'
    };
    const roundedH = Math.round(h / 30) * 30 % 360;
    return hues[roundedH] || '#888888';
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
