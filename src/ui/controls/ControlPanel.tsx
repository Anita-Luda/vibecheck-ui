import React from 'react';
import { ColorPicker } from './ColorPicker';
import { SnapshotPanel } from './SnapshotPanel';
import { eventDispatcher } from '../../events/dispatcher';
import { useHeapStore } from '../../store/heapStore';
import { getHexLattice } from '../../compiler/colorCompiler';
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
    darkMode, grayscale, customizing, w, o,
    families, roles, device, densityMode,
    applyPresetColors, useGrayscalePresets, masterColor, colorSource, p: currentPresetId
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

  const updateOverride = (key: string, val: any) => {
    eventDispatcher.dispatch('token.update', { o: { ...o, [key]: val } });
  };

  // ISOLATION STYLE: Prevent design tokens from leaking into the control panel
  const isolationStyle: React.CSSProperties = {
      all: 'initial', // Reset everything
      display: 'flex',
      flexDirection: 'column',
      color: '#000',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '12px',
      lineHeight: '1.2',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      boxSizing: 'border-box',
      // Reset variables specifically
      '--vl-padding': '0px',
      '--vl-margin': '0px',
      '--vl-transform': 'none',
      '--vl-perspective': 'none',
      '--vl-filter': 'none',
      '--vl-backdrop-filter': 'none',
      '--vl-mix-blend': 'normal',
      '--vl-bg-blend': 'normal',
      '--vl-border': 'none',
      '--vl-border-width': '0px',
      '--vl-outline': 'none',
      '--vl-box-shadow': 'none',
      '--vl-text-shadow': 'none',
      '--vl-text-transform': 'none',
      '--vl-letter-spacing': 'normal',
      '--vl-line-height': '1.2',
      '--vl-opacity': '1',
      '--vl-cursor': 'auto',
      '--vl-user-select': 'auto',
      '--vl-animation-name': 'none',
      '--vl-animation-duration': '0s',
      '--vl-transition-duration': '0s'
  } as any;

  return (
    <>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{ all: 'unset', position: 'fixed', zIndex: 1001, backgroundColor: '#000', color: '#fff', padding: '8px', cursor: 'pointer', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}
        className={`
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
        className={`fixed z-[1000] flex flex-col overflow-hidden transition-all duration-300 shadow-2xl border-gray-200 ${panelStyles[position]} ${isCollapsed ? collapsedStyles[position] : ''}`}
        style={isolationStyle}
      >
        <div className="p-3 border-b flex justify-between items-center bg-gray-50/80" style={{ borderBottom: '1px solid #ddd' }}>
          <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">VibeCheck v8 Pro</span>
          </div>
          <div className="flex gap-1">
            {['top', 'bottom', 'left', 'right', 'float'].map(pos => (
              <button
                  key={pos}
                  onClick={() => setPosition(pos as DockPosition)}
                  style={{ width: '24px', height: '24px', fontSize: '10px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: position === pos ? '#000' : '#fff', color: position === pos ? '#fff' : '#444', cursor: 'pointer' }}
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
                        style={{ flex: 1, padding: '6px 0', fontSize: '9px', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.2s', backgroundColor: colorSource === s.id ? '#fff' : 'transparent', color: colorSource === s.id ? '#000' : '#888', boxShadow: colorSource === s.id ? '0 1px 3px rgba(0,0,0,0.1)' : 'none' }}
                    >
                        {s.label}
                    </button>
                ))}
            </div>

            {colorSource === 'custom' && (
                <div className="p-4 bg-white rounded-2xl border border-gray-200 space-y-4 shadow-sm animate-in fade-in slide-in-from-top-2" style={{ border: '1px solid #eee' }}>
                    <div className="flex items-center gap-4">
                        <div
                            className="w-16 h-16 rounded-xl shadow-inner border border-white"
                            style={{ backgroundColor: masterColor ? `oklch(${(masterColor.l*100).toFixed(1)}% ${masterColor.c} ${masterColor.h})` : '#ccc' }}
                        />
                        <div className="flex-1">
                            <div className="text-[10px] font-black uppercase text-gray-400">Custom Palette</div>
                            <div className="text-[12px] font-mono font-bold" style={{ color: '#000' }}>{masterColor ? `OKLCH ${masterColor.h.toFixed(0)}°` : 'Wybierz kolor...'}</div>
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
            <div className="space-y-2">
                {Object.entries(CATEGORIES).map(([catId, cat]) => (
                    <div key={catId} className="space-y-1">
                        <div className="text-[8px] font-black text-gray-300 uppercase px-1">{cat.name}</div>
                        <div className="grid grid-cols-2 gap-1">
                            {Object.values(STYLE_PRESETS).filter(p => p.category === catId).map(p => (
                                <button
                                    key={p.id}
                                    onClick={() => eventDispatcher.dispatch('preset.set', p.id)}
                                    style={{ padding: '6px', fontSize: '9px', fontWeight: 'bold', textAlign: 'left', border: '1px solid #f0f0f0', borderRadius: '4px', cursor: 'pointer', backgroundColor: currentPresetId === p.id ? '#000' : '#fff', color: currentPresetId === p.id ? '#fff' : '#666' }}
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
                      style={{ flex: 1, padding: '6px', fontSize: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                  >
                      <option value="desktop">Desktop</option>
                      <option value="tablet">Tablet</option>
                      <option value="mobile">Mobile</option>
                      <option value="ultrawide">Ultrawide</option>
                  </select>
                  <button onClick={() => eventDispatcher.dispatch('token.update', { darkMode: !darkMode })}
                      style={{ flex: 1, padding: '6px', fontSize: '9px', fontWeight: 'black', borderRadius: '4px', border: '1px solid #000', backgroundColor: darkMode ? '#000' : '#fff', color: darkMode ? '#fff' : '#000', cursor: 'pointer' }}>
                      DARK MODE
                  </button>
              </div>
          </section>

          <section className="pt-4 border-t border-dashed border-gray-200">
              <button
                  onClick={() => eventDispatcher.dispatch('snapshot.create', {})}
                  style={{ width: '100%', padding: '10px', backgroundColor: '#22c55e', color: '#fff', fontSize: '10px', fontWeight: 'black', borderRadius: '8px', cursor: 'pointer', border: 'none' }}
              >
                  ZAPISZ SNAPSHOT
              </button>
              <div className="mt-4">
                  <SnapshotPanel />
              </div>
          </section>
        </div>
      </div>
    </>
  );
};
