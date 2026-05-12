import React from 'react';

export const Button = ({ id, children, className = "", onClick, forceState }: { id?: number, children: React.ReactNode, className?: string, onClick?: () => void, forceState?: 'hover' | 'active' }) => {
  const roleId = id !== undefined ? id : 'accent';
  const baseColor = `var(--color-role-${roleId})`;
  const hoverColor = `var(--color-role-${roleId}-hover)`;
  const activeColor = `var(--color-role-${roleId}-active)`;
  const borderColor = `var(--color-role-${roleId}-border)`;

  const displayColor = forceState === 'hover' ? hoverColor : forceState === 'active' ? activeColor : baseColor;

  return (
    <button
        onClick={onClick}
        className={`px-[var(--spacing-4)] py-[var(--spacing-2)] rounded-[var(--radius-base)] transition-all text-sm tracking-tight border-[var(--border-width)] font-[var(--font-weight-bold)] shadow-[var(--shadow-base)] ${className}`}
        style={{
            backgroundColor: displayColor,
            borderColor: borderColor,
            color: 'white',
            textTransform: 'var(--vl-text-transform)',
            letterSpacing: 'var(--vl-letter-spacing)',
            cursor: 'var(--vl-cursor)',
            userSelect: 'var(--vl-user-select)',
            '--hover-bg': hoverColor,
            '--active-bg': activeColor,
        } as any}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = baseColor}
        onMouseDown={(e) => e.currentTarget.style.backgroundColor = activeColor}
        onMouseUp={(e) => e.currentTarget.style.backgroundColor = hoverColor}
    >
        {children}
    </button>
  );
};
