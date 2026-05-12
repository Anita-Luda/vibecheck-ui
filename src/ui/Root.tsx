import React from 'react';
import { App } from './App';

export const Root = () => {
  React.useEffect(() => {
    const fonts = [
        'Inter:wght@300;400;500;600;700',
        'Plus+Jakarta+Sans:wght@400;500;800',
        'Playfair+Display:wght@400;700;900',
        'Sora:wght@400;700;800',
        'Nunito:wght@400;900',
        'Quicksand:wght@400;700',
        'Rajdhani:wght@500;600;700',
        'Orbitron:wght@400',
        'Cinzel:wght@400;700',
        'Cormorant+Garamond:wght@300;400',
        'DM+Sans:wght@400;500',
        'Dancing+Script:wght@400;700',
        'Outfit:wght@400;700;900',
        'VT323',
        'JetBrains+Mono:wght@400;500;700',
        'Roboto+Mono:wght@400;500;700',
        'Roboto:wght@400;500',
        'Lora:wght@400;700',
        'Montserrat:wght@200;400',
        'Open+Sans:wght@400',
        'Archivo+Black',
        'Public+Sans:wght@400;900',
        'Noto+Serif+JP:wght@300;400'
    ];
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?${fonts.map(f => `family=${f}`).join('&')}&display=swap`;
    document.head.appendChild(link);
  }, []);

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
