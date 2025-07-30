import React from 'react';
import DoctorCard from '../components/DoctorCard';
import DashboardHeader from '../components/DashboardHeader';
import Image from '../constants/imageConstants'

const DoctorsPage: React.FC = () => {
  const doctors = [
    {
      name: 'Dr. Emily Carter',
      bio: 'Board-certified cardiologist with over 15 years of experience in non-invasive procedures.',
      specialization: 'Cardiology',
      imageUrl: Image.user, 
    },
    {
      name: 'Dr. David Lee',
      bio: 'Leading dermatologist specializing in medical and cosmetic dermatology.',
      specialization: 'Dermatology',
      imageUrl: Image.user,
    },
    {
      name: 'Dr. Sarah Johnson',
      bio: 'Dedicated pediatrician focusing on preventive care and developmental milestones.',
      specialization: 'Pediatrics',
      imageUrl: Image.user,
    },
    {
      name: 'Dr. Michael Brown',
      bio: 'Orthopedic surgeon skilled in sports injuries and joint replacements.',
      specialization: 'Orthopedics',
      imageUrl: Image.user,
    },
  ];

  const handleViewProfile = (name: string) => {
    alert(`View profile of ${name}`);
  };

  return (<>
    <DashboardHeader isPatient={true}/>
    <div className="flex flex-col items-center px-40 py-5 bg-[#F9FAFB] min-h-screen gap-5">
      {/* Search bar and filter section */}
      <div className="flex flex-col items-start w-[960px] bg-white rounded-lg">
        {/* Search */}
        <div className="flex flex-row items-center w-full h-[48px] rounded-[12px] bg-[#F0F2F5] overflow-hidden">
          <div className="w-[40px] h-[48px] flex justify-center items-center px-4 bg-[#F0F2F5] rounded-l-[12px]">
          </div>
          <input
            type="text"
            placeholder="Search for doctors, specialties, or conditions"
            className="w-full h-full bg-[#F0F2F5] outline-none text-[16px] text-[#637887] px-2"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-row flex-wrap gap-3 py-3">
          <div className="px-4 py-1 bg-[#F0F2F5] rounded-full text-sm font-medium text-[#121417]">Specialty</div>
          <div className="px-4 py-1 bg-[#F0F2F5] rounded-full text-sm font-medium text-[#121417]">Availability</div>
        </div>

        {/* Section title */}
        <div className="pt-3 pb-2 w-full">
          <h2 className="text-[22px] font-bold text-[#121417]">Doctors</h2>
        </div>
      </div>

      {/* Doctor cards list */}
      <div className="flex flex-col gap-4">
        {doctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            name={doctor.name}
            bio={doctor.bio}
            specialization={doctor.specialization}
            imageUrl={doctor.imageUrl}
            //onViewProfile={() => void()}
          />
        ))}
      </div>
    </div>
    
    </>
  );
};

export default DoctorsPage;
