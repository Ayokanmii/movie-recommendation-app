const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const { Sequelize, DataTypes } = require('sequelize');

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false
});

const authRoutes = require('./routes/auth');
const watchlistRoutes = require('./routes/watchlist');
const aiRoutes = require('./routes/ai'); // 👈 NEW

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/watchlist', watchlistRoutes);
app.use('/api/ai', aiRoutes); // 👈 NEW

sequelize.authenticate().then(() => console.log('Database connected'));

app.listen(5000, () => console.log('Server running on port 5000'));
