import React from 'react';
import { useHeapStore } from '../../store/heapStore';
import { eventDispatcher } from '../../events/dispatcher';
import { ModeId } from '../../../contracts/abi';

export const ModeSelector = () => {
  const head = useHeapStore(s => s.getHead());

  if (!head) return null;

  const modeInfo = [
      { id: 0, label: '60/30/10', desc: 'Dominant' },
      { id: 1, label: '30/30/40', desc: 'Accent-Focused' },
      { id: 2, label: '10/30/60', desc: 'Minimalist' },
      { id: 3, label: 'Standard', desc: 'Default' }
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 p-1 bg-gray-100 rounded-lg">
        {modeInfo.map((m) => (
          <button
            key={m.id}
            onClick={() => eventDispatcher.dispatch('mode.set', m.id as ModeId)}
            className={`flex-1 text-[10px] py-1 rounded transition-all ${head.value.m === m.id ? 'bg-white shadow-sm font-bold' : 'text-gray-500'}`}
          >
            {m.label}
          </button>
        ))}
      </div>
      <div className="text-[10px] text-gray-400 font-mono italic px-1">
        Mode {head.value.m}: Rewiring Primary → {
            head.value.m === 0 ? 'Dominant Family' :
            head.value.m === 1 ? 'Accent Family' :
            head.value.m === 2 ? 'Neutral Family' : 'Primary Family'
        }
      </div>
    </div>
  );
};
