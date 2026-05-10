import React from 'react';
import { ModeSelector } from './ModeSelector';
import { ColorPicker } from './ColorPicker';
import { SnapshotPanel } from './SnapshotPanel';
import { eventDispatcher } from '../../events/dispatcher';
import { useHeapStore } from '../../store/heapStore';
import { getHarmonicHue, oklchToHex, hexToOklch } from '../../utils/okLch';
import { getHexLattice } from '../../compiler/colorCompiler';
import { ColorFamily } from '../../../contracts/abi';

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

  const { darkMode, grayscale, contrastMode, w, o, families, roles, device, densityMode } = head.value;

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

  const addFamily = () => {
      const id = `fam-${families.length}`;
      const newFam: ColorFamily = {
          id,
          name: `Nowa Rodzina ${families.length}`,
          base: { l: 0.6, c: 0.1, h: Math.random() * 360 },
          lattice: getHexLattice({ l: 0.6, c: 0.1, h: 200 }),
          config: { range: [0.1, 0.9], chromaCap: 0.4, method: 'perceptual' }
      };
      eventDispatcher.dispatch('token.update', { families: [...families, newFam] });
  };

  const updateFamily = (id: string, updates: Partial<ColorFamily>) => {
      const newFamilies = families.map(f => f.id === id ? { ...f, ...updates } : f);
      // If base color changed, regenerate lattice preview
      if (updates.base) {
          const target = newFamilies.find(f => f.id === id)!;
          target.lattice = getHexLattice(target.base);
      }
      eventDispatcher.dispatch('token.update', { families: newFamilies });
  };

  const updateRole = (role: keyof typeof roles, familyId: string) => {
      eventDispatcher.dispatch('token.update', { roles: { ...roles, [role]: familyId } });
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
            'top-6 right-[340px] rounded-full w-10 h-10'}
        `}
      >
        {isCollapsed ? '⚙️' : '✕'}
      </button>

      <div className={`fixed bg-white/95 backdrop-blur-lg z-[100] flex flex-col overflow-hidden transition-all duration-300 shadow-sm border-gray-200
        ${panelStyles[position]} ${isCollapsed ? collapsedStyles[position] : ''}`}>

        <div className="p-3 border-b flex justify-between items-center bg-gray-50/80">
          <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">VibeCheck v8 Pro</span>
          </div>
          <div className="flex gap-1">
            {['top', 'bottom', 'left', 'right', 'float'].map(pos => (
              <button
                  key={pos}
                  onClick={() => setPosition(pos as DockPosition)}
                  className={`w-6 h-6 flex items-center justify-center text-[10px] font-bold border rounded transition-colors ${position === pos ? 'bg-black text-white border-black' : 'bg-white text-gray-400 hover:bg-gray-100 border-gray-200'}`}
              >
                  {pos === 'float' ? '✥' : pos[0].toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-8 scrollbar-hide">
          <section className="space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400">Rodziny Kolorystyczne</h3>
                <button onClick={addFamily} className="text-[18px] font-bold hover:text-blue-500">+</button>
            </div>

            <div className="space-y-6">
                {families.map(f => (
                    <div key={f.id} className="p-3 bg-gray-50 rounded-xl space-y-3 border border-gray-100">
                        <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold uppercase">{f.name}</span>
                            <span className="text-[8px] font-mono text-gray-400">{f.id}</span>
                        </div>

                        <div className="grid grid-cols-11 gap-0.5 h-4 rounded overflow-hidden shadow-inner">
                            {f.lattice.map((c, i) => (
                                <div key={i} style={{ backgroundColor: c }} className="h-full" />
                            ))}
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <label className="text-[8px] text-gray-400 font-bold w-4">H</label>
                                <input type="range" min="0" max="360" value={f.base.h}
                                    onChange={(e) => updateFamily(f.id, { base: { ...f.base, h: parseInt(e.target.value) } })}
                                    className="flex-1 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black" />
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="text-[8px] text-gray-400 font-bold w-4">C</label>
                                <input type="range" min="0" max="0.4" step="0.01" value={f.base.c}
                                    onChange={(e) => updateFamily(f.id, { base: { ...f.base, c: parseFloat(e.target.value) } })}
                                    className="flex-1 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400">Mapowanie Ról</h3>
            <div className="grid grid-cols-2 gap-3">
                {Object.entries(roles).map(([role, currentFamId]) => (
                    <div key={role} className="space-y-1">
                        <label className="text-[8px] text-gray-400 font-bold uppercase">{role}</label>
                        <select
                            value={currentFamId}
                            onChange={(e) => updateRole(role as any, e.target.value)}
                            className="w-full text-[9px] p-1.5 border border-gray-200 rounded bg-white font-bold outline-none"
                        >
                            {families.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
                        </select>
                    </div>
                ))}
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400">Hierarchia (Preset Mode)</h3>
            <div className="grid grid-cols-3 gap-1">
                {[
                    { label: '60/30/10', val: [0.6, 0.9] },
                    { label: '70/20/10', val: [0.7, 0.9] },
                    { label: '40/40/20', val: [0.4, 0.8] },
                    { label: '10/30/60', val: [0.1, 0.4] },
                    { label: '50/50/0', val: [0.5, 1.0] },
                    { label: 'Swobodny', val: [w[0], w[1]] }
                ].map(p => (
                    <button
                        key={p.label}
                        onClick={() => eventDispatcher.dispatch('token.update', { w: p.val })}
                        className={`py-1 text-[8px] font-black border rounded ${w[0] === p.val[0] && w[1] === p.val[1] ? 'bg-black text-white' : 'bg-white text-gray-400'}`}
                    >
                        {p.label}
                    </button>
                ))}
            </div>

            <div className="space-y-4 mt-4">
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
            <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400">Język Wizualny Pro</h3>
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

              <div className="grid grid-cols-2 gap-4">
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
                      <input type="range" min="0" max="40" step="1" value={o?.radiusBase !== undefined ? o.radiusBase : 8}
                          onChange={(e) => updateOverride('radiusBase', parseInt(e.target.value))}
                          className="w-full accent-black h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer mt-2" />
                  </div>
                  <div className="space-y-1">
                      <label className="text-[8px] text-gray-400 font-bold uppercase">Gęstość (Spacing)</label>
                      <input type="range" min="4" max="32" step="1" value={o?.spacingBase !== undefined ? o.spacingBase : 16}
                          onChange={(e) => updateOverride('spacingBase', parseInt(e.target.value))}
                          className="w-full accent-black h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer mt-2" />
                  </div>
                  <div className="space-y-1">
                      <label className="text-[8px] text-gray-400 font-bold uppercase">Borders</label>
                      <input type="range" min="0" max="5" step="0.5" value={o?.borderThickness !== undefined ? o.borderThickness : 1.5}
                          onChange={(e) => updateOverride('borderThickness', parseFloat(e.target.value))}
                          className="w-full accent-black h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer mt-2" />
                  </div>
                  <div className="space-y-1">
                      <label className="text-[8px] text-gray-400 font-bold uppercase">Shadow Blur</label>
                      <input type="range" min="0" max="4" step="0.1" value={o?.shadowBlur !== undefined ? o.shadowBlur : 1}
                          onChange={(e) => updateOverride('shadowBlur', parseFloat(e.target.value))}
                          className="w-full accent-black h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer mt-2" />
                  </div>
                  <div className="space-y-1">
                      <label className="text-[8px] text-gray-400 font-bold uppercase">Motion Intensity</label>
                      <input type="range" min="0" max="3" step="0.1" value={o?.motionIntensity !== undefined ? o.motionIntensity : 1}
                          onChange={(e) => updateOverride('motionIntensity', parseFloat(e.target.value))}
                          className="w-full accent-black h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer mt-2" />
                  </div>
              </div>
            </div>
          </section>

          <section className="space-y-3">
              <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400">Środowisko</h3>
              <div className="grid grid-cols-2 gap-2">
                  <select
                      value={device}
                      onChange={(e) => eventDispatcher.dispatch('token.update', { device: e.target.value })}
                      className="text-[9px] p-2 border rounded bg-white font-bold"
                  >
                      <option value="desktop">Desktop</option>
                      <option value="tablet">Tablet</option>
                      <option value="mobile">Mobile</option>
                      <option value="ultrawide">Ultrawide</option>
                  </select>
                  <select
                      value={densityMode}
                      onChange={(e) => eventDispatcher.dispatch('token.update', { densityMode: e.target.value })}
                      className="text-[9px] p-2 border rounded bg-white font-bold"
                  >
                      <option value="compact">Compact</option>
                      <option value="normal">Normal</option>
                      <option value="touch">Touch</option>
                  </select>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                  <button onClick={() => eventDispatcher.dispatch('token.update', { darkMode: !darkMode })}
                      className={`py-2 text-[9px] font-black rounded border ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>DARK MODE</button>
                  <button onClick={() => eventDispatcher.dispatch('token.update', { grayscale: !grayscale })}
                      className={`py-2 text-[9px] font-black rounded border ${grayscale ? 'bg-black text-white' : 'bg-white text-black'}`}>GRAYSCALE</button>
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
