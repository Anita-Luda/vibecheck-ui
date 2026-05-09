export type PresetId =
  | 'sharp-prof'
  | 'retro-gaming'
  | 'med-prof'
  | 'med-casual'
  | 'round-prof'
  | 'round-playful'
  | 'cyberpunk';

export interface StylePreset {
  id: PresetId;
  name: string;
  radius: number[];
  shadows: string[];
  spacing: number[];
  typography: {
    family: string;
    weights: number[];
  };
  motion: string;
  icons: 'outline' | 'bold' | 'pixel' | 'kawaii' | 'retro';
}

export const STYLE_PRESETS: Record<PresetId, StylePreset> = {
  'sharp-prof': {
    id: 'sharp-prof',
    name: 'Kanciasty Profesjonalny',
    radius: [0, 0, 0],
    shadows: ['subtle'],
    spacing: [4, 8, 12],
    typography: { family: 'Inter, sans-serif', weights: [400, 700] },
    motion: 'snappy',
    icons: 'outline'
  },
  'retro-gaming': {
    id: 'retro-gaming',
    name: 'Kanciasty Retro Gaming',
    radius: [0, 0, 0],
    shadows: ['hard'],
    spacing: [8, 16, 24],
    typography: { family: '"VT323", monospace', weights: [400] },
    motion: 'none',
    icons: 'pixel'
  },
  'med-prof': {
      id: 'med-prof',
      name: 'Średni Profesjonalny',
      radius: [4, 8, 12],
      shadows: ['subtle'],
      spacing: [6, 12, 18],
      typography: { family: 'system-ui, sans-serif', weights: [400, 600] },
      motion: 'smooth',
      icons: 'outline'
  },
  'med-casual': {
      id: 'med-casual',
      name: 'Średni Swobodny',
      radius: [8, 16, 24],
      shadows: ['soft'],
      spacing: [8, 16, 32],
      typography: { family: '"Plus Jakarta Sans", sans-serif', weights: [400, 500] },
      motion: 'smooth',
      icons: 'bold'
  },
  'round-prof': {
      id: 'round-prof',
      name: 'Zaokrąglony Profesjonalny',
      radius: [12, 24, 40],
      shadows: ['soft'],
      spacing: [10, 20, 30],
      typography: { family: '"DM Sans", sans-serif', weights: [400, 500] },
      motion: 'smooth',
      icons: 'outline'
  },
  'round-playful': {
    id: 'round-playful',
    name: 'Zaokrąglony Playful Kawaii',
    radius: [20, 32, 64],
    shadows: ['soft'],
    spacing: [12, 24, 48],
    typography: { family: '"Nunito", sans-serif', weights: [400, 900] },
    motion: 'bouncy',
    icons: 'kawaii'
  },
  'cyberpunk': {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    radius: [0, 4, 8],
    shadows: ['neon'],
    spacing: [4, 12, 20],
    typography: { family: '"Rajdhani", sans-serif', weights: [500, 700] },
    motion: 'snappy',
    icons: 'bold'
  }
};
