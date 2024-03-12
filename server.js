require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importing the routes
const flightRoutes = require('./routes/flights');
const reservationRoutes = require('./routes/reservations');
const connectDB = require('./db/connect');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Now using this to use the routes
app.use('/api/flights', flightRoutes);
app.use('/api/reservations', reservationRoutes);

// Connect to MongoDB and start the server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.error(error);
  }
};

start();
