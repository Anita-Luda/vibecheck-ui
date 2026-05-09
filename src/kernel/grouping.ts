import { U } from '../../contracts/abi';

export const computeGroupingSignal = (u: U): Float64Array => {
  return new Float64Array(u.r.map.length);
};
