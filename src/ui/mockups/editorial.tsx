import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const EditorialMock = () => (
  <div className="max-w-4xl mx-auto space-y-16 py-[var(--spacing-12)]">
    {/* Article Header */}
    <header className="space-y-[var(--spacing-6)] text-center">
        <div className="flex justify-center gap-[var(--spacing-4)] text-[var(--color-accent)] font-black text-xs uppercase tracking-widest">
            <span>Nauka</span>
            <span>•</span>
            <span>Technologia</span>
            <span>•</span>
            <span>Ziemniaki</span>
        </div>
        <h1 className="text-6xl font-black text-[var(--color-text)] leading-tight tracking-tight">
            Dlaczego Twój Hovercat potrzebuje więcej Wajbu?
        </h1>
        <p className="text-2xl text-[var(--color-text-muted)] leading-relaxed italic">
            Analiza kwantowa sektora 7G wskazuje na bezpośrednią korelację między gęstością entropii a poziomem zadowolenia bulwy.
        </p>
        <div className="flex items-center justify-center gap-[var(--spacing-4)] pt-4 border-b border-gray-200/20 pb-8">
            <div className="w-12 h-12 rounded-[var(--radius-full)] bg-[var(--color-accent)]" />
            <div className="text-left">
                <div className="font-bold text-[var(--color-text)]">dr hab. Janusz Bulwa</div>
                <div className="text-xs text-[var(--color-text-muted)]">Katedra Teorii Frytki, Uniwersytet Wajbu</div>
            </div>
            <div className="ml-8 text-xs text-[var(--color-text-muted)] font-mono">15 min czytania • 12 Maja 2024</div>
        </div>
    </header>

    {/* Lead Image */}
    <div className="h-[500px] w-full bg-[var(--color-support)] rounded-[var(--radius-lg)] shadow-[var(--shadow-style)] flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="text-9xl relative z-10 animate-bounce">🥔</span>
    </div>

    {/* Article Content */}
    <article className="prose prose-xl max-w-none text-[var(--color-text)] leading-relaxed space-y-[var(--spacing-8)]">
        <p className="first-letter:text-7xl first-letter:font-black first-letter:mr-3 first-letter:float-left">
            W świecie, gdzie determinizm miesza się z chaosem, a OKLCH staje się jedyną słuszną przestrzenią kolorystyczną, musimy zadać sobie pytanie o istotę bytu. Czy hovercat jest tylko funkcją stanu, czy może żywym dowodem na istnienie nadkrytycznego smażenia?
        </p>

        <h2 className="text-3xl font-black mt-[var(--spacing-1)]2 mb-[var(--spacing-6)]">Paradoks Sektora 7G</h2>
        <p>
            Badania przeprowadzone w ostatnim kwartale wykazują, że iloraz wajbu dąży do nieskończoności w warunkach kontrolowanej entropii. Oznacza to, że każda próba frytkowania bez uprzedniej zgody rady bulw może zakończyć się kolapsem systemu.
        </p>

        <Card id={0}>
            <blockquote className="text-2xl font-black italic border-l-8 border-[var(--color-accent)] pl-8 my-8">
                "Kiedy spoglądasz w ziemniaka, ziemniak spogląda w ciebie. To jest fundament współczesnej analityki kwantowej."
            </blockquote>
        </Card>

        <h3 className="text-2xl font-bold mt-8 mb-[var(--spacing-4)] text-[var(--color-accent)]">Trzy filary wajbu</h3>
        <ul className="list-disc pl-6 space-y-4">
            <li><strong>Luminancja:</strong> Odpowiedzialna za percepcję głębi w interfejsie.</li>
            <li><strong>Chroma:</strong> Definiuje intensywność emocjonalną interakcji.</li>
            <li><strong>Hue:</strong> Nadaje kierunek semantyczny całej kompozycji.</li>
        </ul>

        <div className="grid grid-cols-2 gap-[var(--spacing-8)] my-12">
            <div className="bg-black/5 p-[var(--spacing-8)] rounded-[var(--radius-xl)] space-y-4">
                <h4 className="font-bold text-lg">Metodologia Smażenia</h4>
                <p className="text-sm">Zastosowaliśmy algorytm 60/30/10 aby zachować hierarchię wizualną podczas ekstremalnych testów obciążeniowych.</p>
            </div>
            <div className="bg-black/5 p-[var(--spacing-8)] rounded-[var(--radius-xl)] space-y-4 border-l-4 border-[var(--color-accent)]">
                <h4 className="font-bold text-lg">Wnioski Końcowe</h4>
                <p className="text-sm">System VibeCheck UI v8 pozwala na pełną kontrolę nad losem każdej bulwy w sektorze.</p>
            </div>
        </div>

        <p>
            Podsumowując, przyszłość należy do tych, którzy potrafią zbalansować kontrasty i zrozumieć znaczenie każdej składowej OKLCH. Bez tego, nasze hovercaty pozostaną jedynie cieniem swojej dawnej chwały w cyfrowym świecie.
        </p>
    </article>

    {/* Author Bio */}
    <footer className="border-t border-gray-200/20 pt-12 flex gap-[var(--spacing-8)] items-start">
        <div className="w-24 h-24 rounded-[var(--radius-full)] bg-[var(--color-accent)] shrink-0" />
        <div className="space-y-4">
            <h4 className="text-xl font-bold">O autorze</h4>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
                Janusz Bulwa jest pionierem w dziedzinie projektowania generatywnego i teorii ziemniaka. Jego prace nad VibeCheck UI zrewolucjonizowały sposób, w jaki myślimy o deterministycznych runtime'ach.
            </p>
            <div className="flex gap-[var(--spacing-4)]">
                <Button id={1} >Śledź na X</Button>
                <Button id={2} >Wspomóż Bulwę</Button>
            </div>
        </div>
    </footer>
  </div>
);
