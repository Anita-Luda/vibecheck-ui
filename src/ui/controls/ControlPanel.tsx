import React from 'react';
import { useHeapStore } from '../../store/heapStore';
import { SnapshotPanel } from './SnapshotPanel';
import { ModeSelector } from './ModeSelector';
import { RoleSlider } from './RoleSlider';
import { ColorSection } from './ColorSection';
import { StyleSystemSection } from './StyleSystemSection';
import { EnvSection } from './EnvSection';
import { eventDispatcher } from '../../events/dispatcher';

type DockPosition = 'top' | 'bottom' | 'left' | 'right' | 'float';

interface ControlPanelProps {
  id?: string;
  onStateChange: (pos: DockPosition, collapsed: boolean) => void;
}

export const ControlPanel = ({ id, onStateChange }: ControlPanelProps) => {
  const [position, setPosition] = React.useState<DockPosition>('right');
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const head = useHeapStore(s => s.getHead());

  React.useEffect(() => {
    onStateChange(position, isCollapsed);
  }, [position, isCollapsed, onStateChange]);

  if (!head) return null;

  const {
    darkMode, masterColor, colorSource, p: currentPresetId, device, families, roles: uRoles
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
    <div id={id} className="vibecheck-editor-scope" style={isolationVars}>
      <button
        id={id ? `${id}-toggle-btn` : undefined}
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
        id={id ? `${id}-content` : undefined}
        className={`fixed z-[1000] flex flex-col overflow-hidden transition-all duration-300 bg-white shadow-2xl border-gray-200 ${panelStyles[position]} ${isCollapsed ? collapsedStyles[position] : ''}`}
        style={{ color: '#000', fontFamily: 'system-ui, sans-serif' }}
      >
        <div id={id ? `${id}-header` : undefined} className="p-3 border-b flex justify-between items-center bg-gray-100/50">
          <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">VibeCheck Editor</span>
          </div>
          <div id={id ? `${id}-dock-controls` : undefined} className="flex gap-1">
            {['top', 'bottom', 'left', 'right', 'float'].map(pos => (
              <button
                  key={pos}
                  id={id ? `${id}-dock-${pos}` : undefined}
                  onClick={() => setPosition(pos as DockPosition)}
                  className={`w-6 h-6 flex items-center justify-center text-[8px] font-bold border rounded transition-colors ${position === pos ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
              >
                  {pos === 'float' ? '✥' : pos[0].toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div id={id ? `${id}-scroll-area` : undefined} className="flex-1 overflow-y-auto p-5 space-y-8 scrollbar-hide">
          <section id={id ? `${id}-sec-role-engine` : undefined} className="space-y-4">
            <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400">Role Engine</h3>
            <ModeSelector />
          </section>

          <section id={id ? `${id}-sec-role-sliders` : undefined} className="space-y-4">
            <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-400">Suwaki Roli</h3>
            <div className="space-y-2">
                {['Primary', 'Secondary', 'Accent'].map((label, i) => (
                    <RoleSlider key={label} index={i} label={label} />
                ))}
            </div>
          </section>

          <ColorSection
            id={id ? `${id}-sec-color-mgmt` : undefined}
            colorSource={colorSource}
            masterColor={masterColor}
            families={families}
            uRoles={uRoles}
          />

          <StyleSystemSection
            id={id ? `${id}-sec-presets` : undefined}
            currentPresetId={currentPresetId}
          />

          <EnvSection
            id={id ? `${id}-sec-env` : undefined}
            device={device}
            darkMode={darkMode}
          />

          <section id={id ? `${id}-sec-snapshots` : undefined} className="pt-4 border-t border-dashed border-gray-200">
              <button
                  id={id ? `${id}-btn-save-snapshot` : undefined}
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
