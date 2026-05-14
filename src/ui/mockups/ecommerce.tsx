import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Grid } from '../layout/Grid';
import { Badge } from '../components/Primitives';

export const EcommerceMock = () => (
  <div style={{ padding: 'var(--section-gap)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'var(--font-weight-bold)' }}>Galaktyczne Emporium Tostów</h1>
      <div style={{ display: 'flex', gap: 'var(--item-gap)' }}>
        <Button role="neutral">Koszyk (3)</Button>
      </div>
    </header>

    <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: 'var(--section-gap)' }}>
      <aside style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
        <div>
          <h3 style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>Kategorie</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
            {['Kwantowo Przypalone', 'Neutronowy Zakwas', 'Żyto Osobliwości', 'Bajgiel Próżni'].map(c => (
              <li key={c} style={{ cursor: 'pointer', color: 'var(--color-text-secondary)' }}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>Zakres Cenowy</h3>
          <input type="range" style={{ width: '100%' }} />
        </div>
      </aside>

      <Grid cols={3}>
        {[
          { name: 'Kwantowe Masło', price: '42.00 ET', role: 'primary' },
          { name: 'Dżem Horyzontu Zdarzeń', price: '12.50 ET', role: 'accent' },
          { name: 'Okruchy Osobliwości', price: '0.99 ET', role: 'support' },
          { name: 'Tost z Ciemnej Materii', price: '99.99 ET', role: 'secondary' },
          { name: 'Mgławicowe Drożdże', price: '5.40 ET', role: 'neutral' },
          { name: 'Słoneczna Skórka', price: '18.00 ET', role: 'primary' },
        ].map((p, i) => (
          <Card key={i} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <div style={{ height: '150px', background: 'var(--color-surface-raised)', borderRadius: 'var(--radius-base)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
              🍞
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div>
                <h4 style={{ fontWeight: 'var(--font-weight-bold)' }}>{p.name}</h4>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Od Galaktyki-7</div>
              </div>
              <Badge role={p.role as any}>{p.price}</Badge>
            </div>
            <Button role="primary" style={{ width: '100%' }}>Do koszyka</Button>
          </Card>
        ))}
      </Grid>
    </div>
  </div>
);
