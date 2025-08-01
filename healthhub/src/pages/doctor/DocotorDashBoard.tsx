import React, { useEffect, useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { DashboardCard } from "../../components/DashboardCard";
import axios from "axios";

interface Appointment {
  id: number;
  name: string;
  datetime: string;
  type: string;
  status: string;
}

const AppointmentRow = ({ appointment }: { appointment: Appointment }) => (
  <div className="flex w-full h-[72px] border-t border-[#E6E8EB]">
    <div className="w-[268px] p-2 flex items-center">
      <span className="text-sm text-[#121417]">{appointment.name}</span>
    </div>
    <div className="w-[268px] p-2 flex items-center">
      <span className="text-sm text-[#637887]">{appointment.datetime}</span>
    </div>
    <div className="w-[268px] p-2 flex items-center">
      <div className="bg-[#F0F2F5] rounded-lg px-4 py-1">
        <span className="text-sm font-medium text-center text-[#121417]">
          {appointment.type}
        </span>
      </div>
    </div>
    <div className="w-[268px] p-2 flex items-center">
      <div className="bg-[#F0F2F5] rounded-lg px-4 py-1">
        <span className="text-sm font-medium text-[#121417]">
          {appointment.status}
        </span>
      </div>
    </div>
  </div>
);

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [appointmentsToday, setAppointmentsToday] = useState(0);
  const [upcomingAppointments, setUpcomingAppointments] = useState(0);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/appointments");
        const data: Appointment[] = response.data;
        setAppointments(data);

        const today = new Date();
        const todayCount = data.filter(app => {
          const appDate = new Date(app.datetime);
          return (
            appDate.getDate() === today.getDate() &&
            appDate.getMonth() === today.getMonth() &&
            appDate.getFullYear() === today.getFullYear()
          );
        }).length;

        const upcomingCount = data.filter(app => new Date(app.datetime) > today).length;

        setAppointmentsToday(todayCount);
        setUpcomingAppointments(upcomingCount);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);


  const [name, setName] = useState('vinit');
  
    useEffect(() => {
      const storedName = localStorage.getItem('name') || 'vinit';
      setName(storedName);
    }, []);

  return (
    <>
      <DashboardHeader isDoctor={true} />
      <div className="w-full min-h-screen bg-white">
        <div className="px-40 py-6">
          <div className="flex justify-between items-center mb-6 ">
            <p className="text-4xl font-bold text-[#121417] ">Welcome Back, {name}</p>
          </div>
          <div className="flex gap-6 mb-6">
            <DashboardCard title="Appointments Today" value={appointmentsToday} />
            <DashboardCard title="Upcoming Appointments" value={upcomingAppointments} />
          </div>
          <div className="flex gap-3 p-4">
            <Button 
              label="Manage Availability" 
              onClick={() => navigate("/availabilityManager")} 
              bgcolor="#94C7F0" 
              color="#121417" 
              width="auto" 
              height="40px" 
              textSize="0.875rem" 
            />
            <Button 
              label="View Patient Records" 
              onClick={() => navigate("/patientRecords")} 
              bgcolor="#F0F2F5" 
              color="#121417" 
              width="auto" 
              height="40px" 
              textSize="0.875rem" 
            />
          </div>
          <div className="mt-10">
            <p className="text-xl font-bold text-[#121417] mb-4">Upcoming Appointments</p>
            <div className="w-full border border-[#E6E8EB] rounded-lg overflow-hidden">
              {appointments
                .filter(app => new Date(app.datetime) > new Date())
                .map((appointment) => (
                  <AppointmentRow key={appointment.id} appointment={appointment} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDashboard;
