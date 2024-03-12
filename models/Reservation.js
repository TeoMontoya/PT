const mongoose = require('mongoose');

//schema for the reservations using mongo
const reservationSchema = new mongoose.Schema({
  flightId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flight'
  },
  name: String,
  email: String,
  reservationDate: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Reservation', reservationSchema);