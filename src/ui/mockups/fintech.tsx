import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge, Avatar } from '../components/Primitives';
import { Table } from '../components/DataDisplay';

export const FintechMock = () => (
  <div id="mock-fintech" style={{ padding: 'var(--container-padding)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
    <header id="fin-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 id="fin-title" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>VibePay <span id="fin-span" style={{ color: 'var(--color-role-accent)' }}>Kwantowy Portfel</span></h1>
      <div id="fin-actions" style={{ display: 'flex', gap: 'var(--item-gap)' }}>
        <Button id="btn-fin-send" role="primary">Wyślij Ziemniaki</Button>
      </div>
    </header>

    <div id="fin-summary" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--section-gap)' }}>
      <Card id="card-balance" role="primary">
        <div id="bal-label" style={{ fontSize: '0.875rem', opacity: 0.8 }}>Dostępne Środki</div>
        <div id="bal-val" style={{ fontSize: '2.5rem', fontWeight: '900' }}>42,000.00 <span style={{ fontSize: '1rem' }}>PTT</span></div>
        <div id="bal-delta" style={{ fontSize: '0.75rem', marginTop: 'var(--spacing-2)', background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: 'var(--radius-full)', display: 'inline-block' }}>
          +12% w tym tygodniu
        </div>
      </Card>

      <div id="fin-sub-summary" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <Card id="card-savings">
          <div id="sav-label" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Skarbonka "Nowy Toster"</div>
          <div id="sav-val" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>1,250.00 PTT</div>
        </Card>
        <Card id="card-debt">
          <div id="debt-label" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Dług u Hovercata</div>
          <div id="debt-val" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-role-destructive)' }}>-42.00 PTT</div>
        </Card>
      </div>
    </div>

    <section id="sec-transactions">
      <h2 id="trans-title" style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: 'var(--spacing-4)' }}>Historia Transakcji</h2>
      <Table
        id="table-fin-trans"
        headers={['Odbiorca', 'Kategoria', 'Data', 'Kwota']}
        rows={[
          [<div key="t1" style={{ display: 'flex', gap: 'var(--spacing-2)', alignItems: 'center' }}><Avatar id="av-t1" label="H" size="sm" /> Hovercat Prime</div>, 'Karma', '12:45', <span key="t1v" style={{ color: 'var(--color-role-destructive)' }}>-10.00</span>],
          [<div key="t2" style={{ display: 'flex', gap: 'var(--spacing-2)', alignItems: 'center' }}><Avatar id="av-t2" label="Z" size="sm" /> Sektor 7G</div>, 'Dywidenda', 'Wczoraj', <span key="t2v" style={{ color: 'var(--color-role-success)' }}>+420.00</span>],
          [<div key="t3" style={{ display: 'flex', gap: 'var(--spacing-2)', alignItems: 'center' }}><Avatar id="av-t3" label="B" size="sm" /> dr Bulwa</div>, 'Zdrowie', '15 Sty', <span key="t3v" style={{ color: 'var(--color-role-destructive)' }}>-50.00</span>],
        ]}
      />
    </section>
  </div>
);
