import { U } from './abi';

export interface Node {
  id: string;
  parent: string | null;
  value: U;
  meta: {
    createdAt: number;
    author?: string;
  };
}

export interface Heap {
  nodes: Map<string, Node>;
  head: string;
}

export interface Snapshot {
  id: string;
  heap: Heap;
  parent: string | null;
}
