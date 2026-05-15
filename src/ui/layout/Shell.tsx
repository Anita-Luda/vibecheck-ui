import React from 'react';
import { Navbar } from '../components/Navbar';
import { ControlPanel } from '../controls/ControlPanel';
import { PalettePanel } from '../controls/PalettePanel';
import { useHeapStore } from '../../store/heapStore';

type DockPosition = 'top' | 'bottom' | 'left' | 'right' | 'float';

export const Shell = ({ children }: { children: React.ReactNode }) => {
  const [controlState, setControlState] = React.useState({
    position: 'right' as DockPosition,
    collapsed: false
  });

  const handleControlStateChange = React.useCallback((pos: DockPosition, collapsed: boolean) => {
      setControlState(prev => {
          if (prev.position === pos && prev.collapsed === collapsed) return prev;
          return { position: pos, collapsed };
      });
  }, []);

  const [paletteCollapsed, setPaletteCollapsed] = React.useState(false);
  const [compareMode, setCompareMode] = React.useState(false);

  const head = useHeapStore(s => s.getHead());
  const device = head?.value.device || 'desktop';

  const getShellStyles = () => {
    const styles: React.CSSProperties = {
        transition: 'all 300ms ease-in-out'
    };

    const isLargeScreen = typeof window !== 'undefined' ? window.innerWidth > 1024 : true;

    // Control Panel space
    if (!controlState.collapsed && controlState.position !== 'float' && isLargeScreen) {
        const width = '320px';
        if (controlState.position === 'right') styles.marginRight = width;
        if (controlState.position === 'left') styles.marginLeft = width;
        if (controlState.position === 'top') styles.marginTop = '192px';
        if (controlState.position === 'bottom') styles.marginBottom = '192px';
    }

    // Palette Panel space
    if (!paletteCollapsed && isLargeScreen) {
        const width = '128px';
        const opposite = (pos: DockPosition): DockPosition => {
            if (pos === 'right') return 'left';
            if (pos === 'left') return 'right';
            if (pos === 'top') return 'bottom';
            if (pos === 'bottom') return 'top';
            return 'float';
        };
        const pPos = opposite(controlState.position);
        if (pPos !== 'float') {
            if (pPos === 'right') styles.marginRight = width;
            if (pPos === 'left') styles.marginLeft = width;
            if (pPos === 'top') styles.marginTop = width;
            if (pPos === 'bottom') styles.marginBottom = width;
        }
    }

    return styles;
  };

  const getDeviceStyles = () => {
      if (device === 'mobile') return { maxWidth: '375px', margin: '0 auto', border: '8px solid #333', borderRadius: '32px', overflow: 'hidden' };
      if (device === 'tablet') return { maxWidth: '768px', margin: '0 auto', border: '8px solid #333', borderRadius: '24px' };
      if (device === 'ultrawide') return { maxWidth: '100%', padding: '0 40px' };
      return { maxWidth: '100%' };
  };

  return (
    <div id="vibecheck-app-root" className="min-h-screen bg-[var(--color-bg)] flex flex-col font-[var(--font-family)] overflow-x-hidden">
      <Navbar id="main-navbar" />

      <div id="compare-toggle-container" className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex gap-2">
          <button
            id="btn-compare-mode"
            onClick={() => setCompareMode(!compareMode)}
            className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border shadow-sm transition-all ${compareMode ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-gray-400 border-gray-200'}`}
          >
              Compare Mode {compareMode ? 'ON' : 'OFF'}
          </button>
      </div>

      <main id="shell-main-area" className="flex-1 p-8" style={getShellStyles()}>
        <div
          id="device-viewport"
          className={`transition-all duration-500 ${compareMode ? 'grid grid-cols-2 gap-4' : ''}`}
          style={getDeviceStyles() as any}
        >
          <div id="variant-a-container" className="relative border border-dashed border-gray-200/50 rounded-xl bg-[var(--color-bg)]">
              {children}
              {compareMode && <div id="label-variant-a" className="absolute top-2 left-2 bg-blue-500 text-white text-[8px] px-1 font-bold rounded">VARIANT A</div>}
          </div>
          {compareMode && (
              <div id="variant-b-container" className="relative border border-dashed border-gray-200/50 rounded-xl bg-[var(--color-bg)] opacity-80 grayscale-[30%]">
                  {children}
                  <div id="label-variant-b" className="absolute top-2 left-2 bg-purple-500 text-white text-[8px] px-1 font-bold rounded">VARIANT B (HISTORY)</div>
              </div>
          )}
        </div>
      </main>

      <ControlPanel
        id="main-control-panel"
        onStateChange={handleControlStateChange}
      />
      <PalettePanel
        id="main-palette-panel"
        controlPosition={controlState.position}
        onCollapsedChange={setPaletteCollapsed}
      />
    </div>
  );
};
