// src/App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardSummary from './components/DashboardSummary';
import ActivityChart from './components/ActivityChart';
import RecentOrders from './components/RecentOrders';
import CustomerFeedback from './components/CustomerFeedback';
import Goals from './components/Goals';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-900 min-h-screen">
        <Header />
        <main className="p-4 flex-1">
          <DashboardSummary />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 h-64">
  <ActivityChart />
  <Goals/>
</div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <RecentOrders />
            <CustomerFeedback />
          </div>
          
        </main>
      </div>
    </div>
  );
};

export default App;
