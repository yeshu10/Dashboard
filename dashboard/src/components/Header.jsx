import React from 'react';
import { FaEnvelope, FaBell, FaCog,  FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-900 p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-4">
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 p-2 rounded bg-gray-800 text-white focus:outline-none"
          />
          <FaSearch
            size={16}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="relative p-2 hover:bg-gray-700 rounded-full flex items-center justify-center shadow-sm">
          <FaEnvelope size={20} className="text-white" />
        </a>
        <a href="#" className="relative p-2 hover:bg-gray-700 rounded-full flex items-center justify-center shadow-sm">
          <FaCog size={20} className="text-white" />
        </a>
        <a href="#" className="relative p-2 hover:bg-gray-700 rounded-full flex items-center justify-center shadow-sm">
          <FaBell size={20} className="text-white" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
        </a>
        <a href="#" className="p-2 hover:bg-gray-700 rounded-full flex items-center justify-center shadow-sm">
          <img
            src="https://via.placeholder.com/40" // Replace with actual image URL
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;