// src/components/Sidebar.jsx
import React from 'react';
import { FaHome, FaChartLine, FaRegChartBar, FaUser, FaEnvelope, FaBell } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="h-16 flex items-center justify-center bg-gray-900 text-2xl font-bold">
        <FaHome />
      </div>
      <nav className="flex-1 p-4 space-y-4">
        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <FaChartLine />
          <span>Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <FaRegChartBar />
          <span>Analytics</span>
        </a>
        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <FaUser />
          <span>Users</span>
        </a>
        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <FaEnvelope />
          <span>Messages</span>
        </a>
      </nav>
      <div className="h-16 flex items-center justify-center space-x-4 bg-gray-900">
        <FaBell />
        <FaUser />
      </div>
    </div>
  );
};

export default Sidebar;
