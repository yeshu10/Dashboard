import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiBarChartSquare, BiTask, BiWallet } from 'react-icons/bi';
import { TbShoppingBagCheck } from 'react-icons/tb';
import { RiLogoutCircleRLine } from 'react-icons/ri';

const Sidebar = () => {
  return (
    <div className="w-16 bg-gray-900 text-white flex flex-col h-fullscreen">
      {/* Header Section */}
      <div className="flex items-center justify-center h-16 bg-gray-900 text-2xl font-bold">
        <AiFillHome className="text-blue-400" size={24} />
      </div>
      
      {/* Main Navigation Section */}
      <div className="flex flex-col items-center justify-start space-y-4 mt-2 p-2 flex-grow">
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
          <TbShoppingBagCheck size={24} />
        </a>
      </div>
      
      {/* Footer Section */}
      <div className="flex items-center justify-center mb-2 p-2">
        <a href="#" className="p-2 hover:bg-gray-700 rounded-full flex items-center justify-center shadow-sm">
          <RiLogoutCircleRLine size={24} className="text-white" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
