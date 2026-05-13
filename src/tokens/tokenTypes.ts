import { ColorLattice } from './colorLattice';

export interface TokenGraph {
    color: ColorLattice;
    spacing: { scale: Float64Array };
    radius: { scale: Float64Array };
    typography: { scale: Float64Array };
    motion: { scale: Float64Array };
}
