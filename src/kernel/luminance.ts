import { U } from '../../contracts/abi';

export const computeLuminanceSignal = (u: U): Float64Array => {
  const signal = new Float64Array(11);
  for (let i = 0; i < 11; i++) {
    signal[i] = u.t.color.lattice[i * 3];
  }
  return signal;
};
