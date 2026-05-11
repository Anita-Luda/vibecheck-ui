import React from 'react';

export const MultiSelect = ({ label, options }: { label: string, options: string[] }) => (
    <div className="space-y-1.5 mb-4">
        <label className="text-[10px] font-black uppercase text-[var(--color-text-muted)] tracking-widest">{label}</label>
        <div className="flex flex-wrap gap-2 p-2 border-[var(--border-width)] border-[var(--color-role-neutral-border)] rounded-[var(--radius-base)] bg-[var(--color-surface)]">
            {options.slice(0, 2).map(o => (
                <span key={o} className="px-2 py-1 bg-[var(--color-role-accent-bg)] text-[var(--color-role-accent)] text-[10px] font-bold rounded flex items-center gap-1">
                    {o} <span className="cursor-pointer">✕</span>
                </span>
            ))}
            <input className="flex-1 bg-transparent outline-none text-sm" placeholder="Wybierz..." />
        </div>
    </div>
);

export const Checkbox = ({ label, checked = false }: { label: string, checked?: boolean }) => (
    <label className="flex items-center gap-2 cursor-pointer group mb-2">
        <div className={`w-5 h-5 rounded border-2 transition-all flex items-center justify-center ${checked ? 'bg-[var(--color-role-accent)] border-[var(--color-role-accent)]' : 'border-[var(--color-role-neutral-border)]'}`}>
            {checked && <span className="text-white text-xs">✓</span>}
        </div>
        <span className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-role-accent)]">{label}</span>
    </label>
);

export const Radio = ({ label, name, checked = false }: { label: string, name: string, checked?: boolean }) => (
    <label className="flex items-center gap-2 cursor-pointer group mb-2">
        <div className={`w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center ${checked ? 'border-[var(--color-role-accent)]' : 'border-[var(--color-role-neutral-border)]'}`}>
            {checked && <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-role-accent)]" />}
        </div>
        <span className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-role-accent)]">{label}</span>
    </label>
);

export const Stepper = ({ steps, current }: { steps: string[], current: number }) => (
    <div className="flex justify-between mb-8 relative">
        <div className="absolute top-4 left-0 w-full h-0.5 bg-[var(--color-role-neutral-border)] -z-10" />
        {steps.map((s, i) => (
            <div key={s} className="flex flex-col items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs border-2 transition-all ${i <= current ? 'bg-[var(--color-role-accent)] border-[var(--color-role-accent)] text-white' : 'bg-[var(--color-surface)] border-[var(--color-role-neutral-border)] text-[var(--color-text-muted)]'}`}>
                    {i + 1}
                </div>
                <span className={`text-[9px] font-black uppercase ${i <= current ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-muted)]'}`}>{s}</span>
            </div>
        ))}
    </div>
);
