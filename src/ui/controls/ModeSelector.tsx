import React from 'react';
import { useHeapStore } from '../../store/heapStore';
import { eventDispatcher } from '../../events/dispatcher';
import { ModeId } from '../../../contracts/abi';

export const ModeSelector = () => {
  const head = useHeapStore(s => s.getHead());

  if (!head) return null;

  return (
    <div className="flex gap-1 p-1 bg-gray-100 rounded-lg">
      {[0, 1, 2, 3].map((m) => (
        <button
          key={m}
          onClick={() => eventDispatcher.dispatch('mode.set', m as ModeId)}
          className={`flex-1 text-[10px] py-1 rounded transition-all ${head.value.m === m ? 'bg-white shadow-sm font-bold' : 'text-gray-500'}`}
        >
          {m === 0 ? '60/30/10' : m === 1 ? '30/30/40' : m === 2 ? '10/30/60' : 'Equal'}
        </button>
      ))}
    </div>
  );
};
