import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Primitives';
import { Alert } from '../components/Feedback';
import { Table } from '../components/DataDisplay';
import { TextInput, Select, TextArea } from '../components/Input';

export const HealthcareMock = () => (
  <div id="mock-healthcare" style={{ padding: 'var(--section-gap)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
    <header id="hc-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div id="hc-brand" style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
        <div id="hc-logo" style={{ width: '48px', height: '48px', background: 'var(--color-role-destructive)', borderRadius: 'var(--radius-xl)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>+</div>
        <div>
          <h1 id="hc-title" style={{ fontSize: '1.5rem', fontWeight: 'var(--font-weight-bold)' }}>VibeMed <span style={{ fontWeight: 'var(--font-weight-normal)', color: 'var(--color-text-muted)' }}>Sektor 7G</span></h1>
          <p id="hc-patient" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Pacjent: Bulwa, Krzysztof</p>
        </div>
      </div>
      <div id="hc-actions" style={{ display: 'flex', gap: 'var(--item-gap)' }}>
        <Button id="btn-tele" role="accent">Tele-Konsultacja LIVE</Button>
        <Button id="btn-visit" role="primary">Nowa Wizyta</Button>
      </div>
    </header>

    <Alert id="alert-results" role="primary">Twoje wyniki testu na kwantową skrobię są już dostępne!</Alert>

    <div id="hc-main" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--section-gap)' }}>
      <div id="hc-left" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
        <section id="hc-visits">
          <h2 id="visits-title" style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>📅 Nadchodzące Wizyty</h2>
          <div id="visits-list" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            {[
              { id: 'v1', date: '25 Sty, 10:30', doc: 'dr Jan Bulwa', spec: 'Kardio-Tostologia', status: 'Potwierdzona' },
              { id: 'v2', date: '02 Lut, 15:45', doc: 'dr Anna Hover', spec: 'Neurologia Kotów', status: 'Oczekująca' }
            ].map((viz, i) => (
              <Card key={viz.id} id={`card-visit-${viz.id}`} style={{ borderLeft: '4px solid var(--color-role-accent)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: 'var(--spacing-6)' }}>
                    <div id={`date-box-${viz.id}`} style={{ textAlign: 'center', padding: 'var(--spacing-2)', background: 'var(--color-surface-raised)', borderRadius: 'var(--radius-sm)', minWidth: '80px' }}>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>{viz.date.split(' ')[1]}</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-bold)' }}>{viz.date.split(' ')[0]}</div>
                    </div>
                    <div>
                      <div id={`doc-name-${viz.id}`} style={{ fontWeight: 'var(--font-weight-bold)' }}>{viz.doc}</div>
                      <div id={`doc-spec-${viz.id}`} style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{viz.spec}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--item-gap)', alignItems: 'center' }}>
                    <Badge id={`badge-visit-${viz.id}`} role={viz.status === 'Potwierdzona' ? 'primary' : 'neutral'}>{viz.status}</Badge>
                    <Button id={`btn-resched-${viz.id}`} role="neutral">Zmień termin</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="hc-history">
          <h2 id="history-title" style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>📜 Historia Medyczna</h2>
          <Table
            id="table-history"
            headers={['Data', 'Badanie', 'Lekarz', 'Wynik', 'Pliki']}
            rows={[
              ['20 Gru, 2024', 'Morfologia Bulwy', 'dr Bulwa', <Badge key="h1" id="h-b1" role="primary">NORMA</Badge>, <Button key="h1b" id="h-btn1" role="neutral">PDF</Button>],
              ['15 Lis, 2024', 'RTG Tosta', 'dr Tost', <Badge key="h2" id="h-b2" role="support">CZYSTY</Badge>, <Button key="h2b" id="h-btn2" role="neutral">PDF</Button>],
              ['10 Paź, 2024', 'Test Wibracji', 'dr Chaos', <Badge key="h3" id="h-b3" role="destructive">KRYTYCZNY</Badge>, <Button key="h3b" id="h-btn3" role="neutral">PDF</Button>],
            ]}
          />
        </section>
      </div>

      <aside id="hc-right" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
        <Card id="card-symptoms">
          <h3 id="symp-title" style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>🩺 Tester Objawów (AI)</h3>
          <div id="symp-form" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <Select id="select-pain" label="Co boli?" options={['Boli bulwa', 'Swędzi ogon', 'Tost jest zimny', 'Inne']} />
            <TextInput id="input-pain-lvl" label="Poziom Bólu (0-42)" type="number" />
            <TextArea id="input-desc" label="Opis" placeholder="Opisz swoje wibracje..." />
            <Button id="btn-send-symp" role="primary" style={{ width: '100%' }}>Wyślij do Sektora 7G</Button>
          </div>
        </Card>

        <Card id="card-prescriptions" role="accent">
          <h3 id="rx-title" style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>💊 Aktywne Recepty</h3>
          <div id="rx-list" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            {[
              { id: 'r1', name: 'Bulwo-Tab 500mg', dose: '1-0-1', days: 12 },
              { id: 'r2', name: 'Hover-Spray', dose: 'Na żądanie', days: 5 }
            ].map((rx, i) => (
              <div key={rx.id} id={`rx-item-${rx.id}`} style={{ padding: 'var(--spacing-3)', background: 'var(--color-surface-raised)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <span id={`rx-name-${rx.id}`}>{rx.name}</span>
                  <span id={`rx-dose-${rx.id}`} style={{ color: 'var(--color-role-accent)' }}>{rx.dose}</span>
                </div>
                <div id={`rx-days-${rx.id}`} style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: 'var(--spacing-1)' }}>Zostało {rx.days} dni</div>
              </div>
            ))}
            <Button id="btn-rx-refill" role="primary" style={{ width: '100%' }}>Poproś o odnowienie</Button>
          </div>
        </Card>
      </aside>
    </div>
  </div>
);
