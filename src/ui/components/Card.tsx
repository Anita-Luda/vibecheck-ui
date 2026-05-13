import React from 'react';

export const Card = ({ children, id, role, className = "", style, onClick }: {
    children: React.ReactNode,
    id?: number,
    role?: 'primary' | 'secondary' | 'accent' | 'support' | 'muted' | 'destructive' | 'neutral',
    className?: string,
    style?: React.CSSProperties,
    onClick?: () => void
}) => {
  const roleName = role || (id !== undefined ? ['primary', 'secondary', 'accent', 'support', 'muted', 'destructive', 'neutral'][id] || 'neutral' : 'neutral');

  const bgColor = `var(--color-surface)`;
  const borderColor = role ? `var(--color-role-${roleName}-border)` : `var(--color-surface-raised)`;

  return (
    <div
      onClick={onClick}
      className={`vibe-card role-${roleName} ${className}`}
      style={{
          backgroundColor: bgColor,
          borderColor: borderColor,
          borderRadius: 'var(--radius-base)',
          borderWidth: 'var(--border-width)',
          borderStyle: 'var(--vl-border-style)',
          padding: 'var(--card-padding)',
          boxShadow: 'var(--box-shadow)',
          transition: 'all var(--vl-transition-duration) var(--vl-transition-timing-function)',
          position: 'relative',
          overflow: 'hidden',
          cursor: onClick ? 'pointer' : 'default',
          ...style
      }}
    >
      {/* Noise Texture Layer */}
      <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          opacity: 0.03,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
      </div>
    </div>
  );
};
