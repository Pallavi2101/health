
// src/components/WorkoutChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function WorkoutChart({ workouts }) {
  const chartData = {
    labels: workouts.map((workout) => workout.name),
    datasets: [
      {
        label: "Workout Minutes",
        data: workouts.map((workout) => workout.minutes),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h3>Workout Progress</h3>
      <Bar data={chartData} />
    </div>
  );
}

export default WorkoutChart;
