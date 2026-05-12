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
    applyPresetColors, useGrayscalePresets, p: currentPresetId
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

  const addFamily = (role: keyof typeof roles) => {
      // Find the dominant family to base the new color on for harmony
      const dominantFamId = roles.dominant;
      const dominantFam = families.find(f => f.id === dominantFamId) || families[0];

      const newHue = (dominantFam.base.h + 40) % 360; // Simple relational shift
      const id = `fam-${families.length}-${Date.now()}`;

      const newFam: ColorFamily = {
          id,
          name: `Rodzina ${families.length + 1}`,
          base: { ...dominantFam.base, h: newHue, c: Math.max(0.05, dominantFam.base.c) },
          lattice: getHexLattice({ ...dominantFam.base, h: newHue }),
          config: { range: [0.1, 0.9], chromaCap: 0.4, method: 'perceptual' }
      };

      eventDispatcher.dispatch('token.update', {
          families: [...families, newFam],
          roles: { ...roles, [role]: id }
      });
  };

  const updateFamily = (id: string, updates: Partial<ColorFamily>) => {
      const newFamilies = families.map(f => f.id === id ? { ...f, ...updates } : f);
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
            <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400">Mapowanie Ról i Kolory</h3>
            <div className="space-y-6">
                {Object.entries(roles).map(([role, currentFamId]) => {
                    const fam = families.find(f => f.id === currentFamId);
                    return (
                        <div key={role} className="p-3 bg-gray-50 rounded-xl space-y-3 border border-gray-100 transition-all hover:shadow-md">
                            <div className="flex justify-between items-center">
                                <label className="text-[9px] text-black font-black uppercase tracking-tighter">{role}</label>
                                <div className="flex gap-2 items-center">
                                    <select
                                        value={currentFamId}
                                        onChange={(e) => updateRole(role as any, e.target.value)}
                                        className="text-[9px] p-1 border border-gray-200 rounded bg-white font-bold outline-none"
                                    >
                                        {families.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
                                    </select>
                                    <button
                                        onClick={() => addFamily(role as any)}
                                        className="w-5 h-5 flex items-center justify-center bg-black text-white rounded-full text-[12px] hover:bg-blue-600 transition-colors"
                                        title="Dodaj nową rodzinę kolorów dla tej roli"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {fam && (
                                <div className="space-y-3 animate-in fade-in slide-in-from-top-1">
                                    <div className="grid grid-cols-11 gap-0.5 h-3 rounded overflow-hidden shadow-inner">
                                        {fam.lattice.map((c, i) => (
                                            <div key={i} style={{ backgroundColor: c }} className="h-full" />
                                        ))}
                                    </div>

                                    <ColorPicker
                                        value={fam.base}
                                        onChange={(base) => updateFamily(fam.id, { base })}
                                    />

                                    <div className="flex items-center gap-3 pt-1">
                                        <div className="flex-1 space-y-1">
                                            <div className="flex justify-between text-[7px] font-bold text-gray-400 uppercase">
                                                <span>Saturacja Max</span>
                                                <span>{fam.config.chromaCap}</span>
                                            </div>
                                            <input type="range" min="0" max="0.4" step="0.01" value={fam.config.chromaCap}
                                                onChange={(e) => updateFamily(fam.id, { config: { ...fam.config, chromaCap: parseFloat(e.target.value) } })}
                                                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
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
          </section>

          <section className="space-y-4">
            <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400">System Stylów (20 Kategorii)</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => eventDispatcher.dispatch('token.update', { useGrayscalePresets: !useGrayscalePresets })}
                    className={`py-1.5 text-[8px] font-black border rounded ${useGrayscalePresets ? 'bg-black text-white' : 'bg-white text-gray-400'}`}
                  >
                    PURE GRAYSCALE
                  </button>
                  <button
                    onClick={() => eventDispatcher.dispatch('token.update', { applyPresetColors: !applyPresetColors })}
                    className={`py-1.5 text-[8px] font-black border rounded ${applyPresetColors ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-400'}`}
                  >
                    PRESET PALETTE
                  </button>
              </div>

              <div className="space-y-2">
                {Object.entries(CATEGORIES).map(([catId, cat]) => (
                    <div key={catId} className="space-y-1">
                        <div className="text-[8px] font-black text-gray-300 uppercase px-1">{cat.name}</div>
                        <div className="grid grid-cols-2 gap-1">
                            {Object.values(STYLE_PRESETS).filter(p => p.category === catId).map(p => (
                                <button
                                    key={p.id}
                                    onClick={() => eventDispatcher.dispatch('preset.set', p.id)}
                                    className={`py-1.5 px-2 text-[9px] font-bold text-left truncate border rounded transition-all ${currentPresetId === p.id ? 'bg-black text-white border-black shadow-lg scale-[1.02] z-10' : 'bg-white text-gray-500 border-gray-100 hover:bg-gray-50'}`}
                                >
                                    {p.name}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
              </div>

              <div className="pt-4 border-t border-dashed space-y-4">
                  <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg border border-blue-100">
                      <span className="text-[10px] font-black text-blue-900 uppercase">Nadpisz Preset (Customizuj)</span>
                      <button
                        onClick={() => eventDispatcher.dispatch('token.update', { customizing: !customizing })}
                        className={`w-12 h-6 rounded-full transition-all flex items-center p-1 ${customizing ? 'bg-blue-600' : 'bg-gray-300'}`}
                      >
                          <div className={`w-4 h-4 bg-white rounded-full shadow transition-all ${customizing ? 'translate-x-6' : 'translate-x-0'}`} />
                      </button>
                  </div>

                  <div className={`grid grid-cols-2 gap-4 transition-opacity duration-300 ${customizing ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
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
                      <div className="space-y-1">
                          <label className="text-[8px] text-gray-400 font-bold uppercase">Noise Level</label>
                          <input type="range" min="0" max="0.5" step="0.01" value={o?.noiseLevel !== undefined ? o.noiseLevel : 0}
                              onChange={(e) => updateOverride('noiseLevel', parseFloat(e.target.value))}
                              className="w-full accent-black h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer mt-2" />
                      </div>
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
