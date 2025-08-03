import React, { useEffect, useState } from 'react';
import DashboardCard from '../../components/Card';
import DashboardHeader from '../../components/DashboardHeader';
import { useNavigate } from 'react-router-dom';
import Image from '../../constants/imageConstants'

const PatientDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('vinit');

  useEffect(() => {
    const storedName = localStorage.getItem('name') || 'user';
    setName(storedName);
  }, []);

  return (
    <>
      <DashboardHeader isPatient={true} />
      <div className="w-full min-h-screen flex justify-center items-center bg-white">
<div className="w-[1280px] h-[739px] px-[160px] py-[1px] opacity-100 ">
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
              imageUrl={Image.one}
              onButtonClick={() => navigate('/find-a-doctor')}
            />
          </div>
          <div className="p-4 w-full">
            <DashboardCard
              title="My Records"
              description="Access your health records, including lab results and medications."
              buttonLabel="View Records"
              imageUrl={Image.two}
              onButtonClick={() => navigate('/health-records')}
            />
          </div>
          <div className="p-4 w-full">
            <DashboardCard
              title="Upcoming Appointments"
              description="View and manage your scheduled appointments."
              buttonLabel="View"
              imageUrl={Image.three}
              onButtonClick={() => navigate('/patient-appoitments')}
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default PatientDashboard;
