import React, { useState, useRef, useEffect } from 'react';
import DoctorCard from '../../components/DoctorCard';
import DashboardHeader from '../../components/DashboardHeader';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import Image from '../../constants/imageConstants'

const DoctorsPage: React.FC = () => {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [showSpecialtyDropdown, setShowSpecialtyDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showAvailabilityDropdown, setShowAvailabilityDropdown] = useState(false);

  const specialtyRef = useRef<HTMLDivElement>(null);
  const availabilityRef = useRef<HTMLDivElement>(null);
  const token = localStorage.getItem('token'); 

  // Fetch doctors from backend
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/doctors',{
        headers: { Authorization: `Bearer ${token}` },
      }); 
        console.log("response",response)
        setDoctors(response.data.doctors.data); // Adjusted to match your API shape
      } catch (error) {
        console.error('Failed to fetch doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const allSpecialties = [...new Set(doctors.map((doc) => doc.specialization))];

  const filteredDoctors = selectedSpecialty
    ? doctors.filter((doc) => doc.specialization === selectedSpecialty)
    : doctors;

  const fullyFilteredDoctors = selectedDate
    ? filteredDoctors.filter((doc) => {
        return true;
      })
    : filteredDoctors;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        specialtyRef.current &&
        !specialtyRef.current.contains(event.target as Node)
      ) {
        setShowSpecialtyDropdown(false);
      }
      if (
        availabilityRef.current &&
        !availabilityRef.current.contains(event.target as Node)
      ) {
        setShowAvailabilityDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <DashboardHeader isPatient={true} />
      <div className="flex flex-col items-center px-40 py-5 bg-white min-h-screen gap-5">
        <div className="flex flex-col items-start w-[960px] bg-white rounded-lg">
          {/* Search */}
          <div className="flex flex-row items-center w-full h-[48px] rounded-[12px] bg-[#F0F2F5] overflow-hidden">
            <input
              type="text"
              placeholder="Search for doctors, specialties, or conditions"
              className="w-full h-full bg-[#F0F2F5] outline-none text-[16px] text-[#637887] px-2"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-row flex-wrap gap-3 py-3 relative">
            {/* Specialty Filter */}
            <div className="relative" ref={specialtyRef}>
              <div
                onClick={() => setShowSpecialtyDropdown(!showSpecialtyDropdown)}
                className="px-4 py-1 bg-[#F0F2F5] rounded-full text-sm font-medium text-[#121417] cursor-pointer"
              >
                {selectedSpecialty || 'Specialty'}
              </div>
              {showSpecialtyDropdown && (
                <div className="absolute z-10 mt-2 w-40 bg-white rounded-lg shadow-md">
                  <div
                    className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedSpecialty(null);
                      setShowSpecialtyDropdown(false);
                    }}
                  >
                    All Specialties
                  </div>
                  {allSpecialties.map((spec, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedSpecialty(spec);
                        setShowSpecialtyDropdown(false);
                      }}
                    >
                      {spec}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Availability Filter */}
            <div className="relative" ref={availabilityRef}>
              <div
                onClick={() => setShowAvailabilityDropdown(!showAvailabilityDropdown)}
                className="px-4 py-1 bg-[#F0F2F5] rounded-full text-sm font-medium text-[#121417] cursor-pointer"
              >
                {selectedDate ? selectedDate.toDateString() : 'Availability'}
              </div>
              {showAvailabilityDropdown && (
                <div className="absolute z-10 mt-2 bg-white rounded-lg p-3 shadow-md">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => {
                      setSelectedDate(date);
                      setShowAvailabilityDropdown(false);
                    }}
                    inline
                  />
                  <div
                    className="mt-2 text-sm text-blue-500 cursor-pointer"
                    onClick={() => {
                      setSelectedDate(null);
                      setShowAvailabilityDropdown(false);
                    }}
                  >
                    Clear
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="pt-3 pb-2 w-full">
            <h2 className="text-[22px] font-bold text-[#121417]">Doctors</h2>
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="flex flex-col gap-4">
          {fullyFilteredDoctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.userId.fullName}
              bio={doctor.bio}
              specialization={doctor.specialization}
              imageUrl={Image.user} onViewProfile={function (): void {
                throw new Error('Function not implemented.');
              } }            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DoctorsPage;
