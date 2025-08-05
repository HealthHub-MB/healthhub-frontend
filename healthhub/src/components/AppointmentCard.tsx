// import React, { useState } from "react";
// import Button from "./Button";
// import Image from "../constants/imageConstants";
// import { useNavigate } from "react-router-dom";

// interface User {
//   fullName: string;
//   id: number;
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
//   showActions?: boolean;
//   onAccept?: () => void;
//   onDecline?: () => void;
//   isLoading? : boolean;
// }

// const AppointmentCard: React.FC<AppointmentCardProps> = ({
//   data,
//   showActions = false,
//   onAccept,
//   onDecline,
//   isLoading =false,
// }) => {
//   const navigate = useNavigate();
//   const { patientId, appointmentDate } = data;
//   const fullName = patientId?.userId?.fullName || "Unnamed Patient";



//   if (!patientId || !patientId.userId) return null;


//   const formatTimeRange = (dateStr: string): string => {
//     const start = new Date(`${dateStr}T09:00:00`);
//     const end = new Date(start.getTime() + 30 * 60000);
//     return `${start.toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//     })} - ${end.toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//     })}`;
//   };


// const handleViewProfile = () => {
//   navigate(`/patient-health-record/${patientId?.userId?.id}`);
// };


//   return (
//     <div className="flex items-center justify-between  px-4 py-3 rounded-lg ">
//       <div className="flex items-center gap-3">
//         <img
//           src={Image.user}
//           alt="avatar"
//           className="w-10 h-10 rounded-full object-cover"
//         />
//       <div>
//   <p className="font-medium">{fullName}</p>
//   <p className="text-sm text-gray-500">
//     {new Date(appointmentDate).toLocaleDateString(undefined, {
//       weekday: "short",
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     })}
//   </p>
//   <p className="text-sm text-gray-500">
//     {formatTimeRange(appointmentDate)}
//   </p>
// </div>


//       </div>

//       {showActions ? (
//         <div className="flex gap-2">
//           <Button
//             label="Decline"
//             bgcolor="#F87171"
//             color="white"
//             height="40px"
//               width="150px"
//             padding="0.4rem 1rem"
//             onClick={onDecline}
//             //disabled={isLoading}
//           />
//           <Button
//             label="Accept"
//             bgcolor="#86EFAC"
//             color="black"
//            height="40px"
//               width="150px"
//             padding="0.4rem 1rem"
//             onClick={onAccept}
//           //disabled={isLoading}

//           />
//         </div>
//       ) : (
//         <Button
//           label="View"
//           bgcolor="#E5E7EB"
//           color="black"
//           height="40px"
//               width="150px"
//           padding="0.4rem 1rem"
//           onClick={handleViewProfile}
//         />
//       )}
//     </div>
//   );
// };

// export default AppointmentCard;


import React, { useState } from "react";
import Button from "./Button";
import Image from "../constants/imageConstants";
import { useNavigate } from "react-router-dom";

interface User {
  fullName: string;
  id: number;
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
  showActions?: boolean;
  onAccept?: () => void;
  onDecline?: () => void;
  isLoading?: boolean;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  data,
  showActions = false,
  onAccept,
  onDecline,
  isLoading = false,
}) => {
  const navigate = useNavigate();
  const { patientId, appointmentDate } = data;
  const fullName = patientId?.userId?.fullName || "Unnamed Patient";

  const [accepting, setAccepting] = useState(false);
  const [declining, setDeclining] = useState(false);

  if (!patientId || !patientId.userId) return null;

  const formatTimeRange = (dateStr: string): string => {
    const start = new Date(`${dateStr}T09:00:00`);
    const end = new Date(start.getTime() + 30 * 60000);
    return `${start.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })} - ${end.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  const handleViewProfile = () => {
    navigate(`/patient-health-record/${patientId.userId.id}`);
  };

  const handleAccept = async () => {
    setAccepting(true);
    try {
      await onAccept?.();
    } finally {
      setAccepting(false);
    }
  };

  const handleDecline = async () => {
    setDeclining(true);
    try {
      await onDecline?.();
    } finally {
      setDeclining(false);
    }
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-lg">
      <div className="flex items-center gap-3">
        <img
          src={Image.user}
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-medium">{fullName}</p>
          <p className="text-sm text-gray-500">
            {new Date(appointmentDate).toLocaleDateString(undefined, {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <p className="text-sm text-gray-500">{formatTimeRange(appointmentDate)}</p>
        </div>
      </div>

      {showActions ? (
        <div className="flex gap-3">
         <Button
            label="Decline"
            loading={declining}
            loadingLabel="Declining..."
            bgcolor="#F87171"
            color="white"
            height="40px"
            width="150px"
            padding="0.4rem 1rem"
            onClick={handleDecline}
            disabled={declining || accepting}
          />
          <Button
            label="Accept"
            loading={accepting}
            loadingLabel="Accepting..."
            bgcolor="#86EFAC"
            color="black"
            height="40px"
            width="150px"
            padding="0.4rem 1rem"
            onClick={handleAccept}
            disabled={accepting || declining}
          />
        </div>
      ) : (
        <Button
          label="View"
          bgcolor="#E5E7EB"
          color="black"
          height="40px"
          width="150px"
          padding="0.4rem 1rem"
          onClick={handleViewProfile}
        />
      )}
    </div>
  );
};

export default AppointmentCard;
