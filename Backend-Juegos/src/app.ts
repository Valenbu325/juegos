import express from 'express';
import cors from 'cors';
import materiasRoutes from './routes/materias.routers';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.use('/api/v1/materias', materiasRoutes);

export default app;
