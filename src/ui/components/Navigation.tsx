import React from 'react';

export const Sidebar = ({ children, id }: { children: React.ReactNode, id?: string }) => (
    <aside id={id} style={{
        width: '260px',
        height: '100%',
        backgroundColor: 'var(--color-surface)',
        borderRight: 'var(--border-width) solid var(--color-surface-raised)',
        padding: 'var(--spacing-6)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-8)'
    }}>
        {children}
    </aside>
);

export const SidebarItem = ({ label, icon, active, id }: { label: string, icon?: string, active?: boolean, id?: string }) => (
    <div id={id} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-3)',
        padding: 'var(--spacing-3) var(--spacing-4)',
        borderRadius: 'var(--radius-sm)',
        backgroundColor: active ? 'var(--color-role-primary-bg)' : 'transparent',
        color: active ? 'var(--color-role-primary)' : 'var(--color-text-muted)',
        fontWeight: active ? 'bold' : 'normal',
        cursor: 'pointer'
    }}>
        {icon && <span id={id ? `${id}-icon` : undefined}>{icon}</span>}
        <span id={id ? `${id}-label` : undefined} style={{ fontSize: '0.875rem' }}>{label}</span>
    </div>
);

export const Breadcrumbs = ({ items, id }: { items: string[], id?: string }) => (
    <div id={id} style={{ display: 'flex', gap: 'var(--spacing-2)', alignItems: 'center', fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        {items.map((item, i) => (
            <React.Fragment key={i}>
                <span id={id ? `${id}-item-${i}` : undefined}>{item}</span>
                {i < items.length - 1 && <span id={id ? `${id}-sep-${i}` : undefined}>/</span>}
            </React.Fragment>
        ))}
    </div>
);

export const Pagination = ({ current, total, id }: { current: number, total: number, id?: string }) => (
    <div id={id} style={{ display: 'flex', gap: 'var(--spacing-2)', alignItems: 'center' }}>
        <button id={id ? `${id}-prev` : undefined} style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-surface-raised)', background: 'var(--color-surface)' }}>«</button>
        {[1, 2, 3, '...', total].map((n, i) => (
            <div key={i} id={id ? `${id}-page-${i}` : undefined} style={{
                width: '32px', height: '32px', borderRadius: 'var(--radius-sm)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.75rem', fontWeight: 'bold',
                backgroundColor: n === current ? 'var(--color-role-primary)' : 'var(--color-surface)',
                color: n === current ? 'var(--color-role-primary-text)' : 'var(--color-text-primary)',
                border: n === current ? 'none' : '1px solid var(--color-surface-raised)',
                cursor: 'pointer'
            }}>
                {n}
            </div>
        ))}
        <button id={id ? `${id}-next` : undefined} style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-surface-raised)', background: 'var(--color-surface)' }}>»</button>
    </div>
);
