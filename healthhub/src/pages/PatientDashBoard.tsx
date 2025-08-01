// import React, { useEffect, useState } from 'react';
// import DashboardCard from '../components/Card';
// import one from '../assets/one.png';
// import two from '../assets/two.png';
// import three from '../assets/three.png';
// import DashboardHeader from '../components/DashboardHeader';
// import { useNavigate } from 'react-router-dom';

//  const [name, setName] = useState(''); // Use state for reactivity

//   useEffect(() => {
//     const storedName = localStorage.getItem('name111') || 'vinit';
//     setName(storedName);
//     console.log("localStorage.getItem('name')", storedName);
//     console.log("localStorage.getItem('token')", localStorage.getItem('token'));
//   }, []);
// const name = localStorage.getItem('name111')|| "vinit";
// console.log("localStorage.getItem('name')",localStorage.getItem('name111'));
// console.log("localStorage.getItem('token')",localStorage.getItem('token'));

// const PatientDashboard = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//     <DashboardHeader isPatient={true}/>
//     <div className="flex flex-col items-start  px-[120px] py-[20px]">
//       {/* Header */}
//       <div className="flex flex-wrap justify-between items-start content-start p-4 gap-3 w-full h-[72px]">
//         <h1 className="text-[121417] text-[32px] font-bold leading-[40px]">
//           Welcome back,{name}
//         </h1>
//       </div>

//       {/* Cards */}
//       <div className="flex flex-col gap-0 w-full">
//         <div className="p-4 w-full">
//           <DashboardCard
//             title="Book an Appointment"
//             description="Find and schedule an appointment with a healthcare provider."
//             buttonLabel="Book Now"
//             imageUrl={one}
//             onButtonClick={() => navigate("/find-a-doctor")}
//           />
//         </div>
//         <div className="p-4 w-full">
//           <DashboardCard
//             title="My Records"
//             description="Access your health records, including lab results and medications."
//             buttonLabel="View Records"
//             imageUrl={two}
//             onButtonClick={() => navigate("/patient-health-record")}
//           />
//         </div>
//         <div className="p-4 w-full">
//           <DashboardCard
//             title="Upcoming Appointments"
//             description="View and manage your scheduled appointments."
//             buttonLabel="View"
//             imageUrl={three}
//             onButtonClick={() => navigate("/patient-appoitments")}
//           />
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default PatientDashboard;

import React, { useEffect, useState } from 'react';
import DashboardCard from '../components/Card';
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';
import DashboardHeader from '../components/DashboardHeader';
import { useNavigate } from 'react-router-dom';

const PatientDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('vinit');

  useEffect(() => {
    const storedName = localStorage.getItem('name111') || 'user';
    setName(storedName);
    console.log("localStorage.getItem('name111')", storedName);
    console.log("localStorage.getItem('token')", localStorage.getItem('token'));
  }, []);

  return (
    <>
      <DashboardHeader isPatient={true} />
      <div className="flex flex-col items-start px-[120px] py-[20px]">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-start content-start p-4 gap-3 w-full h-[72px]">
          <h1 className="text-[#121417] text-[32px] font-bold leading-[40px]">
            Welcome back, {name}
          </h1>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-0 w-full">
          <div className="p-4 w-full">
            <DashboardCard
              title="Book an Appointment"
              description="Find and schedule an appointment with a healthcare provider."
              buttonLabel="Book Now"
              imageUrl={one}
              onButtonClick={() => navigate('/find-a-doctor')}
            />
          </div>
          <div className="p-4 w-full">
            <DashboardCard
              title="My Records"
              description="Access your health records, including lab results and medications."
              buttonLabel="View Records"
              imageUrl={two}
              onButtonClick={() => navigate('/health-records')}
            />
          </div>
          <div className="p-4 w-full">
            <DashboardCard
              title="Upcoming Appointments"
              description="View and manage your scheduled appointments."
              buttonLabel="View"
              imageUrl={three}
              onButtonClick={() => navigate('/patient-appointments')}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientDashboard;
