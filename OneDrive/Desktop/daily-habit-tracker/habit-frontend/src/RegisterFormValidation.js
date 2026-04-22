import React,{useState} from 'react';

function RegisterFormValidation(){

const [user,setUser]=useState({
fullName:'',
email:'',
password:'',
confirmPassword:''
});

const handleChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value});
};

const handleSubmit=(e)=>{
if(user.password!==user.confirmPassword){
e.preventDefault();
alert("Passwords do not match");
}
};

return(
<form onSubmit={handleSubmit}>

<input 
type="text" 
name="fullName" 
placeholder="Full Name" 
value={user.fullName} 
onChange={handleChange} 
required 
/>

<input 
type="email" 
name="email" 
placeholder="Email" 
value={user.email} 
onChange={handleChange} 
required 
/>

<input 
type="password" 
name="password" 
placeholder="Password" 
value={user.password} 
onChange={handleChange} 
required 
minLength="6"
/>

<input 
type="password" 
name="confirmPassword" 
placeholder="Confirm Password" 
value={user.confirmPassword} 
onChange={handleChange} 
required 
/>

<button type="submit">Register</button>

</form>
);
}

export default RegisterFormValidation;