import { Heap, Node } from '../../contracts/heap';

export const initHeap = (root: Node): Heap => {
  const nodes = new Map<string, Node>();
  nodes.set(root.id, root);
  return {
    nodes,
    head: root.id,
  };
};

export const commitNode = (heap: Heap, node: Node): Heap => {
  const nodes = new Map(heap.nodes);
  nodes.set(node.id, node);
  return {
    nodes,
    head: node.id,
  };
};
