import { OKLCH } from '../../contracts/abi';
import { PresetId } from './presets';

export interface PresetPalette {
    primary: OKLCH;
    accent: OKLCH;
    neutral: OKLCH;
}

export const PRESET_PALETTES: Record<PresetId, PresetPalette> = {
    // Default grayscale
    'minimal-ultra': { primary: { l: 0.2, c: 0, h: 0 }, accent: { l: 0.5, c: 0, h: 0 }, neutral: { l: 0.9, c: 0, h: 0 } },
    'minimal-scandi': { primary: { l: 0.4, c: 0.02, h: 250 }, accent: { l: 0.6, c: 0.05, h: 40 }, neutral: { l: 0.95, c: 0.01, h: 60 } },
    'minimal-japanese': { primary: { l: 0.3, c: 0.01, h: 20 }, accent: { l: 0.4, c: 0.1, h: 20 }, neutral: { l: 0.98, c: 0.02, h: 60 } },

    'prof-enterprise': { primary: { l: 0.5, c: 0.1, h: 250 }, accent: { l: 0.6, c: 0.15, h: 200 }, neutral: { l: 0.95, c: 0.02, h: 240 } },
    'prof-banking': { primary: { l: 0.4, c: 0.08, h: 240 }, accent: { l: 0.55, c: 0.12, h: 180 }, neutral: { l: 0.96, c: 0.01, h: 220 } },
    'prof-consulting': { primary: { l: 0.2, c: 0.05, h: 260 }, accent: { l: 0.7, c: 0.08, h: 40 }, neutral: { l: 0.98, c: 0.01, h: 40 } },

    'startup-saas': { primary: { l: 0.6, c: 0.2, h: 260 }, accent: { l: 0.65, c: 0.25, h: 320 }, neutral: { l: 0.98, c: 0.02, h: 260 } },
    'startup-linear': { primary: { l: 0.2, c: 0, h: 0 }, accent: { l: 0.6, c: 0.15, h: 250 }, neutral: { l: 0.9, c: 0, h: 0 } },
    'startup-stripe': { primary: { l: 0.55, c: 0.18, h: 245 }, accent: { l: 0.6, c: 0.2, h: 160 }, neutral: { l: 0.99, c: 0.01, h: 240 } },
    'startup-ai': { primary: { l: 0.65, c: 0.3, h: 280 }, accent: { l: 0.7, c: 0.2, h: 140 }, neutral: { l: 0.95, c: 0.05, h: 280 } },

    'playful-kawaii': { primary: { l: 0.85, c: 0.15, h: 340 }, accent: { l: 0.85, c: 0.1, h: 200 }, neutral: { l: 0.98, c: 0.05, h: 300 } },
    'playful-bubblegum': { primary: { l: 0.8, c: 0.25, h: 330 }, accent: { l: 0.75, c: 0.2, h: 190 }, neutral: { l: 0.97, c: 0.04, h: 330 } },
    'playful-toy': { primary: { l: 0.65, c: 0.35, h: 40 }, accent: { l: 0.6, c: 0.3, h: 220 }, neutral: { l: 0.95, c: 0.1, h: 60 } },

    'future-cyberpunk': { primary: { l: 0.1, c: 0.1, h: 280 }, accent: { l: 0.7, c: 0.4, h: 320 }, neutral: { l: 0.2, c: 0.1, h: 300 } },
    'future-holographic': { primary: { l: 0.7, c: 0.15, h: 190 }, accent: { l: 0.8, c: 0.2, h: 310 }, neutral: { l: 0.95, c: 0.1, h: 250 } },
    'future-space': { primary: { l: 0.05, c: 0, h: 0 }, accent: { l: 0.8, c: 0.05, h: 200 }, neutral: { l: 0.1, c: 0, h: 0 } },

    'gaming-rgb': { primary: { l: 0.1, c: 0, h: 0 }, accent: { l: 0.6, c: 0.3, h: 150 }, neutral: { l: 0.15, c: 0.05, h: 200 } },
    'gaming-mmorpg': { primary: { l: 0.2, c: 0.1, h: 30 }, accent: { l: 0.5, c: 0.2, h: 45 }, neutral: { l: 0.1, c: 0.05, h: 30 } },
    'gaming-tactical': { primary: { l: 0.2, c: 0.1, h: 120 }, accent: { l: 0.7, c: 0.3, h: 80 }, neutral: { l: 0.15, c: 0.05, h: 100 } },

    'retro-y2k': { primary: { l: 0.8, c: 0.2, h: 250 }, accent: { l: 0.85, c: 0.2, h: 350 }, neutral: { l: 0.95, c: 0.05, h: 260 } },
    'retro-frutiger': { primary: { l: 0.7, c: 0.2, h: 210 }, accent: { l: 0.75, c: 0.2, h: 120 }, neutral: { l: 0.98, c: 0.05, h: 200 } },
    'retro-8bit': { primary: { l: 0.3, c: 0.15, h: 240 }, accent: { l: 0.6, c: 0.25, h: 30 }, neutral: { l: 0.85, c: 0, h: 0 } },
    'retro-glossy': { primary: { l: 0.6, c: 0.15, h: 220 }, accent: { l: 0.65, c: 0.2, h: 0 }, neutral: { l: 0.9, c: 0.02, h: 220 } },

    'luxury-gold': { primary: { l: 0.2, c: 0.05, h: 40 }, accent: { l: 0.75, c: 0.15, h: 70 }, neutral: { l: 0.98, c: 0.05, h: 40 } },
    'luxury-silent': { primary: { l: 0.3, c: 0, h: 0 }, accent: { l: 0.5, c: 0.02, h: 30 }, neutral: { l: 0.97, c: 0.01, h: 30 } },
    'luxury-dark': { primary: { l: 0.05, c: 0, h: 0 }, accent: { l: 0.3, c: 0.05, h: 50 }, neutral: { l: 0.1, c: 0, h: 0 } },

    'organic-eco': { primary: { l: 0.4, c: 0.12, h: 145 }, accent: { l: 0.55, c: 0.1, h: 60 }, neutral: { l: 0.96, c: 0.05, h: 100 } },
    'organic-cozy': { primary: { l: 0.45, c: 0.08, h: 30 }, accent: { l: 0.65, c: 0.12, h: 20 }, neutral: { l: 0.98, c: 0.04, h: 40 } },
    'organic-handmade': { primary: { l: 0.5, c: 0.1, h: 50 }, accent: { l: 0.6, c: 0.15, h: 10 }, neutral: { l: 0.95, c: 0.05, h: 60 } },

    'glass-frosted': { primary: { l: 0.6, c: 0.1, h: 250 }, accent: { l: 0.7, c: 0.2, h: 280 }, neutral: { l: 0.98, c: 0.05, h: 250 } },
    'glass-acrylic': { primary: { l: 0.5, c: 0.05, h: 220 }, accent: { l: 0.6, c: 0.1, h: 200 }, neutral: { l: 0.95, c: 0.02, h: 220 } },
    'glass-aurora': { primary: { l: 0.65, c: 0.25, h: 290 }, accent: { l: 0.75, c: 0.3, h: 180 }, neutral: { l: 0.9, c: 0.1, h: 250 } },

    'soft-neumorphic': { primary: { l: 0.5, c: 0, h: 0 }, accent: { l: 0.6, c: 0.05, h: 250 }, neutral: { l: 0.92, c: 0, h: 0 } },
    'soft-claymorphic': { primary: { l: 0.85, c: 0.2, h: 260 }, accent: { l: 0.8, c: 0.15, h: 320 }, neutral: { l: 0.97, c: 0.05, h: 260 } },
    'soft-inflated': { primary: { l: 0.75, c: 0.3, h: 340 }, accent: { l: 0.7, c: 0.25, h: 160 }, neutral: { l: 0.95, c: 0.1, h: 340 } },

    'brutalist-neo': { primary: { l: 0.1, c: 0, h: 0 }, accent: { l: 0.9, c: 0.4, h: 80 }, neutral: { l: 1, c: 0, h: 0 } },
    'brutalist-industrial': { primary: { l: 0.2, c: 0, h: 0 }, accent: { l: 0.5, c: 0.2, h: 30 }, neutral: { l: 0.8, c: 0, h: 0 } },
    'brutalist-raw': { primary: { l: 0, c: 0, h: 0 }, accent: { l: 0.3, c: 0, h: 0 }, neutral: { l: 1, c: 0, h: 0 } },

    'real-skeuomorphic': { primary: { l: 0.4, c: 0.05, h: 240 }, accent: { l: 0.5, c: 0.2, h: 20 }, neutral: { l: 0.9, c: 0.05, h: 240 } },
    'real-metallic': { primary: { l: 0.5, c: 0.01, h: 0 }, accent: { l: 0.6, c: 0.02, h: 200 }, neutral: { l: 0.92, c: 0.01, h: 0 } },
    'real-cockpit': { primary: { l: 0.05, c: 0, h: 0 }, accent: { l: 0.8, c: 0.3, h: 120 }, neutral: { l: 0.1, c: 0, h: 0 } },

    'edit-magazine': { primary: { l: 0.1, c: 0, h: 0 }, accent: { l: 0.4, c: 0.15, h: 20 }, neutral: { l: 1, c: 0, h: 0 } },
    'edit-newspaper': { primary: { l: 0.1, c: 0, h: 0 }, accent: { l: 0.3, c: 0.05, h: 250 }, neutral: { l: 0.95, c: 0.02, h: 50 } },
    'edit-docs': { primary: { l: 0.2, c: 0.02, h: 250 }, accent: { l: 0.5, c: 0.1, h: 250 }, neutral: { l: 0.99, c: 0.01, h: 250 } },

    'dense-bloomberg': { primary: { l: 0.1, c: 0, h: 0 }, accent: { l: 0.7, c: 0.2, h: 140 }, neutral: { l: 0.15, c: 0, h: 0 } },
    'dense-trading': { primary: { l: 0.15, c: 0.05, h: 240 }, accent: { l: 0.6, c: 0.2, h: 140 }, neutral: { l: 0.2, c: 0.05, h: 240 } },
    'dense-ops': { primary: { l: 0.02, c: 0, h: 0 }, accent: { l: 0.8, c: 0.4, h: 190 }, neutral: { l: 0.05, c: 0.1, h: 250 } },

    'mobile-ios': { primary: { l: 0.5, c: 0.15, h: 250 }, accent: { l: 0.6, c: 0.2, h: 200 }, neutral: { l: 0.98, c: 0.02, h: 250 } },
    'mobile-android': { primary: { l: 0.55, c: 0.18, h: 260 }, accent: { l: 0.75, c: 0.2, h: 120 }, neutral: { l: 0.95, c: 0.05, h: 260 } },
    'mobile-superapp': { primary: { l: 0.6, c: 0.25, h: 320 }, accent: { l: 0.55, c: 0.3, h: 40 }, neutral: { l: 0.98, c: 0.1, h: 320 } },

    'exp-maximalist': { primary: { l: 0.6, c: 0.4, h: 300 }, accent: { l: 0.8, c: 0.3, h: 60 }, neutral: { l: 0.95, c: 0.2, h: 200 } },
    'exp-bauhaus': { primary: { l: 0.2, c: 0.3, h: 240 }, accent: { l: 0.6, c: 0.4, h: 30 }, neutral: { l: 0.9, c: 0.3, h: 90 } },
    'exp-glitch': { primary: { l: 0.1, c: 0.1, h: 280 }, accent: { l: 0.7, c: 0.5, h: 330 }, neutral: { l: 0.15, c: 0.2, h: 150 } },

    'a11y-high-contrast': { primary: { l: 0, c: 0, h: 0 }, accent: { l: 0.5, c: 0, h: 0 }, neutral: { l: 1, c: 0, h: 0 } },
    'a11y-elderly': { primary: { l: 0.1, c: 0.1, h: 250 }, accent: { l: 0.4, c: 0.2, h: 250 }, neutral: { l: 0.95, c: 0.05, h: 250 } },
    'a11y-neuro': { primary: { l: 0.4, c: 0.02, h: 200 }, accent: { l: 0.6, c: 0.04, h: 160 }, neutral: { l: 0.98, c: 0.02, h: 180 } },

    'cult-korean': { primary: { l: 0.9, c: 0.1, h: 340 }, accent: { l: 0.8, c: 0.15, h: 250 }, neutral: { l: 0.98, c: 0.05, h: 340 } },
    'cult-nordic': { primary: { l: 0.3, c: 0.02, h: 250 }, accent: { l: 0.6, c: 0.04, h: 60 }, neutral: { l: 0.97, c: 0.01, h: 250 } },
    'cult-arabic': { primary: { l: 0.15, c: 0.05, h: 40 }, accent: { l: 0.75, c: 0.2, h: 60 }, neutral: { l: 0.98, c: 0.05, h: 40 } },

    'plat-apple': { primary: { l: 0.1, c: 0, h: 0 }, accent: { l: 0.5, c: 0.15, h: 250 }, neutral: { l: 0.99, c: 0, h: 0 } },
    'plat-google': { primary: { l: 0.45, c: 0.15, h: 250 }, accent: { l: 0.55, c: 0.2, h: 140 }, neutral: { l: 0.96, c: 0.02, h: 250 } },
    'plat-notion': { primary: { l: 0.15, c: 0, h: 0 }, accent: { l: 0.4, c: 0.02, h: 250 }, neutral: { l: 1, c: 0, h: 0 } },
    'plat-arc': { primary: { l: 0.6, c: 0.2, h: 250 }, accent: { l: 0.7, c: 0.15, h: 180 }, neutral: { l: 0.95, c: 0.05, h: 250 } },
};
