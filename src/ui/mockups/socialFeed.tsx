import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const SocialFeedMock = () => (
  <div className="max-w-2xl mx-auto space-y-8">
    <Card id={0}>
        <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-[var(--color-support)] shrink-0" />
            <textarea
                placeholder="Co słychać w Twoim sektorze?"
                className="flex-1 bg-transparent border-none outline-none resize-none text-lg text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] min-h-[100px]"
            />
        </div>
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200/10">
            <div className="flex gap-4 text-xl">
                <span>🖼️</span><span>📊</span><span>🙂</span><span>📍</span>
            </div>
            <Button id={1}>Opublikuj</Button>
        </div>
    </Card>

    <div className="space-y-6">
        {[
            { user: 'Grażyna Wajb', handle: '@grazka_wajb', content: 'Wykryto nadkrytyczne smażenie w sektorze 7G! Ktoś chętny na frytki? 🍟 #bulwa #wajb', likes: 156, comments: 42 },
            { user: 'Janusz Kwantowy', handle: '@janusz_q', content: 'Mój hovercat właśnie osiągnął stan skupienia stały. VibeCheck UI v8 to absolutny game changer. 🚀', likes: 89, comments: 12 },
            { user: 'Piotr Bulwa', handle: '@p_bulwa', content: 'Czy ktoś wie jak zresetować iloraz wajbu bez restartu klastra? Pytam dla kolegi.', likes: 24, comments: 56 }
        ].map((post, i) => (
            <Card key={i} id={(i % 2) + 1}>
                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] shrink-0 opacity-80" />
                    <div className="space-y-2 flex-1">
                        <div className="flex gap-2 items-center">
                            <span className="font-black text-[var(--color-text)]">{post.user}</span>
                            <span className="text-xs text-[var(--color-text-muted)]">{post.handle} • 2h</span>
                        </div>
                        <p className="text-[var(--color-text)] leading-relaxed">{post.content}</p>
                        <div className="flex gap-8 pt-4 text-xs font-bold text-[var(--color-text-muted)]">
                            <span className="cursor-pointer hover:text-[var(--color-accent)] transition-colors">💬 {post.comments}</span>
                            <span className="cursor-pointer hover:text-[var(--color-accent)] transition-colors">🔄 12</span>
                            <span className="cursor-pointer hover:text-[var(--color-accent)] transition-colors">❤️ {post.likes}</span>
                            <span className="cursor-pointer hover:text-[var(--color-accent)] transition-colors">📊 1.2k</span>
                        </div>
                    </div>
                </div>
            </Card>
        ))}
    </div>
  </div>
);
