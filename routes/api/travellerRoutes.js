const router = require('express').Router();
const { Location, Traveller, Trip } = require('../../models');

router.get('/', async (req, res) => {
  const travellerData = await Traveller.findAll();
  res.json(travellerData);
});

router.get('/:id', async (req, res) => {
  const travellerData = await Traveller.findByPk(req.params.id, {
    include:[{
      model: Trip,
      include: Location
    }]
  });
  res.json(travellerData);
});

router.post('/', async (req, res) => {
  const travellerData = await Traveller.create(req.body);
  res.json(travellerData);
});

router.delete('/:id', async (req, res) => {
  const travellerData = await Traveller.destroy({ where: { id: req.params.id }});
  res.json(travellerData);
});

module.exports = router;