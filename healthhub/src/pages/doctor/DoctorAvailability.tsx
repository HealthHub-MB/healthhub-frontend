// // // import React, { useEffect, useState } from "react";

// // // const DoctorAvailability = ({ availabilityData }) => {
// // //   const [selectedDate, setSelectedDate] = useState(null);
// // //   const [slotList, setSlotList] = useState([]);

// // //   // Set initial selected date to the first day if available
// // //   useEffect(() => {
// // //     if (availabilityData?.length > 0) {
// // //       setSelectedDate(availabilityData[0].date);
// // //       setSlotList(availabilityData[0].slots || []);
// // //     }
// // //   }, [availabilityData]);

// // //   const handleDateClick = (item) => {
// // //     setSelectedDate(item.date);
// // //     setSlotList(item.slots || []);
// // //   };

// // //   const handleSlotClick = (slot) => {
// // //     console.log("Slot selected:", slot);
// // //     // Here you might set a "chosenSlot" in state and highlight it, etc.
// // //   };

// // //   const handleRequestAppointment = () => {
// // //     console.log("Requesting appointment for:", selectedDate, slotList);
// // //     // Trigger your appointment booking logic here
// // //   };

// // //   return (
// // //     <div className="doctor-availability">
// // //       {/* Horizontal date navigation */}
// // //       <div className="availability-calendar" style={{ marginBottom: "16px", display: "flex", gap: "8px", overflowX: "auto" }}>
// // //         {availabilityData.map((item) => {
// // //           const isSelected = item.date === selectedDate;
// // //           return (
// // //             <button
// // //               key={item.date}
// // //               onClick={() => handleDateClick(item)}
// // //               style={{
// // //                 padding: "12px",
// // //                 minWidth: "80px",
// // //                 borderRadius: "4px",
// // //                 border: isSelected ? "2px solid #007bff" : "1px solid #ccc",
// // //                 background: isSelected ? "#e7f1ff" : "#fff",
// // //                 cursor: "pointer"
// // //               }}
// // //             >
// // //               <div style={{ fontSize: "14px", fontWeight: "bold" }}>
// // //                 {new Date(item.date).toLocaleDateString("en-US", { weekday: "short" })}
// // //               </div>
// // //               <div style={{ fontSize: "16px" }}>
// // //                 {new Date(item.date).getDate()}
// // //               </div>
// // //             </button>
// // //           );
// // //         })}
// // //       </div>

// // //       {/* Slot Selection */}
// // //       <div className="slot-selector" style={{ marginBottom: "24px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
// // //         {slotList.map((slot) => (
// // //           <button
// // //             key={slot.uuid}
// // //             onClick={() => handleSlotClick(slot)}
// // //             style={{
// // //               padding: "10px 16px",
// // //               border: "1px solid #007bff",
// // //               borderRadius: "4px",
// // //               background: "#fff",
// // //               cursor: "pointer"
// // //             }}
// // //           >
// // //             {slot.startTime.slice(0, 5)} — {slot.endTime.slice(0, 5)}
// // //           </button>
// // //         ))}
// // //         {slotList.length === 0 && <div>No available slots on this date.</div>}
// // //       </div>

// // //       {/* Request Button */}
// // //       <button
// // //         onClick={handleRequestAppointment}
// // //         className="request-appointment"
// // //         style={{
// // //           background: "#007bff",
// // //           color: "#fff",
// // //           padding: "14px 24px",
// // //           border: "none",
// // //           borderRadius: "4px",
// // //           fontSize: "16px",
// // //           cursor: "pointer"
// // //         }}
// // //       >
// // //         Request an Appointment
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default DoctorAvailability;



// // import React, { useEffect, useState } from "react";

// // const DoctorAvailability = ({ availabilityData }) => {
// //   const [selectedDate, setSelectedDate] = useState(null);
// //   const [slotList, setSlotList] = useState([]);

// //   // Sample mock availability data in the correct format
// //   const mockAvailabilityData = [
// //     {
// //       date: "2025-08-04",
// //       weekDay: "monday",
// //       slots: [
// //         { uuid: "1", startTime: "09:00", endTime: "09:30" },
// //         { uuid: "2", startTime: "09:30", endTime: "10:00" },
// //       ],
// //     },
// //     {
// //       date: "2025-08-05",
// //       weekDay: "tuesday",
// //       slots: [
// //         { uuid: "3", startTime: "11:00", endTime: "11:30" },
// //         { uuid: "4", startTime: "11:30", endTime: "12:00" },
// //       ],
// //     },
// //     {
// //       date: "2025-08-06",
// //       weekDay: "wednesday",
// //       slots: [],
// //     },
// //   ];

// //   const finalData =
// //     Array.isArray(availabilityData) && availabilityData.length > 0
// //       ? availabilityData
// //       : mockAvailabilityData;

// //   useEffect(() => {
// //     if (finalData.length > 0) {
// //       setSelectedDate(finalData[0].date);
// //       setSlotList(finalData[0].slots || []);
// //     }
// //   }, [availabilityData]);

// //   const handleDateClick = (item) => {
// //     setSelectedDate(item.date);
// //     setSlotList(item.slots || []);
// //   };

// //   const handleSlotClick = (slot) => {
// //     console.log("Slot selected:", slot);
// //   };

// //   const handleRequestAppointment = () => {
// //     console.log("Requesting appointment for:", selectedDate, slotList);
// //   };

// //   return (
// //     <div className="doctor-availability">
// //       {/* Date Navigation */}
// //       <div
// //         className="availability-calendar"
// //         style={{
// //           marginBottom: "16px",
// //           display: "flex",
// //           gap: "8px",
// //           overflowX: "auto",
// //         }}
// //       >
// //         {finalData.map((item) => {
// //           const isSelected = item.date === selectedDate;
// //           return (
// //             <button
// //               key={item.date}
// //               onClick={() => handleDateClick(item)}
// //               style={{
// //                 padding: "12px",
// //                 minWidth: "80px",
// //                 borderRadius: "4px",
// //                 border: isSelected ? "2px solid #007bff" : "1px solid #ccc",
// //                 background: isSelected ? "#e7f1ff" : "#fff",
// //                 cursor: "pointer",
// //               }}
// //             >
// //               <div style={{ fontSize: "14px", fontWeight: "bold" }}>
// //                 {new Date(item.date).toLocaleDateString("en-US", {
// //                   weekday: "short",
// //                 })}
// //               </div>
// //               <div style={{ fontSize: "16px" }}>
// //                 {new Date(item.date).getDate()}
// //               </div>
// //             </button>
// //           );
// //         })}
// //       </div>

// //       {/* Slot Selection */}
// //       <div
// //         className="slot-selector"
// //         style={{
// //           marginBottom: "24px",
// //           display: "flex",
// //           flexWrap: "wrap",
// //           gap: "12px",
// //         }}
// //       >
// //         {slotList.length > 0 ? (
// //           slotList.map((slot) => (
// //             <button
// //               key={slot.uuid}
// //               onClick={() => handleSlotClick(slot)}
// //               style={{
// //                 padding: "10px 16px",
// //                 border: "1px solid #007bff",
// //                 borderRadius: "4px",
// //                 background: "#fff",
// //                 cursor: "pointer",
// //               }}
// //             >
// //               {slot.startTime} — {slot.endTime}
// //             </button>
// //           ))
// //         ) : (
// //           <div>No available slots on this date.</div>
// //         )}
// //       </div>

// //       {/* Request Button */}
// //       <button
// //         onClick={handleRequestAppointment}
// //         className="request-appointment"
// //         style={{
// //           background: "#007bff",
// //           color: "#fff",
// //           padding: "14px 24px",
// //           border: "none",
// //           borderRadius: "4px",
// //           fontSize: "16px",
// //           cursor: "pointer",
// //         }}
// //       >
// //         Request an Appointment
// //       </button>
// //     </div>
// //   );
// // };

// // export default DoctorAvailability;


// import React from "react";

// const DoctorAvailability = ({ doctor }) => {
//   if (!doctor) return <div className="p-6">Loading...</div>;

//   return (
//     <div className="max-w-5xl mx-auto px-6 py-10">
//       {/* Breadcrumb */}
//       <div className="text-sm text-gray-500 mb-4">
//         <a href="#" className="hover:underline">Find a Doctor</a> /{" "}
//         <span className="text-gray-700 font-medium">{doctor.fullName}</span>
//       </div>

//       {/* Doctor Header */}
//       <div className="flex items-center gap-6">
//         <img
//           src={doctor.avatar || "/default-doctor.png"} // fallback image
//           alt={doctor.fullName}
//           className="w-20 h-20 rounded-full object-cover"
//         />
//         <div>
//           <h1 className="text-xl font-semibold text-gray-800">{doctor.fullName}</h1>
//           <p className="text-sm text-gray-600">{doctor.specialization}</p>
//           <p className="text-sm text-gray-500">{doctor.officeAddress}</p>
//         </div>
//       </div>

//       {/* About */}
//       <div className="mt-8">
//         <h2 className="text-lg font-semibold text-gray-800 mb-2">About</h2>
//         <p className="text-gray-700 leading-relaxed">{doctor.bio}</p>
//       </div>

//       {/* Contact Info */}
//       <div className="mt-10">
//         <h2 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <div>
//             <p className="text-sm text-gray-500">Phone</p>
//             <p className="text-base text-gray-800 font-medium">{doctor.phoneNumber}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Email</p>
//             <p className="text-base text-gray-800 font-medium">{doctor.email}</p>
//           </div>
//           <div className="sm:col-span-2">
//             <p className="text-sm text-gray-500">Address</p>
//             <p className="text-base text-gray-800 font-medium">{doctor.officeAddress}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorAvailability;



import React, { useEffect, useState } from "react";
import axios from "axios";

const DoctorProfilePage = () => {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/doctors/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setDoctor(res.data.data);
      } catch (err) {
        console.error("Error fetching doctor profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, []);

  if (loading) return <div className="p-6">Loading profile...</div>;
  if (!doctor) return <div className="p-6 text-red-600">Failed to load profile.</div>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
     

      {/* Header */}
      <div className="flex items-center gap-6">
        <img
          src={doctor.avatar || "/default-doctor.png"}
          alt={doctor.fullName}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Dr. {doctor.fullName} {doctor.gender ? `(${doctor.gender})` : ""}
          </h1>
          <p className="text-sm text-gray-600">{doctor.specialization}</p>
          <p className="text-sm text-gray-500">{doctor.officeAddress}</p>
        </div>
      </div>

      {/* About */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">About</h2>
        <p className="text-gray-700 leading-relaxed">
          {doctor.bio || "No biography provided."}
        </p>
      </div>

      {/* Contact Info */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="text-base text-gray-800 font-medium">
              {doctor.phoneNumber || "Not available"}
            </p>
          </div>
          
          <div className="sm:col-span-2">
            <p className="text-sm text-gray-500">Address</p>
            <p className="text-base text-gray-800 font-medium">
              {doctor.officeAddress || "Not available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfilePage;
