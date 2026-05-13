import React from 'react';

export const Button = ({ id, role, children, className = "", onClick, forceState, disabled, style }: {
    id?: number,
    role?: 'primary' | 'secondary' | 'accent' | 'support' | 'muted' | 'destructive' | 'neutral',
    children: React.ReactNode,
    className?: string,
    onClick?: () => void,
    forceState?: 'hover' | 'active',
    disabled?: boolean,
    style?: React.CSSProperties
}) => {
  const roleName = role || (id !== undefined ? ['primary', 'secondary', 'accent', 'support', 'muted', 'destructive', 'neutral'][id] || 'accent' : 'accent');

  const baseColor = `var(--color-role-${roleName})`;
  const hoverColor = `var(--color-role-${roleName}-hover)`;
  const activeColor = `var(--color-role-${roleName}-active)`;
  const borderColor = `var(--color-role-${roleName}-border)`;
  const textColor = `var(--color-role-${roleName}-text)`;

  const displayColor = forceState === 'hover' ? hoverColor : forceState === 'active' ? activeColor : baseColor;

  return (
    <button
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        className={`vibe-button role-${roleName} ${className}`}
        style={{
            backgroundColor: displayColor,
            borderColor: borderColor,
            color: textColor,
            borderRadius: 'var(--radius-base)',
            borderWidth: 'var(--border-width)',
            borderStyle: 'var(--vl-border-style)',
            fontWeight: 'var(--font-weight-bold)',
            boxShadow: 'var(--box-shadow)',
            textTransform: 'var(--vl-text-transform)' as any,
            letterSpacing: 'var(--vl-letter-spacing)',
            cursor: disabled ? 'not-allowed' : 'var(--vl-cursor)',
            userSelect: 'var(--vl-user-select)' as any,
            padding: 'var(--vl-padding)',
            transition: 'all var(--vl-transition-duration) var(--vl-transition-timing-function)',
            fontFamily: 'var(--vl-font-family)',
            opacity: disabled ? '0.4' : 'var(--vl-opacity)',
            filter: disabled ? 'grayscale(1)' : 'var(--vl-filter)',
            outline: 'none',
            '--hover-bg': hoverColor,
            '--active-bg': activeColor,
            ...style
        } as any}
        onMouseOver={(e) => { if(!disabled) e.currentTarget.style.backgroundColor = hoverColor }}
        onMouseOut={(e) => { if(!disabled) e.currentTarget.style.backgroundColor = displayColor }}
        onMouseDown={(e) => { if(!disabled) e.currentTarget.style.backgroundColor = activeColor }}
        onMouseUp={(e) => { if(!disabled) e.currentTarget.style.backgroundColor = hoverColor }}
    >
        {children}
    </button>
  );
};
