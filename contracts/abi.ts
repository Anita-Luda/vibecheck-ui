import { PresetId } from '../src/styles/presets';

export type ModeId = 0 | 1 | 2 | 3;

export interface RoleBinding {
  size: number;
  map: Uint16Array;
}

export interface TokenGraph {
  color: {
    lattice: Float64Array; // Legacy lattice
  };
  spacing: {
    scale: Float64Array;
  };
  radius: {
    scale: Float64Array;
  };
  typography: {
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
    lattice: string[]; // Generated hex strings for UI preview
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

  // Unlimited Families
  families: ColorFamily[];

  // Role assignments
  roles: {
      dominant: string; // familyId
      secondary: string;
      accent: string;
      support: string;
      muted: string;
      destructive: string;
      neutral: string;
      overlay: string;
  };

  // Per-component overrides
  overrides?: Record<string, {
      familyId?: string;
      shadeIndex?: number;
      radius?: number;
  }>;

  // Environment
  device: 'desktop' | 'tablet' | 'mobile' | 'ultrawide';
  densityMode: 'compact' | 'normal' | 'touch';

  // Legacy fields (to be deprecated or mapped)
  secondaryColor?: OKLCH;
  tertiaryColor?: OKLCH;
  colorMode: 'mono' | 'duo' | 'trio';
  applyPresetColors: boolean;
  useGrayscalePresets: boolean;
}

export interface RenderMap {
  cssVars: Record<string, string>;
  layoutBindings: number[];
}
