import { OKLCH } from '../../contracts/abi';
import { generateLattice } from '../utils/okLch';

export const compileColorScale = (base: OKLCH): Float64Array => {
  return generateLattice(base);
};
