import express from 'express';
import cors from 'cors';
import { snapshotRouter } from './snapshots';
import { projectRouter } from './projects';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/snapshots', snapshotRouter);
app.use('/api/projects', projectRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', system: 'VibeCheck UI v8' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
