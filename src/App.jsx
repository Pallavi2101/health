
// src/App.js
import React, { useState } from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";
import WorkoutChart from "./components/WorkoutChart";

function App() {
  const [workouts, setWorkouts] = useState([]);

  const handleAddWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  return (
    <div className="App">
      <h1>Workout Tracker</h1>
      <WorkoutForm onAddWorkout={handleAddWorkout} />
      <WorkoutList workouts={workouts} />
      <WorkoutChart workouts={workouts} />
    </div>
  );
}

export default App;
