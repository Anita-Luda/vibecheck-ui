import React from 'react';
import { Card } from '../components/Card';
import { Grid } from '../layout/Grid';
import { Button } from '../components/Button';
import { Badge, Avatar } from '../components/Primitives';
import { Table, Stat } from '../components/DataDisplay';

export const DashboardMock = () => (
  <div style={{ padding: 'var(--section-gap)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h1 style={{ fontSize: '2rem', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-text-primary)' }}>
          Monitor Entropii Kwantowej
        </h1>
        <p style={{ color: 'var(--color-text-muted)' }}>Sektor 7G / Zbiorowy Umysł / Klaster Ziemniaka</p>
      </div>
      <div style={{ display: 'flex', gap: 'var(--item-gap)' }}>
        <Button role="secondary">Eksportuj JSON</Button>
        <Button role="primary">Wymuś Restart</Button>
      </div>
    </header>

    <Grid cols={4}>
      <Stat label="Całkowita Entropia" value="42.0k" delta="+12%" role="primary" />
      <Stat label="Zagęszczenie Hovercatów" value="1,248" delta="-2%" role="support" />
      <Stat label="Synchronizacja Ziemniaka" value="99.9%" delta="0%" role="accent" />
      <Stat label="Poziom Dżemu" value="Krytyczny" delta="!!?" role="destructive" />
    </Grid>

    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--section-gap)' }}>
      <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--item-gap)' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-bold)' }}>Macierz Incydentów</h2>
        <Table
          headers={['Węzeł', 'Obciążenie', 'Status', 'Czas pracy']}
          rows={[
            ['Sektor-7G', '88%', <Badge role="primary">Zdrowy</Badge>, '14dni 2h'],
            ['Hub-Alfa', '12%', <Badge role="neutral">Bezczynny</Badge>, '242dni 11h'],
            ['Węzeł-666', 'ERR', <Badge role="destructive">Krytyczny</Badge>, '0ms'],
            ['Ziemniak-Główny', '45%', <Badge role="support">Aktywny</Badge>, '3dni 4h'],
          ]}
        />
      </section>

      <aside style={{ display: 'flex', flexDirection: 'column', gap: 'var(--item-gap)' }}>
        <Card>
          <h3 style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>Ostatnia Aktywność</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            {[1,2,3,4].map(i => (
              <div key={i} style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center' }}>
                <Avatar label={String.fromCharCode(64 + i)} size="sm" />
                <div>
                  <div style={{ fontSize: '0.875rem' }}>Użytkownik_{i} wyzwolił zdarzenie_{i*10}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{i} minut temu</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </aside>
    </div>
  </div>
);
