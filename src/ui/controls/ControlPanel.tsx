import React from 'react';
import { ModeSelector } from './ModeSelector';
import { RoleSlider } from './RoleSlider';
import { ColorPicker } from './ColorPicker';
import { SnapshotPanel } from './SnapshotPanel';
import { eventDispatcher } from '../../events/dispatcher';
import { useHeapStore } from '../../store/heapStore';
import { getHarmonicHue, oklchToHex } from '../../utils/okLch';

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

  const { darkMode, grayscale, contrastMode, w, o, colorMode, secondaryColor, tertiaryColor } = head.value;

  const panelStyles: Record<DockPosition, string> = {
    top: 'top-0 left-0 right-0 h-48 border-b',
    bottom: 'bottom-0 left-0 right-0 h-48 border-t',
    left: 'top-0 left-0 bottom-0 w-[280px] border-r',
    right: 'top-0 right-0 bottom-0 w-[280px] border-l',
    float: 'top-6 right-6 w-72 h-[700px] rounded-2xl shadow-2xl border'
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

  const harmonicHex = secondaryColor ? oklchToHex(secondaryColor.l, secondaryColor.c, secondaryColor.h) : '#000000';
  const tertiaryHex = tertiaryColor ? oklchToHex(tertiaryColor.l, tertiaryColor.c, tertiaryColor.h) : '#000000';

  const dockIcons: Record<DockPosition, string> = {
      top: '↑',
      bottom: '↓',
      left: '←',
      right: '→',
      float: '✥'
  };

  return (
    <>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`fixed z-[101] bg-black text-white p-2 shadow-lg transition-all duration-300 flex items-center justify-center
          ${position === 'right' ? 'right-0 top-1/2 -translate-y-1/2 rounded-l-md' :
            position === 'left' ? 'left-0 top-1/2 -translate-y-1/2 rounded-r-md' :
            position === 'top' ? 'top-0 left-1/2 -translate-x-1/2 rounded-b-md' :
            position === 'bottom' ? 'bottom-0 left-1/2 -translate-x-1/2 rounded-t-md' :
            'top-6 right-[300px] rounded-full w-10 h-10'}
        `}
      >
        {isCollapsed ? '⚙️' : '✕'}
      </button>

      <div className={`fixed bg-white/95 backdrop-blur-lg z-[100] flex flex-col overflow-hidden transition-all duration-300 shadow-sm border-gray-200
        ${panelStyles[position]} ${isCollapsed ? collapsedStyles[position] : ''}`}>

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
                  title={pos.toUpperCase()}
                  className={`w-6 h-6 flex items-center justify-center text-[10px] font-bold border rounded transition-colors ${position === pos ? 'bg-black text-white border-black' : 'bg-white text-gray-400 hover:bg-gray-100 border-gray-200'}`}
              >
                  {dockIcons[pos]}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-8 scrollbar-hide">
          <section className="space-y-3">
            <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400">Kolorystyka</h3>
            <div className="flex gap-2 mb-2">
                {['mono', 'duo', 'trio'].map(m => (
                    <button
                      key={m}
                      onClick={() => eventDispatcher.dispatch('token.update', { colorMode: m })}
                      className={`flex-1 py-1 text-[8px] font-black border rounded ${colorMode === m ? 'bg-black text-white' : 'bg-white text-gray-400'}`}
                    >
                        {m.toUpperCase()}
                    </button>
                ))}
            </div>
            <ColorPicker />

            {(colorMode === 'duo' || colorMode === 'trio') && (
                <div className="space-y-2 mt-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center">
                        <label className="text-[8px] font-bold text-gray-400 uppercase">Secondary (Harmonia)</label>
                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 bg-white border rounded shadow-sm">{harmonicHex}</span>
                    </div>
                    <input
                      type="range" min="-180" max="180" value={secondaryColor ? (secondaryColor.h - head.value.t.color.lattice[2]) : 30}
                      onChange={(e) => {
                          const h = getHarmonicHue(head.value.t.color.lattice[2], parseInt(e.target.value));
                          eventDispatcher.dispatch('token.update', { secondaryColor: { l: 0.6, c: 0.15, h } });
                      }}
                      className="w-full accent-black h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex gap-1 h-3 rounded overflow-hidden">
                        <div className="flex-1" style={{ backgroundColor: harmonicHex }} />
                    </div>
                </div>
            )}

            {colorMode === 'trio' && (
                <div className="space-y-2 mt-2 p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center">
                        <label className="text-[8px] font-bold text-gray-400 uppercase">Tertiary (Harmonia)</label>
                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 bg-white border rounded shadow-sm">{tertiaryHex}</span>
                    </div>
                    <input
                      type="range" min="-180" max="180" value={tertiaryColor ? (tertiaryColor.h - head.value.t.color.lattice[2]) : -30}
                      onChange={(e) => {
                          const h = getHarmonicHue(head.value.t.color.lattice[2], parseInt(e.target.value));
                          eventDispatcher.dispatch('token.update', { tertiaryColor: { l: 0.6, c: 0.15, h } });
                      }}
                      className="w-full accent-black h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex gap-1 h-3 rounded overflow-hidden">
                        <div className="flex-1" style={{ backgroundColor: tertiaryHex }} />
                    </div>
                </div>
            )}

            <div className="grid grid-cols-2 gap-2 mt-4">
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

            <div className="space-y-1">
                <label className="text-[8px] text-gray-400 font-bold uppercase">Simulacja Widzenia</label>
                <select
                    value={o?.visionSim || 'none'}
                    onChange={(e) => updateOverride('visionSim', e.target.value)}
                    className="w-full text-[9px] p-1.5 border border-gray-200 rounded bg-white outline-none font-bold"
                >
                    <option value="none">Normalny</option>
                    <option value="protanopia">Protanopia (Czerwony)</option>
                    <option value="deuteranopia">Deuteranopia (Zielony)</option>
                    <option value="tritanopia">Tritanopia (Niebieski)</option>
                    <option value="achromatopsia">Achromatopsia</option>
                    <option value="low-light">Low Light / Outdoor</option>
                </select>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400">Signals & Perceptions</h3>
            <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-gray-50 rounded border border-gray-100">
                    <div className="text-[7px] text-gray-400 font-bold uppercase">Contrast Density</div>
                    <div className="flex items-center gap-1 mt-1">
                        <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500" style={{ width: '65%' }} />
                        </div>
                        <span className="text-[8px] font-mono font-bold">6.5</span>
                    </div>
                </div>
                <div className="p-2 bg-gray-50 rounded border border-gray-100">
                    <div className="text-[7px] text-gray-400 font-bold uppercase">Chroma Overload</div>
                    <div className="flex items-center gap-1 mt-1">
                        <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500" style={{ width: '22%' }} />
                        </div>
                        <span className="text-[8px] font-mono font-bold">2.2</span>
                    </div>
                </div>
                <div className="p-2 bg-gray-50 rounded border border-gray-100">
                    <div className="text-[7px] text-gray-400 font-bold uppercase">Focal Points</div>
                    <div className="flex items-center gap-1 mt-1">
                        <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500" style={{ width: '40%' }} />
                        </div>
                        <span className="text-[8px] font-mono font-bold">Low</span>
                    </div>
                </div>
                <div className="p-2 bg-gray-50 rounded border border-gray-100">
                    <div className="text-[7px] text-gray-400 font-bold uppercase">Visual Weight</div>
                    <div className="flex items-center gap-1 mt-1">
                        <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500" style={{ width: '82%' }} />
                        </div>
                        <span className="text-[8px] font-mono font-bold">High</span>
                    </div>
                </div>
            </div>
            <p className="text-[7px] text-gray-400 italic">Wskaźniki doradcze (Read-only). System nie optymalizuje UI automatycznie.</p>
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
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400">Język Wizualny</h3>
            <div className="space-y-3">
              <select
                  onChange={(e) => eventDispatcher.dispatch('preset.set', e.target.value)}
                  className="w-full text-[10px] p-2 border border-gray-200 rounded bg-gray-50 focus:bg-white outline-none transition-colors font-bold"
              >
                  <option value="sharp-prof">Kanciasty Profesjonalny</option>
                  <option value="retro-gaming">Retro Gaming</option>
                  <option value="med-prof">Średni Profesjonalny</option>
                  <option value="med-casual">Średni Swobodny</option>
                  <option value="round-prof">Zaokrąglony Profesjonalny</option>
                  <option value="round-playful">Playful Kawaii</option>
                  <option value="cyberpunk">Cyberpunk</option>
              </select>

              <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                      <label className="text-[8px] text-gray-400 font-bold uppercase">Font</label>
                      <select
                          value={o?.fontFamily || ''}
                          onChange={(e) => updateOverride('fontFamily', e.target.value)}
                          className="w-full text-[9px] p-1.5 border border-gray-200 rounded bg-white outline-none"
                      >
                          <option value="">Auto</option>
                          <option value="Inter">Inter</option>
                          <option value="serif">Serif</option>
                          <option value="monospace">Mono</option>
                      </select>
                  </div>
                  <div className="space-y-1">
                      <label className="text-[8px] text-gray-400 font-bold uppercase">Radius</label>
                      <input
                          type="range" min="0" max="40" step="1" value={o?.radiusBase !== undefined ? o.radiusBase : 8}
                          onChange={(e) => updateOverride('radiusBase', parseInt(e.target.value))}
                          className="w-full accent-black h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer mt-2"
                      />
                  </div>
                  <div className="space-y-1">
                      <label className="text-[8px] text-gray-400 font-bold uppercase">Gęstość (Spacing)</label>
                      <input
                          type="range" min="4" max="32" step="1" value={o?.spacingBase !== undefined ? o.spacingBase : 16}
                          onChange={(e) => updateOverride('spacingBase', parseInt(e.target.value))}
                          className="w-full accent-black h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer mt-2"
                      />
                  </div>
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
                      className={`flex-1 py-1.5 text-[9px] font-black border rounded transition-all ${contrastMode === level ? 'bg-blue-600 text-white border-blue-600 shadow-lg' : 'bg-white text-gray-400 border-gray-200'}`}
                    >
                        {level}
                    </button>
                ))}
            </div>
          </section>

          <section className="pt-4 border-t border-dashed border-gray-200">
              <button
                  onClick={() => eventDispatcher.dispatch('snapshot.create', {})}
                  className="w-full py-2 bg-green-500 text-white text-[9px] font-black rounded shadow-md hover:bg-green-600 transition-colors uppercase tracking-widest"
              >
                  Zapisz Snapshot
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
