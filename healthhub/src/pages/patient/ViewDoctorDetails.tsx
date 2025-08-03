import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DashboardHeader from '../../components/DashboardHeader';
import Image from '../../constants/imageConstants';

interface Doctor {
  id: number;
  specialization: string;
  officeAddress: string;
  phoneNumber: string;
  bio: string;
  userId: {
    fullName: string;
    email: string;
  };
  slots: Slot[];
}

interface Slot {
  id: number;
  weekDay: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}

const ViewDoctorDetails: React.FC = () => {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState<Doctor | null>(null);


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!doctorId || !token) return;

    axios
      .get(`http://localhost:8080/api/doctors/${doctorId}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("doctor",res.data.data);
        
        setDoctor(res.data.data)})
      .catch((err) => console.error("Error fetching doctor:", err.response?.data || err.message));
  }, [doctorId]);


  return (
    <>
      <DashboardHeader isPatient={true} />
      <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
        {doctor ? (
          <>
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-4">
              <span>Find a Doctor</span> /{' '}
              <span className="text-black font-medium">Dr. {doctor.userId.fullName}</span>
            </div>

            {/* Doctor Info */}
            <div className="flex items-center gap-6 mb-6">
              <img src={Image.user} alt="Doctor Avatar" className="w-20 h-20 rounded-full object-cover" />
              <div>
                <h1 className="text-2xl font-bold mb-1">Dr. {doctor.userId.fullName}</h1>
                <p className="text-blue-600 text-sm">{doctor.specialization}</p>
                <p className="text-sm text-gray-500">{doctor.officeAddress}</p>
              </div>
            </div>

            {/* About */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-2">About</h2>
              <p className="text-gray-700 leading-relaxed text-sm">{doctor.bio}</p>
            </div>

            {/* Contact Info */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">Phone</p>
                  <p>{doctor.phoneNumber}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Email</p>
                  <p>{doctor.userId.email}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-gray-500 mb-1">Address</p>
                  <p>{doctor.officeAddress}</p>
                </div>
              </div>
            </div>

            
          </>
        ) : (
          <p className="text-gray-500">Loading doctor profile...</p>
        )}
      </div>
    </>
  );
};

export default ViewDoctorDetails;
