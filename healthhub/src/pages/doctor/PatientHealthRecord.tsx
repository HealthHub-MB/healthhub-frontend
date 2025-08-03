// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import DashboardHeader from '../../components/DashboardHeader';

// // interface DocumentData {
// //   name: string;
// //   uploadedDate: string;
// //   action: string;
// // }

// // interface PatientRecord {
// //   name: string;
// //   age: number;
// //   gender: string;
// //   contact: string;
// //   allergies: string;
// //   medications: string;
// //   conditions: string;
// //   pastProcedures: string;
// //   documents: DocumentData[];
// // }

// // const PatientHealthRecord: React.FC = () => {
// //   const [data, setData] = useState<PatientRecord | null>(null);
// //   const [loading, setLoading] = useState<boolean>(true);

// //   const patientId = 1; // Replace this with dynamic ID if needed

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const res = await axios.get<PatientRecord>(`http://localhost:8080/api/patients/record/${patientId}`);
// //         setData(res.data);
// //       } catch (err) {
// //         console.error('Error fetching patient record:', err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchData();
// //   }, []);

// //   if (loading) return <div className="text-center mt-8">Loading...</div>;
// //   if (!data) return <div className="text-center mt-8 text-red-500">Failed to load data.</div>;

// //   return (
// //     <>
// //     <DashboardHeader isDoctor={true} />
// //     <div className="w-[960px] mx-auto p-4 flex flex-col gap-6">
// //       {/* Header */}
// //       <div className="flex flex-col gap-3">
// //         <h1 className="text-[32px] font-bold text-[#121417]">Patient Health Record</h1>
// //         <p className="text-sm text-[#637887]">
// //           Review patient information, medical history, and documents.
// //         </p>
// //       </div>

// //       {/* Patient Info */}
// //       <div>
// //         <h2 className="text-lg font-bold text-[#121417] px-4 pb-2">Patient Information</h2>
// //         <div className="flex flex-wrap justify-between gap-6 border-t border-[#E6E8EB] p-4">
// //           <div className="w-[186px]">
// //             <p className="text-sm text-[#637887]">Name</p>
// //             <p className="text-sm text-[#121417]">{data.name}</p>
// //           </div>
// //           <div className="w-[718px]">
// //             <p className="text-sm text-[#637887]">Age</p>
// //             <p className="text-sm text-[#121417]">{data.age}</p>
// //           </div>
// //           <div className="w-[186px]">
// //             <p className="text-sm text-[#637887]">Gender</p>
// //             <p className="text-sm text-[#121417]">{data.gender}</p>
// //           </div>
// //           <div className="w-[718px]">
// //             <p className="text-sm text-[#637887]">Contact</p>
// //             <p className="text-sm text-[#121417]">{data.contact}</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Medical History */}
// //       <div>
// //         <h2 className="text-lg font-bold text-[#121417] px-4 pb-2">Medical History</h2>
// //         <div className="flex flex-wrap justify-between gap-6 border-t border-[#E6E8EB] p-4">
// //           <div className="w-[186px]">
// //             <p className="text-sm text-[#637887]">Allergies</p>
// //             <p className="text-sm text-[#121417]">{data.allergies}</p>
// //           </div>
// //           <div className="w-[718px]">
// //             <p className="text-sm text-[#637887]">Medications</p>
// //             <p className="text-sm text-[#121417]">{data.medications}</p>
// //           </div>
// //           <div className="w-[186px]">
// //             <p className="text-sm text-[#637887]">Conditions</p>
// //             <p className="text-sm text-[#121417]">{data.conditions}</p>
// //           </div>
// //           <div className="w-[718px]">
// //             <p className="text-sm text-[#637887]">Past Procedures</p>
// //             <p className="text-sm text-[#121417]">{data.pastProcedures}</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Documents */}
// //       <div>
// //         <h2 className="text-lg font-bold text-[#121417] px-4 pb-2">Documents</h2>
// //         <div className="bg-white border border-[#DBE0E6] rounded-xl overflow-hidden">
// //           <div className="flex px-4 py-3 font-medium text-sm text-[#121417]">
// //             <div className="w-[352px]">Document Name</div>
// //             <div className="w-[352px]">Uploaded Date</div>
// //             <div className="w-[222px] text-[#637887]">Actions</div>
// //           </div>

// //           {data.documents.map((doc, index) => (
// //             <div key={index} className="flex px-4 py-3 border-t border-[#E6E8EB] text-sm">
// //               <div className="w-[352px] text-[#121417]">{doc.name}</div>
// //               <div className="w-[352px] text-[#637887]">{doc.uploadedDate}</div>
// //               <div className="w-[222px] font-bold text-[#637887] cursor-pointer">
// //                 {doc.action}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //     </>
// //   );
// // };

// // export default PatientHealthRecord;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import DashboardHeader from '../../components/DashboardHeader';
// import { useParams } from 'react-router-dom';

// interface MedicalHistory {
//   condition: string;
//   allergies: string;
//   medications: string[];
// }

// interface PatientData {
//   fullName: string;
//   age: number;
//   gender: string;
//   contactNumber: string;
//   medicalHistory: MedicalHistory;
// }

// const PatientHealthRecord: React.FC = () => {
//   const [data, setData] = useState<PatientData | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   const {patientId} = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`http://localhost:8080/api/doctors/patients/${patientId}/profile`);
//         setData(res.data.data); // note: .data.data
//       } catch (err) {
//         console.error('Error fetching patient record:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [patientId]);

//   if (loading) return <div className="text-center mt-8">Loading...</div>;
//   if (!data) return <div className="text-center mt-8 text-red-500">Failed to load data.</div>;

//   return (
//     <>
//       <DashboardHeader isDoctor={true} />
//       <div className="w-[960px] mx-auto p-4 flex flex-col gap-6">
//         <div className="flex flex-col gap-3">
//           <h1 className="text-[32px] font-bold text-[#121417]">Patient Health Record</h1>
//           <p className="text-sm text-[#637887]">Review patient information, medical history.</p>
//         </div>

//         {/* Patient Info */}
//         <div>
//           <h2 className="text-lg font-bold text-[#121417] px-4 pb-2">Patient Information</h2>
//           <div className="flex flex-wrap justify-between gap-6 border-t border-[#E6E8EB] p-4">
//             <div className="w-[186px]">
//               <p className="text-sm text-[#637887]">Name</p>
//               <p className="text-sm text-[#121417]">{data.fullName}</p>
//             </div>
//             <div className="w-[718px]">
//               <p className="text-sm text-[#637887]">Age</p>
//               <p className="text-sm text-[#121417]">{data.age}</p>
//             </div>
//             <div className="w-[186px]">
//               <p className="text-sm text-[#637887]">Gender</p>
//               <p className="text-sm text-[#121417]">{data.gender}</p>
//             </div>
//             <div className="w-[718px]">
//               <p className="text-sm text-[#637887]">Contact</p>
//               <p className="text-sm text-[#121417]">{data.contactNumber}</p>
//             </div>
//           </div>
//         </div>

//         {/* Medical History */}
//         <div>
//           <h2 className="text-lg font-bold text-[#121417] px-4 pb-2">Medical History</h2>
//           <div className="flex flex-wrap justify-between gap-6 border-t border-[#E6E8EB] p-4">
//             <div className="w-[186px]">
//               <p className="text-sm text-[#637887]">Allergies</p>
//               <p className="text-sm text-[#121417]">{data.medicalHistory?.allergies || 'N/A'}</p>
//             </div>
//             <div className="w-[718px]">
//               <p className="text-sm text-[#637887]">Medications</p>
//               <p className="text-sm text-[#121417]">
//                 {data.medicalHistory?.medications.length
//                   ? data.medicalHistory.medications.join(', ')
//                   : 'None'}
//               </p>
//             </div>
//             <div className="w-[186px]">
//               <p className="text-sm text-[#637887]">Conditions</p>
//               <p className="text-sm text-[#121417]">{data.medicalHistory?.condition || 'N/A'}</p>
//             </div>
//             <div className="w-[718px]">
//               <p className="text-sm text-[#637887]">Past Procedures</p>
//               <p className="text-sm text-[#121417]">N/A</p> {/* Placeholder until backend includes it */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PatientHealthRecord;



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DashboardHeader from "../../components/DashboardHeader";

interface MedicalHistory {
  condition: string;
  allergies: string;
  medications: string[];
}

interface PatientData {
  fullName: string;
  age: number;
  gender: string;
  contactNumber: string;
  medicalHistory: MedicalHistory;
}

const PatientHealthRecord: React.FC = () => {
  const { patientId } = useParams();
  const [data, setData] = useState<PatientData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/doctors/patients/${patientId}/profile`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setData(res.data.data);
      } catch (err) {
        console.error("Error fetching patient record:", err);
      } finally {
        setLoading(false);
      }
    };

    if (patientId) fetchPatient();
  }, [patientId]);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (!data) return <div className="text-center mt-8 text-red-500">Failed to load data.</div>;

  return (
    <>
      <DashboardHeader isDoctor={true} />
      <div className="w-[960px] mx-auto p-4 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-[32px] font-bold text-[#121417]">Patient Health Record</h1>
          <p className="text-sm text-[#637887]">Review patient information, medical history.</p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#121417] px-4 pb-2">Patient Information</h2>
          <div className="flex flex-wrap justify-between gap-6 border-t border-[#E6E8EB] p-4">
            <div className="w-[186px]">
              <p className="text-sm text-[#637887]">Name</p>
              <p className="text-sm text-[#121417]">{data.fullName}</p>
            </div>
            <div className="w-[718px]">
              <p className="text-sm text-[#637887]">Age</p>
              <p className="text-sm text-[#121417]">{data.age}</p>
            </div>
            <div className="w-[186px]">
              <p className="text-sm text-[#637887]">Gender</p>
              <p className="text-sm text-[#121417]">{data.gender}</p>
            </div>
            <div className="w-[718px]">
              <p className="text-sm text-[#637887]">Contact</p>
              <p className="text-sm text-[#121417]">{data.contactNumber}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#121417] px-4 pb-2">Medical History</h2>
          <div className="flex flex-wrap justify-between gap-6 border-t border-[#E6E8EB] p-4">
            <div className="w-[186px]">
              <p className="text-sm text-[#637887]">Allergies</p>
              <p className="text-sm text-[#121417]">{data.medicalHistory?.allergies || "N/A"}</p>
            </div>
            <div className="w-[718px]">
              <p className="text-sm text-[#637887]">Medications</p>
              <p className="text-sm text-[#121417]">
                {data.medicalHistory?.medications?.length
                  ? data.medicalHistory.medications.join(", ")
                  : "None"}
              </p>
            </div>
            <div className="w-[186px]">
              <p className="text-sm text-[#637887]">Conditions</p>
              <p className="text-sm text-[#121417]">{data.medicalHistory?.condition || "N/A"}</p>
            </div>
            <div className="w-[718px]">
              <p className="text-sm text-[#637887]">Past Procedures</p>
              <p className="text-sm text-[#121417]">N/A</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientHealthRecord;
