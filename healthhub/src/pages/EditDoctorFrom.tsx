// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import Button from '../components/Button';
// // import Colors from '../constants/colorConstants';
// // import DashboardHeader from '../components/DashboardHeader';


// // interface ProfileFormData {
// //   fullName: string;
// //   gender: string;
// //   phoneNumber: string;
// //   specialization:string;
// //   officeAddress:string;
// //   bio:string;
// // }

// // const EditDoctorForm: React.FC = () => {
// //   const [formData, setFormData] = useState<ProfileFormData>({
// //     fullName: '',
// //     gender: '',
// //     phoneNumber: '',
// //     specialization: '',
// //     officeAddress: '',
// //     bio: '',
// //   });

// //   const [formDrData, setFormDrData] = useState({
// //     fullName: '',
// //     gender: '',
// //     phoneNumber: '',
// //     specialization: '',
// //     officeAddress: '',
// //     bio: '',
// //     });

// //   const handleChange = (field: keyof ProfileFormData, value: string) => {
// //     setFormData({ ...formData, [field]: value });
// //   };




// // const token = localStorage.getItem('token')

// //   useEffect(()=>{
// //     axios.get('http://localhost:8080/api/doctors/profile',{
// //       headers:{
// //         Authorization:`Bearer ${token}`
// //       }
// //     }).then((res)=>{
// //       console.log("res",res)
// //       const{specialization,gender,officeAddress,phoneNumber,bio}=res?.data?.data || {}
      
// //      // setFormDrData({fullName,specialization,gender,officeAddress,phoneNumber,bio})
// //      setFormDrData({
// //   fullName: res?.data?.data .userId?.fullName || '',
// //   specialization: specialization || '',
// //   gender: gender || '',
// //   officeAddress: officeAddress || '',
// //   phoneNumber: phoneNumber || '',
// //   bio: bio || '',
// // });
// //     })
// //     .catch((err)=>{
// //    console.log(err)
// //     })

// //   },[])

// //   const handleSubmit = async () => {
// //     try {
// //       await axios.put('/api/user/profile', formData);
// //       alert('Medical history updated successfully!');
// //     } catch (error) {
// //       console.error('Error updating profile:', error);
// //       alert('Failed to update medical history.');
// //     }
// //   };

// //   return (
// //     <>
// //       <DashboardHeader isDoctor={true}/>
// //       <div className="flex justify-center items-start px-40 py-5 w-full min-h-screen">
// //         <div className="flex flex-col w-[960px] max-w-[960px]">
// //           <h1 className="text-[28px] font-bold text-center text-[#121417] mb-2">My Profile</h1>
// //           <p className="text-[16px] font-bold text-center text-[#121417] mb-4">Personal Information</p>

// //           {/* Name */}
// //           <div className="mb-4" style={{ width: '480px', height: '112px' }}>
// //             <label className="block mb-2 font-medium">Full Name</label>
// //             <input
// //               type="text"
// //               value={formDrData.fullName}
// //               onChange={(e) => handleChange('fullName', e.target.value)}
// //               placeholder="Enter your full name"
// //               className="w-full p-4 border border-[#DEE0E3] rounded-xl"
// //             />
// //           </div>

        
// //           {/* Gender */}
// //           <div className="mb-4" style={{ width: '480px', height: '112px' }}>
// //             <label className="block mb-2 font-medium">Gender</label>
// //             <select
// //               value={formDrData.gender}
// //               onChange={(e) => handleChange('gender', e.target.value)}
// //               className="w-full p-4 border border-[#DEE0E3] rounded-xl"
// //             >
// //               <option value="">Select your gender</option>
// //               <option value="Male">Male</option>
// //               <option value="Female">Female</option>
// //               <option value="Other">Other</option>
// //             </select>
// //           </div>

// //           {/* Contact Number */}
// //           <div className="mb-4" style={{ width: '480px', height: '112px' }}>
// //             <label className="block mb-2 font-medium">Contact Number</label>
// //             <input
// //               type="text"
// //               value={formDrData.phoneNumber}
// //               onChange={(e) => handleChange('phoneNumber', e.target.value)}
// //               placeholder="Enter your contact number"
// //               className="w-full p-4 border border-[#DEE0E3] rounded-xl"
// //             />
// //           </div>

// //           {/* Specialization */}
// //           <div className="mb-4" style={{ width: '480px', height: '112px' }}>
// //             <label className="block mb-2 font-medium">Specialization</label>
// //             <textarea
// //               value={formDrData.specialization}
// //               onChange={(e) => handleChange('specialization', e.target.value)}
// //               placeholder="Describe your specialization"
// //               className="w-full p-4 border border-[#DEE0E3] rounded-xl"
// //             />
// //           </div>

// //         {/* Address */}
// //           <div className="mb-4" style={{ width: '480px', height: '112px' }}>
// //             <label className="block mb-2 font-medium">Address</label>
// //             <textarea
// //               value={formDrData.officeAddress}
// //               onChange={(e) => handleChange('officeAddress', e.target.value)}
// //               placeholder="enter your address"
// //               className="w-full p-4 border border-[#DEE0E3] rounded-xl"
// //             />
// //           </div>

// //             {/*bio */}
// //           <div className="mb-4" style={{ width: '480px', height: '112px' }}>
// //             <label className="block mb-2 font-medium">Bio/Instruction</label>
// //             <textarea
// //               value={formDrData.bio}
// //               onChange={(e) => handleChange('bio', e.target.value)}
// //               placeholder="update"
// //               className="w-full p-4 border border-[#DEE0E3] rounded-xl"
// //             />
// //           </div>
          
            
// //           {/* Cancel Button */}
// //          {/* Buttons - side by side in bottom right */}
// // <div className="flex justify-end gap-4 mt-6 self-end">
// //   <Button
// //     type="button"
// //     label="Cancel"
// //     onClick={() => console.log('Cancelled')}
// //     height="40px"
// //     width="160px"
// //     padding="0px 16px"
// //     bgcolor={Colors.gray}
// //     color="#121417"
// //     textSize="14px"
// //     className="rounded-lg font-bold"
// //   />
// //   <Button
// //     type="button"
// //     label="Save"
// //     onClick={handleSubmit}
// //     height="40px"
// //     width="160px"
// //     padding="0px 16px"
// //     bgcolor={Colors.blue}
// //     color="#ffffff"
// //     textSize="14px"
// //     className="rounded-lg font-bold"
// //   />
// // </div>

// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default EditDoctorForm;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Button from '../components/Button';
// import Colors from '../constants/colorConstants';
// import DashboardHeader from '../components/DashboardHeader';

// interface ProfileFormData {
//   fullName: string;
//   gender: string;
//   phoneNumber: string;
//   specialization: string;
//   officeAddress: string;
//   bio: string;
// }

// const EditDoctorForm: React.FC = () => {
//   const [formData, setFormData] = useState<ProfileFormData>({
//     fullName: '',
//     gender: '',
//     phoneNumber: '',
//     specialization: '',
//     officeAddress: '',
//     bio: '',
//   });

//   const [originalData, setOriginalData] = useState<ProfileFormData>(formData);
//   const [isEditing, setIsEditing] = useState<boolean>(false);
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     axios
//       .get('http://localhost:8080/api/doctors/profile', {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => {
//         const { specialization, gender, officeAddress, phoneNumber, bio } = res.data.data || {};
//         const fullName = res.data.data.userId?.fullName || '';
//         const fetchedData: ProfileFormData = {
//           fullName,
//           specialization: specialization || '',
//           gender: gender || '',
//           officeAddress: officeAddress || '',
//           phoneNumber: phoneNumber || '',
//           bio: bio || '',
//         };
//         setFormData(fetchedData);
//         setOriginalData(fetchedData);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   const handleChange = (field: keyof ProfileFormData, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSave = async () => {
//     try {
//       await axios.put('http://localhost:8080/api/doctors/profile', formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert('Profile updated successfully!');
//       setOriginalData(formData);
//       setIsEditing(false);
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       alert('Failed to update profile.');
//     }
//   };

//   const handleCancel = () => {
//     setFormData(originalData);
//     setIsEditing(false);
//   };

//   const renderInput = (
//     label: string,
//     field: keyof ProfileFormData,
//     type: 'text' | 'textarea' | 'select' = 'text',
//     options?: string[]
//   ) => (
//     <div className="mb-4 w-[480px]">
//       <label className="block mb-2 font-medium">{label}</label>
//       {isEditing ? (
//         type === 'textarea' ? (
//           <textarea
//             value={formData[field]}
//             onChange={(e) => handleChange(field, e.target.value)}
//             className="w-full p-4 border border-gray-300 rounded-xl"
//           />
//         ) : type === 'select' ? (
//           <select
//             value={formData[field]}
//             onChange={(e) => handleChange(field, e.target.value)}
//             className="w-full p-4 border border-gray-300 rounded-xl"
//           >
//             <option value="">Select your gender</option>
//             {options?.map((opt) => (
//               <option key={opt} value={opt}>
//                 {opt}
//               </option>
//             ))}
//           </select>
//         ) : (
//           <input
//             type="text"
//             value={formData[field]}
//             onChange={(e) => handleChange(field, e.target.value)}
//             className="w-full p-4 border border-gray-300 rounded-xl"
//           />
//         )
//       ) : (
//         <div className="p-4 border border-gray-200 rounded-xl text-gray-800 bg-gray-50">
//           {formData[field] || 'Not provided'}
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <>
//       <DashboardHeader isDoctor={true} />
//       <div className="flex justify-center items-start px-8 py-10 w-full min-h-screen bg-white">
//         <div className="flex flex-col w-full max-w-[960px] relative">
//           <h1 className="text-2xl font-bold text-[#121417] mb-2 text-center">My Profile</h1>
//           <p className="text-base font-medium text-[#121417] mb-6 text-center">Personal Information</p>

//           {renderInput('Full Name', 'fullName')}
//           {renderInput('Gender', 'gender', 'select', ['Male', 'Female', 'Other'])}
//           {renderInput('Contact Number', 'phoneNumber')}
//           {renderInput('Specialization', 'specialization', 'textarea')}
//           {renderInput('Address', 'officeAddress', 'textarea')}
//           {renderInput('Bio/Instruction', 'bio', 'textarea')}

//           {/* Bottom-right buttons */}
//           <div className="flex justify-end mt-8">
//             {!isEditing ? (
//               <Button
//                 type="button"
//                 label="Edit"
//                 onClick={() => setIsEditing(true)}
//                 height="40px"
//                 width="160px"
//                 padding="0px 16px"
//                 bgcolor={Colors.blue}
//                 color="#ffffff"
//                 textSize="14px"
//                 className="rounded-lg font-bold"
//               />
//             ) : (
//               <div className="flex gap-4">
//                 <Button
//                   type="button"
//                   label="Cancel"
//                   onClick={handleCancel}
//                   height="40px"
//                   width="160px"
//                   padding="0px 16px"
//                   bgcolor={Colors.gray}
//                   color="#121417"
//                   textSize="14px"
//                   className="rounded-lg font-bold"
//                 />
//                 <Button
//                   type="button"
//                   label="Save"
//                   onClick={handleSave}
//                   height="40px"
//                   width="160px"
//                   padding="0px 16px"
//                   bgcolor={Colors.blue}
//                   color="#ffffff"
//                   textSize="14px"
//                   className="rounded-lg font-bold"
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EditDoctorForm;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import Colors from '../constants/colorConstants';
import DashboardHeader from '../components/DashboardHeader';

interface ProfileFormData {
  fullName: string;
  gender: string;
  phoneNumber: string;
  specialization: string;
  officeAddress: string;
  bio: string;
}

const EditDoctorForm: React.FC = () => {
  const [formData, setFormData] = useState<ProfileFormData>({
    fullName: '',
    gender: '',
    phoneNumber: '',
    specialization: '',
    officeAddress: '',
    bio: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/doctors/profile', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const data = res.data.data || {};
        setFormData({
          fullName: data.userId?.fullName || '',
          gender: data.gender || '',
          phoneNumber: data.phoneNumber || '',
          specialization: data.specialization || '',
          officeAddress: data.officeAddress || '',
          bio: data.bio || '',
        });
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (field: keyof ProfileFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      await axios.put('http://localhost:8080/api/doctors/profile', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Profile updated!');
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      alert('Failed to update profile.');
    }
  };

  return (
    <>
      <DashboardHeader isDoctor={true} />
      <div className="flex justify-center px-6 py-10 min-h-screen bg-white">
        <div className="w-full max-w-[960px] flex flex-col">
          <h1 className="text-2xl font-bold mb-2 text-center">My Profile</h1>
          <p className="text-base font-medium mb-6 text-center">Personal Information</p>

          {/* Full Name */}
          <div className="mb-4 w-[480px]">
            <label className="block mb-1 font-medium">Full Name</label>
            {isEditing ? (
              <input
                className="w-full p-3 border border-gray-300 rounded-xl"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
              />
            ) : (
              <div className="p-3 border border-gray-200 rounded-xl">
                {formData.fullName}
              </div>
            )}
          </div>

          {/* Gender */}
          <div className="mb-4 w-[480px]">
            <label className="block mb-1 font-medium">Gender</label>
            {isEditing ? (
              <select
                className="w-full p-3 border border-gray-300 rounded-xl"
                value={formData.gender}
                onChange={(e) => handleChange('gender', e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <div className="p-3 border border-gray-200 rounded-xl">
                {formData.gender}
              </div>
            )}
          </div>

          {/* Phone Number */}
          <div className="mb-4 w-[480px]">
            <label className="block mb-1 font-medium">Contact Number</label>
            {isEditing ? (
              <input
                className="w-full p-3 border border-gray-300 rounded-xl"
                value={formData.phoneNumber}
                onChange={(e) => handleChange('phoneNumber', e.target.value)}
              />
            ) : (
              <div className="p-3 border border-gray-200  rounded-xl">
                {formData.phoneNumber}
              </div>
            )}
          </div>

          {/* Specialization */}
          <div className="mb-4 w-[480px]">
            <label className="block mb-1 font-medium">Specialization</label>
            {isEditing ? (
              <textarea
                className="w-full p-3 border border-gray-300 rounded-xl"
                value={formData.specialization}
                onChange={(e) => handleChange('specialization', e.target.value)}
              />
            ) : (
              <div className="p-3 border border-gray-200 rounded-xl">
                {formData.specialization}
              </div>
            )}
          </div>

          {/* Address */}
          <div className="mb-4 w-[480px]">
            <label className="block mb-1 font-medium">Address</label>
            {isEditing ? (
              <textarea
                className="w-full p-3 border border-gray-300 rounded-xl"
                value={formData.officeAddress}
                onChange={(e) => handleChange('officeAddress', e.target.value)}
              />
            ) : (
              <div className="p-3 border border-gray-200 rounded-xl">
                {formData.officeAddress}
              </div>
            )}
          </div>

          {/* Bio */}
          <div className="mb-4 w-[480px]">
            <label className="block mb-1 font-medium">Bio / Instruction</label>
            {isEditing ? (
              <textarea
                className="w-full p-3 border border-gray-300 rounded-xl"
                value={formData.bio}
                onChange={(e) => handleChange('bio', e.target.value)}
              />
            ) : (
              <div className="p-3 border border-gray-200 rounded-xl">
                {formData.bio}
              </div>
            )}
          </div>

          {/* Bottom-right buttons */}
          <div className="flex justify-end gap-4 mt-8">
            {!isEditing ? (
              <Button
                label="Edit"
                onClick={() => setIsEditing(true)}
                width="140px"
                height="40px"
                bgcolor={Colors.blue}
                color="#ffffff"
                textSize="14px"
                className="rounded-lg font-semibold"
              />
            ) : (
              <>
                <Button
                  label="Cancel"
                  onClick={() => setIsEditing(false)}
                  width="140px"
                  height="40px"
                  bgcolor={Colors.gray}
                  color="#121417"
                  textSize="14px"
                  className="rounded-lg font-semibold"
                />
                <Button
                  label="Save"
                  onClick={handleSave}
                  width="140px"
                  height="40px"
                  bgcolor={Colors.blue}
                  color="#ffffff"
                  textSize="14px"
                  className="rounded-lg font-semibold"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditDoctorForm;
