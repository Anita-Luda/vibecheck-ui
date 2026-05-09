import { E } from '../events/types';
import { Heap } from '../../contracts/heap';
import { createNode } from '../heap/node';
import { commitNode } from '../heap/heap';

export const layoutReducer = (e: E, h: Heap): Heap => {
  if (e.type !== 'user.input') return h;

  const currentHead = h.nodes.get(h.head)!;
  const nextU = {
    ...currentHead.value,
    x: e.payload.matrix || currentHead.value.x
  };

  const newNode = createNode(crypto.randomUUID(), h.head, nextU);
  return commitNode(h, newNode);
};
