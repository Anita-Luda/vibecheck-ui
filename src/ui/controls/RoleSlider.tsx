import React from 'react';
import { eventDispatcher } from '../../events/dispatcher';

export const RoleSlider = ({ index, label }: { index: number, label: string }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between text-[10px] font-mono uppercase text-gray-400">
        <span>{label}</span>
      </div>
      <input
        type="range"
        min="0"
        max="10"
        className="w-full accent-black"
        onChange={(e) => {
            eventDispatcher.dispatch('role.update', { index, tokenIndex: parseInt(e.target.value) });
        }}
      />
    </div>
  );
};
