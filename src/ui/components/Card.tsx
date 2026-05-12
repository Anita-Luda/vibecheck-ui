import React from 'react';

export const Card = ({ id, children, className = "", style = {} }: { id?: number, children: React.ReactNode, className?: string, style?: React.CSSProperties }) => {
  const roleId = id !== undefined ? id : 'neutral';
  const bgColor = id !== undefined ? `var(--color-role-${id}-bg)` : 'var(--color-surface)';
  const borderColor = id !== undefined ? `var(--color-role-${id}-border)` : 'rgba(0,0,0,0.05)';
  const shadowIntensity = 'var(--shadow-intensity)';

  return (
    <div
        className={`p-6 rounded-[var(--radius-base)] border-[var(--border-width)] transition-all duration-300 relative overflow-hidden ${className}`}
        style={{
            backgroundColor: bgColor,
            borderColor: borderColor,
            boxShadow: `0 calc(4px * ${shadowIntensity}) calc(6px * ${shadowIntensity}) rgba(0,0,0,0.05)`,
            backdropFilter: 'var(--glass-blur, none)',
            ...style
        }}
    >
        {/* Noise Texture Layer */}
        <div
            className="absolute inset-0 pointer-events-none opacity-[var(--vl-noise)]"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                mixBlendMode: 'overlay'
            }}
        />
        {children}
    </div>
  );
};
