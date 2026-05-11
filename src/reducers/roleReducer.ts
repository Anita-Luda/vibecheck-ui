import { E } from '../events/types';
import { Heap } from '../../contracts/heap';
import { createNode } from '../heap/node';
import { commitNode } from '../heap/heap';

export const roleReducer = (e: E, h: Heap): Heap => {
  if (e.type !== 'role.update') return h;

  const currentHead = h.nodes.get(h.head)!;
  const nextU = {
    ...currentHead.value,
    r: { ...currentHead.value.r, ...e.payload }
  };

  const nextId = `node-${h.nodes.size}-${Date.now()}`;
  const newNode = createNode(nextId, h.head, nextU);
  return commitNode(h, newNode);
};
