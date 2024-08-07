import React, { useState } from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { BiCaretDown } from 'react-icons/bi';

// Dropdown component for selecting the time period
const Dropdown = ({ selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className="flex items-center bg-gray-500 text-gray-800 rounded-full px-2 py-1 cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="text-sm text-white">{selectedOption}</span>
        <BiCaretDown size={16} className="ml-1 text-white" />
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-gray-800 text-white rounded-lg shadow-lg">
          <ul className="py-1">
            <li
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => handleOptionClick('Weekly')}
            >
              Weekly
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => handleOptionClick('Monthly')}
            >
              Monthly
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => handleOptionClick('Yearly')}
            >
              Yearly
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const ActivityChart = () => {
  const [selectedOption, setSelectedOption] = useState('Weekly');

  
  const chartData = {
    labels: [
      '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', 
      '15', '16', '17', '18', '19', '20', '21', '22', '23', 
      '24', '25', '26', '27'
    ], 
    datasets: [
      {
        label: 'Activity',
       
        data: [
          4,9,5,3,7,8,8,6,7,8,4,2,8,9,6,14, 12, 8, 5, 
          7, 9, 11, 10, 8, 11, 17, 8, 7,6 
          
        ], 
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
        min: 5,
        max: 27,
        ticks: {
          stepSize: 1,
          color: '#D3D3D3', 
          callback: (value) => {
            
            const labels = ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27' ];
            return labels.includes(value.toString()) ? value : '';
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
          color: '#D3D3D3', 
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
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold mb-2">Activity</h3>
        <Dropdown selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      </div>

      <div className="h-48">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default ActivityChart;
