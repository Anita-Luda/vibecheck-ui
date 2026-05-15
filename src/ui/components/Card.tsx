import React from 'react';

type Role = 'primary' | 'secondary' | 'accent' | 'support' | 'muted' | 'destructive' | 'neutral' | 'info' | 'success' | 'warning';

interface CardProps {
  children: React.ReactNode;
  role?: Role;
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
}

export const Card = ({ children, role = 'neutral', id, style, className, onClick }: CardProps) => (
  <div
    id={id}
    onClick={onClick}
    style={{
        padding: 'var(--card-padding)',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--color-surface)',
        border: 'var(--border-width) solid var(--color-surface-raised)',
        boxShadow: 'var(--box-shadow)',
        backdropFilter: 'var(--backdrop-filter)',
        transition: 'all var(--motion-duration) ease',
        cursor: onClick ? 'pointer' : 'default',
        position: 'relative',
        overflow: 'hidden',
        ...style
    }}
    className={`vibe-card ${className || ''}`}
  >
    <div className="vibe-card-noise" style={{ position: 'absolute', inset: 0, opacity: 'var(--vl-noise, 0)', pointerEvents: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
    <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
    </div>
  </div>
);
