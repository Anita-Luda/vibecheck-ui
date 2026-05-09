import { U } from '../../contracts/abi';
import { computeLuminanceSignal } from './luminance';
import { computeChromaSignal } from './chroma';
import { computeSpatialSignal } from './spatial';
import { computeDensitySignal, computeDensityHeuristic } from './density';
import { computeGroupingSignal } from './grouping';
import { computeHierarchyHeuristic } from './hierarchy';

export interface KernelState {
  v0: Float64Array;
  v1: Float64Array;
  v2: Float64Array;
  v3: Float64Array;
  v4: Float64Array;
  heuristics: {
      hierarchy: any;
      density: any;
  };
}

export const computeKernel = (u: U): KernelState => {
  return {
    v0: computeLuminanceSignal(u),
    v1: computeChromaSignal(u),
    v2: computeSpatialSignal(u),
    v3: computeDensitySignal(u),
    v4: computeGroupingSignal(u),
    heuristics: {
        hierarchy: computeHierarchyHeuristic(u),
        density: computeDensityHeuristic(u)
    }
  };
};
