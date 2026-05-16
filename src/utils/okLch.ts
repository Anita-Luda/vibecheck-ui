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
    const toHex = (n: number) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0').toUpperCase();
    return "#" + toHex(r) + toHex(g) + toHex(b);
};

export const oklchToCss = (color: OKLCH, grayscale = false): string => {
  return `oklch(${color.l * 100}% ${grayscale ? 0 : color.c} ${color.h})`;
};

/**
 * Highly accurate OKLCH to HEX conversion using standard matrix transformations.
 * Reference: https://bottosson.github.io/posts/oklab/
 */
export const oklchToHex = (l: number, c: number, h: number): string => {
    const hRad = (h * Math.PI) / 180;
    const a = c * Math.cos(hRad);
    const b = c * Math.sin(hRad);

    const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
    const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
    const s_ = l - 0.0894841775 * a - 1.2914855480 * b;

    const l_3 = l_ * l_ * l_;
    const m_3 = m_ * m_ * m_;
    const s_3 = s_ * s_ * s_;

    const r = +4.0767416621 * l_3 - 3.3077115913 * m_3 + 0.2309699292 * s_3;
    const g = -1.2684380046 * l_3 + 2.6097574011 * m_3 - 0.3413193965 * s_3;
    const b_val = -0.0041960863 * l_3 - 0.7034186147 * m_3 + 1.7076147010 * s_3;

    const toSRGB = (c: number) => c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;

    return rgbToHex(
        toSRGB(r) * 255,
        toSRGB(g) * 255,
        toSRGB(b_val) * 255
    );
};

export const hexToOklch = (hex: string): OKLCH => {
    const rgb = hexToRgb(hex);
    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;

    const fromSRGB = (c: number) => c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    const r_ = fromSRGB(r);
    const g_ = fromSRGB(g);
    const b_ = fromSRGB(b);

    const l = 0.4122214708 * r_ + 0.5363325363 * g_ + 0.0514459929 * b_;
    const m = 0.2119034982 * r_ + 0.6806995451 * g_ + 0.1073969566 * b_;
    const s = 0.0883024619 * r_ + 0.2817188376 * g_ + 0.6299787005 * b_;

    const l_ = Math.cbrt(l);
    const m_ = Math.cbrt(m);
    const s_ = Math.cbrt(s);

    const L = 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_;
    const a = 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_;
    const b_val = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_;

    const C = Math.sqrt(a * a + b_val * b_val);
    const H = (Math.atan2(b_val, a) * 180) / Math.PI;

    return { l: L, c: C, h: H < 0 ? H + 360 : H };
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
