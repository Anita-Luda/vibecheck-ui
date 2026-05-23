import { Heap, Node } from '../../contracts/heap';

export const getHistory = (heap: Heap, nodeId: string): Node[] => {
    const history: Node[] = [];
    let currentId: string | null = nodeId;

    while (currentId) {
        const node = heap.nodes.get(currentId);
        if (!node) break;
        history.push(node);
        currentId = node.parent;
    }

    return history;
};
