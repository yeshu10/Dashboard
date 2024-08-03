import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiBarChartSquare, BiTask, BiWallet } from 'react-icons/bi';
import { FaShoppingBag } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-16 bg-gray-900 text-white flex flex-col">
      <div className="h-16 flex items-center justify-center bg-gray-900 text-2xl font-bold">
        <AiFillHome className="text-blue-400"  size={24} />
      </div>
      <nav className="flex flex-col items-center justify-start space-y-4 mt-2 p-2">
        <a href="#" className="p-2 hover:bg-gray-700 rounded-full flex items-center justify-center shadow-sm">
          <AiFillHome className="text-blue-400" size={24} />
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
      </nav>
    </div>
  );
};

export default Sidebar;
