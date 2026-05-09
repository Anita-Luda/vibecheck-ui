import { Heap as IHeap, Node } from '../../contracts/heap';

export const initHeap = (rootNode: Node): IHeap => {
  const nodes = new Map<string, Node>();
  nodes.set(rootNode.id, rootNode);
  return {
    nodes,
    head: rootNode.id,
  };
};

export const commitNode = (heap: IHeap, node: Node): IHeap => {
  const newNodes = new Map(heap.nodes);
  newNodes.set(node.id, node);
  return {
    nodes: newNodes,
    head: node.id,
  };
};
