import { E } from '../events/types';
import { Heap } from '../../contracts/heap';
import { createNode } from '../heap/node';
import { commitNode } from '../heap/heap';
import { PRESET_PALETTES } from '../styles/palettes';
import { generateLatticeData } from '../compiler/colorCompiler';
import { PresetId } from '../../contracts/abi';

export const presetReducer = (e: E, h: Heap): Heap => {
  if (e.type !== 'preset.set') return h;

  const currentHead = h.nodes.get(h.head)!;
  const presetId = e.payload as PresetId;
  const palette = (PRESET_PALETTES as any)[presetId];

  if (!palette) return h;

  const nextU = {
    ...currentHead.value,
    p: presetId,
  };

  // Sync Kernel lattice from preset primary
  nextU.t.color.lattice = generateLatticeData(palette.primary);

  const nextId = `node-${h.nodes.size}-${Date.now()}`;
  const newNode = createNode(nextId, h.head, nextU);
  return commitNode(h, newNode);
};
