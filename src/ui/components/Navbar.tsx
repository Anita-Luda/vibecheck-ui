import React from 'react';

export const Navbar = ({ brand = "VibeCheck", children, id }: { brand?: string, children?: React.ReactNode, id?: string }) => (
    <nav id={id} style={{
        height: '64px',
        width: '100%',
        backgroundColor: 'var(--color-surface)',
        borderBottom: 'var(--border-width) solid var(--color-surface-raised)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 var(--spacing-8)',
        gap: 'var(--spacing-8)',
        zIndex: 50,
        position: 'sticky',
        top: 0
    }}>
        <div id={id ? `${id}-brand` : undefined} style={{ fontWeight: '900', fontSize: '1.25rem', letterSpacing: '-0.02em', color: 'var(--color-role-primary)' }}>{brand}</div>
        <div id={id ? `${id}-content` : undefined} style={{ display: 'flex', gap: 'var(--spacing-6)', flex: 1 }}>
            {children}
        </div>
    </nav>
);

export const NavItem = ({ label, active, id }: { label: string, active?: boolean, id?: string }) => (
    <div id={id} style={{
        fontSize: '0.875rem',
        fontWeight: active ? 'bold' : 'normal',
        color: active ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
        cursor: 'pointer',
        padding: 'var(--spacing-2) 0',
        borderBottom: active ? '2px solid var(--color-role-primary)' : '2px solid transparent'
    }}>
        {label}
    </div>
);
