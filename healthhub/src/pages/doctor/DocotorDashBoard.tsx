// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import DashboardHeader from "../../components/DashboardHeader";
// import Button from "../../components/Button";
// import { DashboardCard } from "../../components/DashboardCard";

// interface User {
//   fullName: string;
// }

// interface Patient {
//   age: number;
//   gender: string;
//   contactNumber: string;
//   userId: User;
// }

// interface Appointment {
//   id: number;
//   uuid: string;
//   appointmentDate: string;
//   status: "accepted" | "pending";
//   type: "consultation" | "follow-up" | string;
//   patientId: Patient;
// }

// const DoctorDashboard = () => {
//   const navigate = useNavigate();
//   const [upcomingAppointments, setUpcomingAppointments] = useState<Appointment[]>([]);
//   const [appointmentsToday, setAppointmentsToday] = useState(0);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [name, setName] = useState<string>("Doctor");

//   useEffect(() => {
//     const storedName = localStorage.getItem("name");
//     if (storedName) setName(storedName);
//   }, []);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const res = await axios.get("http://localhost:8080/api/doctor/appointments", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         const allAppointments: Appointment[] = res.data.upcomingAppointments || [];
//         setUpcomingAppointments(allAppointments);

//         const todayStr = new Date().toISOString().split("T")[0];
//         const todayCount = allAppointments.filter(app =>
//           app.appointmentDate.startsWith(todayStr)
//         ).length;

//         setAppointmentsToday(todayCount);
//       } catch (error) {
//         console.error("Error fetching appointments:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAppointments();
//   }, []);

//   const formatStatus = (status: string) => {
//     if (status === "accepted") return { label: "Confirmed", className: "bg-gray-100 text-black" };
//     if (status === "pending") return { label: "Pending", className: "bg-gray-100 text-black" };
//     return { label: "Unknown", className: "bg-gray-200 text-gray-600" };
//   };

//   return (
//     <>
//       <DashboardHeader isDoctor={true} />
//       <div className="w-full min-h-screen bg-white">
//         <div className="max-w-screen-xl mx-auto px-6 py-4">
//           <div className="flex justify-between items-center mb-6">
//             <p className="text-4xl font-bold text-[#121417]">Welcome Back, {name}</p>
//           </div>

//           <div className="flex gap-6 mb-6">
//             <DashboardCard title="Appointments Today" value={appointmentsToday} />
//             <DashboardCard title="Upcoming Appointments" value={upcomingAppointments.length} />
//           </div>

//           <div className="flex gap-3 mb-6">
//             <Button
//               label="Manage Availability"
//               onClick={() => navigate("/availabilityManager")}
//               bgcolor="#94C7F0"
//               color="#121417"
//               width="150"
//               height="40px"
//               textSize="0.875rem"
//             />
//             <Button
//               label="View Patient Records"
//               onClick={() => navigate("/patientRecords")}
//               bgcolor="#F0F2F5"
//               color="#121417"
//               width="150"
//               height="40px"
//               textSize="0.875rem"
//             />
//           </div>

//           <div className="mt-10">
//             <p className="text-xl font-bold text-[#121417] mb-4">Upcoming Appointments</p>

//             <div className="overflow-x-auto rounded-lg shadow">
//               <table className="min-w-full bg-white">
//                 <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
//                   <tr>
//                     <th className="px-6 py-3">Patient Name</th>
//                     <th className="px-6 py-3">Date </th>
//                     <th className="px-6 py-3">Type</th>
//                     <th className="px-6 py-3">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody className="text-sm text-gray-700 divide-y divide-gray-100">
//                   {loading ? (
//                     <tr>
//                       <td colSpan={4} className="text-center px-6 py-4 text-gray-400">
//                         Loading...
//                       </td>
//                     </tr>
//                   ) : upcomingAppointments.length === 0 ? (
//                     <tr>
//                       <td colSpan={4} className="text-center px-6 py-4 text-gray-400">
//                         No upcoming appointments.
//                       </td>
//                     </tr>
//                   ) : (
//                     upcomingAppointments.map((appointment) => {
//                       const patientName = appointment.patientId.userId.fullName;
//                       const formattedDate = new Date(appointment.appointmentDate).toLocaleString("en-US", {
//                         dateStyle: "medium",
                  
//                       });

//                       const statusObj = formatStatus(appointment.status);
//                       const typeLabel = appointment.type?.charAt(0).toUpperCase() + appointment.type?.slice(1);

//                       return (
//                         <tr key={appointment.id}>
//                           <td className="px-6 py-4">{patientName}</td>
//                           <td className="px-6 py-4">{formattedDate}</td>
//                           <td className="px-6 py-4">
//                             <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
//                               {typeLabel}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4">
//                             <span className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${statusObj.className}`}>
//                               {statusObj.label}
//                             </span>
//                           </td>
//                         </tr>
//                       );
//                     })
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DoctorDashboard;



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DashboardHeader from "../../components/DashboardHeader";
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
  uuid: string;
  appointmentDate: string;
  status: "accepted" | "pending";
  type: "consultation" | "follow-up" | string;
  patientId: Patient;
}

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const [allAppointments, setAllAppointments] = useState<Appointment[]>([]);
  const [appointmentsToday, setAppointmentsToday] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [name, setName] = useState<string>("Doctor");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) setName(storedName);
  }, []);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/doctor/appointments", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const upcoming = res.data.upcomingAppointments || [];
        const requested = res.data.requestedAppointments || [];

        const combined = [...upcoming, ...requested];
        setAllAppointments(combined);

        const todayStr = new Date().toISOString().split("T")[0];
        const todayCount = combined.filter(app =>
          app.appointmentDate.startsWith(todayStr)
        ).length;

        setAppointmentsToday(todayCount);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const formatStatus = (status: string) => {
    if (status === "accepted") return { label: "Confirmed", className: "bg-gray-100 text-black" };
    if (status === "pending") return { label: "Pending", className: "bg-gray-100 text-black" };
    return { label: "Unknown", className: "bg-gray-200 text-gray-600" };
  };

  return (
    <>
      <DashboardHeader isDoctor={true} />
      <div className="w-full min-h-screen bg-white">
        <div className="max-w-screen-xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-4xl font-bold text-[#121417]">Welcome Back, {name}</p>
          </div>

          <div className="flex gap-6 mb-6">
            <DashboardCard title="Appointments Today" value={appointmentsToday} />
            <DashboardCard title="All Appointments" value={allAppointments.length} />
          </div>

          <div className="flex gap-3 mb-6">
            <Button
              label="Manage Availability"
              onClick={() => navigate("/availabilityManager")}
              bgcolor="#94C7F0"
              color="#121417"
              width="150"
              height="40px"
              textSize="0.875rem"
            />
            <Button
              label="View Patient Records"
              onClick={() => navigate("/patientRecords")}
              bgcolor="#F0F2F5"
              color="#121417"
              width="150"
              height="40px"
              textSize="0.875rem"
            />
          </div>

          <div className="mt-10">
            <p className="text-xl font-bold text-[#121417] mb-4">All Appointments</p>

            <div className="overflow-x-auto rounded-lg shadow">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                  <tr>
                    <th className="px-6 py-3">Patient Name</th>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Type</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700 divide-y divide-gray-100">
                  {loading ? (
                    <tr>
                      <td colSpan={4} className="text-center px-6 py-4 text-gray-400">
                        Loading...
                      </td>
                    </tr>
                  ) : allAppointments.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="text-center px-6 py-4 text-gray-400">
                        No appointments to display.
                      </td>
                    </tr>
                  ) : (
                    allAppointments.map((appointment) => {
                      const patientName = appointment.patientId.userId.fullName;
                      const formattedDate = new Date(appointment.appointmentDate).toLocaleString("en-US", {
                        dateStyle: "medium",
                      });

                      const statusObj = formatStatus(appointment.status);
                      const typeLabel = appointment.type?.charAt(0).toUpperCase() + appointment.type?.slice(1);

                      return (
                        <tr key={appointment.id}>
                          <td className="px-6 py-4">{patientName}</td>
                          <td className="px-6 py-4">{formattedDate}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${statusObj.className}`}>
                              {typeLabel}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${statusObj.className}`}>
                              {statusObj.label}
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDashboard;

