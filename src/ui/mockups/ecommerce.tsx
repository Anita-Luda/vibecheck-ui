import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Grid } from '../layout/Grid';
import { Badge } from '../components/Primitives';

export const EcommerceMock = () => (
  <div id="mock-ecommerce" style={{ padding: 'var(--section-gap)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
    <header id="ec-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 id="ec-title" style={{ fontSize: '2rem', fontWeight: 'var(--font-weight-bold)' }}>Galaktyczne Emporium Tostów</h1>
      <div id="ec-actions" style={{ display: 'flex', gap: 'var(--item-gap)' }}>
        <Button id="btn-cart" role="neutral">Koszyk (3)</Button>
      </div>
    </header>

    <div id="ec-layout" style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: 'var(--section-gap)' }}>
      <aside id="ec-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
        <div id="filter-categories">
          <h3 id="cat-title" style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>Kategorie</h3>
          <ul id="cat-list" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
            {['Kwantowo Przypalone', 'Neutronowy Zakwas', 'Żyto Osobliwości', 'Bajgiel Próżni'].map((c, i) => (
              <li key={c} id={`cat-item-${i}`} style={{ cursor: 'pointer', color: 'var(--color-text-secondary)' }}>{c}</li>
            ))}
          </ul>
        </div>
        <div id="filter-price">
          <h3 id="price-title" style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>Zakres Cenowy</h3>
          <input id="input-price-range" type="range" style={{ width: '100%' }} />
        </div>
      </aside>

      <Grid id="ec-product-grid" cols={3}>
        {[
          { id: 'p1', name: 'Kwantowe Masło', price: '42.00 ET', role: 'primary' },
          { id: 'p2', name: 'Dżem Horyzontu Zdarzeń', price: '12.50 ET', role: 'accent' },
          { id: 'p3', name: 'Okruchy Osobliwości', price: '0.99 ET', role: 'support' },
          { id: 'p4', name: 'Tost z Ciemnej Materii', price: '99.99 ET', role: 'secondary' },
          { id: 'p5', name: 'Mgławicowe Drożdże', price: '5.40 ET', role: 'neutral' },
          { id: 'p6', name: 'Słoneczna Skórka', price: '18.00 ET', role: 'primary' },
        ].map((p, i) => (
          <Card key={p.id} id={`card-product-${p.id}`} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <div id={`img-product-${p.id}`} style={{ height: '150px', background: 'var(--color-surface-raised)', borderRadius: 'var(--radius-base)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
              🍞
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div>
                <h4 id={`name-product-${p.id}`} style={{ fontWeight: 'var(--font-weight-bold)' }}>{p.name}</h4>
                <div id={`vendor-product-${p.id}`} style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Od Galaktyki-7</div>
              </div>
              <Badge id={`badge-price-${p.id}`} role={p.role as any}>{p.price}</Badge>
            </div>
            <Button id={`btn-add-${p.id}`} role="primary" style={{ width: '100%' }}>Do koszyka</Button>
          </Card>
        ))}
      </Grid>
    </div>
  </div>
);
