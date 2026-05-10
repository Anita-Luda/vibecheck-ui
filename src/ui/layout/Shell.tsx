import React from 'react';
import { Navbar } from '../components/Navbar';
import { ControlPanel } from '../controls/ControlPanel';
import { PalettePanel } from '../controls/PalettePanel';

type DockPosition = 'top' | 'bottom' | 'left' | 'right' | 'float';

export const Shell = ({ children }: { children: React.ReactNode }) => {
  const [controlState, setControlState] = React.useState({
    position: 'right' as DockPosition,
    collapsed: false
  });
  const [paletteCollapsed, setPaletteCollapsed] = React.useState(false);

  const getShellStyles = () => {
    const styles: React.CSSProperties = {
        transition: 'all 300ms ease-in-out'
    };

    // Control Panel space
    if (!controlState.collapsed && controlState.position !== 'float') {
        if (controlState.position === 'right') styles.marginRight = '280px';
        if (controlState.position === 'left') styles.marginLeft = '280px';
        if (controlState.position === 'top') styles.marginTop = '192px';
        if (controlState.position === 'bottom') styles.marginBottom = '192px';
    }

    // Palette Panel space (always opposite of control position)
    if (!paletteCollapsed) {
        const opposite = (pos: DockPosition): DockPosition => {
            if (pos === 'right') return 'left';
            if (pos === 'left') return 'right';
            if (pos === 'top') return 'bottom';
            if (pos === 'bottom') return 'top';
            return 'float';
        };
        const pPos = opposite(controlState.position);
        if (pPos !== 'float') {
            if (pPos === 'right') styles.marginRight = '128px';
            if (pPos === 'left') styles.marginLeft = '128px';
            if (pPos === 'top') styles.marginTop = '128px';
            if (pPos === 'bottom') styles.marginBottom = '128px';
        }
    }

    return styles;
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col font-[var(--font-family)] overflow-x-hidden">
      <Navbar />
      <main className="flex-1 p-8" style={getShellStyles()}>
        {children}
      </main>
      <ControlPanel
        onStateChange={(pos, collapsed) => setControlState({ position: pos, collapsed })}
      />
      <PalettePanel
        controlPosition={controlState.position}
        onCollapsedChange={setPaletteCollapsed}
      />
    </div>
  );
};
