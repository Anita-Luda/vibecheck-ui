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

  const { darkMode, grayscale, contrastMode } = head.value;

  const panelStyles: Record<DockPosition, string> = {
    top: 'top-0 left-0 right-0 h-64 border-b',
    bottom: 'bottom-0 left-0 right-0 h-64 border-t',
    left: 'top-0 left-0 bottom-0 w-80 border-r',
    right: 'top-0 right-0 bottom-0 w-80 border-l',
    float: 'top-10 right-10 w-80 h-[600px] rounded-2xl shadow-2xl border'
  };

  return (
    <div className={`fixed bg-white/90 backdrop-blur-md z-[100] flex flex-col overflow-hidden transition-all duration-300 ${panelStyles[position]}`}>
      <div className="p-3 border-b flex justify-between items-center bg-gray-50/50">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">VibeCheck DevTools</span>
        <div className="flex gap-1">
          {(['top', 'bottom', 'left', 'right', 'float'] as DockPosition[]).map(pos => (
            <button
                key={pos}
                onClick={() => setPosition(pos)}
                className={`w-4 h-4 border rounded-sm ${position === pos ? 'bg-black' : 'bg-white'}`}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        <section className="space-y-4">
          <h3 className="text-[10px] font-bold uppercase text-gray-400">Paleta & Kolor Bazowy</h3>
          <ColorPicker />
          <div className="flex gap-2">
            <button
                onClick={() => eventDispatcher.dispatch('token.update', { darkMode: !darkMode })}
                className={`flex-1 py-1 text-[10px] rounded border ${darkMode ? 'bg-black text-white' : 'bg-white'}`}
            >
              Dark Mode
            </button>
            <button
                onClick={() => eventDispatcher.dispatch('token.update', { grayscale: !grayscale })}
                className={`flex-1 py-1 text-[10px] rounded border ${grayscale ? 'bg-black text-white' : 'bg-white'}`}
            >
              Szary (Test)
            </button>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-[10px] font-bold uppercase text-gray-400">Proporcje (60/30/10)</h3>
          <ModeSelector />
          <RoleSlider index={0} label="Dominacja" />
          <RoleSlider index={1} label="Wsparcie" />
          <RoleSlider index={2} label="Akcent" />
        </section>

        <section className="space-y-4">
          <h3 className="text-[10px] font-bold uppercase text-gray-400">Styl Wizualny</h3>
          <select
            onChange={(e) => eventDispatcher.dispatch('preset.set', e.target.value)}
            className="w-full text-xs p-2 border rounded"
          >
            <option value="sharp-prof">Sharp Professional</option>
            <option value="retro-gaming">Retro Gaming</option>
            <option value="med-prof">Medium Professional</option>
            <option value="med-casual">Medium Casual</option>
            <option value="round-prof">Rounded Professional</option>
            <option value="round-playful">Playful Kawaii</option>
            <option value="cyberpunk">Cyberpunk</option>
          </select>
        </section>

        <section className="space-y-4">
          <h3 className="text-[10px] font-bold uppercase text-gray-400">Accessibility</h3>
          <div className="flex gap-2">
              {['none', 'AA', 'AAA'].map(level => (
                  <button
                    key={level}
                    onClick={() => eventDispatcher.dispatch('token.update', { contrastMode: level })}
                    className={`flex-1 py-1 text-[10px] border rounded ${contrastMode === level ? 'bg-blue-500 text-white' : ''}`}
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
