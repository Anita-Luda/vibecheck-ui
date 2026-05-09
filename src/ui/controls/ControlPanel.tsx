import React from 'react';
import { ModeSelector } from './ModeSelector';
import { RoleSlider } from './RoleSlider';
import { ColorPicker } from './ColorPicker';
import { SnapshotPanel } from './SnapshotPanel';
import { eventDispatcher } from '../../events/dispatcher';
import { useHeapStore } from '../../store/heapStore';

type DockPosition = 'top' | 'bottom' | 'left' | 'right' | 'float';

export const ControlPanel = () => {
  const [position, setPosition] = React.useState<DockPosition>('right');
  const head = useHeapStore(s => s.getHead());

  if (!head) return null;

  const { darkMode, grayscale, contrastMode, w, o } = head.value;

  const panelStyles: Record<DockPosition, string> = {
    top: 'top-0 left-0 right-0 h-48 border-b',
    bottom: 'bottom-0 left-0 right-0 h-48 border-t',
    left: 'top-0 left-0 bottom-0 w-72 border-r',
    right: 'top-0 right-0 bottom-0 w-72 border-l',
    float: 'top-6 right-6 w-72 h-[600px] rounded-2xl shadow-2xl border'
  };

  const updateOverride = (key: string, val: any) => {
    eventDispatcher.dispatch('token.update', { o: { ...o, [key]: val } });
  };

  return (
    <div className={`fixed bg-white/95 backdrop-blur-lg z-[100] flex flex-col overflow-hidden transition-all duration-300 shadow-sm border-gray-200 ${panelStyles[position]}`}>
      <div className="p-3 border-b flex justify-between items-center bg-gray-50/80">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">VibeCheck v8</span>
        </div>
        <div className="flex gap-1">
          {(['top', 'bottom', 'left', 'right', 'float'] as DockPosition[]).map(pos => (
            <button
                key={pos}
                onClick={() => setPosition(pos)}
                title={pos}
                className={`w-3 h-3 border border-gray-300 rounded-[2px] transition-colors ${position === pos ? 'bg-black border-black' : 'bg-white hover:bg-gray-100'}`}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-8 scrollbar-hide">
        <section className="space-y-3">
          <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400">Kolor & Tryb</h3>
          <ColorPicker />
          <div className="grid grid-cols-2 gap-2 mt-2">
            <button
                onClick={() => eventDispatcher.dispatch('token.update', { darkMode: !darkMode })}
                className={`py-1.5 text-[9px] font-bold rounded border transition-all ${darkMode ? 'bg-black text-white border-black' : 'bg-white text-gray-600 border-gray-200'}`}
            >
              DARK MODE
            </button>
            <button
                onClick={() => eventDispatcher.dispatch('token.update', { grayscale: !grayscale })}
                className={`py-1.5 text-[9px] font-bold rounded border transition-all ${grayscale ? 'bg-black text-white border-black' : 'bg-white text-gray-600 border-gray-200'}`}
            >
              GRAYSCALE
            </button>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400">Hierarchia (60/30/10)</h3>
          <div className="space-y-4">
            <div className="space-y-1">
                <div className="flex justify-between text-[9px] font-mono text-gray-400">
                    <span>DOMINUJĄCY ({(w[0]*100).toFixed(0)}%)</span>
                </div>
                <input
                    type="range" min="0" max="1" step="0.01" value={w[0]}
                    onChange={(e) => eventDispatcher.dispatch('token.update', { w: [parseFloat(e.target.value), Math.max(parseFloat(e.target.value), w[1])] })}
                    className="w-full accent-black h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer"
                />
            </div>
            <div className="space-y-1">
                <div className="flex justify-between text-[9px] font-mono text-gray-400">
                    <span>WSPARCIE ({((w[1]-w[0])*100).toFixed(0)}%)</span>
                </div>
                <input
                    type="range" min="0" max="1" step="0.01" value={w[1]}
                    onChange={(e) => eventDispatcher.dispatch('token.update', { w: [Math.min(parseFloat(e.target.value), w[0]), parseFloat(e.target.value)] })}
                    className="w-full accent-black h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer"
                />
            </div>
            <div className="text-[9px] text-gray-300 font-mono text-center">
                AKCENT: ({((1-w[1])*100).toFixed(0)}%)
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400">Język Wizualny</h3>
          <div className="space-y-3">
            <select
                onChange={(e) => eventDispatcher.dispatch('preset.set', e.target.value)}
                className="w-full text-[10px] p-2 border border-gray-200 rounded bg-gray-50 focus:bg-white outline-none transition-colors"
            >
                <option value="sharp-prof">Kanciasty Profesjonalny</option>
                <option value="retro-gaming">Retro Gaming</option>
                <option value="med-prof">Średni Profesjonalny</option>
                <option value="med-casual">Średni Swobodny</option>
                <option value="round-prof">Zaokrąglony Profesjonalny</option>
                <option value="round-playful">Playful Kawaii</option>
                <option value="cyberpunk">Cyberpunk</option>
            </select>

            <div className="space-y-1">
                <label className="text-[9px] text-gray-400 font-bold">FONT</label>
                <select
                    value={o?.fontFamily || ''}
                    onChange={(e) => updateOverride('fontFamily', e.target.value)}
                    className="w-full text-[10px] p-2 border border-gray-200 rounded bg-gray-50 outline-none"
                >
                    <option value="">(Auto)</option>
                    <option value="Inter, sans-serif">Inter</option>
                    <option value="serif">Serif</option>
                    <option value="monospace">Monospace</option>
                </select>
            </div>

            <div className="space-y-1">
                <label className="text-[9px] text-gray-400 font-bold uppercase">Radius ({o?.radiusBase || 'Auto'})</label>
                <input
                    type="range" min="0" max="40" step="1" value={o?.radiusBase !== undefined ? o.radiusBase : 8}
                    onChange={(e) => updateOverride('radiusBase', parseInt(e.target.value))}
                    className="w-full accent-black h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer"
                />
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400">Accessibility</h3>
          <div className="flex gap-1">
              {['none', 'AA', 'AAA'].map(level => (
                  <button
                    key={level}
                    onClick={() => eventDispatcher.dispatch('token.update', { contrastMode: level })}
                    className={`flex-1 py-1 text-[9px] font-bold border rounded transition-all ${contrastMode === level ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-gray-400 border-gray-200'}`}
                  >
                      {level}
                  </button>
              ))}
          </div>
        </section>

        <SnapshotPanel />
      </div>
    </div>
  );
};
