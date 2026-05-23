import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Primitives';
import { TextInput } from '../components/Input';

export const AIAppMock = () => (
  <div id="mock-ai-llm" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 'var(--container-padding)' }}>
    <header id="ai-header" style={{ marginBottom: 'var(--section-gap)' }}>
      <h1 id="ai-title" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Kwantowy Myśliciel v4.2</h1>
      <p id="ai-subtitle" style={{ color: 'var(--color-text-muted)' }}>AI, które rozumie duszę ziemniaka.</p>
    </header>

    <div id="ai-chat-area" style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', marginBottom: 'var(--section-gap)' }}>
      <Card id="msg-1" style={{ maxWidth: '80%', alignSelf: 'flex-start', background: 'var(--color-surface-raised)' }}>
        <p id="msg-1-txt">Witaj, podróżniku. Czy dzisiaj również szukasz sensu istnienia w przypieczonym chlebie?</p>
      </Card>

      <Card id="msg-2" style={{ maxWidth: '80%', alignSelf: 'flex-end', background: 'var(--color-role-primary-bg)', borderColor: 'var(--color-role-primary-border)' }}>
        <p id="msg-2-txt">Tak, Kwantowy Myślicielu. Wyjaśnij mi korelację między masłem a entropią wszechświata.</p>
      </Card>

      <Card id="msg-3" style={{ maxWidth: '80%', alignSelf: 'flex-start', background: 'var(--color-surface-raised)' }}>
        <p id="msg-3-txt">To proste. Każda kropla roztopionego masła zwiększa chaos w Sektorze 7G o dokładnie 0.0042%. Dlatego Twoje tosty zawsze spadają masłem do dołu – to naturalny mechanizm obronny czasoprzestrzeni.</p>
        <div id="msg-3-meta" style={{ marginTop: 'var(--spacing-2)', display: 'flex', gap: 'var(--spacing-2)' }}>
          <Badge id="badge-logic" role="support">Logika Kwantowa</Badge>
          <Badge id="badge-conf" role="accent">Pewność: 99%</Badge>
        </div>
      </Card>
    </div>

    <div id="ai-input-area" style={{ display: 'flex', gap: 'var(--item-gap)' }}>
      <TextInput id="in-ai-prompt" placeholder="Zadaj pytanie o wibracje..." style={{ flex: 1 }} />
      <Button id="btn-ai-send" role="primary">Analizuj</Button>
    </div>
  </div>
);
