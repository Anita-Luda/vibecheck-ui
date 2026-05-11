import React from 'react';

export const Table = ({ headers, rows }: { headers: string[], rows: any[][] }) => {
  return (
    <div className="w-full overflow-x-auto border border-[var(--color-role-neutral-border)] rounded-[var(--radius-base)] bg-[var(--color-surface)]">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[var(--color-surface-raised)] border-b border-[var(--color-role-neutral-border)]">
            {headers.map(h => (
              <th key={h} className="p-4 text-[10px] font-black uppercase text-[var(--color-text-muted)]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--color-role-neutral-border)]">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-[var(--color-surface-raised)] transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="p-4 text-sm text-[var(--color-text-primary)]">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const List = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="divide-y divide-[var(--color-role-neutral-border)] border border-[var(--color-role-neutral-border)] rounded-[var(--radius-base)] bg-[var(--color-surface)]">
    {items.map((item, i) => (
      <li key={i} className="p-4 hover:bg-[var(--color-surface-raised)] transition-colors text-sm text-[var(--color-text-primary)]">
        {item}
      </li>
    ))}
  </ul>
);
