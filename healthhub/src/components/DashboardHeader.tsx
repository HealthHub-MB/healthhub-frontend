import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const DashboardHeader = (props) => {
  console.log(props);
  const { buttonText = "", onButtonClick, isDoctor, isPatient } = props;
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center px-10 py-3 border-b border-gray-200 w-full h-[65px]">
      {/* Left Logo Section */}
      <div className="flex items-center gap-4">
        {/* Icon Placeholder */}
        <div className="w-4 h-4 bg-black rounded" />
        <span className="text-xl font-bold text-gray-900">Health Hub</span>
      </div>

      {isDoctor && (
        <>
          <Link to={"/doctor-dashboard"}>Dashboard</Link>
          <Link to={"/appoitments"}>Appoitements</Link>
        </>
      )}

      {isPatient && (
        <>
          <Link to={"/patient-dashboard"}>Home</Link>
          <Link to={"/find-a-doctor"}>Find a doctor</Link>
        </>
      )}

      {(isDoctor || isPatient) && (
        <div className="flex justify-end p-4 bg-gray-100">
          <div className="relative" ref={dropdownRef}>
            <img
              src="src/assets/user.png"
              width={40}
              height={40}
              onClick={() => handleToggleMenu()}
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                <div>My Profile</div>
                <div>Logout</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Right Button Section */}
      {buttonText != "" && (
        <div className="flex items-center justify-end gap-8">
          <button
            onClick={onButtonClick}
            className="bg-blue-100  text-gray-900 font-bold px-4 py-2 rounded-md  hover:bg-blue-400"
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
