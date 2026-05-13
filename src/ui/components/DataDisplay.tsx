import React from 'react';

export const Table = ({ headers, rows, style }: { headers: string[], rows: React.ReactNode[][], style?: React.CSSProperties }) => (
  <div className="vibe-table-container" style={{
      width: '100%',
      overflowX: 'auto',
      borderRadius: 'var(--radius-base)',
      borderWidth: 'var(--border-width)',
      borderStyle: 'solid',
      borderColor: 'var(--color-surface-raised)',
      ...style
  }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
      <thead>
        <tr style={{ backgroundColor: 'var(--color-surface-raised)', borderBottom: 'var(--border-width) solid var(--color-surface-raised)' }}>
          {headers.map((h, i) => (
            <th key={i} style={{ padding: 'var(--spacing-4)', fontWeight: '900', textTransform: 'uppercase', fontSize: '10px', color: 'var(--color-text-muted)', letterSpacing: '0.1em' }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ borderBottom: i === rows.length - 1 ? 'none' : 'var(--border-width) solid var(--color-surface-raised)', backgroundColor: 'var(--color-surface)' }}>
            {row.map((cell, j) => (
              <td key={j} style={{ padding: 'var(--spacing-4)', color: 'var(--color-text-primary)' }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const Stat = ({ label, value, delta, role, style }: { label: string, value: string, delta?: string, role?: string, style?: React.CSSProperties }) => {
    const roleName = role || 'primary';
    const color = `var(--color-role-${roleName})`;

    return (
        <div className={`vibe-stat role-${roleName}`} style={{
            padding: 'var(--spacing-6)',
            backgroundColor: 'var(--color-surface)',
            borderRadius: 'var(--radius-base)',
            borderWidth: 'var(--border-width)',
            borderStyle: 'solid',
            borderColor: 'var(--color-surface-raised)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-1)',
            ...style
        }}>
            <div style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.1em' }}>{label}</div>
            <div style={{ fontSize: '1.875rem', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-text-primary)' }}>{value}</div>
            {delta && (
                <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color }}>
                    {delta} <span style={{ color: 'var(--color-text-muted)', fontWeight: 'normal' }}>vs last epoch</span>
                </div>
            )}
        </div>
    );
};
