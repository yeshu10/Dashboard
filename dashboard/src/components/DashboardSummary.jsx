import React from 'react';

const DashboardSummary = () => {
  return (
    <div className="flex gap-4">
      <div className="bg-gray-800 p-4 rounded-lg text-white flex-1 min-w-[150px]">
        <div>Total Orders</div>
        <div className="text-2xl font-bold">75</div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg text-white flex-1 min-w-[150px]">
        <div>Total Delivered</div>
        <div className="text-2xl font-bold">70</div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg text-white flex-1 min-w-[150px]">
        <div>Total Cancelled</div>
        <div className="text-2xl font-bold">5</div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg text-white flex-1 min-w-[150px]">
        <div>Total Revenue</div>
        <div className="text-2xl font-bold">$1,500</div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg text-white flex-[3] min-w-[150px]">
        <div>Net Profit</div>
        <div className="text-2xl font-bold">$500</div>
      </div>
    </div>
  );
};

export default DashboardSummary;
