import { E } from '../events/types';
import { Heap } from '../../contracts/heap';
import { createNode } from '../heap/node';
import { commitNode } from '../heap/heap';

export const modeReducer = (e: E, h: Heap): Heap => {
  if (e.type !== 'mode.set') return h;

  const currentHead = h.nodes.get(h.head)!;
  const nextU = {
    ...currentHead.value,
    m: e.payload
  };

  const newNode = createNode(crypto.randomUUID(), h.head, nextU);
  return commitNode(h, newNode);
};
