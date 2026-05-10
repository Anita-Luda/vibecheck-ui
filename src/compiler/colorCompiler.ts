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
