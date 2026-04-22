const express = require("express");
const router = express.Router();
const Habit = require("./models/habit");

router.use(express.json());

/* GET all habits */

router.get("/habits", async (req,res)=>{
const habits = await Habit.find();
res.json(habits);
});

/* ADD new habit */

router.post("/habits", async (req,res)=>{

const habit = new Habit({
name:req.body.name,
status:req.body.status
});

await habit.save();

res.json({message:"Habit added"});
});

module.exports = router;