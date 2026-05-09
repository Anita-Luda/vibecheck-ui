import { create } from 'zustand';
import { Heap, Node } from '../../contracts/heap';

interface HeapStore {
  heap: Heap | null;
  setHeap: (heap: Heap) => void;
  getHead: () => Node | null;
}

export const useHeapStore = create<HeapStore>((set, get) => ({
  heap: null,
  setHeap: (heap) => set({ heap }),
  getHead: () => {
    const { heap } = get();
    if (!heap) return null;
    return heap.nodes.get(heap.head) || null;
  },
}));
