// src/components/DashboardSummary.jsx
import React from 'react';

const DashboardSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-gray-800 p-4 rounded-lg text-white">
        <div>Total Orders</div>
        <div className="text-2xl font-bold">75</div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg text-white">
        <div>Total Delivered</div>
        <div className="text-2xl font-bold">70</div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg text-white">
        <div>Total Cancelled</div>
        <div className="text-2xl font-bold">5</div>
      </div>
    </div>
  );
};

export default DashboardSummary;
