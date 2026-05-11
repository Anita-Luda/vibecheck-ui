import React from 'react';

export const Breadcrumbs = ({ items }: { items: string[] }) => (
    <nav className="flex text-[10px] font-black uppercase tracking-widest text-[var(--color-text-muted)] gap-2 mb-4">
        {items.map((item, i) => (
            <React.Fragment key={item}>
                <span className={i === items.length - 1 ? 'text-[var(--color-role-accent)]' : 'hover:text-[var(--color-text-primary)] cursor-pointer'}>
                    {item}
                </span>
                {i < items.length - 1 && <span>/</span>}
            </React.Fragment>
        ))}
    </nav>
);

export const Pagination = () => (
    <div className="flex gap-1 items-center justify-center mt-8">
        <button className="w-8 h-8 rounded border border-[var(--color-role-neutral-border)] flex items-center justify-center hover:bg-[var(--color-surface-raised)]">«</button>
        {[1, 2, 3, '...', 12].map((p, i) => (
            <button key={i} className={`w-8 h-8 rounded border flex items-center justify-center text-[10px] font-bold ${p === 1 ? 'bg-[var(--color-role-accent)] text-white border-[var(--color-role-accent)]' : 'border-[var(--color-role-neutral-border)] hover:bg-[var(--color-surface-raised)]'}`}>
                {p}
            </button>
        ))}
        <button className="w-8 h-8 rounded border border-[var(--color-role-neutral-border)] flex items-center justify-center hover:bg-[var(--color-surface-raised)]">»</button>
    </div>
);

export const Rating = ({ value }: { value: number }) => (
    <div className="flex gap-1 text-orange-400">
        {[1, 2, 3, 4, 5].map(i => (
            <span key={i}>{i <= value ? '★' : '☆'}</span>
        ))}
    </div>
);

export const Skeleton = ({ className }: { className: string }) => (
    <div className={`bg-[var(--color-surface-raised)] animate-pulse rounded ${className}`} />
);

export const Tooltip = ({ text, children }: { text: string, children: React.ReactNode }) => (
    <div className="relative group inline-block">
        {children}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
            {text}
        </div>
    </div>
);
