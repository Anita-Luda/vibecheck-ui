import React from 'react';
import { Navbar } from '../components/Navbar';
import { ControlPanel } from '../controls/ControlPanel';

export const Shell = ({ children }: { children: React.ReactNode }) => {
  const [panelState, setPanelState] = React.useState({
    position: 'right' as 'left' | 'right' | 'top' | 'bottom' | 'float',
    collapsed: false
  });

  const getShellStyles = () => {
    if (panelState.collapsed || panelState.position === 'float') return {};

    switch (panelState.position) {
      case 'right': return { marginRight: '280px' };
      case 'left': return { marginLeft: '280px' };
      case 'top': return { marginTop: '192px' };
      case 'bottom': return { marginBottom: '192px' };
      default: return {};
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col font-[var(--font-family)] transition-all duration-300 overflow-x-hidden">
      <Navbar />
      <main className="flex-1 p-8" style={getShellStyles()}>
        {children}
      </main>
      <ControlPanel
        onStateChange={(pos, collapsed) => setPanelState({ position: pos, collapsed })}
      />
    </div>
  );
};
