import { Router } from 'express';
import { storage } from './storageAdapter';

export const projectRouter = Router();

projectRouter.get('/', async (req, res) => {
  const projects = await storage.getProjects();
  res.json(projects);
});

projectRouter.post('/', async (req, res) => {
  const project = req.body;
  const saved = await storage.saveProject(project);
  res.status(201).json(saved);
});
