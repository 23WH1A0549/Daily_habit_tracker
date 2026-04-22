const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema({
  name: String,
  status: String
});

module.exports = mongoose.model("Habit", HabitSchema);