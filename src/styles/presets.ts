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
    // Geometry & Layout
    geometry: 'sharp' | 'soft' | 'round' | 'pill';
    density: 'airy' | 'normal' | 'compact' | 'tight';
    shape: 'geometric' | 'organic' | 'abstract';
    aspectRatio?: string;

    // Borders & Effects
    border: 'none' | 'thin' | 'bold' | 'double' | 'dashed';
    outline: 'none' | 'solid' | 'offset';
    depth: 'flat' | 'layered' | 'floating' | 'deep';
    shadowType: 'none' | 'soft' | 'hard' | 'neon' | 'inner';

    // Materials & Textures
    light: 'flat' | 'diffuse' | 'directional' | 'neon';
    textures: 'none' | 'grain' | 'noise' | 'paper' | 'brushed';
    backdrop: 'none' | 'blur' | 'glass' | 'frosted';
    opacity: number;

    // Color & Filters
    contrast: 'low' | 'medium' | 'high' | 'extreme';
    saturation: 'grayscale' | 'muted' | 'vibrant' | 'neon';
    filter?: string;
    mixBlend?: string;
    bgBlend?: string;

    // Typography Details
    typography: 'modern' | 'serif' | 'mono' | 'display' | 'handwritten';
    textTransform: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
    letterSpacing: string;
    lineHeight: string;
    textShadow: string;
    fontSmoothing: 'antialiased' | 'auto';

    // Motion & Interaction
    motion: 'none' | 'snappy' | 'smooth' | 'bouncy';
    animation?: string;
    cursor: 'default' | 'pointer' | 'crosshair';
    userSelect: 'auto' | 'none' | 'text';

    // Transform
    transform?: string;
    perspective?: string;

    // Scalars
    skeuomorphism: number; // 0-1
    realism: number; // 0-1
    noise: number; // 0-1
    softness: number; // 0-1
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
    geometry: 'soft', density: 'normal', shape: 'geometric',
    border: 'thin', outline: 'none', depth: 'layered', shadowType: 'soft',
    light: 'diffuse', textures: 'none', backdrop: 'none', opacity: 1,
    contrast: 'medium', saturation: 'muted',
    typography: 'modern', textTransform: 'none', letterSpacing: 'normal',
    lineHeight: '1.5', textShadow: 'none', fontSmoothing: 'antialiased',
    motion: 'smooth', cursor: 'default', userSelect: 'auto',
    skeuomorphism: 0, realism: 0, noise: 0, softness: 0.5
};

export const STYLE_PRESETS: Record<PresetId, StylePreset> = {
  // 1. MINIMAL
  'minimal-ultra': {
    id: 'minimal-ultra', category: 'minimal', name: 'Ultra Minimal',
    visual: { ...baseVisual, geometry: 'sharp', contrast: 'low', depth: 'flat', border: 'none', density: 'airy', saturation: 'grayscale' },
    spacingBase: 24, radiusBase: 0, borderThickness: 0, shadowBlur: 0,
    typography: { family: 'Inter, sans-serif', weights: [400], sizeBase: 16 }
  },
  'minimal-scandi': {
      id: 'minimal-scandi', category: 'minimal', name: 'Scandinavian',
      visual: { ...baseVisual, softness: 0.8, density: 'airy', typography: 'modern' },
      spacingBase: 20, radiusBase: 12, borderThickness: 1, shadowBlur: 2,
      typography: { family: '"Plus Jakarta Sans", sans-serif', weights: [400, 500], sizeBase: 16 }
  },
  'minimal-japanese': {
    id: 'minimal-japanese', category: 'minimal', name: 'Japanese Minimal',
    visual: { ...baseVisual, border: 'thin', shape: 'geometric', typography: 'serif' },
    spacingBase: 16, radiusBase: 4, borderThickness: 0.5, shadowBlur: 0,
    typography: { family: '"Noto Serif JP", serif', weights: [300, 400], sizeBase: 15 }
  },

  // 2. PROFESSIONAL
  'prof-enterprise': {
      id: 'prof-enterprise', category: 'professional', name: 'Enterprise Pro',
      visual: { ...baseVisual, geometry: 'soft', contrast: 'medium', density: 'compact', border: 'thin' },
      spacingBase: 12, radiusBase: 6, borderThickness: 1, shadowBlur: 4,
      typography: { family: 'Inter, sans-serif', weights: [400, 600], sizeBase: 14 }
  },
  'prof-banking': {
      id: 'prof-banking', category: 'professional', name: 'Global Banking',
      visual: { ...baseVisual, geometry: 'soft', depth: 'layered', border: 'thin', typography: 'modern' },
      spacingBase: 14, radiusBase: 10, borderThickness: 1.5, shadowBlur: 8,
      typography: { family: 'system-ui, sans-serif', weights: [400, 700], sizeBase: 15 }
  },
  'prof-consulting': {
      id: 'prof-consulting', category: 'professional', name: 'Consulting Prime',
      visual: { ...baseVisual, typography: 'serif' },
      spacingBase: 18, radiusBase: 2, borderThickness: 1, shadowBlur: 1,
      typography: { family: '"Playfair Display", serif', weights: [400], sizeBase: 16 }
  },

  // 3. STARTUP
  'startup-saas': {
      id: 'startup-saas', category: 'startup', name: 'Modern SaaS',
      visual: { ...baseVisual, motion: 'snappy', depth: 'floating', softness: 0.7, saturation: 'vibrant' },
      spacingBase: 16, radiusBase: 16, borderThickness: 1, shadowBlur: 10,
      typography: { family: '"Plus Jakarta Sans", sans-serif', weights: [500, 800], sizeBase: 16 }
  },
  'startup-linear': {
      id: 'startup-linear', category: 'startup', name: 'Linear-like',
      visual: { ...baseVisual, geometry: 'soft', contrast: 'high', density: 'compact', saturation: 'grayscale' },
      spacingBase: 12, radiusBase: 8, borderThickness: 1, shadowBlur: 2,
      typography: { family: 'Inter, sans-serif', weights: [400, 600], sizeBase: 14 }
  },
  'startup-stripe': {
      id: 'startup-stripe', category: 'startup', name: 'Stripe-like',
      visual: { ...baseVisual, light: 'directional', depth: 'layered', softness: 0.6, saturation: 'vibrant' },
      spacingBase: 16, radiusBase: 8, borderThickness: 0, shadowBlur: 12,
      typography: { family: '"Segoe UI", sans-serif', weights: [400, 600], sizeBase: 15 }
  },
  'startup-ai': {
      id: 'startup-ai', category: 'startup', name: 'AI Native',
      visual: { ...baseVisual, light: 'neon', textures: 'noise', noise: 0.2, saturation: 'neon', shadowType: 'neon' },
      spacingBase: 20, radiusBase: 32, borderThickness: 1, shadowBlur: 20,
      typography: { family: '"Sora", sans-serif', weights: [400, 700], sizeBase: 16 }
  },

  // 4. PLAYFUL
  'playful-kawaii': {
      id: 'playful-kawaii', category: 'playful', name: 'Kawaii Soft',
      visual: { ...baseVisual, geometry: 'round', motion: 'bouncy', shape: 'organic', softness: 1, saturation: 'vibrant' },
      spacingBase: 24, radiusBase: 40, borderThickness: 2, shadowBlur: 15,
      typography: { family: '"Nunito", sans-serif', weights: [400, 900], sizeBase: 18 }
  },
  'playful-bubblegum': {
      id: 'playful-bubblegum', category: 'playful', name: 'Bubblegum',
      visual: { ...baseVisual, geometry: 'round', realism: 0.3, softness: 1, light: 'directional' },
      spacingBase: 20, radiusBase: 60, borderThickness: 0, shadowBlur: 25,
      typography: { family: '"Quicksand", sans-serif', weights: [700], sizeBase: 17 }
  },
  'playful-toy': {
      id: 'playful-toy', category: 'playful', name: 'Toy-like',
      visual: { ...baseVisual, geometry: 'pill', border: 'bold', skeuomorphism: 0.4, realism: 0.5, shadowType: 'hard' },
      spacingBase: 16, radiusBase: 99, borderThickness: 4, shadowBlur: 0,
      typography: { family: '"Fredoka One", cursive', weights: [400], sizeBase: 18 }
  },

  // 5. FUTURISTIC
  'future-cyberpunk': {
      id: 'future-cyberpunk', category: 'futuristic', name: 'Cyberpunk 2077',
      visual: {
          ...baseVisual, geometry: 'sharp', light: 'neon', contrast: 'extreme',
          border: 'bold', saturation: 'neon', shadowType: 'neon',
          textTransform: 'uppercase', letterSpacing: '0.1em',
          bgBlend: 'overlay'
      },
      spacingBase: 14, radiusBase: 2, borderThickness: 3, shadowBlur: 20,
      typography: { family: '"Rajdhani", sans-serif', weights: [500, 700], sizeBase: 16 },
      background: {
          image: 'linear-gradient(45deg, #050505 25%, #111 25%, #111 50%, #050505 50%, #050505 75%, #111 75%, #111 100%)',
          size: '100px 100px',
          color: '#000'
      }
  },
  'future-holographic': {
      id: 'future-holographic', category: 'futuristic', name: 'Holographic',
      visual: { ...baseVisual, light: 'neon', textures: 'noise', depth: 'floating', softness: 0.3, saturation: 'muted', opacity: 0.8, backdrop: 'glass' },
      spacingBase: 20, radiusBase: 8, borderThickness: 0.5, shadowBlur: 20,
      typography: { family: '"Orbitron", sans-serif', weights: [400], sizeBase: 14 }
  },
  'future-space': {
    id: 'future-space', category: 'futuristic', name: 'Deep Space UI',
    visual: { ...baseVisual, contrast: 'high', density: 'tight', border: 'thin', saturation: 'grayscale', typography: 'mono', letterSpacing: '0.05em' },
    spacingBase: 8, radiusBase: 2, borderThickness: 1, shadowBlur: 0,
    typography: { family: '"JetBrains Mono", monospace', weights: [400], sizeBase: 13 }
  },

  // 6. GAMING
  'gaming-rgb': {
      id: 'gaming-rgb', category: 'gaming', name: 'Gaming RGB',
      visual: { ...baseVisual, light: 'neon', contrast: 'high', border: 'bold', saturation: 'neon', shadowType: 'neon' },
      spacingBase: 14, radiusBase: 12, borderThickness: 2, shadowBlur: 12,
      typography: { family: '"Barlow", sans-serif', weights: [600, 900], sizeBase: 16 }
  },
  'gaming-mmorpg': {
      id: 'gaming-mmorpg', category: 'gaming', name: 'MMO Fantasy',
      visual: { ...baseVisual, skeuomorphism: 0.6, textures: 'paper', realism: 0.7, typography: 'serif' },
      spacingBase: 16, radiusBase: 6, borderThickness: 2, shadowBlur: 15,
      typography: { family: '"Cinzel", serif', weights: [400, 700], sizeBase: 16 }
  },
  'gaming-tactical': {
      id: 'gaming-tactical', category: 'gaming', name: 'Tactical HUD',
      visual: { ...baseVisual, geometry: 'sharp', contrast: 'extreme', density: 'tight', border: 'bold', typography: 'mono', letterSpacing: '0.1em' },
      spacingBase: 6, radiusBase: 0, borderThickness: 2, shadowBlur: 0,
      typography: { family: '"Roboto Mono", monospace', weights: [500, 700], sizeBase: 12 }
  },

  // 7. RETRO
  'retro-y2k': {
      id: 'retro-y2k', category: 'retro', name: 'Y2K Aesthetic',
      visual: { ...baseVisual, light: 'directional', realism: 0.4, skeuomorphism: 0.5, saturation: 'vibrant', filter: 'contrast(1.1) saturate(1.2)' },
      spacingBase: 18, radiusBase: 24, borderThickness: 2, shadowBlur: 10,
      typography: { family: '"Outfit", sans-serif', weights: [400, 900], sizeBase: 16 },
      background: {
          image: 'radial-gradient(circle, #e0f2fe 0%, #bae6fd 100%)',
          color: '#e0f2fe'
      }
  },
  'retro-frutiger': {
      id: 'retro-frutiger', category: 'retro', name: 'Frutiger Aero',
      visual: { ...baseVisual, light: 'directional', realism: 0.6, skeuomorphism: 0.7, softness: 0.8, saturation: 'vibrant', backdrop: 'frosted' },
      spacingBase: 20, radiusBase: 32, borderThickness: 1, shadowBlur: 15,
      typography: { family: '"Inter", sans-serif', weights: [400, 700], sizeBase: 16 }
  },
  'retro-8bit': {
      id: 'retro-8bit', category: 'retro', name: 'Pixel 8-bit',
      visual: { ...baseVisual, geometry: 'sharp', contrast: 'high', textures: 'grain', border: 'bold', typography: 'mono', shadowType: 'hard' },
      spacingBase: 8, radiusBase: 0, borderThickness: 4, shadowBlur: 0,
      typography: { family: '"VT323", monospace', weights: [400], sizeBase: 20 }
  },
  'retro-glossy': {
      id: 'retro-glossy', category: 'retro', name: '2000s Glossy',
      visual: { ...baseVisual, light: 'directional', realism: 0.8, skeuomorphism: 0.9, softness: 0.5, opacity: 0.9 },
      spacingBase: 14, radiusBase: 16, borderThickness: 1, shadowBlur: 12,
      typography: { family: 'Helvetica, sans-serif', weights: [700], sizeBase: 15 }
  },

  // 8. LUXURY
  'luxury-gold': {
      id: 'luxury-gold', category: 'luxury', name: 'Gold Luxury',
      visual: { ...baseVisual, contrast: 'medium', border: 'thin', typography: 'serif', letterSpacing: '0.2em', textTransform: 'uppercase' },
      spacingBase: 32, radiusBase: 0, borderThickness: 0.5, shadowBlur: 8,
      typography: { family: '"Cormorant Garamond", serif', weights: [300, 400], sizeBase: 18 },
      background: {
          image: 'radial-gradient(circle at center, #fff 0%, #fdfbf7 100%)',
          color: '#fff'
      }
  },
  'luxury-silent': {
      id: 'luxury-silent', category: 'luxury', name: 'Silent Luxury',
      visual: { ...baseVisual, contrast: 'low', density: 'airy', saturation: 'grayscale', letterSpacing: '0.05em' },
      spacingBase: 32, radiusBase: 0, borderThickness: 0, shadowBlur: 0,
      typography: { family: '"Montserrat", sans-serif', weights: [200, 400], sizeBase: 16 }
  },
  'luxury-dark': {
      id: 'luxury-dark', category: 'luxury', name: 'Dark Luxury',
      visual: { ...baseVisual, light: 'directional', contrast: 'high', border: 'thin', saturation: 'muted' },
      spacingBase: 18, radiusBase: 4, borderThickness: 1, shadowBlur: 20,
      typography: { family: '"Playfair Display", serif', weights: [400, 900], sizeBase: 17 }
  },

  // 9. ORGANIC
  'organic-eco': {
      id: 'organic-eco', category: 'organic', name: 'Eco Natural',
      visual: { ...baseVisual, geometry: 'round', shape: 'organic', textures: 'paper', softness: 0.9, saturation: 'muted' },
      spacingBase: 20, radiusBase: 24, borderThickness: 0, shadowBlur: 0,
      typography: { family: '"DM Sans", sans-serif', weights: [400, 500], sizeBase: 16 }
  },
  'organic-cozy': {
      id: 'organic-cozy', category: 'organic', name: 'Hygge Cozy',
      visual: { ...baseVisual, light: 'diffuse', softness: 1, shadowType: 'soft' },
      spacingBase: 22, radiusBase: 32, borderThickness: 0, shadowBlur: 12,
      typography: { family: '"Quicksand", sans-serif', weights: [400], sizeBase: 16 }
  },
  'organic-handmade': {
      id: 'organic-handmade', category: 'organic', name: 'Handmade Craft',
      visual: { ...baseVisual, border: 'dashed', textures: 'grain', typography: 'handwritten' },
      spacingBase: 16, radiusBase: 12, borderThickness: 2, shadowBlur: 0,
      typography: { family: '"Dancing Script", cursive', weights: [400, 700], sizeBase: 18 }
  },

  // 10. GLASS
  'glass-frosted': {
      id: 'glass-frosted', category: 'glass', name: 'Frosted Glass',
      visual: { ...baseVisual, light: 'neon', depth: 'floating', softness: 0.4, border: 'thin', backdrop: 'frosted', opacity: 0.7 },
      spacingBase: 18, radiusBase: 24, borderThickness: 1, shadowBlur: 25,
      typography: { family: 'Inter, sans-serif', weights: [400, 600], sizeBase: 16 },
      background: {
          image: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          color: '#f5f7fa'
      }
  },
  'glass-acrylic': {
      id: 'glass-acrylic', category: 'glass', name: 'Acrylic UI',
      visual: { ...baseVisual, light: 'diffuse', textures: 'grain', realism: 0.4, backdrop: 'glass', opacity: 0.5 },
      spacingBase: 16, radiusBase: 16, borderThickness: 1, shadowBlur: 10,
      typography: { family: 'system-ui, sans-serif', weights: [400], sizeBase: 15 }
  },
  'glass-aurora': {
      id: 'glass-aurora', category: 'glass', name: 'Aurora Glass',
      visual: { ...baseVisual, light: 'neon', softness: 0.8, saturation: 'vibrant', backdrop: 'blur', opacity: 0.6 },
      spacingBase: 24, radiusBase: 40, borderThickness: 0, shadowBlur: 30,
      typography: { family: '"Sora", sans-serif', weights: [400, 800], sizeBase: 16 }
  },

  // 11. SOFT DEPTH
  'soft-neumorphic': {
      id: 'soft-neumorphic', category: 'soft-depth', name: 'Neumorphism',
      visual: { ...baseVisual, light: 'directional', realism: 0.5, skeuomorphism: 0.8, softness: 1, contrast: 'low', shadowType: 'inner' },
      spacingBase: 24, radiusBase: 32, borderThickness: 0, shadowBlur: 0,
      typography: { family: 'Inter, sans-serif', weights: [500], sizeBase: 16 }
  },
  'soft-claymorphic': {
      id: 'soft-claymorphic', category: 'soft-depth', name: 'Claymorphism',
      visual: { ...baseVisual, geometry: 'round', realism: 0.6, softness: 1, light: 'directional', shadowType: 'soft' },
      spacingBase: 28, radiusBase: 48, borderThickness: 0, shadowBlur: 20,
      typography: { family: '"Outfit", sans-serif', weights: [700], sizeBase: 16 }
  },
  'soft-inflated': {
      id: 'soft-inflated', category: 'soft-depth', name: 'Inflated UI',
      visual: { ...baseVisual, realism: 0.8, softness: 1, depth: 'floating', transform: 'scale(1.02)' },
      spacingBase: 24, radiusBase: 80, borderThickness: 0, shadowBlur: 40,
      typography: { family: '"Nunito", sans-serif', weights: [900], sizeBase: 18 }
  },

  // 12. BRUTALISM
  'brutalist-neo': {
      id: 'brutalist-neo', category: 'brutalism', name: 'Neo Brutalism',
      visual: { ...baseVisual, geometry: 'sharp', contrast: 'extreme', border: 'bold', shadowType: 'hard', textTransform: 'uppercase' },
      spacingBase: 16, radiusBase: 0, borderThickness: 4, shadowBlur: 0,
      typography: { family: '"Public Sans", sans-serif', weights: [900], sizeBase: 16 },
      background: {
          image: 'repeating-linear-gradient(0deg, #fff, #fff 20px, #f0f0f0 20px, #f0f0f0 21px)',
          color: '#fff'
      }
  },
  'brutalist-industrial': {
      id: 'brutalist-industrial', category: 'brutalism', name: 'Industrial Brutal',
      visual: { ...baseVisual, geometry: 'sharp', textures: 'brushed', border: 'bold', saturation: 'grayscale', typography: 'mono' },
      spacingBase: 12, radiusBase: 0, borderThickness: 2, shadowBlur: 0,
      typography: { family: '"Roboto Mono", monospace', weights: [400, 700], sizeBase: 14 }
  },
  'brutalist-raw': {
      id: 'brutalist-raw', category: 'brutalism', name: 'Raw HTML',
      visual: { ...baseVisual, geometry: 'sharp', contrast: 'high', border: 'thin', depth: 'flat', typography: 'serif' },
      spacingBase: 8, radiusBase: 0, borderThickness: 1, shadowBlur: 0,
      typography: { family: '"Times New Roman", serif', weights: [400], sizeBase: 16 }
  },

  // 13. REALISTIC
  'real-skeuomorphic': {
      id: 'real-skeuomorphic', category: 'realistic', name: 'Skeuomorphic',
      visual: { ...baseVisual, realism: 1, skeuomorphism: 1, light: 'directional', shadowType: 'soft' },
      spacingBase: 16, radiusBase: 12, borderThickness: 2, shadowBlur: 10,
      typography: { family: 'Helvetica, sans-serif', weights: [700], sizeBase: 15 }
  },
  'real-metallic': {
      id: 'real-metallic', category: 'realistic', name: 'Metallic Finish',
      visual: { ...baseVisual, textures: 'brushed', realism: 0.9, contrast: 'high', shadowType: 'hard' },
      spacingBase: 14, radiusBase: 8, borderThickness: 2, shadowBlur: 4,
      typography: { family: '"Rajdhani", sans-serif', weights: [600], sizeBase: 16 }
  },
  'real-cockpit': {
      id: 'real-cockpit', category: 'realistic', name: 'Instrument Panel',
      visual: { ...baseVisual, light: 'neon', realism: 0.8, skeuomorphism: 0.9, density: 'tight', typography: 'mono', filter: 'brightness(0.8) contrast(1.2)' },
      spacingBase: 6, radiusBase: 4, borderThickness: 1.5, shadowBlur: 0,
      typography: { family: '"JetBrains Mono", monospace', weights: [700], sizeBase: 12 }
  },

  // 14. EDITORIAL
  'edit-magazine': {
      id: 'edit-magazine', category: 'editorial', name: 'Magazine Pro',
      visual: { ...baseVisual, typography: 'serif', density: 'airy', border: 'bold', lineHeight: '1.2' },
      spacingBase: 32, radiusBase: 0, borderThickness: 2, shadowBlur: 0,
      typography: { family: '"Playfair Display", serif', weights: [400, 900], sizeBase: 20 }
  },
  'edit-newspaper': {
      id: 'edit-newspaper', category: 'editorial', name: 'Classic Newspaper',
      visual: { ...baseVisual, contrast: 'high', textures: 'paper', border: 'thin', saturation: 'grayscale', typography: 'serif' },
      spacingBase: 24, radiusBase: 0, borderThickness: 0.5, shadowBlur: 0,
      typography: { family: '"Lora", serif', weights: [400, 700], sizeBase: 16 }
  },
  'edit-docs': {
      id: 'edit-docs', category: 'editorial', name: 'Documentation',
      visual: { ...baseVisual, density: 'normal', typography: 'modern' },
      spacingBase: 16, radiusBase: 6, borderThickness: 1, shadowBlur: 2,
      typography: { family: 'system-ui, sans-serif', weights: [400, 500], sizeBase: 15 }
  },

  // 15. DATA-DENSE
  'dense-bloomberg': {
      id: 'dense-bloomberg', category: 'data-dense', name: 'Bloomberg Terminal',
      visual: { ...baseVisual, contrast: 'high', density: 'tight', border: 'thin', typography: 'mono', saturation: 'grayscale', letterSpacing: '0.02em' },
      spacingBase: 4, radiusBase: 0, borderThickness: 1, shadowBlur: 0,
      typography: { family: '"Roboto Mono", monospace', weights: [400, 700], sizeBase: 12 }
  },
  'dense-trading': {
      id: 'dense-trading', category: 'data-dense', name: 'Trading Pro',
      visual: { ...baseVisual, contrast: 'medium', density: 'compact', saturation: 'vibrant' },
      spacingBase: 8, radiusBase: 4, borderThickness: 1, shadowBlur: 0,
      typography: { family: 'Inter, sans-serif', weights: [400, 600], sizeBase: 13 }
  },
  'dense-ops': {
      id: 'dense-ops', category: 'data-dense', name: 'Ops Center',
      visual: { ...baseVisual, light: 'neon', density: 'tight', contrast: 'extreme', shadowType: 'neon' },
      spacingBase: 6, radiusBase: 2, borderThickness: 1, shadowBlur: 10,
      typography: { family: '"JetBrains Mono", monospace', weights: [500], sizeBase: 12 }
  },

  // 16. MOBILE-NATIVE
  'mobile-ios': {
      id: 'mobile-ios', category: 'mobile-native', name: 'iOS Native',
      visual: { ...baseVisual, light: 'diffuse', depth: 'floating', softness: 0.6, border: 'thin', backdrop: 'blur' },
      spacingBase: 16, radiusBase: 20, borderThickness: 0.5, shadowBlur: 15,
      typography: { family: 'system-ui, sans-serif', weights: [400, 600], sizeBase: 16 }
  },
  'mobile-android': {
      id: 'mobile-android', category: 'mobile-native', name: 'Android Material',
      visual: { ...baseVisual, light: 'directional', depth: 'layered', border: 'none', shadowType: 'soft' },
      spacingBase: 16, radiusBase: 16, borderThickness: 0, shadowBlur: 10,
      typography: { family: '"Roboto", sans-serif', weights: [400, 500], sizeBase: 16 }
  },
  'mobile-superapp': {
      id: 'mobile-superapp', category: 'mobile-native', name: 'Super App',
      visual: { ...baseVisual, density: 'compact', saturation: 'vibrant', shadowType: 'soft' },
      spacingBase: 12, radiusBase: 12, borderThickness: 1, shadowBlur: 5,
      typography: { family: 'Inter, sans-serif', weights: [400, 700], sizeBase: 15 }
  },

  // 17. EXPERIMENTAL
  'exp-maximalist': {
      id: 'exp-maximalist', category: 'experimental', name: 'Maximalist',
      visual: { ...baseVisual, saturation: 'vibrant', border: 'bold', transform: 'rotate(-1deg) skew(1deg)' },
      spacingBase: 32, radiusBase: 24, borderThickness: 8, shadowBlur: 0,
      typography: { family: '"Archivo Black", sans-serif', weights: [900], sizeBase: 24 }
  },
  'exp-bauhaus': {
      id: 'exp-bauhaus', category: 'experimental', name: 'Bauhaus',
      visual: { ...baseVisual, geometry: 'sharp', shape: 'geometric', border: 'bold', contrast: 'high', mixBlend: 'multiply' },
      spacingBase: 20, radiusBase: 0, borderThickness: 4, shadowBlur: 0,
      typography: { family: '"Public Sans", sans-serif', weights: [400, 900], sizeBase: 18 }
  },
  'exp-glitch': {
      id: 'exp-glitch', category: 'experimental', name: 'Glitch Core',
      visual: { ...baseVisual, textures: 'noise', noise: 0.4, light: 'neon', filter: 'hue-rotate(90deg) contrast(1.5)' },
      spacingBase: 12, radiusBase: 0, borderThickness: 1, shadowBlur: 10,
      typography: { family: '"Courier New", monospace', weights: [700], sizeBase: 14 }
  },

  // 18. A11Y
  'a11y-high-contrast': {
      id: 'a11y-high-contrast', category: 'a11y', name: 'High Contrast',
      visual: { ...baseVisual, contrast: 'extreme', border: 'bold', density: 'airy', saturation: 'grayscale', outline: 'solid' },
      spacingBase: 24, radiusBase: 8, borderThickness: 4, shadowBlur: 0,
      typography: { family: 'system-ui, sans-serif', weights: [700, 900], sizeBase: 18 }
  },
  'a11y-elderly': {
      id: 'a11y-elderly', category: 'a11y', name: 'Elder Friendly',
      visual: { ...baseVisual, density: 'airy', contrast: 'high', softness: 0.8, letterSpacing: '0.02em' },
      spacingBase: 32, radiusBase: 16, borderThickness: 2, shadowBlur: 10,
      typography: { family: 'sans-serif', weights: [400, 700], sizeBase: 20 }
  },
  'a11y-neuro': {
      id: 'a11y-neuro', category: 'a11y', name: 'Neuro-Calm',
      visual: { ...baseVisual, contrast: 'low', motion: 'none', saturation: 'muted', fontSmoothing: 'auto' },
      spacingBase: 24, radiusBase: 24, borderThickness: 0, shadowBlur: 0,
      typography: { family: '"Open Sans", sans-serif', weights: [400], sizeBase: 16 }
  },

  // 19. CULTURAL
  'cult-korean': {
      id: 'cult-korean', category: 'cultural', name: 'Korean Trendy',
      visual: { ...baseVisual, light: 'diffuse', softness: 0.9, density: 'airy', saturation: 'vibrant', backdrop: 'blur' },
      spacingBase: 20, radiusBase: 24, borderThickness: 0, shadowBlur: 15,
      typography: { family: '"Inter", sans-serif', weights: [400, 700], sizeBase: 16 }
  },
  'cult-nordic': {
      id: 'cult-nordic', category: 'cultural', name: 'Nordic Pure',
      visual: { ...baseVisual, contrast: 'low', border: 'none', saturation: 'grayscale', opacity: 0.9 },
      spacingBase: 24, radiusBase: 4, borderThickness: 0, shadowBlur: 0,
      typography: { family: '"Inter", sans-serif', weights: [300, 500], sizeBase: 16 }
  },
  'cult-arabic': {
      id: 'cult-arabic', category: 'cultural', name: 'Arabic Luxury',
      visual: { ...baseVisual, light: 'directional', border: 'thin', typography: 'serif', letterSpacing: '0.05em' },
      spacingBase: 18, radiusBase: 4, borderThickness: 1, shadowBlur: 25,
      typography: { family: 'serif', weights: [400, 700], sizeBase: 18 }
  },

  // 20. PLATFORM
  'plat-apple': {
      id: 'plat-apple', category: 'platform', name: 'Apple-like',
      visual: { ...baseVisual, geometry: 'soft', light: 'diffuse', depth: 'floating', border: 'thin', backdrop: 'blur' },
      spacingBase: 16, radiusBase: 20, borderThickness: 1, shadowBlur: 15,
      typography: { family: 'system-ui, sans-serif', weights: [400, 600], sizeBase: 16 }
  },
  'plat-google': {
      id: 'plat-google', category: 'platform', name: 'Google-like',
      visual: { ...baseVisual, depth: 'layered', border: 'none', softness: 0.5, saturation: 'vibrant', shadowType: 'soft' },
      spacingBase: 16, radiusBase: 16, borderThickness: 0, shadowBlur: 8,
      typography: { family: '"Roboto", sans-serif', weights: [400, 500], sizeBase: 16 }
  },
  'plat-notion': {
      id: 'plat-notion', category: 'platform', name: 'Notion-like',
      visual: { ...baseVisual, geometry: 'soft', contrast: 'low', border: 'thin', saturation: 'grayscale' },
      spacingBase: 12, radiusBase: 5, borderThickness: 1, shadowBlur: 0,
      typography: { family: 'system-ui, sans-serif', weights: [400, 600], sizeBase: 15 }
  },
  'plat-arc': {
      id: 'plat-arc', category: 'platform', name: 'Arc Browser',
      visual: { ...baseVisual, light: 'neon', softness: 0.7, border: 'thin', saturation: 'vibrant', backdrop: 'glass' },
      spacingBase: 14, radiusBase: 12, borderThickness: 1, shadowBlur: 12,
      typography: { family: 'Inter, sans-serif', weights: [500], sizeBase: 15 }
  }
};
