import express from 'express';
import { Watchlist } from '../models/index.js';

const router = express.Router();

// ➕ Add movie to watchlist
router.post('/', async (req, res) => {
  try {
    const item = await Watchlist.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📥 Get user’s watchlist
router.get('/:userId', async (req, res) => {
  try {
    const items = await Watchlist.findAll({
      where: { userId: req.params.userId }
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ❌ Delete movie from watchlist
router.delete('/:id', async (req, res) => {
  try {
    await Watchlist.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;