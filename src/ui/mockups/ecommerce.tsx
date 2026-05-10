import React from 'react';
import { Card } from '../components/Card';
import { Grid } from '../layout/Grid';
import { Button } from '../components/Button';

export const EcommerceMock = () => (
  <div className="max-w-7xl mx-auto space-y-12">
    {/* Hero Section */}
    <section className="relative h-[400px] rounded-[var(--radius-lg)] overflow-hidden flex items-center p-12 bg-[var(--color-support)] shadow-[var(--shadow-style)]">
        <div className="relative z-10 max-w-lg space-y-6">
            <span className="inline-block px-3 py-1 bg-[var(--color-accent)] text-white text-xs font-black uppercase tracking-widest rounded-full">Nowa Kolekcja 2024</span>
            <h1 className="text-5xl font-black text-[var(--color-text)] leading-tight">Wajb, którego potrzebujesz.</h1>
            <p className="text-xl text-[var(--color-text-muted)]">Odkryj limitowaną edycję ubrań dla programistów kwantowych i pasjonatów hovercatów.</p>
            <div className="flex gap-4">
                <Button id={0}>Kup Teraz</Button>
                <Button id={1} >Zobacz Lookbook</Button>
            </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[var(--color-accent)] opacity-10 skew-x-12 translate-x-20" />
    </section>

    {/* Featured Categories */}
    <Grid cols={3}>
        {[
            { title: 'Dla Niego', img: '👕' },
            { title: 'Dla Niej', img: '👗' },
            { title: 'Akcesoria', img: '🕶️' }
        ].map((cat, i) => (
            <Card key={i} id={i+1}>
                <div className="text-6xl mb-4">{cat.img}</div>
                <h3 className="text-2xl font-black text-[var(--color-text)]">{cat.title}</h3>
                <button className="mt-2 text-[var(--color-accent)] font-bold text-sm hover:underline">Przeglądaj →</button>
            </Card>
        ))}
    </Grid>

    {/* Product Grid */}
    <section className="space-y-8">
        <div className="flex justify-between items-end">
            <h2 className="text-3xl font-black text-[var(--color-text)]">Bestsellery</h2>
            <div className="flex gap-4 text-sm font-bold text-[var(--color-text-muted)]">
                <span className="text-[var(--color-accent)] cursor-pointer underline">Wszystkie</span>
                <span className="cursor-pointer hover:text-[var(--color-text)] transition-colors">Odzież</span>
                <span className="cursor-pointer hover:text-[var(--color-text)] transition-colors">Gadżety</span>
            </div>
        </div>

        <Grid cols={4}>
            {[
                { name: 'Bluza "Kwantowy Ziemniak"', price: '299 PLN', tag: 'Sale' },
                { name: 'T-shirt "Hovercat" v2', price: '129 PLN', tag: 'New' },
                { name: 'Kubek "Iloraz Wajbu"', price: '59 PLN' },
                { name: 'Czapka "Entropia"', price: '89 PLN', tag: 'Limited' },
                { name: 'Skarpetki w Bulwy', price: '39 PLN' },
                { name: 'Plakat "Sektor 7G"', price: '49 PLN', tag: 'Hot' },
                { name: 'Brelok "Frytka"', price: '19 PLN' },
                { name: 'Torba "Ketchup"', price: '29 PLN' }
            ].map((prod, i) => (
                <Card key={i} id={(i % 3)}>
                    <div className="aspect-square bg-black/5 rounded-lg mb-4 relative overflow-hidden group">
                        {prod.tag && <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-black px-2 py-0.5 rounded-sm uppercase z-10">{prod.tag}</span>}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Button id={i}>Do Koszyka</Button>
                        </div>
                    </div>
                    <h4 className="font-bold text-[var(--color-text)] mb-1">{prod.name}</h4>
                    <p className="text-[var(--color-accent)] font-black">{prod.price}</p>
                </Card>
            ))}
        </Grid>
    </section>

    {/* Newsletter Section */}
    <section className="bg-[var(--color-surface)] border border-gray-200/20 p-12 rounded-[var(--radius-lg)] text-center space-y-6 shadow-[var(--shadow-style)]">
        <h2 className="text-4xl font-black text-[var(--color-text)]">Dołącz do Klubu Wajbu</h2>
        <p className="text-[var(--color-text-muted)] max-w-xl mx-auto text-lg">Zapisz się do newslettera i odbierz 15% zniżki na pierwsze zamówienie w sektorze 7G.</p>
        <div className="flex max-w-md mx-auto gap-2">
            <input type="email" placeholder="Twój e-mail" className="flex-1 px-4 py-3 bg-black/5 border-none rounded-[var(--radius-base)] outline-none focus:ring-2 ring-[var(--color-accent)] transition-all" />
            <Button id={7}>Zapisz się</Button>
        </div>
    </section>

    {/* Footer Info */}
    <footer className="border-t border-gray-200/20 pt-12 grid grid-cols-4 gap-8">
        <div className="space-y-4">
            <div className="text-xl font-black text-[var(--color-text)]">VibeCheck UI</div>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">System projektowania interfejsów oparty na deterministycznym kompilatorze runtime i OKLCH.</p>
        </div>
        {[
            { title: 'Zakupy', links: ['Dostawa', 'Zwroty', 'Tabela Rozmiarów'] },
            { title: 'Firma', links: ['O nas', 'Kariera', 'Kontakt'] },
            { title: 'Pomoc', links: ['FAQ', 'Regulamin', 'Polityka Prywatności'] }
        ].map((sec, i) => (
            <div key={i} className="space-y-4">
                <h4 className="text-sm font-black text-[var(--color-text)] uppercase tracking-widest">{sec.title}</h4>
                <ul className="space-y-2">
                    {sec.links.map(l => <li key={l} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] cursor-pointer transition-colors">{l}</li>)}
                </ul>
            </div>
        ))}
    </footer>
  </div>
);
