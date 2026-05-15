import React from 'react';
import { eventDispatcher } from '../../events/dispatcher';

interface EnvSectionProps {
    id?: string;
    device: string;
    darkMode: boolean;
}

export const EnvSection = ({ id, device, darkMode }: EnvSectionProps) => {
    return (
        <section id={id} className="space-y-3 pt-4 border-t border-dashed border-gray-200">
            <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400">Środowisko</h3>
            <div className="flex gap-2">
                <select
                    value={device}
                    onChange={(e) => eventDispatcher.dispatch('token.update', { device: e.target.value })}
                    className="flex-1 p-2 text-[10px] border rounded bg-white font-bold"
                >
                    <option value="desktop">Desktop</option>
                    <option value="tablet">Tablet</option>
                    <option value="mobile">Mobile</option>
                    <option value="ultrawide">Ultrawide</option>
                </select>
                <button onClick={() => eventDispatcher.dispatch('token.update', { darkMode: !darkMode })}
                    className={`flex-1 py-2 text-[9px] font-black rounded border ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                    DARK MODE
                </button>
            </div>
        </section>
    );
};
