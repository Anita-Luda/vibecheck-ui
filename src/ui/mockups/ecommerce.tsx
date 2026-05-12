import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Grid } from '../layout/Grid';
import { Badge, Avatar } from '../components/Primitives';
import { TextInput, Select } from '../components/Input';
import { Alert } from '../components/Feedback';
import { Breadcrumbs, Pagination, Rating } from '../components/Advanced';

export const EcommerceMock = () => {
  const [cartCount, setCartCount] = React.useState(0);

  return (
    <div className="space-y-[var(--spacing-8)]">
      <header className="flex justify-between items-center py-4 px-[var(--spacing-8)] bg-[var(--color-surface)] border-b border-[var(--color-role-neutral-border)] sticky top-0 z-10">
        <div className="text-2xl font-black italic tracking-tighter text-[var(--color-text-primary)]">GALAKTYCZNY TOST</div>
        <div className="flex gap-[var(--spacing-8)] items-center font-bold text-sm text-[var(--color-text-muted)]">
            <span className="text-[var(--color-text-primary)]">Tosty</span>
            <span>Dodatki Magiczne</span>
            <span>Subskrypcja Okruchów</span>
            <div className="relative cursor-pointer" onClick={() => setCartCount(prev => prev + 1)}>
                🛒 <Badge id={0}>{cartCount}</Badge>
            </div>
            <Avatar size="sm" alt="Me" />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-[var(--spacing-8)] py-[var(--spacing-12)]">
        <Breadcrumbs items={['Galaktyka', 'Tosty', 'Kwantowe']} />
        <Alert type="warning">Dziś darmowa dostawa dla wszystkich smoków z certyfikatem Bonsai!</Alert>

        <div className="flex justify-between items-end mb-[var(--spacing-8)]">
            <h1 className="text-5xl font-black text-[var(--color-text-primary)]">Nasze Bestselery</h1>
            <div className="flex gap-[var(--spacing-4)] w-1/3">
                <TextInput placeholder="Szukaj smaków..." id={1} />
                <Select options={['Najnowsze', 'Najtańsze', 'Najbardziej Absurdalne']} id={1} />
            </div>
        </div>

        <Grid cols={3}>
          {[
            { name: "Tost Kwantowy", price: "42.00 PLN", id: 0, tag: "Nowość" },
            { name: "Grzanka z Marsa", price: "156.00 PLN", id: 1, tag: "Bestseller" },
            { name: "Chleb z Entropią", price: "9.99 PLN", id: 2, tag: "Ryzykowny" },
            { name: "Bagietka 7G", price: "88.00 PLN", id: 3, tag: "Limitowana" },
            { name: "Pumpernikiel Chaosu", price: "66.60 PLN", id: 0, tag: "Classic" },
            { name: "Bułka z Hovercatem", price: "1,248 PLN", id: 1, tag: "Premium" }
          ].map((prod) => (
            <Card key={prod.name} id={prod.id}>
              <div className="aspect-square bg-[var(--color-surface-raised)] rounded-[var(--radius-base)] mb-[var(--spacing-4)] flex items-center justify-center text-4xl border border-[var(--color-role-neutral-border)]">
                🍞
              </div>
              <div className="flex justify-between items-start mb-[var(--spacing-2)]">
                <h3 className="text-xl font-black text-[var(--color-text-primary)]">{prod.name}</h3>
                <Badge id={prod.id}>{prod.tag}</Badge>
              </div>
              <div className="mb-[var(--spacing-4)]">
                  <Rating value={4} />
              </div>
              <div className="text-2xl font-black text-[var(--color-text-primary)] mb-[var(--spacing-6)]">{prod.price}</div>
              <div className="flex gap-[var(--spacing-2)]">
                <Button id={prod.id} className="flex-1">Dodaj do koszyka</Button>
                <Button id={1} className="bg-transparent border-[var(--color-role-neutral-border)] text-[var(--color-text-primary)] px-3">❤️</Button>
              </div>
            </Card>
          ))}
        </Grid>
        <Pagination />
      </div>

      <footer className="bg-[var(--color-surface-raised)] p-12 border-t border-[var(--color-role-neutral-border)] mt-[var(--spacing-2)]4">
          <Grid cols={4}>
              <div className="space-y-4">
                  <div className="font-black">GALAKTYCZNY TOST</div>
                  <p className="text-xs text-[var(--color-text-muted)]">Najlepsze tosty w tej części wszechświata. Smażone z pasją i entropią.</p>
              </div>
              <div className="space-y-2 text-sm font-bold text-[var(--color-text-secondary)]">
                  <div className="text-xs font-black uppercase text-[var(--color-text-muted)] mb-[var(--spacing-2)]">Sklep</div>
                  <div>Menu</div>
                  <div>Dodatki</div>
                  <div>Subskrypcja</div>
              </div>
              <div className="space-y-2 text-sm font-bold text-[var(--color-text-secondary)]">
                  <div className="text-xs font-black uppercase text-[var(--color-text-muted)] mb-[var(--spacing-2)]">Wsparcie</div>
                  <div>Dostawa</div>
                  <div>Reklamacje</div>
                  <div>FAQ</div>
              </div>
              <div className="space-y-4">
                  <div className="text-xs font-black uppercase text-[var(--color-text-muted)]">Newsletter</div>
                  <TextInput placeholder="Twoja galaktyczna poczta..." id={1} />
                  <Button id={0} className="w-full">Zapisz mnie</Button>
              </div>
          </Grid>
      </footer>
    </div>
  );
};
