


import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DashboardHeader from "../../components/DashboardHeader";
import AppointmentCard from "../../components/AppointmentCard";
import Button from "../../components/Button";
import { DashboardCard } from "../../components/DashboardCard";

interface User {
  fullName: string;
}

interface Patient {
  age: number;
  gender: string;
  contactNumber: string;
  userId: User;
}

interface Appointment {
  id: number;
  appointmentDate: string;
  patientId: Patient;
}

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const [upcomingAppointments, setUpcomingAppointments] = useState<Appointment[]>([]);
  const [appointmentsToday, setAppointmentsToday] = useState(0);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("Doctor");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) setName(storedName);
  }, []);

  useEffect(() => {
    const fetchUpcomingAppointments = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/doctor/appointments", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const allAppointments: Appointment[] = res.data.upcomingAppointments || [];
        setUpcomingAppointments(allAppointments);

        const today = new Date();
        const todayCount = allAppointments.filter(app => {
          const date = new Date(app.appointmentDate);
          return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
          );
        }).length;

        console.log("result",res.data);
        
        setAppointmentsToday(todayCount);
      } catch (error) {
        console.error("Error fetching upcoming appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingAppointments();
  }, []);

  return (
    <>
      <DashboardHeader isDoctor={true} />
      <div className="w-full min-h-screen bg-white">
      <div className="w-[1280px] h-[735px] px-[160px] py-[20px] mx-auto">
          <div className="flex justify-between items-center mb-6">
            <p className="text-4xl font-bold text-[#121417]">Welcome Back, {name}</p>
          </div>

          <div className="flex gap-6 mb-6">
            <DashboardCard title="Appointments Today" value={appointmentsToday} />
            <DashboardCard title="Upcoming Appointments" value={upcomingAppointments.length} />
          </div>

          <div className="flex gap-3 p-4">
            <Button
              label="Availability"
              onClick={() => navigate("/availabilityManager")}
              bgcolor="#94C7F0"
              color="#121417"
              width="150"
              height="40px"
              textSize="0.875rem"
            />
            <Button
              label="Patient Records"
             // onClick={() => navigate("/patientRecords")}
              bgcolor="#F0F2F5"
              color="#121417"
              width="150"
              height="40px"
              textSize="0.875rem"
            />
          </div>

          <div className="mt-10">
            <p className="text-xl font-bold text-[#121417] mb-4">Upcoming Appointments</p>
            <div className="w-full  rounded-lg overflow-hidden space-y-4 p-4">
              {loading ? (
                <div className="text-center text-gray-400">Loading...</div>
              ) : upcomingAppointments.length === 0 ? (
                <div className="text-center text-gray-400">No upcoming appointments.</div>
              ) : (
                upcomingAppointments.map((appointment) => (
                  <AppointmentCard key={appointment.id} data={appointment} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDashboard;
