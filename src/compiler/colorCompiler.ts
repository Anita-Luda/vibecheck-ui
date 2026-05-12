import { OKLCH, ColorFamily } from '../../contracts/abi';
import { oklchToHex } from '../utils/okLch';

export const generateFamilyLattice = (base: OKLCH, config: ColorFamily['config']): string[] => {
    const steps = 11;
    const result: string[] = [];
    const [minL, maxL] = config.range || [0.05, 0.98];

    for (let i = 0; i < steps; i++) {
        const t = i / (steps - 1);
        const l = maxL - (t * (maxL - minL));
        const c = Math.min(base.c, config.chromaCap || 0.4) * (1 - Math.abs(0.5 - t) * 0.3);
        const h = base.h;

        // Return OKLCH string for CSS usage
        result.push(`oklch(${l * 100}% ${c} ${h})`);
    }
    return result;
};

export const generateMonoPalette = (base: OKLCH): string[] => {
    const steps = 11; // Maps to 0, 100, 200... 1000
    const result: string[] = [];
    for (let i = 0; i < steps; i++) {
        const t = i / (steps - 1);
        // Perceptually uniform distribution from white/light to black/dark
        const l = 0.99 - (t * 0.95);
        // Slightly desaturate extremes for a cleaner look
        const c = base.c * (1 - Math.pow(Math.abs(0.5 - t) * 2, 2) * 0.5);
        result.push(`oklch(${l * 100}% ${c} ${base.h})`);
    }
    return result;
};

export const getHexLattice = (base: OKLCH): string[] => {
    const steps = 11;
    const result: string[] = [];
    for (let i = 0; i < steps; i++) {
        const t = i / (steps - 1);
        const l = 0.98 - (t * 0.9);
        result.push(oklchToHex(l, base.c, base.h));
    }
    return result;
};
