import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const ActivityChart = () => {
  const chartData = {
    labels: ['5', '9',  '11', '13','15',  '17', '19', '21',  '23', '25',  '27'],
    datasets: [
      {
        label: 'Activity',
        data: [12, 19, 3, 5,20, 2, 3, 9, 6,15, 2, 7, 8, 2, 16,4, 9, 5, 8, 7, 6,9, 4, 7, 10,4, 7, 2, 9],
        backgroundColor: '#5B78F6',
        borderColor: '#5B78F6',
        borderWidth: 0.7,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
    
        x: {
          type: 'linear',
          beginAtZero: false, // Start the axis at 5
          ticks: {
            min: 6, // Set the minimum value to 5
            stepSize: 2 // Set the step size to 2
          }
        },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
          callback: (value) => `${value}k`,
          font: {
            size: 10,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      bar: {
        borderRadius: 20,
        borderSkipped: false,
        barPercentage: 0.3,
        categoryPercentage: 0.7,
      },
    },
  };
  

  return (
    <div className="h-64 bg-gray-800 p-4 rounded-lg text-white col-span-2">
      <h3 className="text-lg font-semibold mb-2">Activity</h3>
      <div className="h-48"> {/* Adjust the height here */}
        <Bar data={chartData} options={chartOptions} height={300} /> {/* Adjust the height here */}
      </div>
    </div>
  );
};

export default ActivityChart;
