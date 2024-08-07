import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardSummary from './components/DashboardSummary';
import ActivityChart from './components/ActivityChart';
import RecentOrders from './components/RecentOrders';
import CustomerFeedback from './components/CustomerFeedback';
import Goals from './components/Goals';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div className="flex-1 flex flex-col bg-gray-900 min-h-screen">
        <Header onMenuClick={toggleSidebar} />
        <div className="text-white font-bold pl-7 text-2xl">Dashboard</div>
        <main className="p-4 flex-1">
          <DashboardSummary />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <ActivityChart />
            <Goals />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-4 sm:gap-1 mt-4">
            <RecentOrders />
            <CustomerFeedback />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
