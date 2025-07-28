// // import React, { useState } from 'react';

// // const CompleteProfile: React.FC = () => {
// //   const [age, setAge] = useState('');
// //   const [gender, setGender] = useState('');
// //   const [contact, setContact] = useState('');
// //   const [medicalHistory, setMedicalHistory] = useState('');

// //   const handleSave = () => {
// //     const profileData = {
// //       age,
// //       gender,
// //       contact,
// //       medicalHistory
// //     };
// //     console.log('Profile Data:', profileData);
// //     // TODO: Replace with actual API call
// //     // axios.post('/api/profile', profileData)
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
// //       <div className="w-full max-w-3xl bg-white p-6 rounded-lg ">
// //         <h1 className="text-2xl font-bold text-center mb-2">Complete Your Profile</h1>
// //         <p className="text-center text-gray-600 mb-6">
// //           Please provide additional details to enhance your profile and ensure personalized care.
// //         </p>

// //         {/* Age */}
// //         <div className="mb-4">
// //           <label className="block text-gray-800 font-medium mb-1">Age</label>
// //           <input
// //             type="number"
// //             value={age}
// //             onChange={(e) => setAge(e.target.value)}
// //             placeholder="Enter your age"
// //             className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           />
// //         </div>

// //         {/* Gender */}
// //         <div className="mb-4">
// //           <label className="block text-gray-800 font-medium mb-1">Gender</label>
// //           <select
// //             value={gender}
// //             onChange={(e) => setGender(e.target.value)}
// //             className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           >
// //             <option value="">Select</option>
// //             <option value="male">Male</option>
// //             <option value="female">Female</option>
// //           </select>
// //         </div>

// //         {/* Contact Number */}
// //         <div className="mb-6">
// //           <label className="block text-gray-800 font-medium mb-1">Contact Number</label>
// //           <input
// //             type="text"
// //             value={contact}
// //             onChange={(e) => setContact(e.target.value)}
// //             placeholder="Enter your contact number"
// //             className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           />
// //         </div>

// //         {/* Medical History */}
// //         <div className="mb-2">
// //           <h2 className="text-lg font-semibold mb-1">Medical History</h2>
// //           <p className="text-gray-600 mb-3">
// //             Add your medical history to help doctors provide the best care. Include any allergies,
// //             existing conditions, and current medications.
// //           </p>
// //         </div>

// //         {/* Buttons */}
// //         <div className="flex flex-col items-center space-y-4">
// //           <button
// //             onClick={() => alert('Add medical history logic')}
// //             className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-300 transition"
// //           >
// //             Add Medical History
// //           </button><br></br>
// //           <button
// //             onClick={handleSave}
// //             className="bg-blue-400 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-500 transition"
// //           >
// //             Save Profile
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CompleteProfile;




// import React, { useState } from 'react';
// import Button from '../components/Button';

// const CompleteProfile = () => {
//   const [formData, setFormData] = useState({
//     age: '',
//     gender: '',
//     contactNumber: '',
//     medicalHistory: '',
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/profile', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) throw new Error('Submission failed');
//       alert('Profile saved successfully!');
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-start p-5 xl:px-40 w-full min-h-screen bg-gray-50">
//       <form onSubmit={handleSubmit} className="flex flex-col items-start w-full max-w-[960px] gap-4">
//         {/* Header */}
//         <div className="w-full text-center px-4 pt-5 pb-3">
//          <h2 className="w-[928px] h-[35px] font-inter font-bold text-[28px] leading-[35px] text-[#121417] text-center self-stretch">
//   Complete Your Profile
// </h2>
//         </div>

//         {/* Subtext */}
//         <div className="w-full text-center px-4">
//           <p className="w-[928px] h-[24px] font-inter font-normal text-[16px] leading-[24px] text-[#121417] text-center self-stretch">
//   Please provide additional details to enhance your profile and ensure personalized care.
// </p>

//         </div>

//         {/* Age */}
//       <div className="flex flex-wrap items-end content-start p-4 gap-4 w-[480px] max-w-[480px] h-[112px]">
//   <div className="flex flex-col items-start p-0 w-[448px] min-w-[160px] h-[88px] flex-grow">
    
//     {/* Label */}
//     <div className="flex flex-col items-start pb-2 w-[448px] h-[32px] self-stretch">
//       <label
//         htmlFor="age"
//         className="w-[448px] h-[24px] font-inter font-medium text-[16px] leading-[24px] text-[#121417]"
//       >
//         Age
//       </label>
//     </div>

//     {/* Input */}
//     <div className="flex items-center px-[15px] w-[448px] h-[56px] bg-white border border-[#DBE0E6] rounded-[12px] self-stretch">
//       <input
//         id="age"
//         type="number"
//         placeholder="Enter your age"
//         className="w-full h-full font-inter font-normal text-[16px] leading-[24px] text-[#637587] bg-transparent focus:outline-none"
//       />
//     </div>
//   </div>
// </div>

//         {/* Gender */}
//        <div className="flex flex-wrap items-end content-start p-4 gap-4 w-[480px] max-w-[480px] h-[112px]">
//   <div className="flex flex-col items-start p-0 w-[448px] min-w-[160px] h-[88px] flex-grow">

//     {/* Label */}
//     <div className="flex flex-col items-start pb-2 w-[448px] h-[32px] self-stretch">
//       <label
//         htmlFor="gender"
//         className="w-[448px] h-[24px] font-inter font-medium text-[16px] leading-[24px] text-[#121417]"
//       >
//         Gender
//       </label>
//     </div>

//     {/* Select Box */}
//     <div className="relative w-[448px] h-[56px] self-stretch">
//       <select
//         id="gender"
//         className="w-full h-full appearance-none bg-white border border-[#DBE0E6] text-[#121417] text-[16px] leading-[24px] font-normal px-4 pr-10 rounded-[12px] focus:outline-none font-inter"
//       >
//         <option value="">Select your gender</option>
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//       </select>

//       {/* Custom Dropdown Icon */}
//       <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#637587]">
//         ▼
//       </div>
//     </div>

//   </div>
// </div>

//         {/* Contact Number */}
//         <div className="flex flex-wrap items-end content-start p-4 gap-4 w-[480px] max-w-[480px] h-[112px]">
//   <div className="flex flex-col items-start p-0 w-[448px] min-w-[160px] h-[88px] flex-grow">

//     {/* Label */}
//     <div className="flex flex-col items-start pb-2 w-[448px] h-[32px] self-stretch">
//       <label
//         htmlFor="contact"
//         className="w-[448px] h-[24px] font-inter font-medium text-[16px] leading-[24px] text-[#121417]"
//       >
//         Contact Number
//       </label>
//     </div>

//     {/* Input Field */}
//     <div className="w-[448px] h-[56px] bg-white border border-[#DBE0E6] rounded-[12px] flex items-center px-[15px]">
//       <input
//         id="contact"
//         type="tel"
//         placeholder="Enter your contact number"
//         className="w-full h-[24px] font-inter text-[16px] leading-[24px] font-normal text-[#637587] placeholder-[#637587] bg-transparent focus:outline-none"
//       />
//     </div>

//   </div>
// </div>


//         {/* Medical History Title */}
//         <div className="px-4 pt-4">
//          <h2 className="w-[928px] h-[23px] font-inter font-bold text-[18px] leading-[23px] text-[#121417] self-stretch">
//   Medical History
// </h2>

//         </div>

//         {/* Medical History Subtext */}
//         <div className="px-4">
//           <p className="w-[928px] h-[48px] font-inter font-normal text-[16px] leading-[24px] text-[#121417] self-stretch">
//   Add your medical history to help doctors provide the best care. Include any allergies, existing conditions, and current medications.
// </p>

//         </div>

//         {/* Add Medical History Button */}
//       <div className="flex flex-row justify-center items-start px-4 py-3 w-[960px] h-[64px]">
//   <Button
//     label="Add Medical History"
//     className="flex flex-row justify-center items-center px-4 h-10 w-[171px] min-w-[84px] max-w-[480px] bg-[#F0F2F5] rounded-[12px] text-[#121417] text-[14px] font-bold text-center"
//   />
// </div>


//         {/* Save Button */}
//      <div className="flex flex-row justify-center items-start px-4 py-3 w-[960px] h-[64px]">
//   <Button
//     label="Save Profile"
//     className="flex flex-row justify-center items-center px-4 h-10 w-[114px] min-w-[84px] max-w-[480px] bg-[#94C2F0] rounded-[12px] text-[#121417] text-[14px] font-bold text-center"
//   />
// </div>

//       </form>
//     </div>
//   );
// };

// export default CompleteProfile;




import React from 'react';
import Button from '../components/Button'; // Adjust the path as needed
import DashboardHeader from '../components/DashboardHeader';

const CompleteProfile = () => {
  return (<>
  <DashboardHeader/>
    <div className="flex justify-center items-start px-40 py-5 w-full min-h-screen " >
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
              placeholder="Enter your age"
              className="w-full h-[56px] px-4 border border-[#DBE0E6] rounded-[12px] text-[#637587] placeholder:text-[#637587] bg-white"
            />
          </div>
        </div>

        {/* Gender Field */}
        <div className="flex flex-wrap items-end content-start gap-4 px-4 py-3 max-w-[480px] w-full">
          <div className="flex flex-col w-[448px]">
            <label className="text-[16px] font-medium text-[#121417] mb-2">Gender</label>
            <select className="w-full h-[56px] px-4 border border-[#DBE0E6] rounded-[12px] text-[#121417] bg-white">
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Contact Number */}
        <div className="flex flex-wrap items-end content-start gap-4 px-4 py-3 max-w-[480px] w-full">
          <div className="flex flex-col w-[448px]">
            <label className="text-[16px] font-medium text-[#121417] mb-2">Contact Number</label>
            <input
              type="tel"
              placeholder="Enter your contact number"
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
            bgcolor="#F0F2F5"
            color="#121417"
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
            type="submit"
            label="Save Profile"
            bgcolor="#94C2F0"
            color="#121417"
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

