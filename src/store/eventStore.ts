import { create } from 'zustand';
import { E } from '../events/types';

interface EventStore {
  events: E[];
  addEvent: (event: E) => void;
}

export const useEventStore = create<EventStore>((set) => ({
  events: [],
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
}));
