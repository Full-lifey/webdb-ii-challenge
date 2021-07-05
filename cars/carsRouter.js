const express = require('express');

const router = express.Router();

const db = require('../data/db-config.js');

router.get('/', async (req, res) => {
  try {
    const cars = await db('car-dealer');
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ message: 'could not retrieve cars' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const car = await db('car-dealer').where({ id });
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({ message: 'could not retrieve car' });
  }
});

router.post('/', async (req, res) => {
  try {
    const carData = req.body;
    const [id] = await db('car-dealer').insert(carData);
    const newCarEntry = await db('car-dealer').where({ id });

    res.status(201).json(newCarEntry);
  } catch (err) {
    console.log('POST error', err);
    res.status(500).json({ message: 'could not add car' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCar = await db('car-dealer')
      .where({ id })
      .del();
    res.status(204).end();
  } catch (err) {
    console.log('DELERE error', err);
    res.status(500).json({ message: 'could not delete car' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const carData = await db('car-dealer').update(req.body);
    const newCarData = await db('car-dealer')
      .where({ id })
      .first();
    res.status(200).json(newCarData);
  } catch (err) {
    console.log('PUT error', err);
    res.status(500).json({ message: 'could not update car' });
  }
});
module.exports = router;
