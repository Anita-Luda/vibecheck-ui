import { ModeId } from '../../contracts/abi';

export interface ModeDistribution {
  id: ModeId;
  name: string;
  description: string;
  weights: [number, number, number];
}

export const MODE_TABLE: Record<ModeId, ModeDistribution> = {
  0: {
    id: 0,
    name: 'Classic Dominance',
    description: '60/30/10 - Standard hierarchy balance',
    weights: [0.6, 0.3, 0.1]
  },
  1: {
    id: 1,
    name: 'Supportive Flow',
    description: '30/30/40 - High interaction emphasis',
    weights: [0.3, 0.3, 0.4]
  },
  2: {
    id: 2,
    name: 'Accent Heavy',
    description: '10/30/60 - Extreme focus on actions',
    weights: [0.1, 0.3, 0.6]
  },
  3: {
    id: 3,
    name: 'Equalized',
    description: '33/33/34 - Flat hierarchy',
    weights: [0.33, 0.33, 0.34]
  }
};

export const getModeDistribution = (id: ModeId): ModeDistribution => MODE_TABLE[id];
