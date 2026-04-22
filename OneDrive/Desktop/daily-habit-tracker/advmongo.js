const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/habittracker');

const User=mongoose.model('User',new mongoose.Schema({
name:String,
email:String
}));

const Habit=mongoose.model('Habit',new mongoose.Schema({
userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
name:String,
status:String
}));

async function advancedQueries(){
try{

// Most recent user
const currentUser=await User.findOne().sort({_id:-1});
console.log("Current User:",currentUser);

// Most recent habit
const currentHabit=await Habit.findOne().sort({_id:-1}).populate('userId');
console.log("Current Habit:",currentHabit);

// Example: filter completed habits
const completed=await Habit.find({status:"Completed"}).limit(1);
console.log("Completed Habit:",completed);

}catch(err){
console.error(err);
}finally{
mongoose.connection.close();
}
}

advancedQueries();