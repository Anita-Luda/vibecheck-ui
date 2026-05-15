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

    // Fallbacks
    ...Object.fromEntries([
        'prof-banking', 'prof-consulting',
        'startup-saas', 'startup-linear', 'startup-stripe', 'startup-ai',
        'playful-kawaii', 'playful-bubblegum', 'playful-toy',
        'future-cyberpunk', 'future-holographic', 'future-space',
        'gaming-rgb', 'gaming-mmorpg', 'gaming-tactical',
        'retro-y2k', 'retro-frutiger', 'retro-8bit', 'retro-glossy',
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
