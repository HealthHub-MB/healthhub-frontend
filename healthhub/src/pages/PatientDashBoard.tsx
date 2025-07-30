import React from 'react';
import DashboardCard from '../components/Card';
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';
import DashboardHeader from '../components/DashboardHeader';
import { useNavigate } from 'react-router-dom';

const PatientDashboard = () => {
  const navigate = useNavigate();
  return (
    <>
    <DashboardHeader isPatient={true}/>
    <div className="flex flex-col items-start  px-[120px] py-[20px]">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-start content-start p-4 gap-3 w-full h-[72px]">
        <h1 className="text-[#121417] text-[32px] font-bold leading-[40px]">
          Welcome back, Sarah
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
            onButtonClick={() => navigate("/find-a-doctor")}
          />
        </div>
        <div className="p-4 w-full">
          <DashboardCard
            title="My Records"
            description="Access your health records, including lab results and medications."
            buttonLabel="View Records"
            imageUrl={two}
            onButtonClick={() => navigate("/patient-health-record")}
          />
        </div>
        <div className="p-4 w-full">
          <DashboardCard
            title="Upcoming Appointments"
            description="View and manage your scheduled appointments."
            buttonLabel="View"
            imageUrl={three}
            onButtonClick={() => navigate("/patient-appoitments")}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default PatientDashboard;

