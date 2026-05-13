import React from 'react';

export const Alert = ({ children, type, role, style }: {
    children: React.ReactNode,
    type?: 'info' | 'success' | 'warning' | 'error',
    role?: 'primary' | 'secondary' | 'accent' | 'support' | 'muted' | 'destructive' | 'neutral',
    style?: React.CSSProperties
}) => {
  const roleName = role || (type === 'success' ? 'primary' : type === 'warning' ? 'accent' : type === 'error' ? 'destructive' : 'neutral');
  const bgColor = `var(--color-role-${roleName}-bg)`;
  const borderColor = `var(--color-role-${roleName}-border)`;
  const textColor = `var(--color-text-primary)`;

  return (
    <div
      className={`vibe-alert role-${roleName}`}
      style={{
          padding: 'var(--spacing-4) var(--spacing-6)',
          borderRadius: 'var(--radius-base)',
          borderWidth: 'var(--border-width)',
          borderStyle: 'solid',
          backgroundColor: bgColor,
          borderColor: borderColor,
          color: textColor,
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-3)',
          fontSize: '0.875rem',
          fontWeight: 'var(--font-weight-bold)',
          ...style
      }}
    >
      <span style={{ fontSize: '1.25rem' }}>
          {type === 'info' ? 'ℹ️' : type === 'success' ? '✅' : type === 'warning' ? '⚠️' : type === 'error' ? '🚨' : '🔔'}
      </span>
      {children}
    </div>
  );
};
