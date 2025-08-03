// // import React from "react";
// // import Button from "./Button";
// // import Image from "../constants/imageConstants";
// // import { useNavigate } from "react-router-dom";

// // interface User {
// //   fullName: string;
// //   id: number;
// // }

// // interface Patient {
// //   age: number;
// //   gender: string;
// //   contactNumber: string;
// //   userId: User;
// // }

// // interface Appointment {
// //   id: number;
// //   appointmentDate: string;
// //   patientId: Patient;
// // }

// // interface AppointmentCardProps {
// //   data: Appointment;
// //   showActions?: boolean;
// //   onAccept?: () => void;
// //   onDecline?: () => void;
// // }

// // const AppointmentCard: React.FC<AppointmentCardProps> = ({
// //   data,
// //   showActions = false,
// //   onAccept,
// //   onDecline,
// // }) => {
// //   const navigate = useNavigate();
// //   const { patientId, appointmentDate } = data;
// //   const fullName = patientId?.userId?.fullName || "Unnamed Patient";

// //   if (!patientId || !patientId.userId) return null;

   
// //   const formatTimeRange = (dateStr: string): string => {
// //     const start = new Date(`${dateStr}T09:00:00`);
// //     const end = new Date(start.getTime() + 30 * 60000);
// //     return `${start.toLocaleTimeString([], {
// //       hour: "2-digit",
// //       minute: "2-digit",
// //     })} - ${end.toLocaleTimeString([], {
// //       hour: "2-digit",
// //       minute: "2-digit",
// //     })}`;
// //   };


// //   const handleViewProfile = () => {
// //     navigate(`/doctor/patient-profile/${patientId?.userId?.id}`);
// //   };

// //   return (
// //     <div className="flex items-center justify-between  px-4 py-3 rounded-lg ">
// //       <div className="flex items-center gap-3">
// //         <img
// //           src={Image.user}
// //           alt="avatar"
// //           className="w-10 h-10 rounded-full object-cover"
// //         />
// //         <div>
// //           <p className="font-medium">{fullName}</p>
// //           <p className="text-sm text-gray-500">
// //             {formatTimeRange(appointmentDate)}
// //           </p>
// //         </div>
// //       </div>

// //       {showActions ? (
// //         <div className="flex gap-2">
// //           <Button
// //             label="Decline"
// //             bgcolor="#F87171"
// //             color="white"
// //             width="auto"
// //             padding="0.4rem 1rem"
// //             onClick={onDecline}
// //           />
// //           <Button
// //             label="Accept"
// //             bgcolor="#86EFAC"
// //             color="black"
// //             width="auto"
// //             padding="0.4rem 1rem"
// //             onClick={onAccept}
// //           />
// //         </div>
// //       ) : (
// //         <Button
// //           label="View"
// //           bgcolor="#E5E7EB"
// //           color="black"
// //           width="auto"
// //           padding="0.4rem 1rem"
// //           onClick={handleViewProfile}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default AppointmentCard;



// // components/AppointmentCard.tsx
// import React from "react";
// import Button from "./Button";
// import Image from "../constants/imageConstants";

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
//   appointmentDate: string;
//   patientId: Patient;
// }

// interface AppointmentCardProps {
//   data: Appointment;
//   onView?: () => void; // Accept onView callback
// }

// const AppointmentCard: React.FC<AppointmentCardProps> = ({ data, onView }) => {
//   return (
//     <div className="w-full p-4 border border-gray-200 rounded-lg flex justify-between items-center">
//       <div>
//         <p className="text-lg font-semibold text-[#121417]">{data.patientId.userId.fullName}</p>
//         <p className="text-sm text-[#637887]">{data.appointmentDate}</p>
//       </div>
//       <div>
//         <Button
//           label="View"
//           onClick={onView}
//           bgcolor="#94C7F0"
//           color="#121417"
//           width="80px"
//           height="36px"
//           textSize="0.875rem"
//         />
//       </div>
//     </div>
//   );
// };

// export default AppointmentCard;



import React from "react";
import Button from "./Button";

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

interface AppointmentCardProps {
  data: Appointment;
  onView: () => void;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ data, onView }) => {
  return (
    <div className="w-full p-4 border border-gray-200 rounded-lg flex justify-between items-center">
      <div>
        <p className="text-lg font-semibold text-[#121417]">{data.patientId.userId.fullName}</p>
        <p className="text-sm text-[#637887]">{data.appointmentDate}</p>
      </div>
      <div>
        <Button
          label="View"
          onClick={onView}
          bgcolor="#94C7F0"
          color="#121417"
          width="80px"
          height="36px"
          textSize="0.875rem"
        />
      </div>
    </div>
  );
};

export default AppointmentCard;
