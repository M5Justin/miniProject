const router = require('express').Router();
const { Location, Traveller, Trip } = require('../../models');

router.get('/', async (req, res) => {
  const locationData = await Location.findAll();
  res.json(locationData);
});

router.get('/:id', async (req, res) => {
  const locationData = await Location.findByPk(req.params.id, {
    include:[{
      model: Trip,
      attributes: [
        'id',
        'traveller_amount',
        'trip_budget',
      ]
    }]
  });

  res.json(locationData);
});

router.post('/', async (req, res) => {
  const locationData = await Location.create(req.body);
  res.json(locationData);
});

router.delete('/:id', async (req, res) => {
  const locationData = await Location.destroy({ where: { id: req.params.id }});
  res.json(locationData);
});

module.exports = router;