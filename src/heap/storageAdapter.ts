import { Snapshot, Heap } from '../../contracts/heap';

export interface StorageAdapter {
  save(key: string, data: any): Promise<void>;
  load(key: string): Promise<any>;
  delete(key: string): Promise<void>;
}

export class LocalStorageAdapter implements StorageAdapter {
  async save(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  async load(key: string) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  async delete(key: string) {
    localStorage.removeItem(key);
  }
}
