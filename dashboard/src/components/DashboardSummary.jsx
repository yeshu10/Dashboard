import React from 'react';
import { FaShoppingBasket, FaDollarSign } from 'react-icons/fa';
import { TbShoppingBagCheck, TbShoppingBagX } from "react-icons/tb";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ImArrowDown } from "react-icons/im";

const DashboardSummary = () => {
  return (
    <div className="flex flex-wrap gap-4 ">
      {/* First Four Divs */}
      <div className="flex flex-col sm:flex-row w-full sm:w-2/3 gap-4">
      <div className="relative bg-gray-800 p-4 rounded-lg text-white flex-1 min-w-[150px] flex flex-col">
  <div className="bg-blue-500 bg-opacity-50 p-2 rounded-lg w-fit">
    <FaShoppingBasket className="text-blue-500" size={24} />
  </div>
  <div className="mt-2 text-sm md:text-base">Total Orders</div>
  <div className="flex flex-col justify-end h-full mt-2">
    <div className="flex justify-between items-center">
      <div className="text-xl md:text-2xl font-bold">75</div>
      <div className="flex items-center space-x-1 text-green-500 text-sm md:text-base">
        <BiCaretUp size={16} />
        <div>3%</div>
      </div>
    </div>
  </div>
</div>

<div className="relative bg-gray-800 p-4 rounded-lg text-white flex-1 min-w-[150px] flex flex-col">
  <div className="bg-green-500 bg-opacity-50 p-2 rounded-lg w-fit">
    <TbShoppingBagCheck className="text-green-500" size={24} />
  </div>
  <div className="mt-2 text-sm md:text-base">Total Delivered</div>
  <div className="flex flex-col justify-end h-full mt-2">
    <div className="flex justify-between items-center">
      <div className="text-xl md:text-2xl font-bold">70</div>
      <div className="flex items-center space-x-1 text-red-500 text-sm md:text-base">
        <BiCaretDown size={16} />
        <div>3%</div>
      </div>
    </div>
  </div>
</div>

        <div className="relative bg-gray-800 p-4 rounded-lg text-white flex-1 min-w-[150px] flex flex-col">
  <div className="bg-red-500 bg-opacity-50 p-2 rounded-lg w-fit">
    <TbShoppingBagX className="text-red-500" size={24} />
  </div>
  <div className="mt-2 text-sm md:text-base">Total Cancelled</div>
  <div className="flex flex-col justify-end h-full mt-2">
    <div className="flex justify-between items-center">
      <div className="text-xl md:text-2xl font-bold">05</div>
      <div className="flex items-center space-x-1 text-green-500 text-sm md:text-base">
        <BiCaretUp size={16} />
        <div>3%</div>
      </div>
    </div>
  </div>
</div>
<div className="relative bg-gray-800 p-4 rounded-lg text-white flex-1 min-w-[150px] flex flex-col">
<div className="bg-pink-500 bg-opacity-50 p-2 rounded-lg w-fit flex items-center min-w-7">
  <div className="flex flex-col items-center mr-2 space-x-0">
    <FaDollarSign className="text-pink-500" size={12} />
    <ImArrowDown className="text-pink-500 mt-1" size={10} /> 
  </div>
  <ImArrowDown className="text-pink-500" size={12} /> 
</div>

  <div className="mt-2 text-sm md:text-base">Total Revenue</div>
  <div className="flex flex-col justify-end h-full mt-2">
    <div className="flex justify-between items-center">
      <div className="text-xl md:text-2xl font-bold">$12K</div>
      <div className="flex items-center space-x-1 text-red-500 text-sm md:text-base">
        <BiCaretDown size={16} />

        <div>3%</div>
      </div>
    </div>
  </div>
</div>

      </div>

      {/* Net Profit Div */}
      <div className="bg-gray-800 p-4 rounded-lg text-white flex-1 min-w-[150px] w-full sm:w-1/3">
        <div className="w-full h-full">
          <div className="flex items-stretch justify-between h-full">
            <div className="flex flex-col justify-between">
              <div className="mt-2 text-sm">Net Profit</div>
              <div className="text-3xl font-bold mt-1">$6759.25</div>
              <div className="flex items-center space-x-1 text-green-500 text-sm">
                <BiCaretUp size={16} />
                <div>3%</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between">
              <div className="relative flex items-center justify-center">
                <AiOutlineLoading3Quarters
                  className="text-blue-400"
                  style={{
                    fontSize: '120px', // Increase the font size to make the icon larger
                    filter: 'drop-shadow(0 0 4px blue)',
                  }}
                />
                <div className="absolute text-center text-white">
                  <div className="font-bold text-xs">70%</div> {/* Adjusted text size for better visibility */}
                  <div className="text-xs">Goal Completed</div>
                </div>
              </div>
              <div className="text-sm mt-1">
                <p>*The value here has been rounded off</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummary;
