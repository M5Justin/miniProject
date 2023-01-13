const router = require('express').Router();
const { Trip } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const tripData = await Trip.create(req.body);
    res.json(tripData);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tripData = await Trip.destroy({ where: { id: req.params.id } });
    res.json(tripData);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

module.exports = router;