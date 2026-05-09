import { create } from 'zustand';
import { Snapshot } from '../../contracts/heap';

interface SnapshotStore {
  snapshots: Snapshot[];
  addSnapshot: (snapshot: Snapshot) => void;
  loadSnapshot: (id: string) => Snapshot | null;
}

export const useSnapshotStore = create<SnapshotStore>((set, get) => ({
  snapshots: [],
  addSnapshot: (snapshot) => set((state) => ({ snapshots: [...state.snapshots, snapshot] })),
  loadSnapshot: (id) => get().snapshots.find((s) => s.id === id) || null,
}));
