import React from 'react';
import { useHeapStore } from '../../store/heapStore';

export const PalettePanel = ({ id, controlPosition, onCollapsedChange }: { id?: string, controlPosition: string, onCollapsedChange: (c: boolean) => void }) => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const head = useHeapStore(s => s.getHead());

    React.useEffect(() => {
        onCollapsedChange(isCollapsed);
    }, [isCollapsed, onCollapsedChange]);

    if (!head) return null;

    const opposite: Record<string, string> = {
        right: 'left-0 border-r',
        left: 'right-0 border-l',
        top: 'bottom-0 border-t',
        bottom: 'top-0 border-b',
        float: 'left-6 top-6 rounded-2xl border'
    };

    const collapsedStyles: Record<string, string> = {
        right: '-translate-x-full',
        left: 'translate-x-full',
        top: 'translate-y-full',
        bottom: '-translate-y-full',
        float: 'scale-0 opacity-0'
    };

    const roles = ['primary', 'secondary', 'accent', 'support', 'muted', 'destructive', 'neutral'];

    return (
        <div
            id={id}
            className={`fixed z-[999] bg-white/80 backdrop-blur-md shadow-xl transition-all duration-300 flex flex-col
                ${opposite[controlPosition]}
                ${isCollapsed ? collapsedStyles[controlPosition] : ''}
                ${controlPosition === 'right' || controlPosition === 'left' || controlPosition === 'float' ? 'w-32 bottom-0 top-0' : 'h-32 left-0 right-0'}
            `}
            style={{ color: '#000', fontFamily: 'system-ui, sans-serif' }}
        >
            <div id={id ? `${id}-header` : undefined} className="p-2 border-b flex justify-between items-center bg-gray-50/50">
                <span className="text-[8px] font-black uppercase text-gray-400">Paleta Tonalna</span>
                <button id={id ? `${id}-collapse-btn` : undefined} onClick={() => setIsCollapsed(!isCollapsed)} className="text-[10px]">
                    {isCollapsed ? '→' : '←'}
                </button>
            </div>

            <div id={id ? `${id}-scroll-area` : undefined} className="flex-1 overflow-y-auto p-2 flex flex-col gap-3 scrollbar-hide">
                {roles.map(role => (
                    <div key={role} id={id ? `${id}-role-${role}` : undefined} className="space-y-1">
                        <div id={id ? `${id}-role-${role}-label` : undefined} className="text-[7px] font-black uppercase text-gray-400 truncate">{role}</div>
                        <div id={id ? `${id}-role-${role}-grid` : undefined} className="grid grid-cols-5 gap-0.5">
                            {[100, 300, 500, 700, 900].map(tone => (
                                <div
                                    key={tone}
                                    id={id ? `${id}-role-${role}-tone-${tone}` : undefined}
                                    className="aspect-square rounded-[2px] shadow-sm border border-black/5"
                                    style={{ backgroundColor: `var(--color-role-${role}-${tone})` }}
                                    title={`${role} tone ${tone}`}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
