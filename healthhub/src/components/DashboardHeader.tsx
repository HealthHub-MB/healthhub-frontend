// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";

// const DashboardHeader = (props) => {
//   console.log(props);
//   const { buttonText = "", onButtonClick, isDoctor, isPatient } = props;
//   const [open, setOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleToggleMenu = () => {
//     setOpen(!open);
//   };

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleLogout =() =>{
//     localStorage.clear()
//   }

//   return (
//     <div className="flex justify-between items-center px-10 py-3 border-b border-gray-200 w-full h-[65px]">
//       {/* Left Logo Section */}
//      <div className="flex items-center gap-4">
//   <Link
//     to={isDoctor ? "/doctor-dashboardp" : isPatient ? "/patient-dashboardp" : "/"}
//     className="flex items-center gap-4"
//   >
//     {/* Icon Placeholder */}
//     {/* <div className="w-4 h-4 bg-black rounded" /> */}
//     <img src="/vite.png" alt="" />
//     <span className="text-xl font-bold text-gray-900">Health Hub</span>
//   </Link>
// </div>


//       {isDoctor && (
//         <>
//           <Link to={"/doctor-dashboardp"}>Home</Link>
//           <Link to={"/appoitments"}>Appoitements</Link>
//         </>
//       )}

//       {isPatient && (
//         <>
//           <Link to={"/patient-dashboardp"}>Home</Link>
//           <Link to={"/find-a-doctor"}>Find a doctor</Link>
//         </>
//       )}
//     {(isDoctor || isPatient) && (
//   <div className="flex justify-end p-4 ">
//     <div className="relative" ref={dropdownRef}>
//       <img
//         src="src/assets/user.png"
//         width={40}
//         height={40}
//         onClick={handleToggleMenu}
//         className="w-10 h-10 rounded-full cursor-pointer"
//         alt="User"
//       />
//       {open && (
//         <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10 flex flex-col">
//           {isDoctor && (
//             <Link
//               to="/editDoctorForm"
//               className="px-4 py-2 hover:bg-gray-100 border-b border-gray-200"
//             >
//               My Profile
//             </Link>
//           )}
//           {isPatient && (
//             <Link
//               to="/editPatientFrom"
//               className="px-4 py-2 hover:bg-gray-100 border-b border-gray-200"
//             >
//               My Profile
//             </Link>
//           )}
//           <Link
//             to="/"
//             className="px-4 py-2 hover:bg-gray-100"
//             onClick={handleLogout}
//           >
//             Logout
//           </Link>
//         </div>
//       )}
//     </div>
//   </div>
// )}


//       {/* Right Button Section */}
//       {buttonText != "" && (
//         <div className="flex items-center justify-end gap-8">
//           <button
//             onClick={onButtonClick}
//             className="bg-blue-100  text-gray-900 font-bold px-4 py-2 rounded-md  hover:bg-blue-400"
//           >
//             {buttonText}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DashboardHeader;


import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const DashboardHeader = (props) => {
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

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <div className="flex justify-between items-center px-10 py-3 border-b border-gray-200 w-full h-[65px]">
      {/* Left Logo Section */}
      <div className="flex items-center gap-4">
        <Link
          to={isDoctor ? "/doctor-dashboardp" : isPatient ? "/patient-dashboardp" : "/"}
          className="flex items-center gap-2"
        >
          <img src="/vite.png" alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-gray-900">Health Hub</span>
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Conditional Nav Links */}
        {isDoctor && (
          <>
            <Link to="/doctor-dashboardp" className="text-sm text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link to="/appoitments" className="text-sm text-gray-700 hover:text-blue-500">
              Appointments
            </Link>
          </>
        )}
        {isPatient && (
          <>
            <Link to="/patient-dashboardp" className="text-sm text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link to="/find-a-doctor" className="text-sm text-gray-700 hover:text-blue-500">
              Find a Doctor
            </Link>
          </>
        )}

        {/* Profile Dropdown */}
        {(isDoctor || isPatient) && (
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
                {isDoctor && (
                  <Link
                    to="/editDoctorForm"
                    className="px-4 py-2 hover:bg-gray-100 border-b border-gray-200"
                  >
                    My Profile
                  </Link>
                )}
                {isPatient && (
                  <Link
                    to="/editPatientFrom"
                    className="px-4 py-2 hover:bg-gray-100 border-b border-gray-200"
                  >
                    My Profile
                  </Link>
                )}
                <Link
                  to="/"
                  className="px-4 py-2 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Optional Action Button */}
        {buttonText !== "" && (
          <button
            onClick={onButtonClick}
            className="bg-blue-100 text-gray-900 font-bold px-4 py-2 rounded-md hover:bg-blue-400 cursor-pointer"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
