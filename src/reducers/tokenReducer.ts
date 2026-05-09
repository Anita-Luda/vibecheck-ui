import { E } from '../events/types';
import { Heap } from '../../contracts/heap';
import { createNode } from '../heap/node';
import { commitNode } from '../heap/heap';

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

  const newNode = createNode(crypto.randomUUID(), h.head, nextU);
  return commitNode(h, newNode);
};
