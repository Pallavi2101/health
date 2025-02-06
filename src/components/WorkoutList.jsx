
// src/components/WorkoutList.js
import React, { useState, useEffect } from "react";

function WorkoutList({ workouts }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const filteredWorkouts = workouts
    .filter((workout) =>
      workout.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((workout) =>
      filterType ? workout.workoutType === filterType : true
    );

  const paginatedWorkouts = filteredWorkouts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  useEffect(() => {
    setCurrentPage(1); // Reset to page 1 whenever filter changes
  }, [filterType, searchQuery]);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select onChange={(e) => setFilterType(e.target.value)}>
          <option value="">All</option>
          <option value="Cardio">Cardio</option>
          <option value="Strength">Strength</option>
          <option value="Yoga">Yoga</option>
        </select>
      </div>
      <ul>
        {paginatedWorkouts.map((workout, index) => (
          <li key={index}>
            {workout.name} - {workout.workoutType} - {workout.minutes} minutes
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage * pageSize >= filteredWorkouts.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default WorkoutList;
