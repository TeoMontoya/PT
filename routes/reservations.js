const express = require("express");
const router = express.Router();
const Reservation = require("../models/Reservation");

//used for pretty much everything in this app, my brain child, and my headache for a long long almost two weeks

// Endpoint to make a reservation
router.post("/", async (req, res) => {
  const reservation = new Reservation(req.body);

  try {
    const newReservation = await reservation.save();
    res.status(201).json(newReservation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Endpoint to get reservation details by ID
router.get("/:id", async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (reservation) {
      res.json(reservation);
    } else {
      res.status(404).json({ message: "Reservation not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Endpoint to get all reservations
router.get("/", async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Endpoint to cancel a reservation by ID

router.delete("/:id", async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);

    if (reservation) {
      res.json({ message: "Reservation canceled" });
    } else {
      res.status(404).json({ message: "Reservation not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
