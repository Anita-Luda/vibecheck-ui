import { PresetId } from '../src/styles/presets';

export type ModeId = 0 | 1 | 2 | 3;

export interface RoleBinding {
  size: number;
  map: Uint16Array;
}

export interface TokenGraph {
  color: {
    lattice: Float64Array;
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
  };
  secondaryColor?: OKLCH;
  tertiaryColor?: OKLCH;
  colorMode: 'mono' | 'duo' | 'trio';
}

export interface RenderMap {
  cssVars: Record<string, string>;
  layoutBindings: number[];
}
