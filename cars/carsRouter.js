const express = require('express');

const router = express.Router();

const db = require('../data/db-config.js');

router.get('/', async (req, res) => {
  try {
    const cars = await db('car-dealer');
    console.log(cars);
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ message: 'could not retrieve cars' });
  }
});

module.exports = router;
