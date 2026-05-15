import React from 'react';
import { Card } from '../components/Card';
import { Grid } from '../layout/Grid';
import { Button } from '../components/Button';
import { Badge, Avatar } from '../components/Primitives';
import { Table, Stat } from '../components/DataDisplay';

export const DashboardMock = () => (
  <div id="mock-dashboard" style={{ padding: 'var(--container-padding)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
    <header id="db-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h1 id="db-title" style={{ fontSize: '2rem', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-text-primary)' }}>
          Monitor Entropii Kwantowej
        </h1>
        <p id="db-subtitle" style={{ color: 'var(--color-text-muted)' }}>Sektor 7G / Zbiorowy Umysł / Klaster Ziemniaka</p>
      </div>
      <div id="db-actions" style={{ display: 'flex', gap: 'var(--item-gap)' }}>
        <Button id="btn-export" role="secondary">Eksportuj JSON</Button>
        <Button id="btn-reboot" role="primary">Wymuś Restart</Button>
      </div>
    </header>

    <Grid id="db-stats-grid" cols={4}>
      <Stat id="stat-entropy" label="Całkowita Entropia" value="42.0k" delta="+12%" role="primary" />
      <Stat id="stat-density" label="Zagęszczenie Hovercatów" value="1,248" delta="-2%" role="support" />
      <Stat id="stat-sync" label="Synchronizacja Ziemniaka" value="99.9%" delta="0%" role="accent" />
      <Stat id="stat-jam" label="Poziom Dżemu" value="Krytyczny" delta="!!?" role="destructive" />
    </Grid>

    <div id="db-main-content" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--section-gap)' }}>
      <section id="db-incident-matrix" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--item-gap)' }}>
        <h2 id="db-table-title" style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-bold)' }}>Macierz Incydentów</h2>
        <Table
          id="table-incidents"
          headers={['Węzeł', 'Obciążenie', 'Status', 'Czas pracy']}
          rows={[
            ['Sektor-7G', '88%', <Badge key="b1" id="badge-h1" role="primary">Zdrowy</Badge>, '14dni 2h'],
            ['Hub-Alfa', '12%', <Badge key="b2" id="badge-i1" role="neutral">Bezczynny</Badge>, '242dni 11h'],
            ['Węzeł-666', 'ERR', <Badge key="b3" id="badge-c1" role="destructive">Krytyczny</Badge>, '0ms'],
            ['Ziemniak-Główny', '45%', <Badge key="b4" id="badge-a1" role="support">Aktywny</Badge>, '3dni 4h'],
          ]}
        />
      </section>

      <aside id="db-activity-feed" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--item-gap)' }}>
        <Card id="card-recent-activity">
          <h3 id="feed-title" style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>Ostatnia Aktywność</h3>
          <div id="feed-items" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            {[1,2,3,4].map(i => (
              <div key={i} id={`feed-item-${i}`} style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center' }}>
                <Avatar id={`avatar-${i}`} label={String.fromCharCode(64 + i)} size="sm" />
                <div>
                  <div id={`feed-text-${i}`} style={{ fontSize: '0.875rem' }}>Użytkownik_{i} wyzwolił zdarzenie_{i*10}</div>
                  <div id={`feed-time-${i}`} style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{i} minut temu</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </aside>
    </div>
  </div>
);
