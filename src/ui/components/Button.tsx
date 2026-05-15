import React from 'react';

type ButtonRole = 'primary' | 'secondary' | 'accent' | 'support' | 'muted' | 'destructive' | 'neutral' | 'info' | 'success' | 'warning';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  role?: ButtonRole;
  forceState?: 'hover' | 'active' | 'focus';
}

export const Button = ({
    children,
    role = 'primary',
    forceState,
    id,
    style,
    className,
    ...props
}: ButtonProps) => {
    const baseStyle: React.CSSProperties = {
        padding: 'calc(var(--spacing-2) * 1.2) calc(var(--spacing-4) * 1.2)',
        borderRadius: 'var(--radius-base)',
        border: 'var(--border-width) solid var(--color-role-primary-border)',
        fontSize: '0.875rem',
        fontWeight: 'var(--font-weight-bold)',
        cursor: 'pointer',
        transition: 'all var(--motion-duration) ease',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--spacing-2)',
        backgroundColor: `var(--color-role-${role}-bg)`,
        color: `var(--color-role-${role}-text)`,
        borderColor: `var(--color-role-${role}-border)`,
        ...style
    };

    return (
        <button
            id={id}
            style={baseStyle}
            className={`vibe-button vibe-button-${role} ${forceState || ''} ${className || ''}`}
            {...props}
        >
            <span id={id ? `${id}-inner` : undefined} className="vibe-button-content" style={{ display: 'flex', alignItems: 'center', gap: 'inherit' }}>
                {children}
            </span>
        </button>
    );
};
