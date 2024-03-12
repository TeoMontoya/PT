require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./connect');
const Flight = require('../models/Flight');

//Create test flights so they populate the database. gotta use the command 
/* node ./db/seed.js */
const sampleFlights = [
  {
    from: "New York",
    to: "London",
    departure: new Date(2023, 4, 15, 8, 30),
    price: 500
  },
  {
    from: "Tokyo",
    to: "San Francisco",
    departure: new Date(2023, 5, 20, 9, 0),
    price: 750
  },
  {
    from: "Paris",
    to: "Dubai",
    departure: new Date(2023, 6, 10, 14, 45),
    price: 600
  },
  {
    from: "Sydney",
    to: "Singapore",
    departure: new Date(2023, 7, 5, 7, 15),
    price: 400
  },
  {
    from: "Los Angeles",
    to: "New York",
    departure: new Date(2023, 8, 1, 11, 30),
    price: 350
  },
  {
    from: "London",
    to: "Paris",
    departure: new Date(2023, 9, 12, 16, 0),
    price: 200
  },
  {
    from: "Madrid",
    to: "Rome",
    departure: new Date(2023, 10, 8, 13, 20),
    price: 300
  },
  {
    from: "Beijing",
    to: "Moscow",
    departure: new Date(2023, 11, 17, 10, 45),
    price: 450
  },
  {
    from: "Toronto",
    to: "Mexico City",
    departure: new Date(2023, 12, 22, 12, 15),
    price: 380
  },
  {
    from: "Berlin",
    to: "Amsterdam",
    departure: new Date(2024, 1, 14, 9, 30),
    price: 250
  },
  {
    from: "Istanbul",
    to: "Athens",
    departure: new Date(2024, 2, 5, 15, 45),
    price: 180
  },
  {
    from: "Singapore",
    to: "Hong Kong",
    departure: new Date(2024, 3, 10, 8, 0),
    price: 300
  },
  {
    from: "Dubai",
    to: "Mumbai",
    departure: new Date(2024, 4, 15, 11, 15),
    price: 280
  },
  {
    from: "Sydney",
    to: "Auckland",
    departure: new Date(2024, 5, 20, 10, 30),
    price: 200
  },
  {
    from: "Los Angeles",
    to: "Chicago",
    departure: new Date(2024, 6, 10, 14, 0),
    price: 150
  },
  {
    from: "Tokyo",
    to: "Seoul",
    departure: new Date(2024, 7, 5, 9, 45),
    price: 220
  },
  {
    from: "London",
    to: "Berlin",
    departure: new Date(2024, 8, 1, 12, 30),
    price: 180
  },
  {
    from: "New York",
    to: "Los Angeles",
    departure: new Date(2024, 9, 12, 13, 0),
    price: 280
  },
  {
    from: "Paris",
    to: "Madrid",
    departure: new Date(2024, 10, 8, 16, 20),
    price: 210
  },
  {
    from: "Rome",
    to: "Athens",
    departure: new Date(2024, 11, 17, 10, 0),
    price: 190
  }
];


const seedDB = async () => {
  await connectDB();
  await Flight.deleteMany({}); 
  await Flight.insertMany(sampleFlights);
  console.log("Database seeded with sample flights.");
  process.exit();
};

seedDB().catch(err => console.error(err));
