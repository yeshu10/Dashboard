import React from 'react';
import { FaSearch, FaRegEnvelope } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { GoBell } from 'react-icons/go';

const Header = () => {
  return (
    <header className="bg-gray-900 p-4 flex items-center justify-between shadow-md">
      {/* Search Container */}
      <div className="flex items-center flex-grow max-w-xs w-full">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 p-2 rounded bg-gray-800 text-white w-full focus:outline-none"
          />
          <FaSearch
            size={16}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
      
      {/* Icons Container */}
      <div className="flex items-center space-x-3 ml-2">
        <a href="#" className="relative p-2 bg-gray-700 rounded-full flex items-center justify-center shadow-sm">
          <FaRegEnvelope size={20} className="text-white" />
        </a>
        <a href="#" className="relative p-2 bg-gray-700 rounded-full flex items-center justify-center shadow-sm">
          <IoSettingsOutline size={20} className="text-white" />
        </a>
        <a href="#" className="relative p-2 bg-gray-700 rounded-full flex items-center justify-center shadow-sm">
          <GoBell size={20} className="text-white" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
        </a>
        <a href="#" className="relative p-1 hover:bg-gray-700 rounded-full flex items-center justify-center shadow-sm">
          <img
            src="https://randomuser.me/api/portraits/women/17.jpg" 
            alt="Profile"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
