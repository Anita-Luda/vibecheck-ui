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
    // 1. Typography
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

    // 2. Colors & Contrast
    color: string;
    backgroundColor: string;
    background: string;
    caretColor: string;
    accentColor: string;
    opacity: number;
    mixBlend: string;
    isolation: string;

    // 3. Backgrounds & Textures
    backgroundImage: string;
    backgroundRepeat: string;
    backgroundPosition: string;
    backgroundSize: string;
    backgroundAttachment: string;
    backgroundBlend: string;
    backgroundClip: string;
    backgroundOrigin: string;

    // 4. Borders & Shape
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

    // 5. Shadows & Depth
    boxShadow: string;
    filter: string;
    backdropFilter: string;

    // 6. Layout & Spacing
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

    // 7. Flexbox
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

    // 8. Grid
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

    // 9. Positioning
    position: string;
    top: string;
    right: string;
    bottom: string;
    left: string;
    zIndex: string;
    inset: string;

    // 10. Animations & Motion
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

    // 11. Interactions
    cursor: string;
    pointerEvents: string;
    userSelect: string;
    touchAction: string;
    scrollBehavior: string;
    overscrollBehavior: string;

    // 12. Media & Objects
    objectFit: string;
    objectPosition: string;
    imageRendering: string;
    aspectRatio: string;
    mask: string;
    maskImage: string;
    maskSize: string;

    // 13. Scroll & Overflow
    overflow: string;
    overflowX: string;
    overflowY: string;
    scrollbarWidth: string;
    scrollbarColor: string;
    scrollMargin: string;
    scrollPadding: string;

    // Legacy Scalars (keeping for mapper logic)
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
    // 1. Typography
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    fontStyle: 'normal',
    fontStretch: 'normal',
    fontVariant: 'normal',
    fontFeatureSettings: 'normal',
    fontOpticalSizing: 'auto',
    lineHeight: '1.5',
    letterSpacing: 'normal',
    wordSpacing: 'normal',
    textTransform: 'none',
    textDecoration: 'none',
    textDecorationThickness: 'auto',
    textDecorationStyle: 'solid',
    textDecorationColor: 'currentcolor',
    textUnderlineOffset: 'auto',
    textAlign: 'left',
    textIndent: '0',
    whiteSpace: 'normal',
    textOverflow: 'clip',
    hyphens: 'manual',
    writingMode: 'horizontal-tb',
    direction: 'ltr',
    unicodeBidi: 'normal',
    textShadow: 'none',
    verticalAlign: 'baseline',
    fontSmoothing: 'antialiased',

    // 2. Colors
    color: 'inherit',
    backgroundColor: 'transparent',
    background: 'none',
    caretColor: 'auto',
    accentColor: 'auto',
    opacity: 1,
    mixBlend: 'normal',
    isolation: 'auto',

    // 3. Backgrounds
    backgroundImage: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'auto',
    backgroundAttachment: 'scroll',
    backgroundBlend: 'normal',
    backgroundClip: 'border-box',
    backgroundOrigin: 'padding-box',

    // 4. Borders
    border: 'none',
    borderWidth: '0',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: '0',
    borderRadiusTopLeft: '0',
    borderRadiusTopRight: '0',
    borderRadiusBottomLeft: '0',
    borderRadiusBottomRight: '0',
    outline: 'none',
    outlineWidth: '0',
    outlineStyle: 'solid',
    outlineColor: 'transparent',
    outlineOffset: '0',

    // 5. Shadows
    boxShadow: 'none',
    filter: 'none',
    backdropFilter: 'none',

    // 6. Layout
    margin: '0',
    marginInline: '0',
    marginBlock: '0',
    padding: '0',
    paddingInline: '0',
    paddingBlock: '0',
    width: 'auto',
    minWidth: '0',
    maxWidth: 'none',
    height: 'auto',
    minHeight: '0',
    maxHeight: 'none',
    boxSizing: 'border-box',

    // 7. Flex
    display: 'block',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'stretch',
    gap: '0',
    rowGap: '0',
    columnGap: '0',
    flexGrow: '0',
    flexShrink: '1',
    flexBasis: 'auto',
    order: '0',
    alignSelf: 'auto',

    // 8. Grid
    gridTemplateColumns: 'none',
    gridTemplateRows: 'none',
    gridTemplateAreas: 'none',
    gridAutoColumns: 'auto',
    gridAutoRows: 'auto',
    gridAutoFlow: 'row',
    gridColumn: 'auto',
    gridRow: 'auto',
    gridArea: 'auto',
    placeItems: 'stretch',
    placeContent: 'stretch',

    // 9. Positioning
    position: 'static',
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto',
    zIndex: 'auto',
    inset: 'auto',

    // 10. Motion
    transitionProperty: 'none',
    transitionDuration: '0s',
    transitionTimingFunction: 'ease',
    transitionDelay: '0s',
    animationName: 'none',
    animationDuration: '0s',
    animationTimingFunction: 'ease',
    animationDelay: '0s',
    animationIterationCount: '1',
    animationDirection: 'normal',
    animationFillMode: 'none',
    animationPlayState: 'running',
    transform: 'none',
    transformOrigin: '50% 50%',
    perspective: 'none',
    backfaceVisibility: 'visible',

    // 11. Interactions
    cursor: 'auto',
    pointerEvents: 'auto',
    userSelect: 'auto',
    touchAction: 'auto',
    scrollBehavior: 'auto',
    overscrollBehavior: 'auto',

    // 12. Media
    objectFit: 'fill',
    objectPosition: '50% 50%',
    imageRendering: 'auto',
    aspectRatio: 'auto',
    mask: 'none',
    maskImage: 'none',
    maskSize: 'auto',

    // 13. Scroll
    overflow: 'visible',
    overflowX: 'visible',
    overflowY: 'visible',
    scrollbarWidth: 'auto',
    scrollbarColor: 'auto',
    scrollMargin: '0',
    scrollPadding: '0',

    // Legacy Scalars
    skeuomorphism: 0,
    realism: 0,
    noise: 0,
    softness: 0.5,
    geometry: 'soft',
    density: 'normal',
    shadowType: 'soft',
    shape: 'geometric',
    depth: 'layered',
    motion: 'smooth',
    contrast: 'medium',
    light: 'diffuse',
    textures: 'none',
    saturation: 'muted'
};

const createPreset = (id: PresetId, category: PresetCategoryId, name: string, visual: Partial<VisualLanguage>): StylePreset => ({
    id, category, name,
    visual: { ...baseVisual, ...visual },
    spacingBase: 16, radiusBase: 8, borderThickness: 1, shadowBlur: 4,
    typography: { family: 'Inter', weights: [400, 700], sizeBase: 16 }
});

export const STYLE_PRESETS: Record<PresetId, StylePreset> = {
    // 1. MINIMAL
    'minimal-ultra': createPreset('minimal-ultra', 'minimal', 'Ultra Minimal', { geometry: 'sharp', density: 'airy', letterSpacing: '-0.02em', border: 'none', shadowType: 'none' }),
    'minimal-scandi': createPreset('minimal-scandi', 'minimal', 'Scandinavian', { softness: 0.8, density: 'airy', letterSpacing: '-0.01em', borderRadius: '12px' }),
    'minimal-japanese': createPreset('minimal-japanese', 'minimal', 'Japanese Minimal', { border: 'thin', shape: 'geometric', fontFamily: 'serif' }),

    // 2. PROFESSIONAL
    'prof-enterprise': createPreset('prof-enterprise', 'professional', 'Enterprise Pro', { geometry: 'soft', density: 'compact', border: 'thin' }),
    'prof-banking': createPreset('prof-banking', 'professional', 'Global Banking', { depth: 'layered', border: 'thin', fontWeight: '700' }),
    'prof-consulting': createPreset('prof-consulting', 'professional', 'Consulting Prime', { fontFamily: 'serif', fontStyle: 'italic' }),

    // 3. STARTUP
    'startup-saas': createPreset('startup-saas', 'startup', 'Modern SaaS', { motion: 'snappy', depth: 'floating', saturation: 'vibrant' }),
    'startup-linear': createPreset('startup-linear', 'startup', 'Linear-like', { contrast: 'high', density: 'compact', saturation: 'grayscale' }),
    'startup-stripe': createPreset('startup-stripe', 'startup', 'Stripe-like', { light: 'directional', depth: 'layered', saturation: 'vibrant' }),
    'startup-ai': createPreset('startup-ai', 'startup', 'AI Native', { light: 'neon', shadowType: 'neon', noise: 0.2 }),

    // 4. PLAYFUL
    'playful-kawaii': createPreset('playful-kawaii', 'playful', 'Kawaii Soft', { geometry: 'round', motion: 'bouncy', shape: 'organic' }),
    'playful-bubblegum': createPreset('playful-bubblegum', 'playful', 'Bubblegum', { realism: 0.3, softness: 1, light: 'directional' }),
    'playful-toy': createPreset('playful-toy', 'playful', 'Toy-like', { border: 'bold', skeuomorphism: 0.4, shadowType: 'hard' }),

    // 5. FUTURISTIC
    'future-cyberpunk': createPreset('future-cyberpunk', 'futuristic', 'Cyberpunk 2077', { geometry: 'sharp', light: 'neon', shadowType: 'neon', textTransform: 'uppercase', backgroundBlend: 'overlay' }),
    'future-holographic': createPreset('future-holographic', 'futuristic', 'Holographic', { light: 'neon', depth: 'floating', backdropFilter: 'glass', opacity: 0.8 }),
    'future-space': createPreset('future-space', 'futuristic', 'Deep Space UI', { contrast: 'high', density: 'tight', saturation: 'grayscale' }),

    // 6. GAMING
    'gaming-rgb': createPreset('gaming-rgb', 'gaming', 'Gaming RGB', { light: 'neon', border: 'bold', shadowType: 'neon' }),
    'gaming-mmorpg': createPreset('gaming-mmorpg', 'gaming', 'MMO Fantasy', { skeuomorphism: 0.6, realism: 0.7, fontFamily: 'serif' }),
    'gaming-tactical': createPreset('gaming-tactical', 'gaming', 'Tactical HUD', { geometry: 'sharp', density: 'tight', border: 'bold' }),

    // 7. RETRO
    'retro-y2k': createPreset('retro-y2k', 'retro', 'Y2K Aesthetic', { light: 'directional', realism: 0.4, skeuomorphism: 0.5 }),
    'retro-frutiger': createPreset('retro-frutiger', 'retro', 'Frutiger Aero', { light: 'directional', softness: 0.8, backdropFilter: 'frosted' }),
    'retro-8bit': createPreset('retro-8bit', 'retro', 'Pixel 8-bit', { geometry: 'sharp', border: 'bold', shadowType: 'hard' }),
    'retro-glossy': createPreset('retro-glossy', 'retro', '2000s Glossy', { realism: 0.8, skeuomorphism: 0.9, softness: 0.5 }),

    // 8. LUXURY
    'luxury-gold': createPreset('luxury-gold', 'luxury', 'Gold Luxury', { contrast: 'medium', border: 'thin', fontFamily: 'serif', letterSpacing: '0.2em' }),
    'luxury-silent': createPreset('luxury-silent', 'luxury', 'Silent Luxury', { contrast: 'low', density: 'airy', saturation: 'grayscale' }),
    'luxury-dark': createPreset('luxury-dark', 'luxury', 'Dark Luxury', { light: 'directional', contrast: 'high', border: 'thin' }),

    // 9. ORGANIC
    'organic-eco': createPreset('organic-eco', 'organic', 'Eco Natural', { geometry: 'round', shape: 'organic', softness: 0.9 }),
    'organic-cozy': createPreset('organic-cozy', 'organic', 'Hygge Cozy', { light: 'diffuse', softness: 1, shadowType: 'soft' }),
    'organic-handmade': createPreset('organic-handmade', 'organic', 'Handmade Craft', { border: 'dashed', fontFamily: 'handwritten' }),

    // 10. GLASS
    'glass-frosted': createPreset('glass-frosted', 'glass', 'Frosted Glass', { backdropFilter: 'frosted', opacity: 0.7, border: 'thin' }),
    'glass-acrylic': createPreset('glass-acrylic', 'glass', 'Acrylic UI', { backdropFilter: 'glass', opacity: 0.5, textures: 'grain' }),
    'glass-aurora': createPreset('glass-aurora', 'glass', 'Aurora Glass', { light: 'neon', softness: 0.8, backdropFilter: 'blur' }),

    // 11. SOFT DEPTH
    'soft-neumorphic': createPreset('soft-neumorphic', 'soft-depth', 'Neumorphism', { realism: 0.5, skeuomorphism: 0.8, shadowType: 'inner' }),
    'soft-claymorphic': createPreset('soft-claymorphic', 'soft-depth', 'Claymorphism', { geometry: 'round', realism: 0.6, softness: 1 }),
    'soft-inflated': createPreset('soft-inflated', 'soft-depth', 'Inflated UI', { realism: 0.8, softness: 1, depth: 'floating' }),

    // 12. BRUTALISM
    'brutalist-neo': createPreset('brutalist-neo', 'brutalism', 'Neo Brutalism', { geometry: 'sharp', border: 'bold', shadowType: 'hard' }),
    'brutalist-industrial': createPreset('brutalist-industrial', 'brutalism', 'Industrial Brutal', { geometry: 'sharp', textures: 'brushed', border: 'bold' }),
    'brutalist-raw': createPreset('brutalist-raw', 'brutalism', 'Raw HTML', { geometry: 'sharp', contrast: 'high', border: 'thin' }),

    // 13. REALISTIC
    'real-skeuomorphic': createPreset('real-skeuomorphic', 'realistic', 'Skeuomorphic', { realism: 1, skeuomorphism: 1, light: 'directional' }),
    'real-metallic': createPreset('real-metallic', 'realistic', 'Metallic Finish', { textures: 'brushed', realism: 0.9, contrast: 'high' }),
    'real-cockpit': createPreset('real-cockpit', 'realistic', 'Instrument Panel', { light: 'neon', realism: 0.8, density: 'tight' }),

    // 14. EDITORIAL
    'edit-magazine': createPreset('edit-magazine', 'editorial', 'Magazine Pro', { fontFamily: 'serif', density: 'airy', border: 'bold' }),
    'edit-newspaper': createPreset('edit-newspaper', 'editorial', 'Classic Newspaper', { contrast: 'high', border: 'thin', saturation: 'grayscale' }),
    'edit-docs': createPreset('edit-docs', 'editorial', 'Documentation', { density: 'normal', fontFamily: 'modern' }),

    // 15. DATA-DENSE
    'dense-bloomberg': createPreset('dense-bloomberg', 'data-dense', 'Bloomberg Terminal', { contrast: 'high', density: 'tight', fontFamily: 'mono' }),
    'dense-trading': createPreset('dense-trading', 'data-dense', 'Trading Pro', { contrast: 'medium', density: 'compact', saturation: 'vibrant' }),
    'dense-ops': createPreset('dense-ops', 'data-dense', 'Ops Center', { light: 'neon', density: 'tight', shadowType: 'neon' }),

    // 16. MOBILE-NATIVE
    'mobile-ios': createPreset('mobile-ios', 'mobile-native', 'iOS Native', { backdropFilter: 'blur', borderRadius: '20px' }),
    'mobile-android': createPreset('mobile-android', 'mobile-native', 'Android Material', { light: 'directional', depth: 'layered' }),
    'mobile-superapp': createPreset('mobile-superapp', 'mobile-native', 'Super App', { density: 'compact', saturation: 'vibrant' }),

    // 17. EXPERIMENTAL
    'exp-maximalist': createPreset('exp-maximalist', 'experimental', 'Maximalist', { saturation: 'vibrant', border: 'bold', transform: 'rotate(1deg)' }),
    'exp-bauhaus': createPreset('exp-bauhaus', 'experimental', 'Bauhaus', { geometry: 'sharp', shape: 'geometric', border: 'bold' }),
    'exp-glitch': createPreset('exp-glitch', 'experimental', 'Glitch Core', { textures: 'noise', light: 'neon', filter: 'hue-rotate(90deg)' }),

    // 18. A11Y
    'a11y-high-contrast': createPreset('a11y-high-contrast', 'a11y', 'High Contrast', { contrast: 'extreme', border: 'bold', saturation: 'grayscale' }),
    'a11y-elderly': createPreset('a11y-elderly', 'a11y', 'Elder Friendly', { density: 'airy', contrast: 'high', softness: 0.8 }),
    'a11y-neuro': createPreset('a11y-neuro', 'a11y', 'Neuro-Calm', { contrast: 'low', motion: 'none', saturation: 'muted' }),

    // 19. CULTURAL
    'cult-korean': createPreset('cult-korean', 'cultural', 'Korean Trendy', { light: 'diffuse', softness: 0.9, density: 'airy' }),
    'cult-nordic': createPreset('cult-nordic', 'cultural', 'Nordic Pure', { contrast: 'low', border: 'none', opacity: 0.9 }),
    'cult-arabic': createPreset('cult-arabic', 'cultural', 'Arabic Luxury', { light: 'directional', border: 'thin', fontFamily: 'serif' }),

    // 20. PLATFORM
    'plat-apple': createPreset('plat-apple', 'platform', 'Apple-like', { backdropFilter: 'blur', borderRadius: '20px' }),
    'plat-google': createPreset('plat-google', 'platform', 'Google-like', { depth: 'layered', border: 'none' }),
    'plat-notion': createPreset('plat-notion', 'platform', 'Notion-like', { contrast: 'low', border: 'thin', saturation: 'grayscale' }),
    'plat-arc': createPreset('plat-arc', 'platform', 'Arc Browser', { backdropFilter: 'glass', borderRadius: '12px' })
};
