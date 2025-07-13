// index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './models/index.js'; // This auto-connects DB and models

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
