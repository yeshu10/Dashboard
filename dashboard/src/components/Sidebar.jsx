import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiBarChartSquare, BiTask, BiWallet } from 'react-icons/bi';
import { FaShoppingBag, FaCheckCircle } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-16 bg-gray-900 text-white flex flex-col h-screen">
      {/* <div className="h-16 flex items-center justify-center bg-gray-900 text-2xl font-bold">
        <AiFillHome size={24} />
      </div> */}
      <nav className="flex-1 flex flex-col items-center justify-center space-y-4 p-4">
      <a href="#" className="p-2 hover:bg-gray-700 rounded-full flex items-center justify-center shadow-sm">
      <AiFillHome size={24} />
        </a>
        <a href="#" className="p-2 hover:bg-gray-700 rounded-full flex items-center justify-center shadow-sm">
          <BiBarChartSquare size={24} />
        </a>
        <a href="#" className="p-2 hover:bg-gray-700 rounded-full flex items-center justify-center shadow-sm">
          <BiTask size={24} />
        </a>
        <a href="#" className="p-2 hover:bg-gray-700 rounded-full flex items-center justify-center shadow-sm">
          <BiWallet size={24} />
        </a>
        <a href="#" className="p-2 hover:bg-gray-700 rounded-full flex items-center justify-center shadow-sm">
          <FaShoppingBag size={24} />
        </a>
        <a href="#" className="p-2 hover:bg-gray-700 rounded-full flex items-center justify-center shadow-sm">
          <FaCheckCircle size={24} />
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
