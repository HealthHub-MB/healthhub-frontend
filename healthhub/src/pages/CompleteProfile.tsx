// import React, { useState } from 'react';
// import Button from '../components/Button'; // Adjust the path as needed
// import DashboardHeader from '../components/DashboardHeader';
// import { useNavigate } from 'react-router-dom';
// import Colors from '../constants/colorConstants';
// import axios from 'axios';

// const CompleteProfile = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     age: '',
//     gender: '',
//     contactNumber: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async () => {
//     try {
//     //  const userId = Number(localStorage.getItem("userid")); // assuming userId is stored after login
//     //   if (!userId) {
//     //     alert("User not logged in");
//     //     return;

//     const userIdRaw = localStorage.getItem("userid");
// console.log("Raw userid from localStorage:", userIdRaw);

// const userId = Number(userIdRaw);
// if (!userId) {
//   alert("User not logged in");
//   return;
// }
//       }

//       const dataToSend = {
//        userId,
//         age: Number(formData.age),
//         gender: formData.gender,
//         contactNumber: formData.contactNumber,
//       };
// const token = localStorage.getItem('token')
//       const response = await axios.post(`http://localhost:8080/api/patients/${userId}/profile`, dataToSend,{
//          headers:{'Authorization' : `Bearer ${token}`,"Content-Type":'application/json'}
//       });
//       console.log("Patient profile saved:", response.data);
//       alert("Profile saved successfully!");
//       // Optionally navigate or update UI
//     } catch (error) {
//       console.error("Error saving patient profile:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <>
//       <DashboardHeader />
//       <div className="flex justify-center items-start px-40 py-5 w-full min-h-screen">
//         <div className="flex flex-col items-start w-[960px] max-w-[960px] h-full">
//           {/* Title */}
//           <div className="flex flex-col items-center px-4 pt-5 pb-3 w-full">
//             <h1 className="text-[28px] font-bold leading-[35px] text-center text-[#121417] w-full">
//               Complete Your Profile
//             </h1>
//           </div>

//           {/* Subtitle */}
//           <div className="flex flex-col items-center px-4 pb-3 w-full">
//             <p className="text-[16px] font-normal leading-[24px] text-center text-[#121417] w-full">
//               Please provide additional details to enhance your profile and ensure personalized care.
//             </p>
//           </div>

//           {/* Age Field */}
//           <div className="flex flex-wrap items-end content-start gap-4 px-4 py-3 max-w-[480px] w-full">
//             <div className="flex flex-col w-[448px]">
//               <label className="text-[16px] font-medium text-[#121417] mb-2">Age</label>
//               <input
//                 type="number"
//                 name="age"
//                 placeholder="Enter your age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 className="w-full h-[56px] px-4 border border-[#DBE0E6] rounded-[12px] text-[#637587] placeholder:text-[#637587] bg-white"
//               />
//             </div>
//           </div>

//           {/* Gender Field */}
//           <div className="flex flex-wrap items-end content-start gap-4 px-4 py-3 max-w-[480px] w-full">
//             <div className="flex flex-col w-[448px]">
//               <label className="text-[16px] font-medium text-[#121417] mb-2">Gender</label>
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 className="w-full h-[56px] px-4 border border-[#DBE0E6] rounded-[12px] text-[#121417] bg-white"
//               >
//                 <option value="">Select your gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>
//           </div>

//           {/* Contact Number */}
//           <div className="flex flex-wrap items-end content-start gap-4 px-4 py-3 max-w-[480px] w-full">
//             <div className="flex flex-col w-[448px]">
//               <label className="text-[16px] font-medium text-[#121417] mb-2">Contact Number</label>
//               <input
//                 type="tel"
//                 name="contactNumber"
//                 placeholder="Enter your contact number"
//                 value={formData.contactNumber}
//                 onChange={handleChange}
//                 className="w-full h-[56px] px-4 border border-[#DBE0E6] rounded-[12px] text-[#637587] placeholder:text-[#637587] bg-white"
//               />
//             </div>
//           </div>

//           {/* Medical History Header */}
//           <div className="flex flex-col items-start px-4 pt-4 pb-2 w-full">
//             <h2 className="text-[18px] font-bold text-[#121417]">Medical History</h2>
//           </div>

//           {/* Medical History Description */}
//           <div className="flex flex-col items-start px-4 pb-3 w-full">
//             <p className="text-[16px] font-normal text-[#121417]">
//               Add your medical history to help doctors provide the best care. Include any allergies, existing conditions, and current medications.
//             </p>
//           </div>

//           {/* Add Medical History Button */}
//           <div className="flex justify-center items-start px-4 py-3 w-full">
//             <Button
//               label="Add Medical History"
//               onClick={() => navigate('/addmedicalhistory')}
//               bgcolor={Colors.gray}
//               color={Colors.black}
//               textSize="14px"
//               width="171px"
//               height="40px"
//               padding="0px 16px"
//               className="rounded-[12px] font-bold"
//             />
//           </div>

//           {/* Save Profile Button */}
//           <div className="flex justify-center items-start px-4 py-3 w-full">
//             <Button
//               type="button"
//               label="Save Profile"
//               onClick={handleSubmit}
//               bgcolor={Colors.blue}
//               color={Colors.black}
//               textSize="14px"
//               width="114px"
//               height="40px"
//               padding="0px 16px"
//               className="rounded-[12px] font-bold"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CompleteProfile;


import React, { useState } from 'react';
import Button from '../components/Button';
import DashboardHeader from '../components/DashboardHeader';
import { useNavigate } from 'react-router-dom';
import Colors from '../constants/colorConstants';
import axios from 'axios';

const CompleteProfile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    contactNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveProfile = async (): Promise<boolean> => {
    try {
      const userIdRaw = localStorage.getItem("userid");
      const token = localStorage.getItem("token");

      console.log("userId =", userIdRaw);
      console.log("token =", token);

      if (!userIdRaw || isNaN(Number(userIdRaw)) || !token) {
        alert("User not logged in");
        return false;
      }

      const userId = Number(userIdRaw);

      const dataToSend = {
        userId,
        age: Number(formData.age),
        gender: formData.gender,
        contactNumber: formData.contactNumber,
      };

      console.log("id",userId)
      const response = await axios.post(
        //`http://localhost:8080/api/patients/${userId}/profile`,
          'http://localhost:8080/api/patients/profile',
        dataToSend,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      localStorage.setItem('patientId', response.data?.data?.id)

      console.log("Profile saved successfully:", response.data);
      return true;

    } catch (error) {
      console.error("Error saving patient profile:", error);
      alert("Something went wrong. Please try again.");
      return false;
    }
  };

  const handleAddMedicalHistory = async () => {
    const success = await saveProfile();
    if (success) {
      navigate('/addMedicalHistory');
    }
  };

  const handleSaveProfile = async () => {
    const success = await saveProfile();
    if (success) {
      alert("Profile saved successfully!");
      navigate('/patient-dashboard'); // Adjust route as needed
    }
  };

  return (
    <>
      <DashboardHeader />
      <div className="flex justify-center items-start px-40 py-5 w-full min-h-screen">
        <div className="flex flex-col items-start w-[960px] max-w-[960px] h-full">

          {/* Title */}
          <div className="flex flex-col items-center px-4 pt-5 pb-3 w-full">
            <h1 className="text-[28px] font-bold leading-[35px] text-center text-[#121417] w-full">
              Complete Your Profile
            </h1>
          </div>

          {/* Subtitle */}
          <div className="flex flex-col items-center px-4 pb-3 w-full">
            <p className="text-[16px] font-normal leading-[24px] text-center text-[#121417] w-full">
              Please provide additional details to enhance your profile and ensure personalized care.
            </p>
          </div>

          {/* Age Field */}
          <div className="flex flex-wrap items-end content-start gap-4 px-4 py-3 max-w-[480px] w-full">
            <div className="flex flex-col w-[448px]">
              <label className="text-[16px] font-medium text-[#121417] mb-2">Age</label>
              <input
                type="number"
                name="age"
                placeholder="Enter your age"
                value={formData.age}
                onChange={handleChange}
                className="w-full h-[56px] px-4 border border-[#DBE0E6] rounded-[12px] text-[#637587] placeholder:text-[#637587] bg-white"
              />
            </div>
          </div>

          {/* Gender Field */}
          <div className="flex flex-wrap items-end content-start gap-4 px-4 py-3 max-w-[480px] w-full">
            <div className="flex flex-col w-[448px]">
              <label className="text-[16px] font-medium text-[#121417] mb-2">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full h-[56px] px-4 border border-[#DBE0E6] rounded-[12px] text-[#121417] bg-white"
              >
                <option value="">Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Contact Number */}
          <div className="flex flex-wrap items-end content-start gap-4 px-4 py-3 max-w-[480px] w-full">
            <div className="flex flex-col w-[448px]">
              <label className="text-[16px] font-medium text-[#121417] mb-2">Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                placeholder="Enter your contact number"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full h-[56px] px-4 border border-[#DBE0E6] rounded-[12px] text-[#637587] placeholder:text-[#637587] bg-white"
              />
            </div>
          </div>

          {/* Medical History Header */}
          <div className="flex flex-col items-start px-4 pt-4 pb-2 w-full">
            <h2 className="text-[18px] font-bold text-[#121417]">Medical History</h2>
          </div>

          {/* Medical History Description */}
          <div className="flex flex-col items-start px-4 pb-3 w-full">
            <p className="text-[16px] font-normal text-[#121417]">
              Add your medical history to help doctors provide the best care. Include any allergies, existing conditions, and current medications.
            </p>
          </div>

          {/* Add Medical History Button */}
          <div className="flex justify-center items-start px-4 py-3 w-full">
            <Button
              label="Add Medical History"
              onClick={handleAddMedicalHistory}
              bgcolor={Colors.gray}
              color={Colors.black}
              textSize="14px"
              width="171px"
              height="40px"
              padding="0px 16px"
              className="rounded-[12px] font-bold"
            />
          </div>

          {/* Save Profile Button */}
          <div className="flex justify-center items-start px-4 py-3 w-full">
            <Button
              type="button"
              label="Save Profile"
              onClick={handleSaveProfile}
              bgcolor={Colors.blue}
              color={Colors.black}
              textSize="14px"
              width="114px"
              height="40px"
              padding="0px 16px"
              className="rounded-[12px] font-bold"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteProfile;


