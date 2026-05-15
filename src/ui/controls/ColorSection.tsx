import React from 'react';
import { ColorPicker } from './ColorPicker';
import { eventDispatcher } from '../../events/dispatcher';
import { OKLCH, ColorFamily } from '../../../contracts/abi';

interface ColorSectionProps {
    id?: string;
    colorSource: string;
    masterColor?: OKLCH;
    families: ColorFamily[];
    uRoles: any;
}

export const ColorSection = ({ id, colorSource, masterColor, families, uRoles }: ColorSectionProps) => {
    const functionalRoles = ['primary', 'secondary', 'accent', 'support', 'muted', 'destructive', 'neutral'];

    const addFamily = () => {
        const newId = `fam-${Date.now()}`;
        const newFamily = {
            id: newId,
            name: `Nowa Rodzina ${families.length + 1}`,
            base: { l: 0.6, c: 0.1, h: Math.random() * 360 },
            lattice: [],
            config: { range: [50, 950] as [number, number], chromaCap: 0.2, method: 'perceptual' as const }
        };
        eventDispatcher.dispatch('token.update', { families: [...families, newFamily] });
    };

    return (
        <section id={id} className="space-y-4">
            <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400">Zarządzanie Kolorami</h3>
            <div className="flex p-1 bg-gray-100 rounded-lg mb-4">
                {[
                    { id: 'grayscale', label: 'GRAY' },
                    { id: 'preset', label: 'PRESET' },
                    { id: 'custom', label: 'CUSTOM' }
                ].map(s => (
                    <button
                        key={s.id}
                        onClick={() => eventDispatcher.dispatch('token.update', { colorSource: s.id })}
                        className={`flex-1 py-1.5 text-[9px] font-black rounded transition-all ${colorSource === s.id ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        {s.label}
                    </button>
                ))}
            </div>

            {colorSource === 'custom' && (
                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold">Rodziny Kolorów</span>
                            <button onClick={addFamily} className="text-[10px] bg-black text-white px-2 py-0.5 rounded">+</button>
                        </div>
                        <div className="space-y-2">
                            {families.map((fam, idx) => (
                                <div key={fam.id} className="p-3 border rounded-xl space-y-3 bg-gray-50/50">
                                    <div className="flex justify-between items-center">
                                        <input
                                            value={fam.name}
                                            onChange={(e) => {
                                                const newFamilies = [...families];
                                                newFamilies[idx] = { ...fam, name: e.target.value };
                                                eventDispatcher.dispatch('token.update', { families: newFamilies });
                                            }}
                                            className="bg-transparent border-none text-[11px] font-bold focus:ring-0 p-0 w-2/3"
                                        />
                                        <div className="w-4 h-4 rounded-full border border-white shadow-sm" style={{ backgroundColor: `oklch(${fam.base.l*100}% ${fam.base.c} ${fam.base.h})` }} />
                                    </div>
                                    <ColorPicker
                                        value={fam.base}
                                        onChange={(val) => {
                                            const newFamilies = [...families];
                                            newFamilies[idx] = { ...fam, base: val };
                                            eventDispatcher.dispatch('token.update', { families: newFamilies });
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-dashed">
                        <span className="text-[10px] font-bold">Mapowanie Roli</span>
                        <div className="grid gap-2">
                            {functionalRoles.map(role => (
                                <div key={role} className="flex items-center gap-2">
                                    <span className="text-[9px] w-16 text-gray-400 font-mono">{role}</span>
                                    <select
                                        value={(uRoles as any)[role] || ''}
                                        onChange={(e) => {
                                            eventDispatcher.dispatch('token.update', { roles: { ...uRoles, [role]: e.target.value } });
                                        }}
                                        className="flex-1 p-1 text-[9px] border rounded bg-white"
                                    >
                                        <option value="">Preset / Master</option>
                                        {families.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
                                    </select>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
