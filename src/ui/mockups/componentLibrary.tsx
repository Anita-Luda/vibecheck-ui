import React from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge, Avatar, Divider, Kbd } from '../components/Primitives';
import { Table, Stat, ProgressBar } from '../components/DataDisplay';
import { TextInput, Select, TextArea } from '../components/Input';
import { Toggle } from '../components/Toggle';
import { Alert, Toast } from '../components/Feedback';
import { Grid } from '../layout/Grid';

export const ComponentLibraryMock = () => (
  <div id="mock-lib" style={{ padding: 'var(--section-gap)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
    <header id="lib-header">
      <h1 id="lib-title" style={{ fontSize: '2.5rem', fontWeight: 'var(--font-weight-bold)' }}>Biblioteka Komponentów Systemu</h1>
      <p id="lib-desc" style={{ color: 'var(--color-text-muted)' }}>Pełny przegląd wszystkich interaktywnych elementów we wszystkich rolach semantycznych i stanach.</p>
    </header>

    <section id="sec-buttons">
      <h2 id="btn-title" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: 'var(--spacing-8)', borderBottom: '2px solid var(--color-surface-raised)', paddingBottom: 'var(--spacing-2)' }}>PRZYCISKI I AKCJE</h2>
      <Table
        id="table-buttons"
        headers={['Rola Semantyczna', 'Domyślny', 'Hover', 'Aktywny', 'Wyłączony']}
        rows={[
          ['Dominant (Primary)', <Button key="p1" role="primary">Primary</Button>, <Button key="p2" role="primary" forceState="hover">Hover</Button>, <Button key="p3" role="primary" forceState="active">Active</Button>, <Button key="p4" role="primary" disabled>Disabled</Button>],
          ['Secondary', <Button key="s1" role="secondary">Secondary</Button>, <Button key="s2" role="secondary" forceState="hover">Hover</Button>, <Button key="s3" role="secondary" forceState="active">Active</Button>, <Button key="s4" role="secondary" disabled>Disabled</Button>],
          ['Accent', <Button key="a1" role="accent">Accent</Button>, <Button key="a2" role="accent" forceState="hover">Hover</Button>, <Button key="a3" role="accent" forceState="active">Active</Button>, <Button key="a4" role="accent" disabled>Disabled</Button>],
          ['Support', <Button key="su1" role="support">Support</Button>, <Button key="su2" role="support" forceState="hover">Hover</Button>, <Button key="su3" role="support" forceState="active">Active</Button>, <Button key="su4" role="support" disabled>Disabled</Button>],
          ['Muted', <Button key="m1" role="muted">Muted</Button>, <Button key="m2" role="muted" forceState="hover">Hover</Button>, <Button key="m3" role="muted" forceState="active">Active</Button>, <Button key="m4" role="muted" disabled>Disabled</Button>],
          ['Destructive', <Button key="d1" role="destructive">Destructive</Button>, <Button key="d2" role="destructive" forceState="hover">Hover</Button>, <Button key="d3" role="destructive" forceState="active">Active</Button>, <Button key="d4" role="destructive" disabled>Disabled</Button>],
        ]}
      />
    </section>

    <section id="sec-inputs">
      <h2 id="input-title" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: 'var(--spacing-8)', borderBottom: '2px solid var(--color-surface-raised)', paddingBottom: 'var(--spacing-2)' }}>KONTROLKI WEJŚCIA</h2>
      <Grid id="grid-inputs" cols={3}>
        <Card id="card-text-fields">
          <h3 id="txt-field-title" style={{ fontSize: '0.875rem', fontWeight: 'bold', marginBottom: 'var(--spacing-4)' }}>POLA TEKSTOWE</h3>
          <div id="txt-field-list" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <TextInput label="Domyślne Wejście" placeholder="Jan Kowalski" id="in-def" />
            <TextInput label="Stan Skupienia (Focus)" placeholder="Skup się..." forceState="focus" id="in-foc" />
            <TextInput label="Błąd (Error)" placeholder="Zła wartość" forceState="error" id="in-err" />
            <TextArea label="Obszar Tekstowy" placeholder="Wpisz tu swoje żale..." id="in-area" />
          </div>
        </Card>
        <Card id="card-selection">
          <h3 id="select-title" style={{ fontSize: '0.875rem', fontWeight: 'bold', marginBottom: 'var(--spacing-4)' }}>WYBÓR</h3>
          <div id="select-list" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <Select id="sel-1" label="Wybierz Opcję" options={['Opcja Uniwersalna', 'Ekskluzywnie dla Sektora 7G', 'Polecane przez Hovercaty']} />
            <div id="check-group" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <input type="checkbox" id="check-q" defaultChecked /> <label htmlFor="check-q">Włącz Slicing Kwantowy</label>
            </div>
            <div id="radio-group" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <input type="radio" name="radio-ex" id="radio-a" defaultChecked /> <label htmlFor="radio-a">Opcja Alfa</label>
            </div>
            <Divider id="div-1" />
            <div id="kbd-group" style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
              <span>Skrót: </span> <Kbd id="kbd-1">Ctrl</Kbd> + <Kbd id="kbd-2">Q</Kbd>
            </div>
          </div>
        </Card>
        <Card id="card-sliders">
          <h3 id="slider-title" style={{ fontSize: '0.875rem', fontWeight: 'bold', marginBottom: 'var(--spacing-4)' }}>SUWAKI I STAN</h3>
          <div id="slider-list" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <div id="range-val" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Poziom Entropii</span>
              <span id="range-text" style={{ fontWeight: 'bold' }}>42%</span>
            </div>
            <input id="range-in" type="range" style={{ width: '100%' }} />
            <div id="toggle-group" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Status Sieci</span>
              <Toggle id="toggle-net" initial={true} />
            </div>
            <ProgressBar id="prog-1" progress={65} role="accent" />
          </div>
        </Card>
      </Grid>
    </section>

    <section id="sec-feedback">
      <h2 id="feedback-title" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: 'var(--spacing-8)', borderBottom: '2px solid var(--color-surface-raised)', paddingBottom: 'var(--spacing-2)' }}>PRYMITYWY I FEEDBACK</h2>
      <Grid id="grid-feedback" cols={2}>
        <div id="col-badges" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <h3 id="badges-title" style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>BADGE</h3>
          <div id="badge-list" style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap' }}>
            <Badge key="b1" id="lib-b1" role="primary">PRIMARY</Badge>
            <Badge key="b2" id="lib-b2" role="secondary">SECONDARY</Badge>
            <Badge key="b3" id="lib-b3" role="accent">ACCENT</Badge>
            <Badge key="b4" id="lib-b4" role="support">SUPPORT</Badge>
            <Badge key="b5" id="lib-b5" role="muted">MUTED</Badge>
            <Badge key="b6" id="lib-b6" role="destructive">DESTRUCTIVE</Badge>
            <Badge key="b7" id="lib-b7" role="success">SUCCESS</Badge>
            <Badge key="b8" id="lib-b8" role="warning">WARNING</Badge>
          </div>

          <h3 id="avatars-title" style={{ fontSize: '0.875rem', fontWeight: 'bold', marginTop: 'var(--spacing-4)' }}>AWATARY</h3>
          <div id="avatar-list" style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
            <Avatar id="av-sm" label="A" size="sm" />
            <Avatar id="av-md" label="B" size="md" role="primary" />
            <Avatar id="av-lg" label="C" size="lg" role="accent" />
          </div>

          <div id="toast-demo" style={{ marginTop: 'var(--spacing-4)' }}>
             <Toast id="tst-1">Powiadomienie: Plik został sklonowany pomyślnie! 🚀</Toast>
          </div>
        </div>

        <div id="col-alerts" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <h3 id="alerts-title" style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>ALERTY</h3>
          <Alert id="al-inf" role="info">INFORMACJA: Standardowe powiadomienie systemowe.</Alert>
          <Alert id="al-suc" role="success">SUKCES: Operacja zakończona powodzeniem.</Alert>
          <Alert id="al-war" role="warning">OSTRZEŻENIE: Poziomy wibracji niestabilne.</Alert>
          <Alert id="al-err" role="destructive">BŁĄD: Przepełnienie w Sektorze 7G.</Alert>
        </div>
      </Grid>
    </section>

    <section id="sec-data">
      <h2 id="data-title" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: 'var(--spacing-8)', borderBottom: '2px solid var(--color-surface-raised)', paddingBottom: 'var(--spacing-2)' }}>WYŚWIETLANIE DANYCH</h2>
      <Table
        id="table-data-demo"
        headers={['ID', 'Nazwa', 'Status', 'Obciążenie', 'Zamanifestowano']}
        rows={[
          ['#001', 'Kwantowy Ziemniak', <Badge key="r1" id="r-b1" role="primary">AKTYWNY</Badge>, '88%', '2026-01-12'],
          ['#002', 'Hovercat Prime', <Badge key="r2" id="r-b2" role="support">IDLE</Badge>, '12%', '2026-01-10'],
          ['#003', 'Void Slicer', <Badge key="r3" id="r-b3" role="destructive">ERROR</Badge>, 'ERR', '2026-01-15'],
        ]}
      />
    </section>
  </div>
);
