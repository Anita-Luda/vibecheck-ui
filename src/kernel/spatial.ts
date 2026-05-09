import { U } from '../../contracts/abi';

export const computeSpatialSignal = (u: U): Float64Array => {
  return new Float64Array(u.x);
};
