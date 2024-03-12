const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    //Im using mongoose to connect to mongo.
    //and the Uri is set on the .env file
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Could not connect to MongoDB', err);
  }
};

module.exports = connectDB;