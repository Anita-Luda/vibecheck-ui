import { OKLCH, ColorFamily } from '../../contracts/abi';
import { oklchToHex } from '../utils/okLch';

/**
 * Generates an 11-step tonal palette (0-1000).
 * Index 0: 0/1000 (White/Lightest)
 * Index 10: 1000/1000 (Black/Darkest)
 */
export const generateTonalPalette = (base: OKLCH, isGrayscale: boolean = false): string[] => {
    const steps = 11;
    const result: string[] = [];
    const chroma = isGrayscale ? 0 : base.c;

    for (let i = 0; i < steps; i++) {
        const t = i / (steps - 1);
        // Perceptually linear lightness distribution
        const l = 1 - t; // 0 -> 1.0 (100%), 10 -> 0.0 (0%)

        // Slightly desaturate near the poles (0 and 1000) for better UI integration
        const c = chroma * (1 - Math.pow(Math.abs(0.5 - (1-l)) * 2, 4) * 0.8);

        result.push(`oklch(${l * 100}% ${c} ${base.h})`);
    }
    return result;
};

// Legacy alias for compatibility during migration
export const generateMonoPalette = generateTonalPalette;

export const generateFamilyLattice = (base: OKLCH, config: ColorFamily['config']): string[] => {
    return generateTonalPalette(base);
};

export const getHexLattice = (base: OKLCH): string[] => {
    const steps = 11;
    const result: string[] = [];
    for (let i = 0; i < steps; i++) {
        const t = i / (steps - 1);
        const l = 1 - t;
        result.push(oklchToHex(l, base.c, base.h));
    }
    return result;
};
