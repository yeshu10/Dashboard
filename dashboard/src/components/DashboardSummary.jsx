import React from 'react';
import { FaShoppingBasket , FaDollarSign, FaChartLine } from 'react-icons/fa';
import { TbShoppingBagCheck, TbShoppingBagX} from "react-icons/tb";



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
              <div className="text-2xl font-bold mt-1">75</div>
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
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-purple-500 bg-opacity-50 p-2 rounded-sm inline-flex items-center justify-center">
              <FaChartLine className="text-purple-500" size={24} />
            </div>
            <div className="mt-2">Net Profit</div>
            <div className="text-2xl font-bold mt-1">$500</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummary;
