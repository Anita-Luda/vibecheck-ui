import { E } from '../events/types';
import { Heap } from '../../contracts/heap';
import { createNode } from '../heap/node';
import { commitNode } from '../heap/heap';
import { STYLE_PRESETS, PresetId } from '../styles/presets';

export const presetReducer = (e: E, h: Heap): Heap => {
  if (e.type !== 'preset.set') return h;

  const currentHead = h.nodes.get(h.head)!;
  const presetId = e.payload as PresetId;
  const preset = STYLE_PRESETS[presetId];

  const nextU = {
    ...currentHead.value,
    p: presetId,
    t: {
        ...currentHead.value.t,
        spacing: { scale: new Float64Array(preset.spacing) },
        radius: { scale: new Float64Array(preset.radius) }
    }
  };

  const nextId = `node-${h.nodes.size}-${Date.now()}`;
  const newNode = createNode(nextId, h.head, nextU);
  return commitNode(h, newNode);
};
