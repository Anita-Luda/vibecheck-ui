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
    geometry: 'sharp' | 'soft' | 'round' | 'pill';
    light: 'flat' | 'diffuse' | 'directional' | 'neon';
    contrast: 'low' | 'medium' | 'high' | 'extreme';
    textures: 'none' | 'grain' | 'noise' | 'paper' | 'brushed';
    motion: 'none' | 'snappy' | 'smooth' | 'bouncy';
    depth: 'flat' | 'layered' | 'floating' | 'deep';
    density: 'airy' | 'normal' | 'compact' | 'tight';
    border: 'none' | 'thin' | 'bold' | 'double' | 'dashed';
    shape: 'geometric' | 'organic' | 'abstract';
    skeuomorphism: number; // 0-1
    realism: number; // 0-1
    noise: number; // 0-1
    softness: number; // 0-1
    typography: 'modern' | 'serif' | 'mono' | 'display' | 'handwritten';
    saturation: 'grayscale' | 'muted' | 'vibrant' | 'neon';
    energy: 'calm' | 'balanced' | 'active' | 'chaotic';
}

export interface StylePreset {
  id: PresetId;
  category: PresetCategoryId;
  name: string;
  visual: VisualLanguage;
  spacing: number[];
  radius: number[];
  typography: {
    family: string;
    weights: number[];
  };
  shadows: string[];
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
    geometry: 'soft', light: 'diffuse', contrast: 'medium', textures: 'none',
    motion: 'smooth', depth: 'layered', density: 'normal', border: 'thin',
    shape: 'geometric', skeuomorphism: 0, realism: 0, noise: 0, softness: 0.5,
    typography: 'modern', saturation: 'muted', energy: 'balanced'
};

export const STYLE_PRESETS: Record<PresetId, StylePreset> = {
  // 1. MINIMAL
  'minimal-ultra': {
    id: 'minimal-ultra', category: 'minimal', name: 'Ultra Minimal',
    visual: { ...baseVisual, geometry: 'sharp', contrast: 'low', depth: 'flat', border: 'none', density: 'airy', saturation: 'grayscale', energy: 'calm' },
    spacing: [4, 12, 24], radius: [0, 0, 0], shadows: ['none'],
    typography: { family: 'Inter, sans-serif', weights: [400] }
  },
  'minimal-scandi': {
      id: 'minimal-scandi', category: 'minimal', name: 'Scandinavian',
      visual: { ...baseVisual, softness: 0.8, density: 'airy', typography: 'modern' },
      spacing: [8, 16, 32], radius: [4, 8, 12], shadows: ['subtle'],
      typography: { family: '"Plus Jakarta Sans", sans-serif', weights: [400, 500] }
  },
  'minimal-japanese': {
    id: 'minimal-japanese', category: 'minimal', name: 'Japanese Minimal',
    visual: { ...baseVisual, border: 'thin', shape: 'geometric', energy: 'calm', typography: 'serif' },
    spacing: [6, 12, 24], radius: [2, 4, 6], shadows: ['none'],
    typography: { family: '"Noto Serif JP", serif', weights: [300, 400] }
  },

  // 2. PROFESSIONAL
  'prof-enterprise': {
      id: 'prof-enterprise', category: 'professional', name: 'Enterprise Pro',
      visual: { ...baseVisual, geometry: 'soft', contrast: 'medium', density: 'compact', border: 'thin' },
      spacing: [4, 8, 12], radius: [4, 6, 8], shadows: ['subtle'],
      typography: { family: 'Inter, sans-serif', weights: [400, 600] }
  },
  'prof-banking': {
      id: 'prof-banking', category: 'professional', name: 'Global Banking',
      visual: { ...baseVisual, geometry: 'soft', depth: 'layered', border: 'thin', typography: 'modern' },
      spacing: [6, 12, 18], radius: [6, 12, 16], shadows: ['soft'],
      typography: { family: 'system-ui, sans-serif', weights: [400, 700] }
  },
  'prof-consulting': {
      id: 'prof-consulting', category: 'professional', name: 'Consulting Prime',
      visual: { ...baseVisual, typography: 'serif', energy: 'balanced' },
      spacing: [8, 16, 24], radius: [0, 2, 4], shadows: ['subtle'],
      typography: { family: '"Playfair Display", serif', weights: [400] }
  },

  // 3. STARTUP
  'startup-saas': {
      id: 'startup-saas', category: 'startup', name: 'Modern SaaS',
      visual: { ...baseVisual, motion: 'snappy', depth: 'floating', softness: 0.7, saturation: 'vibrant' },
      spacing: [8, 16, 32], radius: [8, 12, 20], shadows: ['soft'],
      typography: { family: '"Plus Jakarta Sans", sans-serif', weights: [500, 800] }
  },
  'startup-linear': {
      id: 'startup-linear', category: 'startup', name: 'Linear-like',
      visual: { ...baseVisual, geometry: 'soft', contrast: 'high', density: 'compact', saturation: 'grayscale', energy: 'active' },
      spacing: [4, 8, 16], radius: [4, 6, 8], shadows: ['hard'],
      typography: { family: 'Inter, sans-serif', weights: [400, 600] }
  },
  'startup-stripe': {
      id: 'startup-stripe', category: 'startup', name: 'Stripe-like',
      visual: { ...baseVisual, light: 'directional', depth: 'layered', softness: 0.6, saturation: 'vibrant' },
      spacing: [8, 16, 32], radius: [4, 8, 12], shadows: ['soft'],
      typography: { family: '"Segoe UI", sans-serif', weights: [400, 600] }
  },
  'startup-ai': {
      id: 'startup-ai', category: 'startup', name: 'AI Native',
      visual: { ...baseVisual, light: 'neon', textures: 'noise', noise: 0.2, saturation: 'neon' },
      spacing: [6, 12, 24], radius: [12, 24, 40], shadows: ['neon'],
      typography: { family: '"Sora", sans-serif', weights: [400, 700] }
  },

  // 4. PLAYFUL
  'playful-kawaii': {
      id: 'playful-kawaii', category: 'playful', name: 'Kawaii Soft',
      visual: { ...baseVisual, geometry: 'round', motion: 'bouncy', shape: 'organic', softness: 1, saturation: 'vibrant' },
      spacing: [12, 24, 48], radius: [20, 32, 64], shadows: ['soft'],
      typography: { family: '"Nunito", sans-serif', weights: [400, 900] }
  },
  'playful-bubblegum': {
      id: 'playful-bubblegum', category: 'playful', name: 'Bubblegum',
      visual: { ...baseVisual, geometry: 'round', realism: 0.3, softness: 1, light: 'directional' },
      spacing: [10, 20, 40], radius: [24, 48, 99], shadows: ['soft'],
      typography: { family: '"Quicksand", sans-serif', weights: [700] }
  },
  'playful-toy': {
      id: 'playful-toy', category: 'playful', name: 'Toy-like',
      visual: { ...baseVisual, geometry: 'pill', border: 'bold', skeuomorphism: 0.4, realism: 0.5 },
      spacing: [8, 16, 32], radius: [16, 32, 99], shadows: ['hard'],
      typography: { family: '"Fredoka One", cursive', weights: [400] }
  },

  // 5. FUTURISTIC
  'future-cyberpunk': {
      id: 'future-cyberpunk', category: 'futuristic', name: 'Cyberpunk 2077',
      visual: { ...baseVisual, geometry: 'sharp', light: 'neon', contrast: 'extreme', border: 'bold', saturation: 'neon', energy: 'chaotic' },
      spacing: [4, 12, 20], radius: [0, 4, 8], shadows: ['neon'],
      typography: { family: '"Rajdhani", sans-serif', weights: [500, 700] }
  },
  'future-holographic': {
      id: 'future-holographic', category: 'futuristic', name: 'Holographic',
      visual: { ...baseVisual, light: 'neon', textures: 'noise', depth: 'floating', softness: 0.3, saturation: 'muted' },
      spacing: [10, 20, 30], radius: [2, 4, 8], shadows: ['neon'],
      typography: { family: '"Orbitron", sans-serif', weights: [400] }
  },
  'future-space': {
      id: 'future-space', category: 'futuristic', name: 'Deep Space UI',
      visual: { ...baseVisual, contrast: 'high', density: 'tight', border: 'thin', saturation: 'grayscale' },
      spacing: [2, 6, 12], radius: [0, 1, 2], shadows: ['none'],
      typography: { family: '"JetBrains Mono", monospace', weights: [400] }
  },

  // 6. GAMING
  'gaming-rgb': {
      id: 'gaming-rgb', category: 'gaming', name: 'Gaming RGB',
      visual: { ...baseVisual, light: 'neon', contrast: 'high', border: 'bold', energy: 'active', saturation: 'neon' },
      spacing: [6, 12, 18], radius: [4, 8, 12], shadows: ['neon'],
      typography: { family: '"Barlow", sans-serif', weights: [600, 900] }
  },
  'gaming-mmorpg': {
      id: 'gaming-mmorpg', category: 'gaming', name: 'MMO Fantasy',
      visual: { ...baseVisual, skeuomorphism: 0.6, textures: 'paper', realism: 0.7, typography: 'serif' },
      spacing: [8, 16, 24], radius: [2, 4, 8], shadows: ['deep'],
      typography: { family: '"Cinzel", serif', weights: [400, 700] }
  },
  'gaming-tactical': {
      id: 'gaming-tactical', category: 'gaming', name: 'Tactical HUD',
      visual: { ...baseVisual, geometry: 'sharp', contrast: 'extreme', density: 'tight', border: 'bold', typography: 'mono' },
      spacing: [2, 4, 8], radius: [0, 0, 0], shadows: ['none'],
      typography: { family: '"Roboto Mono", monospace', weights: [500, 700] }
  },

  // 7. RETRO
  'retro-y2k': {
      id: 'retro-y2k', category: 'retro', name: 'Y2K Aesthetic',
      visual: { ...baseVisual, light: 'directional', realism: 0.4, skeuomorphism: 0.5, saturation: 'vibrant' },
      spacing: [8, 16, 24], radius: [12, 24, 40], shadows: ['soft'],
      typography: { family: '"Outfit", sans-serif', weights: [400, 900] }
  },
  'retro-frutiger': {
      id: 'retro-frutiger', category: 'retro', name: 'Frutiger Aero',
      visual: { ...baseVisual, light: 'directional', realism: 0.6, skeuomorphism: 0.7, softness: 0.8, saturation: 'vibrant' },
      spacing: [10, 20, 30], radius: [20, 40, 60], shadows: ['soft'],
      typography: { family: '"Frutiger", "Myriad Pro", sans-serif', weights: [400, 700] }
  },
  'retro-8bit': {
      id: 'retro-8bit', category: 'retro', name: 'Pixel 8-bit',
      visual: { ...baseVisual, geometry: 'sharp', contrast: 'high', textures: 'grain', border: 'bold', typography: 'mono' },
      spacing: [4, 8, 16], radius: [0, 0, 0], shadows: ['hard'],
      typography: { family: '"VT323", monospace', weights: [400] }
  },
  'retro-glossy': {
      id: 'retro-glossy', category: 'retro', name: '2000s Glossy',
      visual: { ...baseVisual, light: 'directional', realism: 0.8, skeuomorphism: 0.9, softness: 0.5 },
      spacing: [6, 12, 18], radius: [8, 16, 24], shadows: ['deep'],
      typography: { family: 'Helvetica, sans-serif', weights: [700] }
  },

  // 8. LUXURY
  'luxury-gold': {
      id: 'luxury-gold', category: 'luxury', name: 'Gold Luxury',
      visual: { ...baseVisual, contrast: 'medium', border: 'thin', typography: 'serif', energy: 'calm' },
      spacing: [8, 16, 32], radius: [0, 2, 4], shadows: ['subtle'],
      typography: { family: '"Cormorant Garamond", serif', weights: [300, 400] }
  },
  'luxury-silent': {
      id: 'luxury-silent', category: 'luxury', name: 'Silent Luxury',
      visual: { ...baseVisual, contrast: 'low', density: 'airy', saturation: 'grayscale' },
      spacing: [12, 24, 48], radius: [0, 0, 0], shadows: ['none'],
      typography: { family: '"Montserrat", sans-serif', weights: [200, 400] }
  },
  'luxury-dark': {
      id: 'luxury-dark', category: 'luxury', name: 'Dark Luxury',
      visual: { ...baseVisual, light: 'directional', contrast: 'high', border: 'thin', saturation: 'muted' },
      spacing: [6, 12, 24], radius: [2, 4, 8], shadows: ['deep'],
      typography: { family: '"Playfair Display", serif', weights: [400, 900] }
  },

  // 9. ORGANIC
  'organic-eco': {
      id: 'organic-eco', category: 'organic', name: 'Eco Natural',
      visual: { ...baseVisual, geometry: 'round', shape: 'organic', textures: 'paper', softness: 0.9, saturation: 'muted' },
      spacing: [8, 16, 32], radius: [12, 24, 40], shadows: ['none'],
      typography: { family: '"DM Sans", sans-serif', weights: [400, 500] }
  },
  'organic-cozy': {
      id: 'organic-cozy', category: 'organic', name: 'Hygge Cozy',
      visual: { ...baseVisual, light: 'diffuse', softness: 1, energy: 'calm' },
      spacing: [10, 20, 30], radius: [16, 32, 48], shadows: ['soft'],
      typography: { family: '"Quicksand", sans-serif', weights: [400] }
  },
  'organic-handmade': {
      id: 'organic-handmade', category: 'organic', name: 'Handmade Craft',
      visual: { ...baseVisual, border: 'dashed', textures: 'grain', typography: 'handwritten' },
      spacing: [8, 16, 24], radius: [4, 8, 12], shadows: ['none'],
      typography: { family: '"Dancing Script", cursive', weights: [400, 700] }
  },

  // 10. GLASS
  'glass-frosted': {
      id: 'glass-frosted', category: 'glass', name: 'Frosted Glass',
      visual: { ...baseVisual, light: 'neon', depth: 'floating', softness: 0.4, border: 'thin' },
      spacing: [8, 16, 24], radius: [12, 24, 32], shadows: ['soft'],
      typography: { family: 'Inter, sans-serif', weights: [400, 600] }
  },
  'glass-acrylic': {
      id: 'glass-acrylic', category: 'glass', name: 'Acrylic UI',
      visual: { ...baseVisual, light: 'diffuse', textures: 'grain', realism: 0.4 },
      spacing: [6, 12, 20], radius: [8, 16, 24], shadows: ['subtle'],
      typography: { family: 'system-ui, sans-serif', weights: [400] }
  },
  'glass-aurora': {
      id: 'glass-aurora', category: 'glass', name: 'Aurora Glass',
      visual: { ...baseVisual, light: 'neon', softness: 0.8, saturation: 'vibrant' },
      spacing: [10, 20, 40], radius: [20, 40, 60], shadows: ['soft'],
      typography: { family: '"Sora", sans-serif', weights: [400, 800] }
  },

  // 11. SOFT DEPTH
  'soft-neumorphic': {
      id: 'soft-neumorphic', category: 'soft-depth', name: 'Neumorphism',
      visual: { ...baseVisual, light: 'directional', realism: 0.5, skeuomorphism: 0.8, softness: 1, contrast: 'low' },
      spacing: [8, 16, 32], radius: [16, 32, 48], shadows: ['none'],
      typography: { family: 'Inter, sans-serif', weights: [500] }
  },
  'soft-claymorphic': {
      id: 'soft-claymorphic', category: 'soft-depth', name: 'Claymorphism',
      visual: { ...baseVisual, geometry: 'round', realism: 0.6, softness: 1, light: 'directional' },
      spacing: [12, 24, 36], radius: [32, 64, 99], shadows: ['soft'],
      typography: { family: '"Outfit", sans-serif', weights: [700] }
  },
  'soft-inflated': {
      id: 'soft-inflated', category: 'soft-depth', name: 'Inflated UI',
      visual: { ...baseVisual, realism: 0.8, softness: 1, depth: 'floating' },
      spacing: [10, 20, 30], radius: [40, 80, 120], shadows: ['deep'],
      typography: { family: '"Nunito", sans-serif', weights: [900] }
  },

  // 12. BRUTALISM
  'brutalist-neo': {
      id: 'brutalist-neo', category: 'brutalism', name: 'Neo Brutalism',
      visual: { ...baseVisual, geometry: 'sharp', contrast: 'extreme', border: 'bold', energy: 'active' },
      spacing: [8, 16, 32], radius: [0, 4, 8], shadows: ['hard'],
      typography: { family: '"Public Sans", sans-serif', weights: [900] }
  },
  'brutalist-industrial': {
      id: 'brutalist-industrial', category: 'brutalism', name: 'Industrial Brutal',
      visual: { ...baseVisual, geometry: 'sharp', textures: 'brushed', border: 'bold', saturation: 'grayscale' },
      spacing: [4, 8, 12], radius: [0, 0, 0], shadows: ['none'],
      typography: { family: '"Roboto Mono", monospace', weights: [400, 700] }
  },
  'brutalist-raw': {
      id: 'brutalist-raw', category: 'brutalism', name: 'Raw HTML',
      visual: { ...baseVisual, geometry: 'sharp', contrast: 'high', border: 'thin', depth: 'flat' },
      spacing: [0, 4, 8], radius: [0, 0, 0], shadows: ['none'],
      typography: { family: '"Times New Roman", serif', weights: [400] }
  },

  // 13. REALISTIC
  'real-skeuomorphic': {
      id: 'real-skeuomorphic', category: 'realistic', name: 'Skeuomorphic',
      visual: { ...baseVisual, realism: 1, skeuomorphism: 1, light: 'directional' },
      spacing: [8, 16, 24], radius: [6, 12, 18], shadows: ['deep'],
      typography: { family: 'Helvetica, sans-serif', weights: [700] }
  },
  'real-metallic': {
      id: 'real-metallic', category: 'realistic', name: 'Metallic Finish',
      visual: { ...baseVisual, textures: 'brushed', realism: 0.9, contrast: 'high' },
      spacing: [6, 12, 18], radius: [4, 8, 12], shadows: ['hard'],
      typography: { family: '"Rajdhani", sans-serif', weights: [600] }
  },
  'real-cockpit': {
      id: 'real-cockpit', category: 'realistic', name: 'Instrument Panel',
      visual: { ...baseVisual, light: 'neon', realism: 0.8, skeuomorphism: 0.9, density: 'tight' },
      spacing: [2, 4, 8], radius: [2, 4, 6], shadows: ['none'],
      typography: { family: '"JetBrains Mono", monospace', weights: [700] }
  },

  // 14. EDITORIAL
  'edit-magazine': {
      id: 'edit-magazine', category: 'editorial', name: 'Magazine Pro',
      visual: { ...baseVisual, typography: 'serif', density: 'airy', border: 'bold' },
      spacing: [12, 24, 48], radius: [0, 0, 0], shadows: ['none'],
      typography: { family: '"Playfair Display", serif', weights: [400, 900] }
  },
  'edit-newspaper': {
      id: 'edit-newspaper', category: 'editorial', name: 'Classic Newspaper',
      visual: { ...baseVisual, contrast: 'high', textures: 'paper', border: 'thin', saturation: 'grayscale' },
      spacing: [8, 16, 24], radius: [0, 0, 0], shadows: ['none'],
      typography: { family: '"Lora", serif', weights: [400, 700] }
  },
  'edit-docs': {
      id: 'edit-docs', category: 'editorial', name: 'Documentation',
      visual: { ...baseVisual, density: 'normal', typography: 'modern' },
      spacing: [6, 12, 24], radius: [4, 6, 8], shadows: ['subtle'],
      typography: { family: 'system-ui, sans-serif', weights: [400, 500] }
  },

  // 15. DATA-DENSE
  'dense-bloomberg': {
      id: 'dense-bloomberg', category: 'data-dense', name: 'Bloomberg Terminal',
      visual: { ...baseVisual, contrast: 'high', density: 'tight', border: 'thin', typography: 'mono', saturation: 'grayscale' },
      spacing: [1, 2, 4], radius: [0, 0, 0], shadows: ['none'],
      typography: { family: '"Roboto Mono", monospace', weights: [400, 700] }
  },
  'dense-trading': {
      id: 'dense-trading', category: 'data-dense', name: 'Trading Pro',
      visual: { ...baseVisual, contrast: 'medium', density: 'compact', saturation: 'vibrant' },
      spacing: [2, 4, 8], radius: [2, 4, 6], shadows: ['none'],
      typography: { family: 'Inter, sans-serif', weights: [400, 600] }
  },
  'dense-ops': {
      id: 'dense-ops', category: 'data-dense', name: 'Ops Center',
      visual: { ...baseVisual, light: 'neon', density: 'tight', contrast: 'extreme' },
      spacing: [2, 5, 10], radius: [0, 1, 2], shadows: ['neon'],
      typography: { family: '"JetBrains Mono", monospace', weights: [500] }
  },

  // 16. MOBILE-NATIVE
  'mobile-ios': {
      id: 'mobile-ios', category: 'mobile-native', name: 'iOS Native',
      visual: { ...baseVisual, light: 'diffuse', depth: 'floating', softness: 0.6, border: 'thin' },
      spacing: [8, 16, 24], radius: [10, 20, 32], shadows: ['soft'],
      typography: { family: '"San Francisco", system-ui, sans-serif', weights: [400, 600] }
  },
  'mobile-android': {
      id: 'mobile-android', category: 'mobile-native', name: 'Android Material',
      visual: { ...baseVisual, light: 'directional', depth: 'layered', border: 'none' },
      spacing: [8, 16, 24], radius: [12, 16, 24], shadows: ['soft'],
      typography: { family: '"Roboto", sans-serif', weights: [400, 500] }
  },
  'mobile-superapp': {
      id: 'mobile-superapp', category: 'mobile-native', name: 'Super App',
      visual: { ...baseVisual, density: 'compact', saturation: 'vibrant', energy: 'active' },
      spacing: [4, 8, 16], radius: [8, 12, 16], shadows: ['subtle'],
      typography: { family: 'Inter, sans-serif', weights: [400, 700] }
  },

  // 17. EXPERIMENTAL
  'exp-maximalist': {
      id: 'exp-maximalist', category: 'experimental', name: 'Maximalist',
      visual: { ...baseVisual, energy: 'chaotic', saturation: 'vibrant', border: 'bold' },
      spacing: [16, 32, 64], radius: [0, 24, 48], shadows: ['hard'],
      typography: { family: '"Archivo Black", sans-serif', weights: [900] }
  },
  'exp-bauhaus': {
      id: 'exp-bauhaus', category: 'experimental', name: 'Bauhaus',
      visual: { ...baseVisual, geometry: 'sharp', shape: 'geometric', border: 'bold', contrast: 'high' },
      spacing: [10, 20, 30], radius: [0, 0, 0], shadows: ['none'],
      typography: { family: '"Public Sans", sans-serif', weights: [400, 900] }
  },
  'exp-glitch': {
      id: 'exp-glitch', category: 'experimental', name: 'Glitch Core',
      visual: { ...baseVisual, textures: 'noise', noise: 0.4, light: 'neon', energy: 'chaotic' },
      spacing: [2, 8, 16], radius: [0, 0, 0], shadows: ['neon'],
      typography: { family: '"Courier New", monospace', weights: [700] }
  },

  // 18. A11Y
  'a11y-high-contrast': {
      id: 'a11y-high-contrast', category: 'a11y', name: 'High Contrast',
      visual: { ...baseVisual, contrast: 'extreme', border: 'bold', density: 'airy', saturation: 'grayscale' },
      spacing: [12, 24, 36], radius: [4, 8, 12], shadows: ['none'],
      typography: { family: 'system-ui, sans-serif', weights: [700, 900] }
  },
  'a11y-elderly': {
      id: 'a11y-elderly', category: 'a11y', name: 'Elder Friendly',
      visual: { ...baseVisual, density: 'airy', contrast: 'high', softness: 0.8 },
      spacing: [16, 32, 48], radius: [8, 16, 24], shadows: ['soft'],
      typography: { family: 'sans-serif', weights: [400, 700] }
  },
  'a11y-neuro': {
      id: 'a11y-neuro', category: 'a11y', name: 'Neuro-Calm',
      visual: { ...baseVisual, contrast: 'low', motion: 'none', energy: 'calm', saturation: 'muted' },
      spacing: [12, 24, 36], radius: [12, 24, 36], shadows: ['none'],
      typography: { family: '"Open Sans", sans-serif', weights: [400] }
  },

  // 19. CULTURAL
  'cult-korean': {
      id: 'cult-korean', category: 'cultural', name: 'Korean Trendy',
      visual: { ...baseVisual, light: 'diffuse', softness: 0.9, density: 'airy', saturation: 'vibrant' },
      spacing: [8, 16, 32], radius: [12, 24, 40], shadows: ['soft'],
      typography: { family: '"Pretendard", sans-serif', weights: [400, 700] }
  },
  'cult-nordic': {
      id: 'cult-nordic', category: 'cultural', name: 'Nordic Pure',
      visual: { ...baseVisual, contrast: 'low', border: 'none', energy: 'calm', saturation: 'grayscale' },
      spacing: [10, 20, 40], radius: [2, 4, 6], shadows: ['none'],
      typography: { family: '"Inter", sans-serif', weights: [300, 500] }
  },
  'cult-arabic': {
      id: 'cult-arabic', category: 'cultural', name: 'Arabic Luxury',
      visual: { ...baseVisual, light: 'directional', border: 'thin', typography: 'serif' },
      spacing: [6, 12, 24], radius: [0, 2, 4], shadows: ['deep'],
      typography: { family: '"IBM Plex Sans Arabic", sans-serif', weights: [400, 700] }
  },

  // 20. PLATFORM
  'plat-apple': {
      id: 'plat-apple', category: 'platform', name: 'Apple-like',
      visual: { ...baseVisual, geometry: 'soft', light: 'diffuse', depth: 'floating', border: 'thin' },
      spacing: [8, 16, 24], radius: [12, 20, 32], shadows: ['soft'],
      typography: { family: 'system-ui, sans-serif', weights: [400, 600] }
  },
  'plat-google': {
      id: 'plat-google', category: 'platform', name: 'Google-like',
      visual: { ...baseVisual, depth: 'layered', border: 'none', softness: 0.5, saturation: 'vibrant' },
      spacing: [8, 16, 24], radius: [12, 16, 24], shadows: ['subtle'],
      typography: { family: '"Product Sans", sans-serif', weights: [400, 500] }
  },
  'plat-notion': {
      id: 'plat-notion', category: 'platform', name: 'Notion-like',
      visual: { ...baseVisual, geometry: 'soft', contrast: 'low', border: 'thin', saturation: 'grayscale' },
      spacing: [6, 12, 18], radius: [3, 5, 8], shadows: ['none'],
      typography: { family: 'system-ui, sans-serif', weights: [400, 600] }
  },
  'plat-arc': {
      id: 'plat-arc', category: 'platform', name: 'Arc Browser',
      visual: { ...baseVisual, light: 'neon', softness: 0.7, border: 'thin', saturation: 'vibrant' },
      spacing: [4, 8, 16], radius: [8, 12, 16], shadows: ['soft'],
      typography: { family: 'Inter, sans-serif', weights: [500] }
  }
};
