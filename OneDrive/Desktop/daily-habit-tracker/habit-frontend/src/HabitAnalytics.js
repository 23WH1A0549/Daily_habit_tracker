import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function HabitAnalytics() {

  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {

    axios.get("http://localhost:5000/habitAnalytics")
      .then(response => setAnalytics(response.data))
      .catch(error => console.error("Error:", error));

  }, []);

  if (!analytics) return <h2>Loading Habit Analytics...</h2>;

  return (

    <div className="analytics-container">

      <h1>📊 Habit Reports & Analytics</h1>

      <div className="cards">

        <div className="card">
          <h3>Total Habits</h3>
          <p>{analytics.totalHabits}</p>
        </div>

        <div className="card">
          <h3>Completed Habits</h3>
          <p>{analytics.completedHabits}</p>
        </div>

        <div className="card">
          <h3>Pending Habits</h3>
          <p>{analytics.pendingHabits}</p>
        </div>

        <div className="card">
          <h3>Completion Rate</h3>
          <p>{analytics.completionRate}%</p>
        </div>

        <div className="card">
          <h3>Top Habit</h3>
          <p>{analytics.topHabit}</p>
        </div>

        <div className="card">
          <h3>Weekly Progress</h3>
          <p>{analytics.weeklyProgress}</p>
        </div>

      </div>

    </div>

  );

}

export default HabitAnalytics;