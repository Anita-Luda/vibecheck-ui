import React from 'react';
import { ColorPicker } from './ColorPicker';
import { SnapshotPanel } from './SnapshotPanel';
import { eventDispatcher } from '../../events/dispatcher';
import { useHeapStore } from '../../store/heapStore';
import { ColorFamily } from '../../../contracts/abi';
import { STYLE_PRESETS, CATEGORIES } from '../../styles/presets';

type DockPosition = 'top' | 'bottom' | 'left' | 'right' | 'float';

interface ControlPanelProps {
  onStateChange: (pos: DockPosition, collapsed: boolean) => void;
}

export const ControlPanel = ({ onStateChange }: ControlPanelProps) => {
  const [position, setPosition] = React.useState<DockPosition>('right');
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const head = useHeapStore(s => s.getHead());

  React.useEffect(() => {
    onStateChange(position, isCollapsed);
  }, [position, isCollapsed, onStateChange]);

  if (!head) return null;

  const {
    darkMode, masterColor, colorSource, p: currentPresetId, device
  } = head.value;

  const panelStyles: Record<DockPosition, string> = {
    top: 'top-0 left-0 right-0 h-48 border-b',
    bottom: 'bottom-0 left-0 right-0 h-48 border-t',
    left: 'top-0 left-0 bottom-0 w-[320px] border-r',
    right: 'top-0 right-0 bottom-0 w-[320px] border-l',
    float: 'top-6 right-6 w-80 h-[800px] rounded-2xl shadow-2xl border'
  };

  const collapsedStyles: Record<DockPosition, string> = {
    top: '-translate-y-full',
    bottom: 'translate-y-full',
    left: '-translate-x-full',
    right: 'translate-x-full',
    float: 'scale-0 opacity-0'
  };

  // Targeted isolation to prevent design tokens from breaking the control panel
  const isolationVars = {
    '--vl-padding': '0px',
    '--vl-margin': '0px',
    '--vl-gap': '0px',
    '--vl-transform': 'none',
    '--vl-perspective': 'none',
    '--vl-filter': 'none',
    '--vl-backdrop-filter': 'none',
    '--vl-mix-blend': 'normal',
    '--vl-background-blend': 'normal',
    '--vl-border': 'none',
    '--vl-outline': 'none',
    '--vl-box-shadow': 'none',
    '--vl-text-shadow': 'none',
    '--vl-text-transform': 'none',
    '--vl-letter-spacing': 'normal',
    '--vl-line-height': '1.2',
    '--vl-opacity': '1',
    '--vl-animation-name': 'none',
    '--vl-transition-duration': '0s',
    '--vl-font-smoothing': 'auto',
    '--vl-cursor': 'auto',
    '--vl-user-select': 'auto',
    '--border-width': '1px'
  } as any;

  return (
    <div className="vibecheck-editor-scope" style={isolationVars}>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`fixed z-[1001] bg-black text-white p-2 rounded shadow-lg transition-all
          ${position === 'right' ? 'right-0 top-1/2 -translate-y-1/2 rounded-l-md' :
            position === 'left' ? 'left-0 top-1/2 -translate-y-1/2 rounded-r-md' :
            position === 'top' ? 'top-0 left-1/2 -translate-x-1/2 rounded-b-md' :
            position === 'bottom' ? 'bottom-0 left-1/2 -translate-x-1/2 rounded-t-md' :
            'top-6 right-[340px] rounded-full w-10 h-10'}
        `}
      >
        {isCollapsed ? '⚙️' : '✕'}
      </button>

      <div
        className={`fixed z-[1000] flex flex-col overflow-hidden transition-all duration-300 bg-white shadow-2xl border-gray-200 ${panelStyles[position]} ${isCollapsed ? collapsedStyles[position] : ''}`}
        style={{ color: '#000', fontFamily: 'system-ui, sans-serif' }}
      >
        <div className="p-3 border-b flex justify-between items-center bg-gray-100/50">
          <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">VibeCheck Editor</span>
          </div>
          <div className="flex gap-1">
            {['top', 'bottom', 'left', 'right', 'float'].map(pos => (
              <button
                  key={pos}
                  onClick={() => setPosition(pos as DockPosition)}
                  className={`w-6 h-6 flex items-center justify-center text-[8px] font-bold border rounded transition-colors ${position === pos ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
              >
                  {pos === 'float' ? '✥' : pos[0].toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-8 scrollbar-hide">
          <section className="space-y-4">
            <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400">Źródło Kolorów</h3>
            <div className="flex p-1 bg-gray-100 rounded-lg">
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
                <div className="p-4 bg-white rounded-2xl border border-gray-100 space-y-4 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div
                            className="w-12 h-12 rounded-xl shadow-inner border border-white"
                            style={{ backgroundColor: masterColor ? `oklch(${(masterColor.l*100).toFixed(1)}% ${masterColor.c} ${masterColor.h})` : '#ccc' }}
                        />
                        <div className="flex-1">
                            <div className="text-[10px] font-black uppercase text-gray-400">Custom Palette</div>
                            <div className="text-[12px] font-mono font-bold">{masterColor ? `OKLCH ${masterColor.h.toFixed(0)}°` : 'Wybierz kolor...'}</div>
                        </div>
                    </div>

                    <ColorPicker
                        value={masterColor || { l: 0.6, c: 0.1, h: 200 }}
                        onChange={(val) => eventDispatcher.dispatch('token.update', { masterColor: val })}
                    />
                </div>
            )}
          </section>

          <section className="space-y-3">
            <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400">System Stylów</h3>
            <div className="space-y-4">
                {Object.entries(CATEGORIES).map(([catId, cat]) => (
                    <div key={catId} className="space-y-1">
                        <div className="text-[8px] font-black text-gray-300 uppercase px-1">{cat.name}</div>
                        <div className="grid grid-cols-2 gap-1">
                            {Object.values(STYLE_PRESETS).filter(p => p.category === catId).map(p => (
                                <button
                                    key={p.id}
                                    onClick={() => eventDispatcher.dispatch('preset.set', p.id)}
                                    className={`py-1.5 px-2 text-[9px] font-bold text-left truncate border rounded transition-all ${currentPresetId === p.id ? 'bg-black text-white border-black' : 'bg-white text-gray-500 border-gray-100 hover:bg-gray-50'}`}
                                >
                                    {p.name}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
          </section>

          <section className="space-y-3 pt-4 border-t border-dashed border-gray-200">
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

          <section className="pt-4 border-t border-dashed border-gray-200">
              <button
                  onClick={() => eventDispatcher.dispatch('snapshot.create', {})}
                  className="w-full py-2 bg-green-500 text-white text-[9px] font-black rounded hover:bg-green-600 transition-colors uppercase tracking-widest"
              >
                  ZAPISZ SNAPSHOT
              </button>
              <div className="mt-4">
                  <SnapshotPanel />
              </div>
          </section>
        </div>
      </div>
    </div>
  );
};
