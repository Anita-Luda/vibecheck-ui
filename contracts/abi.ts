export type ModeId = 0 | 1 | 2 | 3;

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

export interface RoleBinding {
  size: number;
  map: Uint16Array;
}

export interface TokenGraph {
  color: {
    lattice: Float64Array;
  };
  spacing: {
    base: number;
    scale: Float64Array;
  };
  radius: {
    base: number;
    scale: Float64Array;
  };
  typography: {
    family: string;
    sizeBase: number;
    scale: Float64Array;
  };
  motion: {
    scale: Float64Array;
  };
}

export interface OKLCH {
    l: number;
    c: number;
    h: number;
}

export interface ColorFamily {
    id: string;
    name: string;
    base: OKLCH;
    lattice: string[];
    config: {
        range: [number, number];
        chromaCap: number;
        method: 'perceptual' | 'linear';
    };
}

export interface U {
  t: TokenGraph;
  r: RoleBinding;
  x: Float64Array;
  m: ModeId;
  p: PresetId;
  darkMode: boolean;
  grayscale: boolean;
  contrastMode: 'none' | 'AA' | 'AAA';
  customizing: boolean;
  w: [number, number];
  o?: {
      fontFamily?: string;
      radiusBase?: number;
      spacingBase?: number;
      visionSim?: string;
      borderThickness?: number;
      shadowBlur?: number;
      motionIntensity?: number;
      noiseLevel?: number;
  };

  families: ColorFamily[];

  roles: {
      dominant: string;
      secondary: string;
      accent: string;
      support: string;
      muted: string;
      destructive: string;
      neutral: string;
      overlay: string;
      success: string;
      warning: string;
      info: string;
  };

  device: 'desktop' | 'tablet' | 'mobile' | 'ultrawide';
  densityMode: 'compact' | 'normal' | 'touch';

  colorSource: 'grayscale' | 'preset' | 'custom';
  masterColor?: OKLCH;

  colorMode: 'mono' | 'duo' | 'trio';
  applyPresetColors: boolean;
  useGrayscalePresets: boolean;
}
