import { E } from '../events/types';
import { Heap } from '../../contracts/heap';
import { createNode } from '../heap/node';
import { commitNode } from '../heap/heap';
import { generateLatticeData } from '../compiler/colorCompiler';

export const tokenReducer = (e: E, h: Heap): Heap => {
  if (e.type !== 'token.update') return h;

  const currentHead = h.nodes.get(h.head)!;
  const nextU = {
    ...currentHead.value,
    ...e.payload,
    t: {
        ...currentHead.value.t,
        ...(e.payload.t || {}),
        color: {
            ...currentHead.value.t.color,
            ...(e.payload.color || {})
        }
    }
  };

  // Sync Kernel lattice if master color or color source changes
  if (e.payload.masterColor || e.payload.colorSource) {
      const base = nextU.masterColor || { l: 0.5, c: 0.1, h: 200 };
      nextU.t.color.lattice = generateLatticeData(base);
  }

  const nextId = `node-${h.nodes.size}-${Date.now()}`;
  const newNode = createNode(nextId, h.head, nextU);
  return commitNode(h, newNode);
};
