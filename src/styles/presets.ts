export type PresetCategoryId =
  | 'minimal' | 'professional' | 'startup' | 'playful' | 'futuristic'
  | 'gaming' | 'retro' | 'luxury' | 'organic' | 'glass'
  | 'soft-depth' | 'brutalism' | 'realistic' | 'editorial' | 'data-dense'
  | 'mobile-native' | 'experimental' | 'a11y' | 'cultural' | 'platform';

export type PresetId =
  | 'minimal-ultra' | 'minimal-scandi' | 'minimal-japanese'
  | 'prof-enterprise' | 'prof-banking' | 'prof-consulting'
  | 'startup-saas' | 'startup-linear' | 'startup-stripe' | 'startup-ai'
  | 'playful-kawaii' | 'playful-bubblegum' | 'playful-toy'
  | 'future-cyberpunk' | 'future-holographic' | 'future-space'
  | 'gaming-rgb' | 'gaming-mmorpg' | 'gaming-tactical'
  | 'retro-y2k' | 'retro-frutiger' | 'retro-8bit' | 'retro-glossy'
  | 'luxury-gold' | 'luxury-silent' | 'luxury-dark'
  | 'organic-eco' | 'organic-cozy' | 'organic-handmade'
  | 'glass-frosted' | 'glass-acrylic' | 'glass-aurora'
  | 'soft-neumorphic' | 'soft-claymorphic' | 'soft-inflated'
  | 'brutalist-neo' | 'brutalist-industrial' | 'brutalist-raw'
  | 'real-skeuomorphic' | 'real-metallic' | 'real-cockpit'
  | 'edit-magazine' | 'edit-newspaper' | 'edit-docs'
  | 'dense-bloomberg' | 'dense-trading' | 'dense-ops'
  | 'mobile-ios' | 'mobile-android' | 'mobile-superapp'
  | 'exp-maximalist' | 'exp-bauhaus' | 'exp-glitch'
  | 'a11y-high-contrast' | 'a11y-elderly' | 'a11y-neuro'
  | 'cult-korean' | 'cult-nordic' | 'cult-arabic'
  | 'plat-apple' | 'plat-google' | 'plat-notion' | 'plat-arc';

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
        border: 'none', borderStyle: 'solid', borderWidth: '0 0 1px 0', borderColor: 'var(--color-tone-200)',
        shape: 'geometric', fontFamily: '"Noto Serif JP"', letterSpacing: '0.05em',
        padding: '48px', gap: '64px', backgroundColor: 'var(--color-tone-0)', lineHeight: '1.8'
    }),
    'prof-enterprise': createPreset('prof-enterprise', 'professional', 'Enterprise Pro', {
        geometry: 'soft', density: 'compact', border: 'thin', borderRadius: '4px', borderWidth: '1px',
        borderColor: 'var(--color-tone-200)', backgroundColor: 'var(--color-tone-0)', padding: '12px', gap: '12px',
        fontFamily: 'Inter', fontSize: '14px'
    }),
    'prof-banking': createPreset('prof-banking', 'professional', 'Global Banking', {
        depth: 'layered', border: 'thin', fontWeight: '700', borderRadius: '8px',
        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
        backgroundColor: 'var(--color-tone-0)', padding: '24px', gap: '20px',
        fontFamily: 'system-ui', letterSpacing: '-0.01em'
    }),
    'prof-consulting': createPreset('prof-consulting', 'professional', 'Consulting Prime', {
        fontFamily: '"Playfair Display"', fontStyle: 'italic', letterSpacing: '0.02em',
        border: 'none', borderStyle: 'solid', borderWidth: '0 0 1px 0', borderColor: 'var(--color-tone-300)', borderRadius: '0',
        padding: '32px', gap: '40px', backgroundColor: 'var(--color-tone-50)'
    }),
    'startup-saas': createPreset('startup-saas', 'startup', 'Modern SaaS', {
        fontFamily: '"Plus Jakarta Sans"', borderRadius: '16px', border: 'none',
        boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', backgroundColor: 'var(--color-tone-0)',
        padding: '32px', gap: '32px', transitionDuration: '0.3s', transitionTimingFunction: 'ease-out',
        fontWeight: '600'
    }),
    'startup-linear': createPreset('startup-linear', 'startup', 'Linear-like', {
        fontFamily: 'Inter', borderRadius: '6px', border: 'thin', borderColor: 'var(--color-tone-200)',
        backgroundColor: 'var(--color-tone-0)', padding: '8px', gap: '12px', density: 'compact',
        fontSize: '13px', letterSpacing: '-0.01em', boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
    }),
    'startup-stripe': createPreset('startup-stripe', 'startup', 'Stripe-like', {
        fontFamily: 'system-ui', borderRadius: '4px', border: 'none', boxShadow: '0 7px 14px rgba(50,50,93,.1)',
        backgroundColor: 'var(--color-tone-0)', padding: '40px', gap: '24px',
        transitionDuration: '0.15s', fontWeight: '500'
    }),
    'startup-ai': createPreset('startup-ai', 'startup', 'AI Native', {
        fontFamily: 'Sora', borderRadius: '32px', border: 'thin', borderColor: 'var(--color-tone-300)',
        backgroundColor: 'var(--color-tone-0)', padding: '40px', gap: '40px', shadowType: 'neon',
        backdropFilter: 'blur(10px)', letterSpacing: '-0.02em'
    }),
    'playful-kawaii': createPreset('playful-kawaii', 'playful', 'Kawaii Soft', {
        fontFamily: 'Nunito', borderRadius: '40px', border: 'none', backgroundColor: '#fff5f7',
        padding: '48px', gap: '48px', motion: 'bouncy', transitionDuration: '0.6s',
        transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }),
    'playful-bubblegum': createPreset('playful-bubblegum', 'playful', 'Bubblegum', {
        fontFamily: 'Quicksand', borderRadius: '60px', border: 'none', backgroundColor: '#fff',
        padding: '32px', gap: '32px', realism: 0.3, boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
        fontWeight: '700'
    }),
    'playful-toy': createPreset('playful-toy', 'playful', 'Toy-like', {
        fontFamily: '"Fredoka One"', borderRadius: '99px', border: 'bold', borderWidth: '6px',
        borderColor: 'var(--color-tone-1000)', padding: '24px', gap: '24px',
        shadowType: 'hard', textTransform: 'uppercase'
    }),
    'future-cyberpunk': createPreset('future-cyberpunk', 'futuristic', 'Cyberpunk 2077', {
        geometry: 'sharp', light: 'neon', shadowType: 'neon', textTransform: 'uppercase', backgroundBlend: 'overlay',
        fontFamily: '"Rajdhani"', fontWeight: '700', letterSpacing: '0.2em',
        borderWidth: '3px', borderColor: 'var(--color-tone-500)', borderRadius: '0', transform: 'skew(-3deg)',
        animationName: 'glitch', animationDuration: '1s', cursor: 'crosshair', padding: '32px', gap: '16px'
    }),
    'future-holographic': createPreset('future-holographic', 'futuristic', 'Holographic', {
        light: 'neon', depth: 'floating', backdropFilter: 'blur(20px) saturate(200%)', opacity: 0.6,
        borderRadius: '12px', border: 'thin', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.4)',
        backgroundColor: 'rgba(255,255,255,0.05)', padding: '48px', gap: '24px',
        boxShadow: '0 0 30px rgba(0,200,255,0.2)', fontFamily: 'Orbitron'
    }),
    'future-space': createPreset('future-space', 'futuristic', 'Deep Space UI', {
        contrast: 'high', density: 'tight', saturation: 'grayscale',
        fontFamily: '"JetBrains Mono"', fontSize: '11px', border: 'thin', borderWidth: '1px',
        borderColor: 'var(--color-tone-800)', borderRadius: '1px', padding: '4px', gap: '4px',
        backgroundColor: 'black', color: '#0f0', textShadow: '0 0 5px #0f0'
    }),
    'gaming-rgb': createPreset('gaming-rgb', 'gaming', 'Gaming RGB', {
        light: 'neon', border: 'bold', shadowType: 'neon', borderRadius: '4px',
        fontFamily: 'Barlow', fontWeight: '900', textTransform: 'uppercase',
        borderWidth: '2px', borderColor: 'var(--color-tone-500)', padding: '16px', gap: '8px'
    }),
    'gaming-mmorpg': createPreset('gaming-mmorpg', 'gaming', 'MMO Fantasy', {
        skeuomorphism: 0.6, realism: 0.7, fontFamily: 'Cinzel',
        borderWidth: '2px', borderStyle: 'double', borderColor: '#d4af37',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper.png")',
        padding: '32px', gap: '24px', borderRadius: '2px'
    }),
    'gaming-tactical': createPreset('gaming-tactical', 'gaming', 'Tactical HUD', {
        geometry: 'sharp', density: 'tight', border: 'bold', fontFamily: '"Roboto Mono"',
        fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em',
        borderWidth: '1px', borderColor: 'rgba(0,255,0,0.5)', backgroundColor: 'rgba(0,20,0,0.8)',
        padding: '10px', gap: '10px'
    }),
    'brutalist-neo': createPreset('brutalist-neo', 'brutalism', 'Neo Brutalism', {
        geometry: 'sharp', border: 'bold', shadowType: 'hard', textTransform: 'uppercase',
        fontFamily: '"Public Sans"', fontWeight: '900', borderWidth: '4px',
        borderColor: 'var(--color-tone-1000)', boxShadow: '12px 12px 0px var(--color-tone-1000)',
        outline: 'solid', outlineWidth: '3px', outlineOffset: '6px', padding: '40px', gap: '32px'
    }),
    'brutalist-industrial': createPreset('brutalist-industrial', 'brutalism', 'Industrial Brutal', {
        geometry: 'sharp', textures: 'brushed', border: 'bold', saturation: 'grayscale',
        fontFamily: '"Roboto Mono"', borderWidth: '3px', borderColor: 'var(--color-tone-900)',
        borderRadius: '0', padding: '24px', gap: '16px', backgroundColor: '#ddd'
    }),
    'brutalist-raw': createPreset('brutalist-raw', 'brutalism', 'Raw HTML', {
        geometry: 'sharp', contrast: 'high', border: 'thin', fontFamily: 'serif',
        borderRadius: '0', borderWidth: '1px', borderColor: 'blue', color: 'black',
        backgroundColor: 'white', padding: '8px', gap: '0', textDecoration: 'underline'
    }),
    'mobile-ios': createPreset('mobile-ios', 'mobile-native', 'iOS Native', {
        backdropFilter: 'blur(25px)', borderRadius: '22px', fontFamily: 'system-ui',
        padding: '20px', gap: '16px', letterSpacing: '-0.022em',
        transitionDuration: '0.4s', transitionTimingFunction: 'cubic-bezier(0.15, 0, 0.15, 1)'
    }),
    'mobile-android': createPreset('mobile-android', 'mobile-native', 'Android Material', {
        fontFamily: 'Roboto', borderRadius: '16px', depth: 'layered',
        boxShadow: '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
        padding: '16px', gap: '16px'
    }),
    'plat-apple': createPreset('plat-apple', 'platform', 'Apple-like', {
        backdropFilter: 'blur(20px)', borderRadius: '12px', fontFamily: 'system-ui',
        padding: '24px', gap: '16px', border: 'none', backgroundColor: 'rgba(255,255,255,0.8)'
    }),
    'plat-arc': createPreset('plat-arc', 'platform', 'Arc Browser', {
        backdropFilter: 'blur(30px) saturate(150%)', borderRadius: '10px',
        backgroundColor: 'rgba(255,255,255,0.1)', padding: '16px', gap: '12px',
        border: 'thin', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)'
    }),
    'retro-y2k': createPreset('retro-y2k', 'retro', 'Y2K Glitz', {
        fontFamily: '"Comic Sans MS"', borderRadius: '20px', backgroundBlend: 'screen',
        backgroundImage: 'linear-gradient(45deg, pink, lightblue)', padding: '24px', gap: '16px'
    }),
    'luxury-gold': createPreset('luxury-gold', 'luxury', 'Luxury Gold', {
        fontFamily: '"Bodoni MT"', letterSpacing: '0.1em', borderWidth: '1px',
        borderColor: '#d4af37', backgroundColor: '#111', color: '#d4af37', padding: '40px'
    }),
    'organic-eco': createPreset('organic-eco', 'organic', 'Eco Friendly', {
        fontFamily: '"Plus Jakarta Sans"', borderRadius: '30px', softness: 1,
        backgroundColor: '#f0f4f0', padding: '32px', gap: '24px'
    }),
    'glass-frosted': createPreset('glass-frosted', 'glass', 'Frosted Glass', {
        backdropFilter: 'blur(15px)', backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: '20px', border: 'thin', borderColor: 'rgba(255,255,255,0.3)'
    }),
    'soft-neumorphic': createPreset('soft-neumorphic', 'soft-depth', 'Soft Neumorphism', {
        backgroundColor: '#e0e5ec', boxShadow: '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
        borderRadius: '50px', border: 'none'
    }),
    'real-skeuomorphic': createPreset('real-skeuomorphic', 'realistic', 'Physical Desktop', {
        skeuomorphism: 1, realism: 1, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 1px 3px rgba(0,0,0,0.3)',
        borderRadius: '6px', backgroundColor: '#ccc'
    }),
    'edit-magazine': createPreset('edit-magazine', 'editorial', 'Magazine Flow', {
        fontFamily: '"Playfair Display"', fontSize: '20px', lineHeight: '1.2',
        border: 'none', borderStyle: 'solid', borderWidth: '4px 0', padding: '60px'
    }),
    'dense-bloomberg': createPreset('dense-bloomberg', 'data-dense', 'Bloomberg Terminal', {
        fontFamily: 'monospace', fontSize: '12px', backgroundColor: 'black',
        color: '#ff9900', border: 'thin', borderColor: '#333', padding: '4px', gap: '2px'
    }),
    'exp-maximalist': createPreset('exp-maximalist', 'experimental', 'Maximalist Chaos', {
        fontFamily: 'Impact', transform: 'rotate(1deg)', padding: '100px',
        backgroundColor: 'yellow', border: 'bold', borderWidth: '10px'
    }),

    // Fallbacks for the rest
    ...Object.fromEntries([
        'retro-frutiger', 'retro-8bit', 'retro-glossy',
        'luxury-silent', 'luxury-dark',
        'organic-cozy', 'organic-handmade',
        'glass-acrylic', 'glass-aurora',
        'soft-claymorphic', 'soft-inflated',
        'real-metallic', 'real-cockpit',
        'edit-newspaper', 'edit-docs',
        'dense-trading', 'dense-ops',
        'mobile-superapp', 'exp-bauhaus', 'exp-glitch',
        'a11y-high-contrast', 'a11y-elderly', 'a11y-neuro',
        'cult-korean', 'cult-nordic', 'cult-arabic', 'plat-google', 'plat-notion'
    ].map(id => [id, createPreset(id as PresetId, 'professional', id, {})]))
} as Record<PresetId, StylePreset>;
