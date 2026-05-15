import React from 'react';
import { Card } from '../components/Card';
import { Toggle } from '../components/Toggle';
import { Button } from '../components/Button';
import { TextInput, Select } from '../components/Input';

export const SettingsMock = () => (
  <div id="mock-settings" style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--container-padding)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
    <header id="set-header">
      <h1 id="set-title" style={{ fontSize: '2rem', fontWeight: 'var(--font-weight-bold)' }}>Ustawienia Systemu</h1>
      <p id="set-desc" style={{ color: 'var(--color-text-muted)' }}>Skonfiguruj parametry swojej lokalnej rzeczywistości i wibracji.</p>
    </header>

    <div id="set-content" style={{ display: 'grid', gap: 'var(--spacing-8)' }}>
      <section id="sec-vibe-core" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <h2 id="core-title" style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-bold)' }}>Rdzeń Wibracji</h2>
        <Card id="card-vibe-core" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <TextInput label="Nazwa Wyświetlana" placeholder="Kwantowy Ziemniak" id="in-set-name" />
          <Select label="Kotwica Rzeczywistości" options={['Sektor 7G', 'Zbiorowy Umysł', 'Próżnia', 'Localhost']} id="sel-set-anchor" />
          <div id="row-sync" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div id="info-sync">
              <div id="txt-sync-title" style={{ fontWeight: 'var(--font-weight-bold)' }}>Włącz Synchronizację Ciemnej Materii</div>
              <div id="txt-sync-desc" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Wymagane do stabilizacji hovercatów.</div>
            </div>
            <Toggle id="tog-sync" initial={true} />
          </div>
        </Card>
      </section>

      <section id="sec-notifications" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <h2 id="notif-title" style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-bold)' }}>Częstotliwość Powiadomień</h2>
        <Card id="card-notif" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          {[
            { id: 'ent', label: 'Alerty Entropii', desc: 'Powiadom, gdy poziom ziemniaka spadnie.' },
            { id: 'hov', label: 'Proksymacja Hovercatów', desc: 'Piszcz, gdy kot unosi się w pobliżu.' },
            { id: 'tst', label: 'Tost Gotowy', desc: 'Kluczowe dla porannych rutyn.' },
          ].map((item, i) => (
            <div key={item.id} id={`row-notif-${item.id}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div id={`info-notif-${item.id}`}>
                <div id={`txt-notif-title-${item.id}`} style={{ fontWeight: 'var(--font-weight-bold)' }}>{item.label}</div>
                <div id={`txt-notif-desc-${item.id}`} style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{item.desc}</div>
              </div>
              <Toggle id={`tog-notif-${item.id}`} initial={i < 2} />
            </div>
          ))}
        </Card>
      </section>

      <div id="set-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--item-gap)' }}>
        <Button id="btn-cancel" role="neutral">Anuluj</Button>
        <Button id="btn-save" role="primary">Zapisz Rzeczywistość</Button>
      </div>
    </div>
  </div>
);
