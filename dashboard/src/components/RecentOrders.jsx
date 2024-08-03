import React from 'react';

const orders = [
  { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered', image: 'https://via.placeholder.com/40' },
  { customer: 'Jane Cooper', orderNo: '48967586', amount: '$305.02', status: 'Delivered', image: 'https://via.placeholder.com/40' },
  { customer: 'Guy Hawkins', orderNo: '78995215', amount: '$45.88', status: 'Cancelled', image: 'https://via.placeholder.com/40' },
  { customer: 'Kristin Watson', orderNo: '20967532', amount: '$65.00', status: 'Pending', image: 'https://via.placeholder.com/40' },
  { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered', image: 'https://via.placeholder.com/40' },
  { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered', image: 'https://via.placeholder.com/40' },
];

const getStatusClasses = (status) => {
  switch (status) {
    case 'Pending':
      return 'text-red-500 bg-red-400 bg-opacity-30';
    case 'Cancelled':
      return 'text-red-500 bg-red-400 bg-opacity-30';
    case 'Delivered':
      return 'text-green-500 bg-green-400 bg-opacity-30';
    default:
      return '';
  }
};

const RecentOrders = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg col-span-2">
      <div className="text-xl font-semibold text-white mb-4">Recent Orders</div>
      <div className="overflow-auto">
        <table className="min-w-full text-gray-400">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left border-b border-white">Customer</th>
              <th className="py-2 px-4 text-left border-b border-white">Order No.</th>
              <th className="py-2 px-4 text-left border-b border-white">Amount</th>
              <th className="py-2 px-4 text-left border-b border-white">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b border-white">
                <td className="py-4 px-4 flex items-center">
                  <img src={order.image} alt={order.customer} className="w-8 h-8 rounded-full mr-2" />
                  {order.customer}
                </td>
                <td className="py-4 px-4">{order.orderNo}</td>
                <td className="py-4 px-4">{order.amount}</td>
                <td className="py-4 px-4">
                  <span className={`inline-block px-2 py-1 rounded-full ${getStatusClasses(order.status)}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
