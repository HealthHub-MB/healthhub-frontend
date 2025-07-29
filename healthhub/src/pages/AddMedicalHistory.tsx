import React, { useState } from 'react';
import Button from '../components/Button'; // Adjust path as needed
import axios from 'axios'; // You must install axios with: npm install axios
import DashboardHeader from '../components/DashboardHeader'
import Colors from '../constants/colorConstants';

const AddMedicalHistory: React.FC = () => {
  const [medications, setMedications] = useState([
    { name: '', dosage: '', frequency: '', reason: '' },
  ]);
  const [conditions, setConditions] = useState('');
  const [allergies, setAllergies] = useState('');

  const handleAddMedication = () => {
    setMedications([
      ...medications,
      { name: '', dosage: '', frequency: '', reason: '' },
    ]);
  };

  const handleSave = async () => {
    const payload = {
      conditions,
      allergies,
      medications,
    };

    try {
      const response = await axios.post(
        'https://your-backend-api.com/api/medical-history', // Replace with your API
        payload
      );
      console.log('Saved successfully:', response.data);
      alert('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Failed to save data.');
    }
  };

  return (<>
   <DashboardHeader/>
     <div className="w-full max-w-[1280px] min-h-[1291px] p-10 bg-white  mx-auto ">
      {/* Header */}
     <div className="mb-8">
    <h2 className="text-[28px] font-bold text-center w-full text-[#121417]">
        Add Medical History
     </h2>

    </div>

    <div className="w-full max-w-[1280px] min-h-[1291px] p-10 bg-white mx-auto ">

      {/* Conditions */}
      <div className="flex flex-wrap gap-4 px-4 py-3 max-w-[480px] w-full">
        <div className="flex flex-col w-[448px]">
          <label className="text-[16px] font-medium text-[#121417] mb-2">Conditions</label>
          <input
            type="text"
            placeholder="Enter condition"
            value={conditions}
            onChange={(e) => setConditions(e.target.value)}
            className="w-full h-[56px] px-4 border border-[#DBE0E6] rounded-[12px]"
          />
        </div>
      </div>

      {/* Allergies */}
      <div className="flex flex-wrap gap-4 px-4 py-3 max-w-[480px] w-full">
        <div className="flex flex-col w-[448px]">
          <label className="text-[16px] font-medium text-[#121417] mb-2">Allergies</label>
          <input
            type="text"
            placeholder="Enter allergies"
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
            className="w-full h-[56px] px-4 border border-[#DBE0E6] rounded-[12px]"
          />
        </div>
      </div>

      {/* Medications */}
    <div className="flex flex-wrap gap-4 px-4 py-3 max-w-[480px] w-full">
  <div className="flex flex-col w-[448px]">
    <label className="text-[16px] font-medium text-[#121417] mb-2">Medications</label>

    {medications.map((med, index) => (
      <div key={index} className="mb-4">
        <div className="flex gap-4 mb-2">
          <input
            className="w-[200px] border border-gray-300 rounded-md p-2"
            placeholder="Medication Name"
            value={med.name}
            onChange={(e) => {
              const updated = [...medications];
              updated[index].name = e.target.value;
              setMedications(updated);
            }}
          />
          <input
            className="w-[120px] border border-gray-300 rounded-md p-2"
            placeholder="Dosage"
            value={med.dosage}
            onChange={(e) => {
              const updated = [...medications];
              updated[index].dosage = e.target.value;
              setMedications(updated);
            }}
          />
        </div>
        <div className="flex gap-4">
          <input
            className="w-[160px] border border-gray-300 rounded-md p-2"
            placeholder="Frequency"
            value={med.frequency}
            onChange={(e) => {
              const updated = [...medications];
              updated[index].frequency = e.target.value;
              setMedications(updated);
            }}
          />
          <input
            className="w-[160px] border border-gray-300 rounded-md p-2"
            placeholder="Reason"
            value={med.reason}
            onChange={(e) => {
              const updated = [...medications];
              updated[index].reason = e.target.value;
              setMedications(updated);
            }}
          />
        </div>
      </div>
    ))}
  </div>
      <div className="mb-6">
                <label className="block font-medium mb-2">Upload Documents</label>
     <div className="w-full max-w-[928px] border-2 border-dashed border-gray-300 rounded-md h-[180px] flex flex-col justify-center items-center text-center text-gray-500">
       <p className="font-medium">Drag and drop files here</p>
        <p className="text-sm">Or click to browse</p>
        <Button
         label="Upload"
         bgcolor={Colors.gray}
           color={Colors.black}
          textSize="14px"
         width="fit-content"
          padding="0px 16px"
         className="mt-4 rounded-[12px] font-bold"
          />
         </div>
         
     </div>




        <div className="mt-3">
          <Button
            label="Add Medication"
            bgcolor={Colors.gray}
            color={Colors.black}
            textSize="14px"
            width="fit-content"
            padding="0px 16px"
            className="rounded-[12px] font-bold"
            onClick={handleAddMedication}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-10">
        <Button
          label="Cancel"
          bgcolor={Colors.gray}
          color={Colors.black}
          textSize="14px"
          width="114px"
          height="40px"
          padding="0px 16px"
          className="rounded-[12px] font-bold"
        />
        <Button
          label="Save"
          bgcolor={Colors.blue}
          color={Colors.black}
          textSize="14px"
          width="114px"
          height="40px"
          padding="0px 16px"
          className="rounded-[12px] font-bold"
          onClick={handleSave}
        />
      </div>
    </div>
    </div>
   </>
  
  );
};

export default AddMedicalHistory;
