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

    // Fallbacks
    ...Object.fromEntries([
        'gaming-rgb', 'gaming-mmorpg', 'gaming-tactical',
        'luxury-gold', 'luxury-silent', 'luxury-dark',
        'organic-eco', 'organic-cozy', 'organic-handmade',
        'glass-frosted', 'glass-acrylic', 'glass-aurora',
        'luxury-gold', 'luxury-silent', 'luxury-dark',
        'organic-eco', 'organic-cozy', 'organic-handmade',
        'glass-frosted', 'glass-acrylic', 'glass-aurora',
        'soft-neumorphic', 'soft-claymorphic', 'soft-inflated',
        'brutalist-neo', 'brutalist-industrial', 'brutalist-raw',
        'real-skeuomorphic', 'real-metallic', 'real-cockpit',
        'edit-magazine', 'edit-newspaper', 'edit-docs',
        'dense-trading', 'dense-ops', 'dense-bloomberg',
        'mobile-ios', 'mobile-android', 'mobile-superapp',
        'exp-maximalist', 'exp-bauhaus', 'exp-glitch',
        'a11y-high-contrast', 'a11y-elderly', 'a11y-neuro',
        'cult-korean', 'cult-nordic', 'cult-arabic',
        'plat-apple', 'plat-google', 'plat-notion', 'plat-arc'
    ].map(id => [id, createPreset(id as PresetId, 'professional', id, {})]))
} as Record<PresetId, StylePreset>;
