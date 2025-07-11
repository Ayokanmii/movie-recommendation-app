import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './models/index.js'; // Automatically runs DB connection

import authRoutes from './routes/auth.js';
import watchlistRoutes from './routes/watchlist.js';
import aiRoutes from './routes/ai.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/watchlist', watchlistRoutes);
app.use('/api/ai', aiRoutes);

app.listen(5000, () => console.log('🚀 Server running on port 5000'));
