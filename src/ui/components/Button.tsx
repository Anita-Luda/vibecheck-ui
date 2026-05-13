import React from 'react';

export const Button = ({ id, children, className = "", onClick, forceState, disabled }: { id?: number, children: React.ReactNode, className?: string, onClick?: () => void, forceState?: 'hover' | 'active', disabled?: boolean }) => {
  const roleId = id !== undefined ? id : 'accent';
  const baseColor = `var(--color-role-${roleId})`;
  const hoverColor = `var(--color-role-${roleId}-hover)`;
  const activeColor = `var(--color-role-${roleId}-active)`;
  const borderColor = `var(--color-role-${roleId}-border)`;

  const displayColor = forceState === 'hover' ? hoverColor : forceState === 'active' ? activeColor : baseColor;

  return (
    <button
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        className={`rounded-[var(--radius-base)] border-[var(--border-width)] font-[var(--font-weight-bold)] shadow-[var(--shadow-base)] ${className} ${disabled ? 'opacity-40 grayscale cursor-not-allowed' : ''}`}
        style={{
            backgroundColor: displayColor,
            borderColor: borderColor,
            color: 'white',
            textTransform: 'var(--vl-text-transform)' as any,
            letterSpacing: 'var(--vl-letter-spacing)',
            cursor: disabled ? 'not-allowed' : 'var(--vl-cursor)',
            userSelect: 'var(--vl-user-select)' as any,
            padding: 'var(--vl-padding)',
            transition: 'all var(--vl-transition-duration) var(--vl-transition-timing-function)',
            fontFamily: 'var(--vl-font-family)',
            outline: 'none',
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
