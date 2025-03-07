const mongoose = require("mongoose");


const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
      console.log("MongoDB connection established");
    } catch (err) {
      console.error("MongoDB connection error:", err);
      process.exit(1); // Exit if connection fails
    }
  };

module.exports = connectDB;