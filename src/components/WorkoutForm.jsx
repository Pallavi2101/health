
// src/components/WorkoutForm.js
import React, { useState } from "react";

function WorkoutForm({ onAddWorkout }) {
  const [name, setName] = useState("");
  const [workoutType, setWorkoutType] = useState("");
  const [minutes, setMinutes] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkout = { name, workoutType, minutes };
    onAddWorkout(newWorkout);  // Add new workout to the list
    setName("");                // Clear the form fields after submission
    setWorkoutType("");
    setMinutes(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Enter Workout Type"
        value={workoutType}
        onChange={(e) => setWorkoutType(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Enter Workout Minutes"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
        required
      />
      <button type="submit">Add Workout</button>  {/* This is the submit button */}
    </form>
  );
}

export default WorkoutForm;
