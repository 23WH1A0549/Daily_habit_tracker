// require('dotenv').config(); // load .env

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const User = require("./models/user");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Debug: check if env is loaded
// console.log("Mongo URI:", process.env.MONGO_URI);

// // Connect to MongoDB and insert test document
// mongoose.connect(process.env.MONGO_URI)
//   .then(async () => {
//     console.log("MongoDB connected");

//     // Create a test collection & document
//     const testSchema = new mongoose.Schema({ name: String });
//     const Test = mongoose.model("Test", testSchema);

//     // Insert a test document if collection is empty
//     const count = await Test.countDocuments();
//     if (count === 0) {
//       await Test.create({ name: "My first habit" });
//       console.log("Test document inserted");
//     }

//   })
//   .catch(err => console.log("MongoDB connection error:", err));

// // Test route

// app.get("/", (req, res) => {
//   res.send("Daily Habit Tracker Server is Running");
// });

// app.post("/register", async (req, res) => {
//   const { email, password } = req.body;

//   const user = new User({ email, password });
//   await user.save();

//   res.send("User registered successfully");
// });

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email, password });

//   if (user) {
//     res.send("Login successful");
//   } else {
//     res.send("Invalid credentials");
//   }
// });
// // app.get("/", (req, res) => {
// //   res.send("Backend is running");
// // });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Sample Habit Data
let habits = [
  { name: "Exercise", status: "Pending" },
  { name: "Reading", status: "Completed" }
];

// GET all habits
app.get("/habits", (req, res) => {
  res.json(habits);
});

// ADD new habit
app.post("/habits", (req, res) => {

  const habit = req.body;

  habits.push(habit);

  res.json({ message: "Habit added successfully" });

});

// HABIT ANALYTICS
app.get("/habitAnalytics", (req, res) => {

  const totalHabits = habits.length;

  const completedHabits = habits.filter(h => h.status === "Completed").length;

  const pendingHabits = habits.filter(h => h.status === "Pending").length;

  const completionRate = totalHabits === 0 
    ? 0 
    : ((completedHabits / totalHabits) * 100).toFixed(2);

  res.json({

    totalHabits,
    completedHabits,
    pendingHabits,
    completionRate,

    topHabit: "Exercise",
    weeklyProgress: "5 days",

    habitStatus: [
      { status: "Completed", count: completedHabits, percent: completionRate },
      { status: "Pending", count: pendingHabits, percent: 100 - completionRate }
    ],

    habitDetails: habits.map(h => ({
      name: h.name,
      date: "10-04-2026",
      status: h.status
    })),

    recentHabits: habits.map(h => ({
      name: h.name,
      date: "10-04-2026",
      status: h.status
    }))

  });

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});