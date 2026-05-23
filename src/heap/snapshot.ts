import { Heap, Node } from '../../contracts/heap';

export const fork = (heap: Heap, nodeId: string): Heap => {
    // In our implementation, every mutation is already a fork/new node creation
    // This function returns the heap as is, but ensures the head points to the requested node
    return {
        ...heap,
        head: nodeId
    };
};

export const createSnapshot = (heap: Heap, value: any): Heap => {
    const nextId = `node-${heap.nodes.size}-${Date.now()}`;
    const newNode: Node = {
        id: nextId,
        parent: heap.head,
        value,
        meta: {
            createdAt: Date.now()
        }
    };

    const nodes = new Map(heap.nodes);
    nodes.set(nextId, newNode);

    return {
        nodes,
        head: nextId
    };
};
