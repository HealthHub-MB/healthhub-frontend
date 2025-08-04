import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardHeader from "../../components/DashboardHeader";
import AppointmentCard from "../../components/AppointmentCard";

interface User {
  fullName: string;
  email: string;
  role: string;
}

interface Patient {
  age: number;
  gender: string;
  contactNumber: string;
  userId: User;
}

interface Appointment {
  id: number;
  uuid: string;
  status: string;
  type: string;
  appointmentDate: string;
  createdAt: string;
  patientId: Patient;
}

const Appointments: React.FC = () => {
  const [upcomingAppointments, setUpcomingAppointments] = useState<Appointment[]>([]);
  const [requestedAppointments, setRequestedAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/doctor/appointments", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setUpcomingAppointments(res.data.upcomingAppointments || []);
        setRequestedAppointments(res.data.requestedAppointments || []);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const handleAppointmentStatusUpdate = async (
    appointmentId: number,
    newStatus: "ACCEPTED" | "DECLINED"
  ) => {
    try {
      const res = await axios.patch(
        `http://localhost:8080/api/appointments/${appointmentId}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const updatedAppointment: Appointment = res.data.data;

      setRequestedAppointments((prev) =>
        prev.filter((app) => app.id !== appointmentId)
      );

      if (newStatus === "ACCEPTED") {
        setUpcomingAppointments((prev) => [...prev, updatedAppointment]);
      }

    } catch (error) {
      console.error("Error updating appointment status:", error);
    }
  };

  return (
    <>
      <DashboardHeader isDoctor={true} />

      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold mb-2">Appointments</h1>
        <p className="text-gray-500 mb-6">Manage your scheduled appointments</p>

        {loading ? (
          <div className="text-center text-gray-400 mt-10">Loading appointments...</div>
        ) : (
          <div className="space-y-6 mt-6">
            {upcomingAppointments.length > 0 && (
              <>
                <h2 className="font-semibold text-lg">Upcoming Appointments</h2>
                {upcomingAppointments.map((appointment) => (
                  <AppointmentCard key={appointment.id} data={appointment} />
                ))}
              </>
            )}

            {requestedAppointments.length > 0 && (
              <>
                <h2 className="font-semibold text-lg mt-10">Requested Appointments</h2>
                {requestedAppointments.map((appointment) => (
                  <AppointmentCard
                    key={appointment.id}
                    data={appointment}
                    showActions
                    onAccept={() =>
                      handleAppointmentStatusUpdate(appointment.id, "ACCEPTED")
                    }
                    onDecline={() =>
                      handleAppointmentStatusUpdate(appointment.id, "DECLINED")
                    }
                  />
                ))}
              </>
            )}

            {upcomingAppointments.length === 0 && requestedAppointments.length === 0 && (
              <div className="text-center text-gray-400 mt-10">
                No appointments to display.
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Appointments;
