const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight');

// Endpoint to search for flights, used in the seed and used to stablish a reaaltionship between 
// Reservations and flights

router.get('/', async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;