// // import React, { useEffect, useState } from "react";
// // import DashboardHeader from "../../components/DashboardHeader";
// // import { useNavigate } from "react-router-dom";
// // import Button from "../../components/Button";
// // import { DashboardCard } from "../../components/DashboardCard";
// // import axios from "axios";

// // interface Appointment {
// //   id: number;
// //   name: string;
// //   datetime: string;
// //   type: string;
// //   status: string;
// // }

// // const AppointmentRow = ({ appointment }: { appointment: Appointment }) => (
// //   <div className="flex w-full h-[72px] border-t border-[#E6E8EB]">
// //     <div className="w-[268px] p-2 flex items-center">
// //       <span className="text-sm text-[#121417]">{appointment.name}</span>
// //     </div>
// //     <div className="w-[268px] p-2 flex items-center">
// //       <span className="text-sm text-[#637887]">{appointment.datetime}</span>
// //     </div>
// //     <div className="w-[268px] p-2 flex items-center">
// //       <div className="bg-[#F0F2F5] rounded-lg px-4 py-1">
// //         <span className="text-sm font-medium text-center text-[#121417]">
// //           {appointment.type}
// //         </span>
// //       </div>
// //     </div>
// //     <div className="w-[268px] p-2 flex items-center">
// //       <div className="bg-[#F0F2F5] rounded-lg px-4 py-1">
// //         <span className="text-sm font-medium text-[#121417]">
// //           {appointment.status}
// //         </span>
// //       </div>
// //     </div>
// //   </div>
// // );

// // const DoctorDashboard = () => {
// //   const navigate = useNavigate();
// //   const [appointments, setAppointments] = useState<Appointment[]>([]);
// //   const [appointmentsToday, setAppointmentsToday] = useState(0);
// //   const [upcomingAppointments, setUpcomingAppointments] = useState(0);

// //   useEffect(() => {
// //     const fetchAppointments = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:3000/api/appointments");
// //         const data: Appointment[] = response.data;
// //         setAppointments(data);

// //         const today = new Date();
// //         const todayCount = data.filter(app => {
// //           const appDate = new Date(app.datetime);
// //           return (
// //             appDate.getDate() === today.getDate() &&
// //             appDate.getMonth() === today.getMonth() &&
// //             appDate.getFullYear() === today.getFullYear()
// //           );
// //         }).length;

// //         const upcomingCount = data.filter(app => new Date(app.datetime) > today).length;

// //         setAppointmentsToday(todayCount);
// //         setUpcomingAppointments(upcomingCount);
// //       } catch (error) {
// //         console.error("Error fetching appointments:", error);
// //       }
// //     };

// //     fetchAppointments();
// //   }, []);


// //   const [name, setName] = useState('vinit');
  
// //     useEffect(() => {
// //       const storedName = localStorage.getItem('name') || 'vinit';
// //       setName(storedName);
// //     }, []);

// //   return (
// //     <>
// //       <DashboardHeader isDoctor={true} />
// //       <div className="w-full min-h-screen bg-white">
// //         <div className="px-40 py-6">
// //           <div className="flex justify-between items-center mb-6 ">
// //             <p className="text-4xl font-bold text-[#121417] ">Welcome Back, {name}</p>
// //           </div>
// //           <div className="flex gap-6 mb-6">
// //             <DashboardCard title="Appointments Today" value={appointmentsToday} />
// //             <DashboardCard title="Upcoming Appointments" value={upcomingAppointments} />
// //           </div>
// //           <div className="flex gap-3 p-4">
// //             <Button 
// //               label="Manage Availability" 
// //               onClick={() => navigate("/availabilityManager")} 
// //               bgcolor="#94C7F0" 
// //               color="#121417" 
// //               width="auto" 
// //               height="40px" 
// //               textSize="0.875rem" 
// //             />
// //             <Button 
// //               label="View Patient Records" 
// //               onClick={() => navigate("/patientRecords")} 
// //               bgcolor="#F0F2F5" 
// //               color="#121417" 
// //               width="auto" 
// //               height="40px" 
// //               textSize="0.875rem" 
// //             />
// //           </div>
// //           <div className="mt-10">
// //             <p className="text-xl font-bold text-[#121417] mb-4">Upcoming Appointments</p>
// //             <div className="w-full border border-[#E6E8EB] rounded-lg overflow-hidden">
// //               {appointments
// //                 .filter(app => new Date(app.datetime) > new Date())
// //                 .map((appointment) => (
// //                   <AppointmentRow key={appointment.id} appointment={appointment} />
// //                 ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default DoctorDashboard;



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
        <div className="px-40 py-6">
          <div className="flex justify-between items-center mb-6">
            <p className="text-4xl font-bold text-[#121417]">Welcome Back, {name}</p>
          </div>

          <div className="flex gap-6 mb-6">
            <DashboardCard title="Appointments Today" value={appointmentsToday} />
            <DashboardCard title="Upcoming Appointments" value={upcomingAppointments.length} />
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
            <div className="w-full border border-[#E6E8EB] rounded-lg overflow-hidden space-y-4 p-4">
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



// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import DashboardHeader from "../../components/DashboardHeader";
// import AppointmentCard from "../../components/AppointmentCard";
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
//   id: number;
// }

// interface Appointment {
//   id: number;
//   appointmentDate: string;
//   patientId: Patient;
// }

// const DoctorDashboard = () => {
//   const navigate = useNavigate();
//   const [upcomingAppointments, setUpcomingAppointments] = useState<Appointment[]>([]);
//   const [appointmentsToday, setAppointmentsToday] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [name, setName] = useState("Doctor");

//   useEffect(() => {
//     const storedName = localStorage.getItem("name");
//     if (storedName) setName(storedName);
//   }, []);

//   // useEffect(() => {
//   //   const fetchUpcomingAppointments = async () => {
//   //     try {
//   //       const { patientId } = useParams();
//   //       const res = await axios.get("http://localhost:8080/api/doctors/patients/${patientId}/profile", {
//   //         headers: {
//   //           Authorization: `Bearer ${localStorage.getItem("token")}`,
//   //         },
//   //       });

//   //       const allAppointments: Appointment[] = res.data.upcomingAppointments || [];
//   //       setUpcomingAppointments(allAppointments);

//   //       const today = new Date();
//   //       const todayCount = allAppointments.filter(app => {
//   //         const date = new Date(app.appointmentDate);
//   //         return (
//   //           date.getDate() === today.getDate() &&
//   //           date.getMonth() === today.getMonth() &&
//   //           date.getFullYear() === today.getFullYear()
//   //         );
//   //       }).length;

//   //       setAppointmentsToday(todayCount);
//   //     } catch (error) {
//   //       console.error("Error fetching upcoming appointments:", error);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchUpcomingAppointments();
//   // }, []);


// useEffect(() => {
//   const fetchUpcomingAppointments = async () => {
//     try {
//       const res = await axios.get("http://localhost:8080/api/doctor/appointments", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       const allAppointments: Appointment[] = res.data.upcomingAppointments || [];
//       setUpcomingAppointments(allAppointments);

//       const today = new Date();
//       const todayCount = allAppointments.filter(app => {
//         const date = new Date(app.appointmentDate);
//         return (
//           date.getDate() === today.getDate() &&
//           date.getMonth() === today.getMonth() &&
//           date.getFullYear() === today.getFullYear()
//         );
//       }).length;

//       setAppointmentsToday(todayCount);
//     } catch (error) {
//       console.error("Error fetching upcoming appointments:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchUpcomingAppointments();
// }, []);


//   return (
//     <>
//       <DashboardHeader isDoctor={true} />
//       <div className="w-full min-h-screen bg-white">
//         <div className="px-40 py-6">
//           <div className="flex justify-between items-center mb-6">
//             <p className="text-4xl font-bold text-[#121417]">Welcome Back, {name}</p>
//           </div>

//           <div className="flex gap-6 mb-6">
//             <DashboardCard title="Appointments Today" value={appointmentsToday} />
//             <DashboardCard title="Upcoming Appointments" value={upcomingAppointments.length} />
//           </div>

//           <div className="flex gap-3 p-4">
//             <Button
//               label="Manage Availability"
//               onClick={() => navigate("/availabilityManager")}
//               bgcolor="#94C7F0"
//               color="#121417"
//               width="auto"
//               height="40px"
//               textSize="0.875rem"
//             />
//             <Button
//               label="View Patient Records"
//               onClick={() => navigate("/patientRecords")}
//               bgcolor="#F0F2F5"
//               color="#121417"
//               width="auto"
//               height="40px"
//               textSize="0.875rem"
//             />
//           </div>

//           <div className="mt-10">
//             <p className="text-xl font-bold text-[#121417] mb-4">Upcoming Appointments</p>
//             <div className="w-full border border-[#E6E8EB] rounded-lg overflow-hidden space-y-4 p-4">
//               {loading ? (
//                 <div className="text-center text-gray-400">Loading...</div>
//               ) : upcomingAppointments.length === 0 ? (
//                 <div className="text-center text-gray-400">No upcoming appointments.</div>
//               ) : (
//                 upcomingAppointments.map((appointment) => (
//                   <AppointmentCard
//                     key={appointment.id}
//                     data={appointment}
//                     onView={() =>
//                       navigate(`/patient-health-record/${appointment.patientId.id}`)
//                     }
//                   />
//                 ))
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DoctorDashboard;
