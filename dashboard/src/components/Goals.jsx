import React from 'react';
import { BiTargetLock } from 'react-icons/bi';
import { LiaHamburgerSolid } from 'react-icons/lia';

const Goals = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg text-white h-full col-span-1 flex flex-col justify-around">
      
      <div className="flex items-center gap-4">
        <div className="bg-orange-500 bg-opacity-50 p-2 rounded-full inline-flex items-center justify-center">
          <BiTargetLock className="text-orange-500" size={24} />
        </div>
        <div>Goals</div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="bg-blue-500 bg-opacity-50 p-2 rounded-full inline-flex items-center justify-center">
          <LiaHamburgerSolid className="text-blue-500" size={24} />
        </div>
        <div>Popular Dishes</div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="bg-teal-500 bg-opacity-50 p-2 rounded-full inline-flex items-center justify-center">
          <BiTargetLock className="text-teal-500" size={24} />
        </div>
        <div>Total Goals</div>
      </div>
      
    </div>
  );
};

export default Goals;
