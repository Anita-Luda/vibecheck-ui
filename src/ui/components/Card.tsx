import React from 'react';

export const Card = ({ id, children, className = "", style = {} }: { id?: number, children: React.ReactNode, className?: string, style?: React.CSSProperties }) => {
  const roleId = id !== undefined ? id : 'neutral';
  const bgColor = id !== undefined ? `var(--color-role-${id}-bg)` : 'var(--color-surface)';
  const borderColor = id !== undefined ? `var(--color-role-${id}-border)` : 'rgba(0,0,0,0.05)';
  const shadowIntensity = 'var(--shadow-intensity)';

  return (
    <div
        className={`p-6 rounded-[var(--radius-base)] border-[var(--border-width)] transition-all duration-300 ${className}`}
        style={{
            backgroundColor: bgColor,
            borderColor: borderColor,
            boxShadow: `0 calc(4px * ${shadowIntensity}) calc(6px * ${shadowIntensity}) rgba(0,0,0,0.05)`,
            ...style
        }}
    >
        {children}
    </div>
  );
};
