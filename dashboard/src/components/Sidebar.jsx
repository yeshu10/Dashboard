import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiBarChartSquare, BiTask, BiWallet } from 'react-icons/bi';
import { TbShoppingBagCheck } from 'react-icons/tb';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import logo from '../assets/logo.jpg';

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-[9999] w-16 bg-gray-900 text-white flex flex-col h-screen transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-16'
      } md:translate-x-0 md:relative md:flex md:w-16`}
    >
      {/* Main Navigation Section */}
      <div className="flex items-center justify-center h-16 bg-gray-900 text-2xl font-bold">
        <img src={logo} alt="Logo" className="w-8 h-8 object-cover" />
      </div>
      <div className="flex flex-col items-center justify-start space-y-4 mt-2 p-2 flex-grow">
        <a href="#" className="relative flex items-center justify-center p-2 group rounded-full hover:text-blue-500">
          <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <AiFillHome className="text-blue-400" size={24} />
        </a>
        <a href="#" className="relative flex items-center justify-center p-2 group rounded-full hover:text-blue-500">
          <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <BiBarChartSquare size={24} />
        </a>
        <a href="#" className="relative flex items-center justify-center p-2 group rounded-full hover:text-blue-500">
          <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <BiTask size={24} />
        </a>
        <a href="#" className="relative flex items-center justify-center p-2 group rounded-full hover:text-blue-500">
          <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <BiWallet size={24} />
        </a>
        <a href="#" className="relative flex items-center justify-center p-2 group rounded-full hover:text-blue-500">
          <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <TbShoppingBagCheck size={24} />
        </a>
      </div>
      
      {/* Footer Section */}
      <div className="flex items-center justify-center mb-2 p-2">
        <a href="#" className="relative flex items-center justify-center p-2 group rounded-full hover:text-blue-500">
          <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <RiLogoutCircleRLine size={24} className="text-white" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
