import { Node as INode } from '../../contracts/heap';
import { U } from '../../contracts/abi';

export const createNode = (id: string, parent: string | null, value: U): INode => ({
  id,
  parent,
  value,
  meta: {
    createdAt: Date.now(),
  },
});
