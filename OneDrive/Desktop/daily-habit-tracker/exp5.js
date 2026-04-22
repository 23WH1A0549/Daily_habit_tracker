const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/habittracker');

const User=mongoose.model('User',new mongoose.Schema({
name:{type:String,required:true},
email:String,
password:String
}));

const Habit=mongoose.model('Habit',new mongoose.Schema({
userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
name:String,
status:String,
date:{type:Date,default:Date.now}
}));

async function addHabit(){
try{

let user=await User.findOne({name:'alekhya'});
if(!user){
user=new User({
name:'alekhya',
email:'alekhya@gmail.com',
password:'1234'
});
await user.save();
console.log('User created:',user);
}else{
console.log('User already exists:',user);
}

const habit=new Habit({
userId:user._id,
name:'Study',
status:'Completed'
});

await habit.save();
console.log('Habit created:',habit);

}catch(err){
console.error(err);
}finally{
mongoose.connection.close();
}
}

addHabit();