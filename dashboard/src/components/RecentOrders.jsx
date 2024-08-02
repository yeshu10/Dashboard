// src/components/RecentOrders.jsx
import React from 'react';

const orders = [
  { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
  { customer: 'Jane Cooper', orderNo: '48967586', amount: '$305.02', status: 'Delivered' },
  { customer: 'Guy Hawkins', orderNo: '78995215', amount: '$45.88', status: 'Cancelled' },
  { customer: 'Kristin Watson', orderNo: '20967532', amount: '$65.00', status: 'Pending' },
  { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
  { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
];

const RecentOrders = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="text-xl font-semibold text-white mb-4">Recent Orders</div>
      <div className="overflow-auto">
        <table className="min-w-full text-gray-400">
          <thead>
            <tr>
              <th className="py-2 px-4">Customer</th>
              <th className="py-2 px-4">Order No.</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="py-2 px-4">{order.customer}</td>
                <td className="py-2 px-4">{order.orderNo}</td>
                <td className="py-2 px-4">{order.amount}</td>
                <td className="py-2 px-4">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
