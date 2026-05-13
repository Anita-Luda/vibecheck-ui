import { Heap, Node } from './node';

export const getHistory = (heap: Heap, nodeId: string): Node[] => {
    const history: Node[] = [];
    let current = heap.nodes.get(nodeId);
    while (current) {
        history.push(current);
        if (!current.parent) break;
        current = heap.nodes.get(current.parent);
    }
    return history;
};

export const rollback = (heap: Heap, nodeId: string): Heap => {
    if (!heap.nodes.has(nodeId)) return heap;
    return {
        ...heap,
        head: nodeId
    };
};
