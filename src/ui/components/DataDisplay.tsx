import React from 'react';

export const Table = ({ headers, rows, id }: { headers: string[], rows: any[][], id?: string }) => (
  <div id={id} style={{ width: '100%', overflowX: 'auto', borderRadius: 'var(--radius-md)', border: 'var(--border-width) solid var(--color-surface-raised)' }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
      <thead>
        <tr style={{ backgroundColor: 'var(--color-surface-raised)' }}>
          {headers.map((h, i) => (
            <th key={i} style={{ padding: 'var(--spacing-3) var(--spacing-4)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontSize: '0.75rem' }}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ borderTop: 'var(--border-width) solid var(--color-surface-raised)' }}>
            {row.map((cell, j) => (
              <td key={j} style={{ padding: 'var(--spacing-3) var(--spacing-4)' }}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const Stat = ({ label, value, delta, role = 'neutral', id }: { label: string, value: string, delta?: string, role?: any, id?: string }) => (
  <div id={id} style={{ padding: 'var(--spacing-4)', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-surface)', border: 'var(--border-width) solid var(--color-surface-raised)', boxShadow: 'var(--box-shadow)' }}>
    <div style={{ fontSize: '0.75rem', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: 'var(--spacing-1)' }}>{label}</div>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--spacing-2)' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: '900', color: `var(--color-role-${role})` }}>{value}</div>
      {delta && <div style={{ fontSize: '0.75rem', color: delta.startsWith('+') ? 'var(--color-role-success)' : 'var(--color-role-destructive)' }}>{delta}</div>}
    </div>
  </div>
);

export const ProgressBar = ({ progress, role = 'primary', id }: { progress: number, role?: any, id?: string }) => (
    <div id={id} style={{ height: '8px', width: '100%', backgroundColor: 'var(--color-surface-raised)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${progress}%`, backgroundColor: `var(--color-role-${role})`, transition: 'width 0.5s ease' }} />
    </div>
);
