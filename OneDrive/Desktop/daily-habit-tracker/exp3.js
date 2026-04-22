const fs=require('fs');
const file='habits.txt';

// Write initial habit
fs.writeFileSync(file,'Habit: Study\nStatus: Completed\n\n');

// Append new habit
fs.appendFileSync(file,'Habit: Exercise\nStatus: Pending\n');

// Read file
const data=fs.readFileSync(file,'utf-8');
console.log(data);