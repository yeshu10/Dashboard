import React from 'react';
import { FaShoppingBasket , FaDollarSign, FaChartLine } from 'react-icons/fa';
import { TbShoppingBagCheck, TbShoppingBagX} from "react-icons/tb";
import { BiCaretUp } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";




const DashboardSummary = () => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-wrap gap-4 flex-[2]">
        <div className="bg-gray-800 p-4 rounded-lg text-white flex-1 min-w-[150px]">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 bg-opacity-50 p-2 rounded-sm inline-flex items-center justify-center">
                <FaShoppingBasket className="text-blue-500" size={24} />
              </div>
              <div className="mt-2">Total Orders</div>
            <div className="flex items-center justify-between w-full">
            <div className="text-2xl font-bold">75</div>
            <div className="flex items-center space-x-1 text-green-500 text-sm">
            <BiCaretUp size={16} />
            <div>3%</div>
          </div>
        </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-white flex-1 min-w-[150px]">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-green-500 bg-opacity-50 p-2 rounded-sm inline-flex items-center justify-center">
                <TbShoppingBagCheck className="text-green-500" size={24} />
              </div>
              <div className="mt-2">Total Delivered</div>
              <div className="text-2xl font-bold mt-1">70</div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-white flex-1 min-w-[150px]">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-red-500 bg-opacity-50 p-2 rounded-sm inline-flex items-center justify-center">
                <TbShoppingBagX className="text-red-500" size={24} />
              </div>
              <div className="mt-2">Total Cancelled</div>
              <div className="text-2xl font-bold mt-1">5</div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-white flex-1 min-w-[150px]">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-yellow-500 bg-opacity-50 p-2 rounded-sm inline-flex items-center justify-center">
                <FaDollarSign className="text-yellow-500" size={24} />
              </div>
              <div className="mt-2">Total Revenue</div>
              <div className="text-2xl font-bold mt-1">$1,500</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg text-white flex-[1] min-w-[150px]">
        
      <div className="w-full">
  <div className="flex items-start justify-between">
    <div className="flex flex-col">
      <div className="mt-2 text-sm">Net Profit</div>
      <div className="text-3xl font-bold mt-1">$6759.25</div>
      <div className="flex items-center space-x-1 text-green-500 text-sm">
        <BiCaretUp size={16} />
        <div>3%</div>
      </div>
    </div>
    <div className="flex flex-col items-center">
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
