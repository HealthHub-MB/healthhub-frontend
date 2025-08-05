import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import DashboardHeader from "../../components/DashboardHeader";
import Image from "../../constants/imageConstants";
import { useNavigate } from "react-router-dom";

interface Doctor {
  id: number;
  specialization: string;
  gender: string;
}

interface Slot {
  startTime: string;
}

interface Appointment {
  id: number;
  appointmentDate: string;
  doctorId: Doctor;
  slotId: Slot;
}

const MyAppointments: React.FC = () => {
  const navigate = useNavigate();
  const [upcomingAppointments, setUpcomingAppointments] = useState<
    Appointment[]
  >([]);
  const [pastAppointments, setPastAppointments] = useState<Appointment[]>([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const [upcomingRes, pastRes] = await Promise.all([
          axios.get("http://localhost:8080/api/appointments/upcoming", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
          axios.get("http://localhost:8080/api/appointments/past", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
        ]);

        console.log("up",upcomingRes.data);
        console.log("past",pastRes.data);
        
        
        setUpcomingAppointments(upcomingRes.data.data || []);
        setPastAppointments(pastRes.data.data || []);
      } catch (error) {
        console.error("Error fetching appointments", error);
      }
    };

    fetchAppointments();
  }, []);

  const renderAppointment = (appointment: Appointment) => {
    const { appointmentDate, doctorId, slotId } = appointment;
    const doctorName = 
      doctorId.gender === "female" ? "Dr. Sophia Green" : "Dr. Daniel Harris"; // Placeholder
    // const doctorImage =
    //   doctorId.gender === "female"
    //     ? "https://randomuser.me/api/portraits/women/44.jpg"
    //     : "https://randomuser.me/api/portraits/men/45.jpg";

    const formattedDate = format(new Date(appointmentDate), "MMMM d, yyyy");
    const formattedTime = slotId?.startTime?.slice(0, 5); // HH:MM

    return (
      <div
        key={appointment.id}
        className="flex items-center justify-between py-4"
      >
        <div className="flex items-center gap-4">
          <img
            src={Image.user}
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium">{`${formattedDate} | ${formattedTime}`}</p>
            <p className="text-sm text-gray-600">
              {doctorName} | {doctorId.specialization}
            </p>
          </div>
        </div>
       <button
  onClick={() => {
    navigate(`/view-doctor-details/${doctorId.id}`);
  }}
  className="text-white px-6 py-2 rounded text-sm cursor-pointer hover:opacity-90"
  style={{
    backgroundColor: "#94C2F0",
    height: "40px",
    width: "150px",
  }}
>
  View Details
</button>
      </div>
    );
  }

  return (
    <>
      <DashboardHeader isPatient={true} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-8">My Appointments</h1>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map(renderAppointment)
          ) : (
            <p className="text-gray-500 text-sm">No upcoming appointments.</p>
          )}
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Past Appointments</h2>
          {pastAppointments.length > 0 ? (
            pastAppointments.map(renderAppointment)
          ) : (
            <p className="text-gray-500 text-sm">No past appointments.</p>
          )}
        </section>
      </div>
    </>
  );
};

export default MyAppointments;
