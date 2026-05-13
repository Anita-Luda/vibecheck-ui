import React from 'react';

export const Table = ({ headers, rows }: { headers: string[], rows: any[][] }) => {
  return (
    <div className="w-full overflow-x-auto border border-[var(--color-role-neutral-border)] rounded-[var(--radius-base)] bg-[var(--color-surface)] shadow-[var(--shadow-base)]">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[var(--color-surface-raised)] border-b border-[var(--color-role-neutral-border)]">
            {headers.map(h => (
              <th key={h} className="p-[var(--spacing-4)] text-[10px] font-black uppercase text-[var(--color-text-muted)] tracking-widest">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--color-role-neutral-border)]">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-[var(--color-surface-raised)] transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="p-[var(--spacing-4)] text-sm text-[var(--color-text-primary)] leading-[var(--line-height-tight)] font-[var(--font-weight-normal)]">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const List = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="divide-y divide-[var(--color-role-neutral-border)] border border-[var(--color-role-neutral-border)] rounded-[var(--radius-base)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)]">
    {items.map((item, i) => (
      <li key={i} className="p-[var(--spacing-4)] hover:bg-[var(--color-surface-raised)] transition-colors text-sm text-[var(--color-text-primary)] leading-[var(--line-height-base)]">
        {item}
      </li>
    ))}
  </ul>
);

export const Stat = ({ label, value, trend }: { label: string, value: string, trend?: string }) => (
    <div className="p-4 bg-[var(--color-surface)] border border-[var(--color-tone-200)] rounded-[var(--radius-lg)] shadow-sm">
        <div className="text-[10px] font-black uppercase text-[var(--color-text-muted)] tracking-widest mb-1">{label}</div>
        <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-[var(--color-text-primary)]">{value}</span>
            {trend && <span className="text-[10px] font-bold text-green-500">{trend}</span>}
        </div>
    </div>
);

export const Chart = ({ type = 'bar' }: { type?: 'bar' | 'line' }) => (
    <div className="w-full h-32 flex items-end gap-1">
        {[40, 70, 45, 90, 65, 80, 30, 50, 85, 60].map((h, i) => (
            <div
                key={i}
                className="flex-1 bg-[var(--color-role-accent)] rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                style={{ height: `${h}%` }}
            />
        ))}
    </div>
);
