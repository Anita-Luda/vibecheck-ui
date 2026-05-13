import { OKLCH } from '../../contracts/abi';

export interface ColorLattice {
    points: OKLCH[];
}

export const createLattice = (base: OKLCH): ColorLattice => {
    const points: OKLCH[] = [];
    for (let i = 0; i < 101; i++) {
        points.push({
            l: i / 100,
            c: base.c,
            h: base.h
        });
    }
    return { points };
};
