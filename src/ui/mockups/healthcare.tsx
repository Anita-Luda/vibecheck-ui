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
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'var(--font-weight-bold)' }}>VibeMed <span style={{ fontWeight: 'var(--font-weight-normal)', color: 'var(--color-text-muted)' }}>Sector 7G</span></h1>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Patient: Bulwa, Krzysztof</p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 'var(--item-gap)' }}>
        <Button role="accent">Tele-Consult LIVE</Button>
        <Button role="primary">New Appointment</Button>
      </div>
    </header>

    <Alert role="primary">Your quantum starch test results are now available!</Alert>

    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--section-gap)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
        <section>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>📅 Upcoming Visits</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            {[
              { date: 'Jan 25, 10:30', doc: 'dr Jan Bulwa', spec: 'Cardio-Toastology', status: 'Confirmed' },
              { date: 'Feb 02, 15:45', doc: 'dr Anna Hover', spec: 'Cat Neurology', status: 'Pending' }
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
                    <Badge role={viz.status === 'Confirmed' ? 'primary' : 'neutral'}>{viz.status}</Badge>
                    <Button role="neutral">Reschedule</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>📜 Medical History</h2>
          <Table
            headers={['Date', 'Test', 'Doctor', 'Result', 'Files']}
            rows={[
              ['Dec 20, 2024', 'Bulwa Morphology', 'dr Bulwa', <Badge role="primary">NORMAL</Badge>, <Button role="neutral">PDF</Button>],
              ['Nov 15, 2024', 'Toast X-Ray', 'dr Tost', <Badge role="support">CLEAR</Badge>, <Button role="neutral">PDF</Button>],
              ['Oct 10, 2024', 'Vibe Test', 'dr Chaos', <Badge role="destructive">CRITICAL</Badge>, <Button role="neutral">PDF</Button>],
            ]}
          />
        </section>
      </div>

      <aside style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
        <Card>
          <h3 style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>🩺 Symptom Checker (AI)</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <Select label="What hurts?" options={['Potato hurts', 'Tail itches', 'Toast is cold', 'Other']} id={100} />
            <TextInput label="Pain Level (0-42)" type="number" id={101} />
            <TextArea label="Description" placeholder="Describe your vibe..." id={102} />
            <Button role="primary" style={{ width: '100%' }}>Send to Sector 7G</Button>
          </div>
        </Card>

        <Card role="accent">
          <h3 style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>💊 Active Prescriptions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            {[
              { name: 'Bulwo-Tab 500mg', dose: '1-0-1', days: 12 },
              { name: 'Hover-Spray', dose: 'On demand', days: 5 }
            ].map((rx, i) => (
              <div key={i} style={{ padding: 'var(--spacing-3)', background: 'var(--color-surface-raised)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <span>{rx.name}</span>
                  <span style={{ color: 'var(--color-role-accent)' }}>{rx.dose}</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: 'var(--spacing-1)' }}>{rx.days} days remaining</div>
              </div>
            ))}
            <Button role="primary" style={{ width: '100%' }}>Request Refill</Button>
          </div>
        </Card>
      </aside>
    </div>
  </div>
);
