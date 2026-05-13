import React from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { Badge } from './Primitives';

export const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => {
    if (!isOpen) return null;
    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000,
            padding: 'var(--spacing-4)'
        }}>
            <Card style={{ maxWidth: '500px', width: '100%', padding: 'var(--spacing-8)' }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-6)' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{title}</h2>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--color-text-muted)' }}>×</button>
                </header>
                {children}
            </Card>
        </div>
    );
};

export const Tooltip = ({ content, children }: { content: string, children: React.ReactNode }) => {
    const [visible, setVisible] = React.useState(false);
    return (
        <div style={{ position: 'relative', display: 'inline-block' }} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            {children}
            {visible && (
                <div style={{
                    position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)',
                    marginBottom: 'var(--spacing-2)', padding: 'var(--spacing-2) var(--spacing-4)',
                    backgroundColor: 'var(--color-text-primary)', color: 'var(--color-bg)',
                    fontSize: '0.75rem', borderRadius: 'var(--radius-sm)', whiteSpace: 'nowrap', zIndex: 100
                }}>
                    {content}
                </div>
            )}
        </div>
    );
};
