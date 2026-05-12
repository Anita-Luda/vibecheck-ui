import { STYLE_PRESETS, PresetId } from './src/styles/presets';
import { PRESET_PALETTES } from './src/styles/palettes';

const ids = Object.keys(STYLE_PRESETS);
const paletteIds = Object.keys(PRESET_PALETTES);

console.log("Presets count:", ids.length);
console.log("Palettes count:", paletteIds.length);

ids.forEach(id => {
    if (!PRESET_PALETTES[id as PresetId]) {
        console.error("Missing palette for preset:", id);
    }
});

paletteIds.forEach(id => {
    if (!STYLE_PRESETS[id as PresetId]) {
        console.error("Missing style for palette id:", id);
    }
});
