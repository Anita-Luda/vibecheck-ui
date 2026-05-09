import React from 'react';
import { eventDispatcher } from '../../events/dispatcher';
import { generateLattice, hexToOklch } from '../../utils/okLch';

export const ColorPicker = () => {
  return (
    <input
      type="color"
      onChange={(e) => {
        const lattice = generateLattice(hexToOklch(e.target.value));
        eventDispatcher.dispatch('token.update', { color: { lattice } });
      }}
      className="w-full h-8 cursor-pointer rounded"
    />
  );
};
