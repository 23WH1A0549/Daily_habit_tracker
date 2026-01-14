require('dotenv').config(); // load .env

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debug: check if env is loaded
console.log("Mongo URI:", process.env.MONGO_URI);

// Connect to MongoDB and insert test document
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");

    // Create a test collection & document
    const testSchema = new mongoose.Schema({ name: String });
    const Test = mongoose.model("Test", testSchema);

    // Insert a test document if collection is empty
    const count = await Test.countDocuments();
    if (count === 0) {
      await Test.create({ name: "My first habit" });
      console.log("Test document inserted");
    }

  })
  .catch(err => console.log("MongoDB connection error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
