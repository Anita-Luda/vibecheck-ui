import React from 'react';

export const Alert = ({ children, role = 'info', id }: { children: React.ReactNode, role?: any, id?: string }) => (
  <div
    id={id}
    style={{
        padding: 'var(--spacing-3) var(--spacing-4)',
        borderRadius: 'var(--radius-md)',
        backgroundColor: `var(--color-role-${role}-bg)`,
        color: `var(--color-role-${role}-text)`,
        border: 'var(--border-width) solid',
        borderColor: `var(--color-role-${role}-border)`,
        fontSize: '0.875rem',
        fontWeight: 'var(--font-weight-bold)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-3)',
        boxShadow: 'var(--box-shadow)'
    }}
  >
    <div style={{ opacity: 0.8 }}>{role === 'destructive' ? '⚠️' : 'ℹ️'}</div>
    <div>{children}</div>
  </div>
);

export const Toast = ({ children, role = 'info', id }: { children: React.ReactNode, role?: any, id?: string }) => (
    <div
      id={id}
      style={{
          padding: 'var(--spacing-2) var(--spacing-4)',
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--color-text-primary)',
          color: 'var(--color-bg)',
          fontSize: '0.75rem',
          fontWeight: 'bold',
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.2)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--spacing-2)'
      }}
    >
      {children}
    </div>
);
