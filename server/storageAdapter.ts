// In-memory storage for VibeCheck snapshots and projects
// NO computation logic here - just storage as per ABI.

interface Storage {
  snapshots: any[];
  projects: any[];
}

const memoryStore: Storage = {
  snapshots: [],
  projects: []
};

export const storage = {
  getSnapshots: async () => memoryStore.snapshots,
  saveSnapshot: async (snapshot: any) => {
    memoryStore.snapshots.push(snapshot);
    return snapshot;
  },
  getSnapshotById: async (id: string) => {
    return memoryStore.snapshots.find(s => s.id === id);
  },
  getProjects: async () => memoryStore.projects,
  saveProject: async (project: any) => {
    memoryStore.projects.push(project);
    return project;
  }
};
