// // // // import React, { useState } from "react";
// // // // import "./App.css";

// // // // function HabitList() {

// // // // const [habits] = useState([
// // // // { name: "Morning Exercise", status: "Completed" },
// // // // { name: "Read Book", status: "Pending" },
// // // // { name: "Drink Water", status: "Completed" },
// // // // { name: "Meditation", status: "Pending" }
// // // // ]);

// // // // const completed = habits.filter(h => h.status === "Completed").length;
// // // // const pending = habits.filter(h => h.status === "Pending").length;

// // // // return (

// // // // <div className="container">

// // // // <h1>Habit Tracker Dashboard</h1>

// // // // <div className="cards">

// // // // <div className="card">
// // // // <h3>Total Habits</h3>
// // // // <p>{habits.length}</p>
// // // // </div>

// // // // <div className="card">
// // // // <h3>Completed</h3>
// // // // <p>{completed}</p>
// // // // </div>

// // // // <div className="card">
// // // // <h3>Pending</h3>
// // // // <p>{pending}</p>
// // // // </div>

// // // // </div>

// // // // <h2>Habit List</h2>

// // // // <table>

// // // // <thead>
// // // // <tr>
// // // // <th>Habit Name</th>
// // // // <th>Status</th>
// // // // </tr>
// // // // </thead>

// // // // <tbody>

// // // // {habits.map((habit,index)=>(
// // // // <tr key={index}>
// // // // <td>{habit.name}</td>
// // // // <td>{habit.status}</td>
// // // // </tr>
// // // // ))}

// // // // </tbody>

// // // // </table>

// // // // </div>

// // // // );

// // // // }

// // // // export default HabitList;
// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import "./App.css";

// // // function HabitList() {

// // // const [habits,setHabits]=useState([]);
// // // const [name,setName]=useState("");
// // // const [status,setStatus]=useState("Pending");

// // // useEffect(()=>{
// // // fetchHabits();
// // // },[]);

// // // const fetchHabits=()=>{
// // // axios.get("http://localhost:5000/habits")
// // // .then((res)=>{
// // // setHabits(res.data);
// // // })
// // // .catch((err)=>console.log(err));
// // // };

// // // const addHabit=()=>{
// // // axios.post("http://localhost:5000/habits",{
// // // name:name,
// // // status:status
// // // })
// // // .then(()=>{
// // // fetchHabits();
// // // setName("");
// // // })
// // // .catch((err)=>console.log(err));
// // // };

// // // const deleteHabit=(id)=>{
// // // axios.delete(`http://localhost:5000/habits/${id}`)
// // // .then(()=>fetchHabits())
// // // .catch((err)=>console.log(err));
// // // };

// // // return(

// // // <div className="container">

// // // <h1>Daily Habit Tracker</h1>

// // // {/* Add Habit */}

// // // <div className="addBox">

// // // <input
// // // type="text"
// // // placeholder="Enter Habit"
// // // value={name}
// // // onChange={(e)=>setName(e.target.value)}
// // // />

// // // <select value={status} onChange={(e)=>setStatus(e.target.value)}>

// // // <option>Pending</option>
// // // <option>Completed</option>

// // // </select>

// // // <button onClick={addHabit}>Add New Habit</button>

// // // </div>

// // // {/* Table */}

// // // <h2>Habit List</h2>

// // // <table>

// // // <thead>

// // // <tr>
// // // <th>Habit Name</th>
// // // <th>Status</th>
// // // <th>Actions</th>
// // // </tr>

// // // </thead>

// // // <tbody>

// // // {habits.map((habit)=>(
// // // <tr key={habit._id}>

// // // <td>{habit.name}</td>

// // // <td>{habit.status}</td>

// // // <td>

// // // <button className="delete"
// // // onClick={()=>deleteHabit(habit._id)}
// // // >
// // // Delete
// // // </button>

// // // </td>

// // // </tr>
// // // ))}

// // // </tbody>

// // // </table>

// // // </div>

// // // );

// // // }

// // // export default HabitList;
// // import React,{useEffect,useState} from "react";
// // import axios from "axios";
// // import "./App.css";

// // function HabitList(){

// // const [habits,setHabits]=useState([]);
// // const [name,setName]=useState("");
// // const [status,setStatus]=useState("Pending");

// // useEffect(()=>{
// // fetchHabits();
// // },[]);

// // const fetchHabits=()=>{
// // axios.get("http://localhost:5000/habits")
// // .then(res=>{
// // setHabits(res.data);
// // });
// // };

// // const addHabit=()=>{

// // axios.post("http://localhost:5000/habits",{
// // name:name,
// // status:status
// // })
// // .then(()=>{
// // fetchHabits();
// // setName("");
// // });
// // };

// // return(

// // <div className="container">

// // <h1>Daily Habit Tracker</h1>

// // <div className="addHabit">

// // <input
// // type="text"
// // placeholder="Enter Habit"
// // value={name}
// // onChange={(e)=>setName(e.target.value)}
// // />

// // <select
// // value={status}
// // onChange={(e)=>setStatus(e.target.value)}
// // >

// // <option>Pending</option>
// // <option>Completed</option>

// // </select>

// // <button onClick={addHabit}>
// // Add Habit
// // </button>

// // </div>

// // <h2>Habit List</h2>

// // <table>

// // <thead>

// // <tr>
// // <th>Habit Name</th>
// // <th>Status</th>
// // </tr>

// // </thead>

// // <tbody>

// // {habits.map((habit)=>(
// // <tr key={habit._id}>
// // <td>{habit.name}</td>
// // <td>{habit.status}</td>
// // </tr>
// // ))}

// // </tbody>

// // </table>

// // </div>

// // );

// // }

// // export default HabitList;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";

// function HabitList() {

//   const [habits, setHabits] = useState([]);

//   useEffect(() => {
//     fetchHabits();
//   }, []);

//   const fetchHabits = () => {
//     axios.get("http://localhost:5000/habits")
//       .then((response) => {
//         setHabits(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching habits:", error);
//       });
//   };

//   const completed = habits.filter(h => h.status === "Completed").length;
//   const pending = habits.filter(h => h.status === "Pending").length;

//   return (
//     <div>

//       <h1>Habit Tracker Dashboard</h1>

//       <h3>Total Habits: {habits.length}</h3>
//       <h3>Completed: {completed}</h3>
//       <h3>Pending: {pending}</h3>

//       <table border="1">
//         <thead>
//           <tr>
//             <th>Habit Name</th>
//             <th>Status</th>
//           </tr>
//         </thead>

//         <tbody>
//           {habits.map((habit, index) => (
//             <tr key={index}>
//               <td>{habit.name}</td>
//               <td>{habit.status}</td>
//             </tr>
//           ))}
//         </tbody>

//       </table>

//     </div>
//   );
// }

// export default HabitList;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";

// function HabitList() {

//   const [habits, setHabits] = useState([]);
//   const [name, setName] = useState("");
//   const [status, setStatus] = useState("Pending");

//   // Fetch habits from backend
//   useEffect(() => {
//     fetchHabits();
//   }, []);

//   const fetchHabits = () => {
//     axios.get("http://localhost:5000/habits")
//       .then((response) => {
//         setHabits(response.data);
//       })
//       .catch((error) => console.error(error));
//   };

//   // Add habit
//   const addHabit = () => {

//     const newHabit = {
//       name: name,
//       status: status
//     };

//     axios.post("http://localhost:5000/habits", newHabit)
//       .then(() => {
//         fetchHabits();   // refresh table
//         setName("");
//         setStatus("Pending");
//       })
//       .catch((error) => console.error(error));
//   };

//   return (
//     <div style={{padding:"20px"}}>

//       <h1>Daily Habit Tracker</h1>

//       {/* Add Habit Form */}

//       <h3>Add New Habit</h3>

//       <input
//         type="text"
//         placeholder="Enter habit name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <select
//         value={status}
//         onChange={(e) => setStatus(e.target.value)}
//       >
//         <option value="Pending">Pending</option>
//         <option value="Completed">Completed</option>
//       </select>

//       <button onClick={addHabit}>Add Habit</button>

//       <h2>Habit List</h2>

//       <table border="1" cellPadding="10">

//         <thead>
//           <tr>
//             <th>Habit Name</th>
//             <th>Status</th>
//           </tr>
//         </thead>

//         <tbody>
//           {habits.map((habit) => (
//             <tr key={habit._id}>
//               <td>{habit.name}</td>
//               <td>{habit.status}</td>
//             </tr>
//           ))}
//         </tbody>

//       </table>

//     </div>
//   );
// }

// export default HabitList;
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function HabitList() {

  const [habits, setHabits] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Pending");
  const [statusStats, setStatusStats] = useState([]);

  useEffect(() => {
    fetchHabits();
  }, []);

  const fetchHabits = () => {
    axios.get("http://localhost:5000/habits")
      .then((response) => {
        setHabits(response.data);

        const statusMap = {};
        response.data.forEach(h => {
          if (!statusMap[h.status]) statusMap[h.status] = 0;
          statusMap[h.status]++;
        });

        const result = Object.keys(statusMap).map(status => ({
          status,
          count: statusMap[status]
        }));

        setStatusStats(result);
      })
      .catch(err => console.error(err));
  };

  const addHabit = () => {
    axios.post("http://localhost:5000/habits", { name, status })
      .then(() => {
        fetchHabits();
        setName("");
        setStatus("Pending");
      })
      .catch(err => console.error(err));
  };

  const completed = statusStats.find(s => s.status === "Completed")?.count || 0;
  const pending = statusStats.find(s => s.status === "Pending")?.count || 0;

  return (
    <div className="main">

      <h1 className="title">Habit Tracker</h1>

      {/* Top Cards */}
      <div className="top-cards">
        <div className="card completed">
          <h3>Completed</h3>
          <h1>{completed}</h1>
          <p>{completed} Habits</p>
        </div>

        <div className="card pending">
          <h3>Pending</h3>
          <h1>{pending}</h1>
          <p>{pending} Habits</p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="middle">

        {/* Status Box */}
        <div className="box">
          <h3>Habits by Status</h3>
          <p className="tag green">Completed - {completed}</p>
          <p className="tag orange">Pending - {pending}</p>
        </div>

        {/* Recent Habits */}
        <div className="box">
          <h3>Recent Habits</h3>
          {habits.slice(-5).map((h, i) => (
            <p key={i} className={h.status === "Completed" ? "tag green" : "tag orange"}>
              {h.name}
            </p>
          ))}
        </div>

      </div>

      {/* Add Habit */}
      <div className="add-box">
        <input
          placeholder="Enter habit"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Pending</option>
          <option>Completed</option>
        </select>

        <button onClick={addHabit}>Add</button>
      </div>

    </div>
  );
}

export default HabitList;