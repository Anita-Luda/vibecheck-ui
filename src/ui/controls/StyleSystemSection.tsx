import React from 'react';
import { eventDispatcher } from '../../events/dispatcher';
import { STYLE_PRESETS, CATEGORIES } from '../../styles/presets';
import { PresetId } from '../../../contracts/abi';

interface StyleSystemSectionProps {
    id?: string;
    currentPresetId: PresetId;
}

export const StyleSystemSection = ({ id, currentPresetId }: StyleSystemSectionProps) => {
    return (
        <section id={id} className="space-y-3">
            <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400">System Stylów</h3>
            <div className="grid grid-cols-2 gap-1 max-h-40 overflow-y-auto scrollbar-hide">
                {Object.values(STYLE_PRESETS).map(p => (
                    <button
                        key={p.id}
                        id={`btn-preset-${p.id}`}
                        onClick={() => eventDispatcher.dispatch('preset.set', p.id)}
                        className={`py-1.5 px-2 text-[9px] font-bold text-left truncate border rounded transition-all ${currentPresetId === p.id ? 'bg-black text-white border-black' : 'bg-white text-gray-500 border-gray-100 hover:bg-gray-50'}`}
                    >
                        {p.name}
                    </button>
                ))}
            </div>
        </section>
    );
};
