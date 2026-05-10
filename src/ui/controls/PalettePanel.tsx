import React from 'react';
import { useHeapStore } from '../../store/heapStore';

type DockPosition = 'top' | 'bottom' | 'left' | 'right' | 'float';

interface PalettePanelProps {
  controlPosition: DockPosition;
  onCollapsedChange: (collapsed: boolean) => void;
}

export const PalettePanel = ({ controlPosition, onCollapsedChange }: PalettePanelProps) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const head = useHeapStore(s => s.getHead());

  React.useEffect(() => {
    onCollapsedChange(isCollapsed);
  }, [isCollapsed, onCollapsedChange]);

  if (!head) return null;

  const { colorMode } = head.value;

  // Determine position based on controlPosition (opposite)
  const getOppositePosition = (pos: DockPosition): DockPosition => {
    if (pos === 'right') return 'left';
    if (pos === 'left') return 'right';
    if (pos === 'top') return 'bottom';
    if (pos === 'bottom') return 'top';
    return 'float';
  };

  const position = getOppositePosition(controlPosition);

  const panelStyles: Record<DockPosition, string> = {
    top: 'top-0 left-0 right-0 h-32 border-b',
    bottom: 'bottom-0 left-0 right-0 h-32 border-t',
    left: 'top-0 left-0 bottom-0 w-32 border-r',
    right: 'top-0 right-0 bottom-0 w-32 border-l',
    float: 'top-6 left-6 w-32 h-[400px] rounded-2xl shadow-xl border'
  };

  const collapsedStyles: Record<DockPosition, string> = {
    top: '-translate-y-full',
    bottom: 'translate-y-full',
    left: '-translate-x-full',
    right: 'translate-x-full',
    float: 'scale-0 opacity-0'
  };

  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  return (
    <>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`fixed z-[101] bg-black text-white p-2 shadow-lg transition-all duration-300 flex items-center justify-center
          ${position === 'right' ? 'right-0 top-1/3 -translate-y-1/2 rounded-l-md' :
            position === 'left' ? 'left-0 top-1/3 -translate-y-1/2 rounded-r-md' :
            position === 'top' ? 'top-0 left-1/4 -translate-x-1/2 rounded-b-md' :
            position === 'bottom' ? 'bottom-0 left-1/4 -translate-x-1/2 rounded-t-md' :
            'top-6 left-[150px] rounded-full w-10 h-10'}
        `}
      >
        {isCollapsed ? '🎨' : '✕'}
      </button>

      <div className={`fixed bg-white/95 backdrop-blur-lg z-[100] flex flex-col overflow-hidden transition-all duration-300 shadow-sm border-gray-200
        ${panelStyles[position]} ${isCollapsed ? collapsedStyles[position] : ''}`}>

        <div className="p-2 border-b bg-gray-50/80 text-center">
            <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">Paleta OKLCH</span>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-4 scrollbar-hide">
            <section className="space-y-1">
                <div className="text-[7px] font-bold text-gray-400 uppercase">Primary</div>
                <div className="flex flex-col gap-0.5">
                    {steps.map((s, i) => (
                        <div key={s} className="group relative">
                            <div
                                className="h-4 w-full rounded-[2px]"
                                style={{ backgroundColor: `var(--color-raw-${i})` }}
                            />
                            <span className="absolute left-full ml-2 top-0 bg-black text-white text-[8px] px-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-[110]">
                                {s}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {colorMode !== 'mono' && (
                <section className="space-y-1">
                    <div className="text-[7px] font-bold text-gray-400 uppercase">Secondary</div>
                    <div className="flex flex-col gap-0.5">
                        {steps.map((s, i) => (
                            <div key={s} className="h-4 w-full rounded-[2px]" style={{ backgroundColor: `var(--color-sec-${i})` }} />
                        ))}
                    </div>
                </section>
            )}

            {colorMode === 'trio' && (
                <section className="space-y-1">
                    <div className="text-[7px] font-bold text-gray-400 uppercase">Tertiary</div>
                    <div className="flex flex-col gap-0.5">
                        {steps.map((s, i) => (
                            <div key={s} className="h-4 w-full rounded-[2px]" style={{ backgroundColor: `var(--color-ter-${i})` }} />
                        ))}
                    </div>
                </section>
            )}
        </div>
      </div>
    </>
  );
};
