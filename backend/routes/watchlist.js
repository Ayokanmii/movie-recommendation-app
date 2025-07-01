
const express = require('express');
const { Watchlist } = require('../models');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const item = await Watchlist.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const items = await Watchlist.findAll({ where: { userId: req.params.userId } });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Watchlist.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
