import {
    PresetCategoryId,
    PresetId,
    OKLCH,
} from '../../contracts/abi';

export interface VisualLanguage {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    fontStyle: string;
    fontStretch: string;
    fontVariant: string;
    fontFeatureSettings: string;
    fontOpticalSizing: string;
    lineHeight: string;
    letterSpacing: string;
    wordSpacing: string;
    textTransform: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
    textDecoration: string;
    textDecorationThickness: string;
    textDecorationStyle: string;
    textDecorationColor: string;
    textUnderlineOffset: string;
    textAlign: string;
    textIndent: string;
    whiteSpace: string;
    textOverflow: string;
    hyphens: string;
    writingMode: string;
    direction: string;
    unicodeBidi: string;
    textShadow: string;
    verticalAlign: string;
    fontSmoothing: 'antialiased' | 'auto';
    color: string;
    backgroundColor: string;
    background: string;
    caretColor: string;
    accentColor: string;
    opacity: number;
    mixBlend: string;
    isolation: string;
    backgroundImage: string;
    backgroundRepeat: string;
    backgroundPosition: string;
    backgroundSize: string;
    backgroundAttachment: string;
    backgroundBlend: string;
    backgroundClip: string;
    backgroundOrigin: string;
    border: string;
    borderWidth: string;
    borderStyle: string;
    borderColor: string;
    borderRadius: string;
    borderRadiusTopLeft: string;
    borderRadiusTopRight: string;
    borderRadiusBottomLeft: string;
    borderRadiusBottomRight: string;
    outline: string;
    outlineWidth: string;
    outlineStyle: string;
    outlineColor: string;
    outlineOffset: string;
    boxShadow: string;
    filter: string;
    backdropFilter: string;
    margin: string;
    marginInline: string;
    marginBlock: string;
    padding: string;
    paddingInline: string;
    paddingBlock: string;
    width: string;
    minWidth: string;
    maxWidth: string;
    height: string;
    minHeight: string;
    maxHeight: string;
    boxSizing: string;
    display: string;
    flexDirection: string;
    flexWrap: string;
    flexFlow: string;
    justifyContent: string;
    alignItems: string;
    alignContent: string;
    gap: string;
    rowGap: string;
    columnGap: string;
    flexGrow: string;
    flexShrink: string;
    flexBasis: string;
    order: string;
    alignSelf: string;
    gridTemplateColumns: string;
    gridTemplateRows: string;
    gridTemplateAreas: string;
    gridAutoColumns: string;
    gridAutoRows: string;
    gridAutoFlow: string;
    gridColumn: string;
    gridRow: string;
    gridArea: string;
    placeItems: string;
    placeContent: string;
    position: string;
    top: string;
    right: string;
    bottom: string;
    left: string;
    zIndex: string;
    inset: string;
    transitionProperty: string;
    transitionDuration: string;
    transitionTimingFunction: string;
    transitionDelay: string;
    animationName: string;
    animationDuration: string;
    animationTimingFunction: string;
    animationDelay: string;
    animationIterationCount: string;
    animationDirection: string;
    animationFillMode: string;
    animationPlayState: string;
    transform: string;
    transformOrigin: string;
    perspective: string;
    backfaceVisibility: string;
    cursor: string;
    pointerEvents: string;
    userSelect: string;
    touchAction: string;
    scrollBehavior: string;
    overscrollBehavior: string;
    objectFit: string;
    objectPosition: string;
    imageRendering: string;
    aspectRatio: string;
    mask: string;
    maskImage: string;
    maskSize: string;
    overflow: string;
    overflowX: string;
    overflowY: string;
    scrollbarWidth: string;
    scrollbarColor: string;
    scrollMargin: string;
    scrollPadding: string;
    skeuomorphism: number;
    realism: number;
    noise: number;
    softness: number;
    geometry: 'sharp' | 'soft' | 'round' | 'pill';
    density: 'airy' | 'normal' | 'compact' | 'tight';
    shadowType: 'none' | 'soft' | 'hard' | 'neon' | 'inner';
    shape: 'geometric' | 'organic' | 'abstract';
    depth: 'flat' | 'layered' | 'floating' | 'deep';
    motion: 'none' | 'snappy' | 'smooth' | 'bouncy';
    contrast: 'low' | 'medium' | 'high' | 'extreme';
    light: 'flat' | 'diffuse' | 'directional' | 'neon';
    textures: 'none' | 'grain' | 'noise' | 'paper' | 'brushed';
    saturation: 'grayscale' | 'muted' | 'vibrant' | 'neon';
}

export interface StylePreset {
  id: PresetId;
  category: PresetCategoryId;
  name: string;
  visual: VisualLanguage;
  spacingBase: number;
  radiusBase: number;
  borderThickness: number;
  shadowBlur: number;
  typography: {
    family: string;
    weights: number[];
    sizeBase: number;
  };
  background?: {
      image?: string;
      size?: string;
      position?: string;
      repeat?: string;
      color?: string;
  };
}

export const CATEGORIES: Record<PresetCategoryId, { name: string, description: string }> = {
    minimal: { name: 'Minimal / Clean', description: 'Focus on whitespace and core functions.' },
    professional: { name: 'Professional / Corporate', description: 'Trustworthy, balanced, and structured.' },
    startup: { name: 'Modern Startup', description: 'Cutting-edge, sleek, and high-energy.' },
    playful: { name: 'Playful / Cute', description: 'Soft shapes, joyful vibes, and tactile.' },
    futuristic: { name: 'Futuristic / Sci-Fi', description: 'Holographic, neon, and high-tech.' },
    gaming: { name: 'Gaming', description: 'Immersive, RGB, and interactive.' },
    retro: { name: 'Retro', description: 'Nostalgic, pixelated, and glossy.' },
    luxury: { name: 'Premium / Luxury', description: 'Sophisticated, elegant, and refined.' },
    organic: { name: 'Organic / Natural', description: 'Earthy, warm, and human.' },
    glass: { name: 'Glass / Light Physics', description: 'Transparency, refraction, and layers.' },
    'soft-depth': { name: 'Soft Depth', description: 'Neumorphism and puffy interfaces.' },
    brutalism: { name: 'Brutalism', description: 'Raw, honest, and high-contrast.' },
    realistic: { name: 'High Detail / Realistic', description: 'Physical controls and metallic surfaces.' },
    editorial: { name: 'Editorial / Content', description: 'Typography-first and magazine-like.' },
    'data-dense': { name: 'Data-Dense', description: 'Dashboards, monitoring, and terminals.' },
    'mobile-native': { name: 'Mobile-Native', description: 'Platform-specific patterns.' },
    experimental: { name: 'Experimental', description: 'Bauhaus, glitch, and chaos.' },
    a11y: { name: 'Accessibility-Focused', description: 'Optimized for diverse needs.' },
    cultural: { name: 'Cultural / Regional', description: 'Regional trends and aesthetics.' },
    platform: { name: 'Platform-Inspired', description: 'Inspired by iconic apps.' }
};

const baseVisual: VisualLanguage = {
    fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '400', fontStyle: 'normal',
    fontStretch: 'normal', fontVariant: 'normal', fontFeatureSettings: 'normal', fontOpticalSizing: 'auto',
    lineHeight: '1.5', letterSpacing: 'normal', wordSpacing: 'normal', textTransform: 'none',
    textDecoration: 'none', textDecorationThickness: 'auto', textDecorationStyle: 'solid', textDecorationColor: 'currentcolor',
    textUnderlineOffset: 'auto', textAlign: 'left', textIndent: '0', whiteSpace: 'normal',
    textOverflow: 'clip', hyphens: 'manual', writingMode: 'horizontal-tb', direction: 'ltr',
    unicodeBidi: 'normal', textShadow: 'none', verticalAlign: 'baseline', fontSmoothing: 'antialiased',
    color: 'inherit', backgroundColor: 'transparent', background: 'none', caretColor: 'auto',
    accentColor: 'auto', opacity: 1, mixBlend: 'normal', isolation: 'auto',
    backgroundImage: 'none', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'auto',
    backgroundAttachment: 'scroll', backgroundBlend: 'normal', backgroundClip: 'border-box', backgroundOrigin: 'padding-box',
    border: 'none', borderWidth: '0', borderStyle: 'solid', borderColor: 'transparent',
    borderRadius: '0', borderRadiusTopLeft: '0', borderRadiusTopRight: '0', borderRadiusBottomLeft: '0', borderRadiusBottomRight: '0',
    outline: 'none', outlineWidth: '0', outlineStyle: 'solid', outlineColor: 'transparent', outlineOffset: '0',
    boxShadow: 'none', filter: 'none', backdropFilter: 'none',
    margin: '0', marginInline: '0', marginBlock: '0', padding: 'var(--spacing-6)',
    paddingInline: 'var(--spacing-6)', paddingBlock: 'var(--spacing-6)',
    width: 'auto', minWidth: '0', maxWidth: 'none', height: 'auto', minHeight: '0', maxHeight: 'none', boxSizing: 'border-box',
    display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', flexFlow: 'row nowrap',
    justifyContent: 'flex-start', alignItems: 'stretch', alignContent: 'stretch', gap: 'var(--spacing-4)',
    rowGap: 'var(--spacing-4)', columnGap: 'var(--spacing-4)', flexGrow: '0', flexShrink: '1',
    flexBasis: 'auto', order: '0', alignSelf: 'auto',
    gridTemplateColumns: 'none', gridTemplateRows: 'none', gridTemplateAreas: 'none', gridAutoColumns: 'auto',
    gridAutoRows: 'auto', gridAutoFlow: 'row', gridColumn: 'auto', gridRow: 'auto',
    gridArea: 'auto', placeItems: 'stretch', placeContent: 'stretch',
    position: 'static', top: 'auto', right: 'auto', bottom: 'auto', left: 'auto', zIndex: 'auto', inset: 'auto',
    transitionProperty: 'all', transitionDuration: '0.3s', transitionTimingFunction: 'ease', transitionDelay: '0s',
    animationName: 'none', animationDuration: '0s', animationTimingFunction: 'ease', animationDelay: '0s',
    animationIterationCount: '1', animationDirection: 'normal', animationFillMode: 'none', animationPlayState: 'running',
    transform: 'none', transformOrigin: '50% 50%', perspective: 'none', backfaceVisibility: 'visible',
    cursor: 'auto', pointerEvents: 'auto', userSelect: 'auto', touchAction: 'auto',
    scrollBehavior: 'auto', overscrollBehavior: 'auto',
    objectFit: 'fill', objectPosition: '50% 50%', imageRendering: 'auto', aspectRatio: 'auto',
    mask: 'none', maskImage: 'none', maskSize: 'auto',
    overflow: 'visible', overflowX: 'visible', overflowY: 'visible', scrollbarWidth: 'auto',
    scrollbarColor: 'auto', scrollMargin: '0', scrollPadding: '0',
    skeuomorphism: 0, realism: 0, noise: 0, softness: 0.5, geometry: 'soft', density: 'normal', shadowType: 'soft',
    shape: 'geometric', depth: 'layered', motion: 'smooth', contrast: 'medium', light: 'diffuse', textures: 'none', saturation: 'muted'
};

const createPreset = (id: PresetId, category: PresetCategoryId, name: string, visual: Partial<VisualLanguage>): StylePreset => ({
    id, category, name,
    visual: { ...baseVisual, ...visual },
    spacingBase: 16, radiusBase: 8, borderThickness: 1, shadowBlur: 4,
    typography: { family: visual.fontFamily || 'Inter', weights: [400, 700], sizeBase: 16 }
});

export const STYLE_PRESETS: Record<PresetId, StylePreset> = {
    'minimal-ultra': createPreset('minimal-ultra', 'minimal', 'Ultra Minimal', {
        geometry: 'sharp', density: 'airy', letterSpacing: '-0.04em', border: 'none', shadowType: 'none', padding: '64px', gap: '48px',
        fontFamily: '"Geist", "Inter", sans-serif', fontWeight: '300', color: 'var(--color-tone-1000)', backgroundColor: 'var(--color-tone-0)',
        transitionDuration: '0.4s', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', scrollBehavior: 'smooth',
        lineHeight: '1.2', softness: 0, depth: 'flat'
    }),
    'minimal-scandi': createPreset('minimal-scandi', 'minimal', 'Scandinavian', {
        softness: 0.9, density: 'airy', letterSpacing: '-0.015em', borderRadius: '16px', border: 'none',
        backgroundColor: 'var(--color-tone-50)', padding: '40px', gap: '32px',
        transitionDuration: '0.5s', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif', fontWeight: '400',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lineHeight: '1.6', color: 'var(--color-tone-900)', shadowType: 'soft', depth: 'layered'
    }),
    'minimal-japanese': createPreset('minimal-japanese', 'minimal', 'Japanese Minimal', {
        border: 'none', borderStyle: 'solid', borderWidth: '0 0 1px 0', borderColor: 'var(--color-tone-300)',
        shape: 'geometric', fontFamily: '"Noto Serif JP", serif', letterSpacing: '0.08em',
        padding: '80px', gap: '64px', backgroundColor: 'var(--color-tone-50)', lineHeight: '2',
        color: 'var(--color-tone-800)', softness: 0, density: 'airy', shadowType: 'none', depth: 'flat',
        fontWeight: '400'
    }),
    'prof-enterprise': createPreset('prof-enterprise', 'professional', 'Enterprise Pro', {
        geometry: 'soft', density: 'compact', border: 'thin', borderRadius: '4px', borderWidth: '1px',
        borderColor: 'var(--color-tone-200)', backgroundColor: 'var(--color-tone-0)', padding: '24px', gap: '16px',
        fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', lineHeight: '1.5',
        letterSpacing: '-0.01em', color: 'var(--color-tone-900)', shadowType: 'soft', depth: 'layered',
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        fontSmoothing: 'antialiased', softness: 0.2
    }),
    'prof-banking': createPreset('prof-banking', 'professional', 'Global Banking', {
        fontFamily: '"Cinzel", "Playfair Display", serif', fontWeight: '500', letterSpacing: '0.05em',
        geometry: 'sharp', density: 'compact', border: '1px solid var(--color-tone-300)',
        backgroundColor: 'var(--color-tone-50)', color: 'var(--color-tone-950)',
        shadowType: 'soft', depth: 'layered', padding: '32px', gap: '20px',
        textTransform: 'uppercase', softness: 0.1
    }),
    'prof-consulting': createPreset('prof-consulting', 'professional', 'Consulting Prime', {
        fontFamily: '"Montserrat", sans-serif', fontWeight: '600', textTransform: 'uppercase',
        letterSpacing: '0.15em', geometry: 'sharp', density: 'airy', padding: '48px',
        border: '2px solid var(--color-tone-900)', backgroundColor: 'var(--color-tone-0)',
        color: 'var(--color-tone-900)', shadowType: 'none', depth: 'flat', softness: 0
    }),
    'startup-saas': createPreset('startup-saas', 'startup', 'SaaS Modern', {
        fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: '500',
        geometry: 'round', density: 'normal', borderRadius: '24px',
        backgroundColor: 'var(--color-tone-0)', color: 'var(--color-tone-900)',
        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        padding: '32px', gap: '24px', shadowType: 'soft', depth: 'floating', softness: 0.8
    }),
    'startup-linear': createPreset('startup-linear', 'startup', 'Linear Look', {
        fontFamily: '"Geist", sans-serif', fontWeight: '400', letterSpacing: '-0.03em',
        geometry: 'sharp', density: 'compact', borderRadius: '6px',
        backgroundColor: 'var(--color-tone-0)', border: '1px solid var(--color-tone-200)',
        shadowType: 'soft', depth: 'layered', motion: 'snappy', softness: 0.1
    }),
    'startup-stripe': createPreset('startup-stripe', 'startup', 'Stripe Style', {
        fontFamily: '"Inter", sans-serif', fontWeight: '500',
        geometry: 'soft', density: 'normal', borderRadius: '8px',
        backgroundColor: 'var(--color-tone-50)', boxShadow: '0 50px 100px -20px rgba(50,50,93,0.25), 0 30px 60px -30px rgba(0,0,0,0.3)',
        padding: '40px', gap: '32px', shadowType: 'soft', depth: 'layered', softness: 0.4
    }),
    'startup-ai': createPreset('startup-ai', 'startup', 'AI Intelligent', {
        fontFamily: '"Space Grotesk", sans-serif', fontWeight: '400',
        geometry: 'round', density: 'airy', borderRadius: '32px',
        backgroundColor: 'var(--color-tone-950)', color: 'var(--color-tone-0)',
        border: '1px solid var(--color-tone-800)', shadowType: 'neon', depth: 'floating',
        motion: 'bouncy', padding: '48px', softness: 0.9, light: 'neon'
    }),
    'playful-kawaii': createPreset('playful-kawaii', 'playful', 'Kawaii Soft', {
        fontFamily: '"Quicksand", sans-serif', fontWeight: '700',
        geometry: 'pill', density: 'airy', borderRadius: '999px',
        backgroundColor: 'var(--color-tone-50)', color: 'var(--color-tone-800)',
        border: '4px solid var(--color-tone-200)', shadowType: 'soft', depth: 'layered',
        padding: '40px', gap: '32px', softness: 1, saturation: 'vibrant'
    }),
    'playful-bubblegum': createPreset('playful-bubblegum', 'playful', 'Bubblegum Pop', {
        fontFamily: '"Fredoka", sans-serif', fontWeight: '600',
        geometry: 'round', density: 'normal', borderRadius: '40px',
        backgroundColor: 'var(--color-tone-100)', color: 'var(--color-tone-900)',
        boxShadow: '0 10px 0 var(--color-tone-300)', padding: '32px', gap: '24px',
        shadowType: 'hard', depth: 'deep', softness: 0.8, saturation: 'vibrant'
    }),
    'playful-toy': createPreset('playful-toy', 'playful', 'Toy Box', {
        fontFamily: '"Comic Neue", cursive', fontWeight: '700',
        geometry: 'sharp', density: 'compact', borderRadius: '12px',
        border: '4px solid #000', backgroundColor: '#fff',
        boxShadow: '8px 8px 0 #000', padding: '24px', gap: '16px',
        shadowType: 'hard', depth: 'flat', softness: 0, saturation: 'vibrant'
    }),
    'future-cyberpunk': createPreset('future-cyberpunk', 'futuristic', 'Cyberpunk 2077', {
        fontFamily: '"Orbitron", sans-serif', fontWeight: '900',
        geometry: 'sharp', density: 'tight', borderRadius: '0px',
        backgroundColor: '#000', color: '#fcee0a', border: '2px solid #fcee0a',
        textShadow: '2px 2px #ff003c', shadowType: 'neon', depth: 'flat',
        padding: '20px', gap: '12px', softness: 0, light: 'neon', contrast: 'extreme'
    }),
    'future-holographic': createPreset('future-holographic', 'futuristic', 'Hologram Glass', {
        fontFamily: '"Exo 2", sans-serif', fontWeight: '300',
        geometry: 'soft', density: 'airy', borderRadius: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)', color: '#fff',
        shadowType: 'soft', depth: 'floating', padding: '40px', softness: 0.7,
        light: 'diffuse', textures: 'noise'
    }),
    'future-space': createPreset('future-space', 'futuristic', 'Space Mission', {
        fontFamily: '"JetBrains Mono", monospace', fontWeight: '400',
        geometry: 'sharp', density: 'compact', borderRadius: '2px',
        backgroundColor: '#050505', color: '#00ff41', border: '1px solid #00ff41',
        shadowType: 'neon', depth: 'layered', padding: '16px', gap: '8px',
        softness: 0, light: 'directional', contrast: 'high'
    }),
    'retro-y2k': createPreset('retro-y2k', 'retro', 'Y2K Aesthetic', {
        fontFamily: '"Lucida Console", Monaco, monospace', fontWeight: '400',
        geometry: 'round', density: 'normal', borderRadius: '30px',
        backgroundColor: 'var(--color-tone-100)', color: 'var(--color-tone-900)',
        background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
        border: '2px solid #fff', boxShadow: 'inset 0 0 15px rgba(255,255,255,0.8), 5px 5px 15px rgba(0,0,0,0.1)',
        padding: '32px', gap: '24px', shadowType: 'soft', depth: 'layered', softness: 0.9,
        saturation: 'vibrant', textures: 'grain'
    }),
    'retro-frutiger': createPreset('retro-frutiger', 'retro', 'Frutiger Aero', {
        fontFamily: '"Segoe UI", Roboto, sans-serif', fontWeight: '600',
        geometry: 'round', density: 'airy', borderRadius: '25px',
        background: 'linear-gradient(to bottom, #7abcff 0%, #60abf8 44%, #4096ee 100%)',
        color: '#fff', border: '1px solid rgba(255,255,255,0.5)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.8)',
        padding: '40px', gap: '32px', softness: 0.8, light: 'directional', realism: 1,
        skeuomorphism: 1
    }),
    'retro-8bit': createPreset('retro-8bit', 'retro', '8-Bit Classic', {
        fontFamily: '"Press Start 2P", cursive', fontSize: '12px',
        geometry: 'sharp', density: 'tight', borderRadius: '0px',
        backgroundColor: '#000', color: '#00ff00', border: '4px solid #fff',
        boxShadow: '8px 8px 0 #555', padding: '16px', gap: '8px',
        imageRendering: 'pixelated', shadowType: 'hard', depth: 'flat', softness: 0,
        contrast: 'extreme'
    }),
    'retro-glossy': createPreset('retro-glossy', 'retro', 'Web 2.0 Glossy', {
        fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: '700',
        geometry: 'round', density: 'normal', borderRadius: '15px',
        background: 'linear-gradient(to bottom, #eeeeee 0%, #cccccc 100%)',
        border: '1px solid #999', boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        padding: '24px', gap: '16px', softness: 0.5, light: 'directional',
        skeuomorphism: 0.8
    }),

    'gaming-rgb': createPreset('gaming-rgb', 'gaming', 'RGB Gamer', {
        fontFamily: '"Rajdhani", sans-serif', fontWeight: '700',
        geometry: 'sharp', density: 'normal', borderRadius: '4px',
        backgroundColor: '#0a0a0a', color: '#fff',
        border: '2px solid #ff00ff', boxShadow: '0 0 10px #ff00ff, 0 0 20px #00ffff',
        padding: '24px', gap: '16px', light: 'neon', saturation: 'neon',
        animationName: 'rgb-pulse', animationDuration: '2s'
    }),
    'gaming-mmorpg': createPreset('gaming-mmorpg', 'gaming', 'Legendary RPG', {
        fontFamily: '"MedievalSharp", cursive', fontWeight: '400',
        geometry: 'soft', density: 'compact', borderRadius: '0px',
        background: 'url("/assets/textures/parchment.png"), #3d2b1f',
        color: '#f4e4bc', border: '8px double #8b4513',
        boxShadow: 'inset 0 0 50px #000', padding: '32px', gap: '12px',
        softness: 0.2, skeuomorphism: 0.9, realism: 1
    }),
    'gaming-tactical': createPreset('gaming-tactical', 'gaming', 'Tactical HUD', {
        fontFamily: '"Share Tech Mono", monospace', fontWeight: '400',
        geometry: 'sharp', density: 'tight', borderRadius: '0px',
        backgroundColor: 'rgba(0, 20, 0, 0.8)', color: '#00ff00',
        borderLeft: '4px solid #00ff00', borderRight: '1px solid #004400',
        padding: '12px', gap: '8px', shadowType: 'neon', depth: 'flat',
        softness: 0, light: 'directional', contrast: 'high'
    }),
    'luxury-gold': createPreset('luxury-gold', 'luxury', 'Gold & Velvet', {
        fontFamily: '"Bodoni Moda", serif', fontWeight: '400', fontStyle: 'italic',
        geometry: 'soft', density: 'airy', borderRadius: '0px',
        backgroundColor: '#1a1a1a', color: '#d4af37',
        border: '1px solid #d4af37', boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        padding: '64px', gap: '40px', shadowType: 'soft', depth: 'deep',
        softness: 0.3, letterSpacing: '0.1em'
    }),
    'luxury-silent': createPreset('luxury-silent', 'luxury', 'Silent Luxury', {
        fontFamily: '"Cormorant Garamond", serif', fontWeight: '300',
        geometry: 'sharp', density: 'airy', borderRadius: '0px',
        backgroundColor: '#f5f5f5', color: '#333',
        padding: '80px', gap: '48px', shadowType: 'none', depth: 'flat',
        softness: 0, letterSpacing: '0.2em', textTransform: 'uppercase'
    }),
    'luxury-dark': createPreset('luxury-dark', 'luxury', 'Obsidian Night', {
        fontFamily: '"Inter", sans-serif', fontWeight: '200',
        geometry: 'sharp', density: 'normal', borderRadius: '0px',
        backgroundColor: '#050505', color: '#fff',
        border: '1px solid #222', padding: '48px', gap: '32px',
        shadowType: 'soft', depth: 'layered', softness: 0.1,
        letterSpacing: '0.05em'
    }),
    'organic-eco': createPreset('organic-eco', 'organic', 'Eco Friendly', {
        fontFamily: '"Outfit", sans-serif', fontWeight: '400',
        geometry: 'round', density: 'airy', borderRadius: '40px',
        backgroundColor: '#f0f4f0', color: '#2d4a22',
        border: '2px solid #c3d9c3', padding: '32px', gap: '24px',
        softness: 0.9, shape: 'organic', textures: 'paper'
    }),
    'organic-cozy': createPreset('organic-cozy', 'organic', 'Cozy Home', {
        fontFamily: '"Varela Round", sans-serif', fontWeight: '400',
        geometry: 'soft', density: 'normal', borderRadius: '24px',
        backgroundColor: '#fffaf0', color: '#5d4037',
        boxShadow: '0 8px 24px rgba(93,64,55,0.1)', padding: '24px', gap: '16px',
        softness: 0.8, saturation: 'muted'
    }),
    'organic-handmade': createPreset('organic-handmade', 'organic', 'Handmade Craft', {
        fontFamily: '"Patrick Hand", cursive', fontWeight: '400',
        geometry: 'soft', density: 'airy', borderRadius: '12px',
        backgroundColor: '#fff', color: '#333',
        border: '2px dashed #8d6e63', padding: '20px', gap: '16px',
        softness: 0.5, textures: 'grain', shape: 'organic'
    }),
    'glass-frosted': createPreset('glass-frosted', 'glass', 'Frosted Glass', {
        fontFamily: '"Inter", sans-serif', fontWeight: '300',
        geometry: 'soft', density: 'normal', borderRadius: '16px',
        backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.3)', color: '#000',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)', padding: '32px', gap: '24px',
        softness: 0.6, light: 'diffuse', textures: 'noise'
    }),
    'glass-acrylic': createPreset('glass-acrylic', 'glass', 'Windows Acrylic', {
        fontFamily: '"Segoe UI Variable", sans-serif', fontWeight: '400',
        geometry: 'sharp', density: 'compact', borderRadius: '8px',
        backgroundColor: 'rgba(32, 32, 32, 0.7)', backdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)', padding: '24px', gap: '16px',
        softness: 0.2, light: 'directional'
    }),
    'glass-aurora': createPreset('glass-aurora', 'glass', 'Aurora Borealis', {
        fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: '600',
        geometry: 'round', density: 'airy', borderRadius: '32px',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        backdropFilter: 'blur(40px)', border: '1px solid rgba(255,255,255,0.2)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.1)', padding: '48px', gap: '32px',
        softness: 0.9, light: 'neon', saturation: 'vibrant'
    }),
    'soft-neumorphic': createPreset('soft-neumorphic', 'soft-depth', 'Classic Neumorphism', {
        fontFamily: '"Nunito", sans-serif', fontWeight: '600',
        geometry: 'round', density: 'normal', borderRadius: '40px',
        backgroundColor: '#e0e5ec', color: '#444',
        boxShadow: '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
        padding: '32px', gap: '24px', softness: 1, depth: 'deep', skeuomorphism: 0.7
    }),
    'soft-claymorphic': createPreset('soft-claymorphic', 'soft-depth', 'Claymorphism', {
        fontFamily: '"Fredoka", sans-serif', fontWeight: '500',
        geometry: 'round', density: 'airy', borderRadius: '35px',
        backgroundColor: '#f1f2f6', color: '#2f3542',
        boxShadow: 'inset 8px 8px 16px 0 rgba(0,0,0,0.1), inset -8px -8px 16px 0 rgba(255,255,255,0.8), 10px 10px 20px 0 rgba(0,0,0,0.1)',
        padding: '40px', gap: '32px', softness: 0.9, depth: 'floating', skeuomorphism: 1
    }),
    'soft-inflated': createPreset('soft-inflated', 'soft-depth', 'Inflated Puffy', {
        fontFamily: '"Quicksand", sans-serif', fontWeight: '700',
        geometry: 'pill', density: 'airy', borderRadius: '999px',
        backgroundColor: '#fff', color: '#ff4757',
        border: '8px solid #ff4757', boxShadow: '0 15px 0 #ff4757, 0 20px 40px rgba(0,0,0,0.2)',
        padding: '48px', gap: '32px', softness: 1, motion: 'bouncy'
    }),
    'brutalist-neo': createPreset('brutalist-neo', 'brutalism', 'Neo Brutalism', {
        fontFamily: '"Public Sans", sans-serif', fontWeight: '800',
        geometry: 'sharp', density: 'normal', borderRadius: '0px',
        backgroundColor: '#FFDE03', color: '#000',
        border: '4px solid #000', boxShadow: '12px 12px 0 #000',
        padding: '32px', gap: '24px', shadowType: 'hard', softness: 0,
        contrast: 'extreme'
    }),
    'brutalist-industrial': createPreset('brutalist-industrial', 'brutalism', 'Industrial Raw', {
        fontFamily: '"Roboto Mono", monospace', fontWeight: '500',
        geometry: 'sharp', density: 'compact', borderRadius: '0px',
        backgroundColor: '#222', color: '#eee',
        border: '1px solid #444', padding: '20px', gap: '16px',
        textures: 'brushed', softness: 0, light: 'directional'
    }),
    'brutalist-raw': createPreset('brutalist-raw', 'brutalism', 'Raw Web', {
        fontFamily: '"Times New Roman", serif', fontWeight: '400',
        geometry: 'sharp', density: 'tight', borderRadius: '0px',
        backgroundColor: '#fff', color: '#000',
        border: '1px solid #000', textDecoration: 'underline',
        padding: '16px', gap: '8px', softness: 0, contrast: 'high'
    }),
    'real-skeuomorphic': createPreset('real-skeuomorphic', 'realistic', 'Classic Skeuo', {
        fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: '700',
        geometry: 'round', density: 'normal', borderRadius: '12px',
        background: 'linear-gradient(to bottom, #f0f0f0 0%, #bebebe 100%)',
        border: '1px solid #777', boxShadow: '0 2px 5px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.8)',
        padding: '24px', gap: '16px', softness: 0.4, skeuomorphism: 1, realism: 0.8
    }),
    'real-metallic': createPreset('real-metallic', 'realistic', 'Brushed Metal', {
        fontFamily: '"Share Tech", sans-serif', fontWeight: '400',
        geometry: 'sharp', density: 'compact', borderRadius: '4px',
        background: 'linear-gradient(135deg, #d1d1d1 0%, #757575 50%, #d1d1d1 100%)',
        border: '1px solid #555', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)',
        padding: '20px', gap: '12px', softness: 0.1, textures: 'brushed', realism: 1
    }),
    'real-cockpit': createPreset('real-cockpit', 'realistic', 'Cockpit HUD', {
        fontFamily: '"Orbitron", sans-serif', fontWeight: '500',
        geometry: 'sharp', density: 'tight', borderRadius: '2px',
        backgroundColor: '#0c0c0c', color: '#ff9900',
        border: '2px solid #ff9900', boxShadow: '0 0 15px rgba(255,153,0,0.4)',
        padding: '16px', gap: '8px', shadowType: 'neon', light: 'directional', realism: 0.9
    }),
    'edit-magazine': createPreset('edit-magazine', 'editorial', 'Magazine Gloss', {
        fontFamily: '"Playfair Display", serif', fontWeight: '900',
        geometry: 'sharp', density: 'airy', borderRadius: '0px',
        backgroundColor: '#fff', color: '#000',
        padding: '64px', gap: '48px', shadowType: 'none', depth: 'flat',
        lineHeight: '1.1', letterSpacing: '-0.05em', textTransform: 'uppercase'
    }),
    'edit-newspaper': createPreset('edit-newspaper', 'editorial', 'The Chronicle', {
        fontFamily: '"Old Standard TT", serif', fontWeight: '400',
        geometry: 'sharp', density: 'compact', borderRadius: '0px',
        backgroundColor: '#f4f1ea', color: '#1a1a1a',
        borderBottom: '4px double #000', padding: '40px', gap: '32px',
        textures: 'paper', softness: 0, shadowType: 'none'
    }),
    'edit-docs': createPreset('edit-docs', 'editorial', 'Technical Docs', {
        fontFamily: '"Inter", sans-serif', fontWeight: '400',
        geometry: 'soft', density: 'normal', borderRadius: '6px',
        backgroundColor: '#fff', color: '#333',
        border: '1px solid #e1e4e8', padding: '32px', gap: '20px',
        softness: 0.2, shadowType: 'soft'
    }),
    'dense-trading': createPreset('dense-trading', 'data-dense', 'Trading Terminal', {
        fontFamily: '"JetBrains Mono", monospace', fontSize: '11px',
        geometry: 'sharp', density: 'tight', borderRadius: '0px',
        backgroundColor: '#000', color: '#00ff00',
        border: '1px solid #333', padding: '8px', gap: '4px',
        softness: 0, contrast: 'high', shadowType: 'none'
    }),
    'dense-ops': createPreset('dense-ops', 'data-dense', 'Mission Control', {
        fontFamily: '"Roboto Condensed", sans-serif', fontSize: '12px',
        geometry: 'sharp', density: 'compact', borderRadius: '2px',
        backgroundColor: '#1a1a1a', color: '#00d4ff',
        border: '1px solid #00d4ff', padding: '12px', gap: '8px',
        softness: 0, light: 'neon', shadowType: 'neon'
    }),
    'dense-bloomberg': createPreset('dense-bloomberg', 'data-dense', 'Finance Pro', {
        fontFamily: 'Arial, sans-serif', fontSize: '12px', fontWeight: '700',
        geometry: 'sharp', density: 'tight', borderRadius: '0px',
        backgroundColor: '#000080', color: '#fff',
        border: '1px solid #fff', padding: '10px', gap: '6px',
        softness: 0, contrast: 'extreme'
    }),
    'mobile-ios': createPreset('mobile-ios', 'mobile-native', 'iOS Native', {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto', fontWeight: '400',
        geometry: 'soft', density: 'normal', borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(20px)',
        border: '0.5px solid rgba(0,0,0,0.1)', color: '#000',
        padding: '16px', gap: '12px', softness: 0.5, motion: 'smooth'
    }),
    'mobile-android': createPreset('mobile-android', 'mobile-native', 'Material You', {
        fontFamily: '"Roboto", sans-serif', fontWeight: '400',
        geometry: 'round', density: 'normal', borderRadius: '28px',
        backgroundColor: 'var(--color-tone-100)', color: 'var(--color-tone-900)',
        padding: '24px', gap: '16px', softness: 0.9, motion: 'snappy'
    }),
    'mobile-superapp': createPreset('mobile-superapp', 'mobile-native', 'Super App Asia', {
        fontFamily: '"Inter", sans-serif', fontWeight: '500',
        geometry: 'soft', density: 'compact', borderRadius: '12px',
        backgroundColor: '#fff', border: '1px solid #eee',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)', padding: '12px', gap: '8px',
        softness: 0.3, saturation: 'vibrant'
    }),
    'exp-maximalist': createPreset('exp-maximalist', 'experimental', 'Maximalist Chaos', {
        fontFamily: '"Archivo Black", sans-serif', fontWeight: '900',
        geometry: 'sharp', density: 'airy', borderRadius: '0px',
        background: 'repeating-linear-gradient(45deg, #ff00ff, #ff00ff 10px, #00ffff 10px, #00ffff 20px)',
        color: '#fff', border: '10px solid #000', transform: 'rotate(-2deg)',
        padding: '80px', gap: '64px', softness: 0, saturation: 'neon'
    }),
    'exp-bauhaus': createPreset('exp-bauhaus', 'experimental', 'Bauhaus Dessau', {
        fontFamily: '"Futura", "Inter", sans-serif', fontWeight: '700',
        geometry: 'sharp', density: 'normal', borderRadius: '0px',
        backgroundColor: '#f0e6d2', border: '5px solid #000',
        padding: '40px', gap: '32px', softness: 0, shape: 'geometric'
    }),
    'exp-glitch': createPreset('exp-glitch', 'experimental', 'Glitch Art', {
        fontFamily: '"Courier New", monospace', fontWeight: '700',
        geometry: 'sharp', density: 'tight', borderRadius: '0px',
        backgroundColor: '#000', color: '#fff',
        textShadow: '2px 0 #ff00ff, -2px 0 #00ffff', animationName: 'glitch-anim',
        animationDuration: '0.2s', animationIterationCount: 'infinite'
    }),
    'a11y-high-contrast': createPreset('a11y-high-contrast', 'a11y', 'Ultra Contrast', {
        fontFamily: '"Atkinson Hyperlegible", sans-serif', fontSize: '20px', fontWeight: '800',
        geometry: 'sharp', density: 'airy', borderRadius: '0px',
        backgroundColor: '#000', color: '#ffff00', border: '4px solid #ffff00',
        padding: '32px', gap: '24px', softness: 0, contrast: 'extreme'
    }),
    'a11y-elderly': createPreset('a11y-elderly', 'a11y', 'Elderly Friendly', {
        fontFamily: 'Arial, sans-serif', fontSize: '24px', fontWeight: '700',
        geometry: 'round', density: 'airy', borderRadius: '20px',
        backgroundColor: '#fff', color: '#000', border: '5px solid #000',
        padding: '48px', gap: '40px', softness: 0.8, contrast: 'high'
    }),
    'a11y-neuro': createPreset('a11y-neuro', 'a11y', 'Neuro-Calm', {
        fontFamily: '"Open Sans", sans-serif', fontWeight: '400',
        geometry: 'soft', density: 'airy', borderRadius: '15px',
        backgroundColor: '#e8e8e8', color: '#333',
        padding: '40px', gap: '32px', softness: 0.7, saturation: 'grayscale',
        motion: 'none'
    }),
    'cult-korean': createPreset('cult-korean', 'cultural', 'K-Design', {
        fontFamily: '"Pretendard", "Inter", sans-serif', fontWeight: '500',
        geometry: 'round', density: 'normal', borderRadius: '20px',
        backgroundColor: '#fff', color: '#111',
        border: '1px solid #eee', padding: '24px', gap: '16px',
        softness: 0.8, saturation: 'vibrant'
    }),
    'cult-nordic': createPreset('cult-nordic', 'cultural', 'Nordic Hygge', {
        fontFamily: '"Outfit", sans-serif', fontWeight: '300',
        geometry: 'soft', density: 'airy', borderRadius: '12px',
        backgroundColor: '#f9f9f9', color: '#2c3e50',
        padding: '48px', gap: '32px', softness: 0.9, textures: 'paper'
    }),
    'cult-arabic': createPreset('cult-arabic', 'cultural', 'Modern Arabic', {
        fontFamily: '"IBM Plex Sans Arabic", sans-serif', fontWeight: '400',
        geometry: 'soft', density: 'normal', borderRadius: '15px',
        backgroundColor: '#fff', border: '1px solid #d4af37',
        direction: 'rtl', padding: '32px', gap: '24px', softness: 0.5
    }),
    'plat-apple': createPreset('plat-apple', 'platform', 'Cupertino', {
        fontFamily: '"SF Pro Display", "Inter", sans-serif', fontWeight: '400',
        geometry: 'soft', density: 'normal', borderRadius: '12px',
        backgroundColor: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(30px)',
        border: '0.5px solid rgba(0,0,0,0.1)', padding: '24px', gap: '16px',
        softness: 0.6, motion: 'smooth'
    }),
    'plat-google': createPreset('plat-google', 'platform', 'Mountain View', {
        fontFamily: '"Product Sans", "Roboto", sans-serif', fontWeight: '400',
        geometry: 'round', density: 'normal', borderRadius: '999px',
        backgroundColor: '#fff', border: '1px solid #dadce0',
        boxShadow: '0 1px 2px rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)',
        padding: '20px', gap: '12px', softness: 1
    }),
    'plat-notion': createPreset('plat-notion', 'platform', 'Workspace', {
        fontFamily: 'system-ui, sans-serif', fontWeight: '400',
        geometry: 'soft', density: 'compact', borderRadius: '3px',
        backgroundColor: '#fff', border: '1px solid #edeef0',
        padding: '16px', gap: '8px', softness: 0.1, shadowType: 'soft'
    }),
    'plat-arc': createPreset('plat-arc', 'platform', 'The Browser Company', {
        fontFamily: '"Inter", sans-serif', fontWeight: '500',
        geometry: 'round', density: 'normal', borderRadius: '24px',
        backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(50px)',
        border: '1px solid rgba(255,255,255,0.1)', padding: '32px', gap: '24px',
        softness: 0.9, light: 'neon'
    }),
    // Fallbacks
    ...Object.fromEntries([].map(id => [id, createPreset(id as PresetId, 'professional', id, {})]))
} as Record<PresetId, StylePreset>;
