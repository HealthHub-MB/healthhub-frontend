import React from 'react';

const DashboardHeader = (props) => {
  console.log(props)
  const {buttonText,onButtonClick} = props
  return (
    <div className="flex justify-between items-center px-10 py-3 border-b border-gray-200 w-full h-[65px]">
      {/* Left Logo Section */}
      <div className="flex items-center gap-4">
        {/* Icon Placeholder */}
        <div className="w-4 h-4 bg-black rounded" />
        <span className="text-xl font-bold text-gray-900">Health Hub</span>
      </div>

      {/* Right Button Section */}
      {buttonText != '' && (
      <div className="flex items-center justify-end gap-8">
        <button
          onClick={onButtonClick}
          className="bg-blue-100  text-gray-900 font-bold px-4 py-2 rounded-md  hover:bg-blue-400"
        >
          {buttonText}
        </button>
      </div>)}
    </div>
  );
};

export default DashboardHeader;
