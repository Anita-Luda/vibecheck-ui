import { Heap, Node } from './node';

export const fork = (heap: Heap, nodeId: string): Heap => {
    // In our implementation, every mutation is already a fork/new node creation
    // This file explicitly represents the fork-only snapshot logic
    return heap;
};

export const createSnapshot = (heap: Heap): Heap => {
    return { ...heap };
};
