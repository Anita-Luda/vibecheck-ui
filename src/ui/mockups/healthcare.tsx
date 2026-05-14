import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Primitives';
import { Alert } from '../components/Feedback';
import { Table } from '../components/DataDisplay';
import { TextInput, Select, TextArea } from '../components/Input';

export const HealthcareMock = () => (
  <div style={{ padding: 'var(--section-gap)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
        <div style={{ width: '48px', height: '48px', background: 'var(--color-role-destructive)', borderRadius: 'var(--radius-xl)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>+</div>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'var(--font-weight-bold)' }}>VibeMed <span style={{ fontWeight: 'var(--font-weight-normal)', color: 'var(--color-text-muted)' }}>Sektor 7G</span></h1>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Pacjent: Bulwa, Krzysztof</p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 'var(--item-gap)' }}>
        <Button role="accent">Tele-Konsultacja LIVE</Button>
        <Button role="primary">Nowa Wizyta</Button>
      </div>
    </header>

    <Alert role="primary">Twoje wyniki testu na kwantową skrobię są już dostępne!</Alert>

    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--section-gap)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
        <section>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>📅 Nadchodzące Wizyty</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            {[
              { date: '25 Sty, 10:30', doc: 'dr Jan Bulwa', spec: 'Kardio-Tostologia', status: 'Potwierdzona' },
              { date: '02 Lut, 15:45', doc: 'dr Anna Hover', spec: 'Neurologia Kotów', status: 'Oczekująca' }
            ].map((viz, i) => (
              <Card key={i} style={{ borderLeft: '4px solid var(--color-role-accent)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: 'var(--spacing-6)' }}>
                    <div style={{ textAlign: 'center', padding: 'var(--spacing-2)', background: 'var(--color-surface-raised)', borderRadius: 'var(--radius-sm)', minWidth: '80px' }}>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>{viz.date.split(' ')[1]}</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-bold)' }}>{viz.date.split(' ')[0]}</div>
                    </div>
                    <div>
                      <div style={{ fontWeight: 'var(--font-weight-bold)' }}>{viz.doc}</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{viz.spec}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--item-gap)', alignItems: 'center' }}>
                    <Badge role={viz.status === 'Potwierdzona' ? 'primary' : 'neutral'}>{viz.status}</Badge>
                    <Button role="neutral">Zmień termin</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>📜 Historia Medyczna</h2>
          <Table
            headers={['Data', 'Badanie', 'Lekarz', 'Wynik', 'Pliki']}
            rows={[
              ['20 Gru, 2024', 'Morfologia Bulwy', 'dr Bulwa', <Badge role="primary">NORMA</Badge>, <Button role="neutral">PDF</Button>],
              ['15 Lis, 2024', 'RTG Tosta', 'dr Tost', <Badge role="support">CZYSTY</Badge>, <Button role="neutral">PDF</Button>],
              ['10 Paź, 2024', 'Test Wibracji', 'dr Chaos', <Badge role="destructive">KRYTYCZNY</Badge>, <Button role="neutral">PDF</Button>],
            ]}
          />
        </section>
      </div>

      <aside style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
        <Card>
          <h3 style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>🩺 Tester Objawów (AI)</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <Select label="Co boli?" options={['Boli bulwa', 'Swędzi ogon', 'Tost jest zimny', 'Inne']} id={100} />
            <TextInput label="Poziom Bólu (0-42)" type="number" id={101} />
            <TextArea label="Opis" placeholder="Opisz swoje wibracje..." id={102} />
            <Button role="primary" style={{ width: '100%' }}>Wyślij do Sektora 7G</Button>
          </div>
        </Card>

        <Card role="accent">
          <h3 style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>💊 Aktywne Recepty</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            {[
              { name: 'Bulwo-Tab 500mg', dose: '1-0-1', days: 12 },
              { name: 'Hover-Spray', dose: 'Na żądanie', days: 5 }
            ].map((rx, i) => (
              <div key={i} style={{ padding: 'var(--spacing-3)', background: 'var(--color-surface-raised)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <span>{rx.name}</span>
                  <span style={{ color: 'var(--color-role-accent)' }}>{rx.dose}</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: 'var(--spacing-1)' }}>Zostało {rx.days} dni</div>
              </div>
            ))}
            <Button role="primary" style={{ width: '100%' }}>Poproś o odnowienie</Button>
          </div>
        </Card>
      </aside>
    </div>
  </div>
);
