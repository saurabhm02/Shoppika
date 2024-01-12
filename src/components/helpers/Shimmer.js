import React from 'react';

const ShimmerCard = () => {
  return (
    <div className="lg:w-[240px] md:w-[205px] group hover:shadow-xl transition-all duration-2000 ease-in-out relative group sm:w-[160px]">
      <div className="animate-pulse bg-gray-300 rounded">
        <div className="w-full h-48 bg-gray-400 rounded"></div>
        <div className="p-4">
          <div className="h-4 bg-gray-400 rounded mb-2"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
