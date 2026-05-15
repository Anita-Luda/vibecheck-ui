import React from 'react';

export const Badge = ({ children, role = 'neutral', id }: { children: React.ReactNode, role?: any, id?: string }) => (
    <span
        id={id}
        style={{
            padding: '2px 8px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.625rem',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            backgroundColor: `var(--color-role-${role}-bg)`,
            color: `var(--color-role-${role}-text)`,
            border: '1px solid var(--color-role-primary-border)',
            borderColor: `var(--color-role-${role}-border)`
        }}
    >
        {children}
    </span>
);

export const Avatar = ({ label, size = 'md', role = 'neutral', id }: { label: string, size?: 'sm' | 'md' | 'lg', role?: any, id?: string }) => {
    const sizes = { sm: '24px', md: '32px', lg: '48px' };
    return (
        <div
            id={id}
            style={{
                width: sizes[size],
                height: sizes[size],
                borderRadius: 'var(--radius-full)',
                backgroundColor: `var(--color-role-${role}-bg)`,
                color: `var(--color-role-${role}-text)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: size === 'sm' ? '0.625rem' : '0.875rem',
                fontWeight: 'bold',
                border: '1px solid var(--color-role-primary-border)',
                borderColor: `var(--color-role-${role}-border)`
            }}
        >
            {label}
        </div>
    );
};

export const Divider = ({ id }: { id?: string }) => (
    <hr id={id} style={{ border: 'none', borderTop: 'var(--border-width) solid var(--color-surface-raised)', margin: 'var(--spacing-4) 0' }} />
);

export const Kbd = ({ children, id }: { children: React.ReactNode, id?: string }) => (
    <kbd
        id={id}
        style={{
            padding: '2px 4px',
            borderRadius: 'var(--radius-xs)',
            backgroundColor: 'var(--color-surface-raised)',
            border: '1px solid var(--color-surface-raised)',
            fontSize: '0.75rem',
            fontFamily: 'monospace',
            boxShadow: '0 1px 0 rgba(0,0,0,0.2)'
        }}
    >
        {children}
    </kbd>
);
