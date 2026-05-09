import { Router } from 'express';
import { storage } from './storageAdapter';

export const snapshotRouter = Router();

snapshotRouter.get('/', async (req, res) => {
  const snapshots = await storage.getSnapshots();
  res.json(snapshots);
});

snapshotRouter.post('/', async (req, res) => {
  const snapshot = req.body;
  const saved = await storage.saveSnapshot(snapshot);
  res.status(201).json(saved);
});

snapshotRouter.get('/:id', async (req, res) => {
  const snapshot = await storage.getSnapshotById(req.params.id);
  if (snapshot) {
    res.json(snapshot);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});
