const mongoose = require('mongoose');

//schema for flights using mongo
const flightSchema = new mongoose.Schema({
  from: String,
  to: String,
  departure: Date,
  price: Number,
});

module.exports = mongoose.model('Flight', flightSchema);