import React from 'react';

export const Alert = ({ type = 'info', children }: { type?: 'info' | 'success' | 'warning' | 'error', children: React.ReactNode }) => {
  const colors = {
    info: 'var(--color-role-support)',
    success: 'var(--color-role-primary)',
    warning: 'var(--color-role-accent)',
    error: 'var(--color-role-destructive)'
  };
  const color = colors[type];
  return (
    <div
      className="p-4 rounded-[var(--radius-base)] border-l-4 flex gap-3 text-sm font-bold bg-[var(--color-surface-raised)] mb-4"
      style={{ borderColor: color, color: 'var(--color-text-primary)' }}
    >
      <div style={{ color }}>{type.toUpperCase()}</div>
      <div>{children}</div>
    </div>
  );
};
