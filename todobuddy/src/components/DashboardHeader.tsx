import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaList } from "react-icons/fa";


const DashboardHeader = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  const isAdmin = role === "admin";
  const isUser = role === "user";
  

  const handleToggleMenu = () => setOpen(!open);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };


const handleListClick = () => {
  navigate("/userlist");
};

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center px-10 py-3 border-b border-gray-200 w-full h-[65px]">
      {/* Left side: Logo */}
      <div className="flex items-center gap-4">
        <Link to="/todolist" className="flex items-center gap-2">
          <img src="/vite.png" alt="Logo" className="w-6 h-6" />
          <span className="text-lg font-bold text-gray-900">TaskMaster</span>
        </Link>
      </div>

      {/* Middle: Dummy Nav */}
      <div className="flex gap-6 text-sm text-gray-500">
        <span className="cursor-default hover:text-black">Home</span>
        <span className="cursor-default hover:text-black font-semibold text-black">Tasks</span>
        <span className="cursor-default hover:text-black">Projects</span>
        <span className="cursor-default hover:text-black">Team</span>
      </div>

      {/* Right side: + icon (admin only) and profile dropdown */}
      <div className="flex items-center gap-6">
        {isAdmin && (
          <button 
          onClick={handleListClick}
          className="text-blue-600 text-lg hover:scale-110 transition-transform cursor-pointer ">
             <FaList />
          </button>
        )}

        {(isAdmin || isUser) && (
          <div className="relative" ref={dropdownRef}>
            <img
              src="src/assets/user.png"
              width={40}
              height={40}
              onClick={handleToggleMenu}
              className="w-10 h-10 rounded-full cursor-pointer"
              alt="User"
            />
            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10 flex flex-col">
              
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 hover:bg-gray-100 text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
