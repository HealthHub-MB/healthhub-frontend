import React, { useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import Colors from '../constants/colorConstants';
import DashboardHeader from '../components/DashboardHeader';

interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  reason: string;
}

interface ProfileFormData {
  name: string;
  age: string;
  gender: string;
  contactNumber: string;
  conditions: string;
  allergies: string;
  medications: Medication[];
}

const EditPatientForm: React.FC = () => {
  const [formData, setFormData] = useState<ProfileFormData>({
    name: '',
    age: '',
    gender: '',
    contactNumber: '',
    conditions: '',
    allergies: '',
    medications: [{ name: '', dosage: '', frequency: '', reason: '' }],
  });

  const handleChange = (field: keyof ProfileFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleMedicationChange = (index: number, field: keyof Medication, value: string) => {
    const updated = [...formData.medications];
    updated[index][field] = value;
    setFormData({ ...formData, medications: updated });
  };

  const addMedication = () => {
    setFormData({
      ...formData,
      medications: [...formData.medications, { name: '', dosage: '', frequency: '', reason: '' }],
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.put('/api/user/profile', formData);
      alert('Medical history updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update medical history.');
    }
  };

  return (
    <>
     <DashboardHeader isPatient={true}/> 
      <div className="flex justify-center items-start px-40 py-5 w-full min-h-screen">
        <div className="flex flex-col w-[960px] max-w-[960px]">
          <h1 className="text-[28px] font-bold text-center text-[#121417] mb-2">My Profile</h1>
          <p className="text-[16px] font-bold text-center text-[#121417] mb-4">Personal Information</p>

          {/* Name */}
          <div className="mb-4" style={{ width: '480px', height: '112px' }}>
            <label className="block mb-2 font-medium">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Enter your full name"
              className="w-full p-4 border border-[#DEE0E3] rounded-xl"
            />
          </div>

          {/* Age */}
          <div className="mb-4" style={{ width: '480px', height: '112px' }}>
            <label className="block mb-2 font-medium">Age</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => handleChange('age', e.target.value)}
              placeholder="Enter your age"
              className="w-full p-4 border border-[#DEE0E3] rounded-xl"
            />
          </div>

          {/* Gender */}
          <div className="mb-4" style={{ width: '480px', height: '112px' }}>
            <label className="block mb-2 font-medium">Gender</label>
            <select
              value={formData.gender}
              onChange={(e) => handleChange('gender', e.target.value)}
              className="w-full p-4 border border-[#DEE0E3] rounded-xl"
            >
              <option value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Contact Number */}
          <div className="mb-4" style={{ width: '480px', height: '112px' }}>
            <label className="block mb-2 font-medium">Contact Number</label>
            <input
              type="text"
              value={formData.contactNumber}
              onChange={(e) => handleChange('contactNumber', e.target.value)}
              placeholder="Enter your contact number"
              className="w-full p-4 border border-[#DEE0E3] rounded-xl"
            />
          </div>

          {/* Conditions */}
          <div className="mb-4" style={{ width: '480px', height: '112px' }}>
            <label className="block mb-2 font-medium">Existing Conditions</label>
            <textarea
              value={formData.conditions}
              onChange={(e) => handleChange('conditions', e.target.value)}
              placeholder="Describe your conditions"
              className="w-full p-4 border border-[#DEE0E3] rounded-xl"
            />
          </div>

          {/* Allergies */}
          <div className="mb-4" style={{ width: '480px', height: '112px' }}>
            <label className="block mb-2 font-medium">Allergies</label>
            <textarea
              value={formData.allergies}
              onChange={(e) => handleChange('allergies', e.target.value)}
              placeholder="Mention any allergies"
              className="w-full p-4 border border-[#DEE0E3] rounded-xl"
            />
          </div>

          {/* Medications */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Medications</label>
            {formData.medications.map((med, index) => (
              <div key={index} className="mb-4  p-4 rounded-lg">
                <div className="flex gap-4 mb-2">
                  <input
                    placeholder="Medication Name"
                    value={med.name}
                    onChange={(e) => handleMedicationChange(index, 'name', e.target.value)}
                    className="w-1/2 p-2 border rounded-md border-[#DEE0E3]"
                  />
                  <input
                    placeholder="Dosage"
                    value={med.dosage}
                    onChange={(e) => handleMedicationChange(index, 'dosage', e.target.value)}
                    className="w-1/2 p-2 border rounded-md border-[#DEE0E3]"
                  />
                </div>
                <div className="flex gap-4">
                  <input
                    placeholder="Frequency"
                    value={med.frequency}
                    onChange={(e) => handleMedicationChange(index, 'frequency', e.target.value)}
                    className="w-1/2 p-2 border rounded-md  border-[#DEE0E3]"
                  />
                  <input
                    placeholder="Reason"
                    value={med.reason}
                    onChange={(e) => handleMedicationChange(index, 'reason', e.target.value)}
                    className="w-1/2 p-2 border rounded-md  border-[#DEE0E3]"
                  />
                </div>
              </div>
            ))}
            <Button
              label="Add Medication"
              onClick={addMedication}
              bgcolor={Colors.gray}
              color="#121417"
              textSize="14px"
              width="171px"
              height="40px"
              padding="0px 16px"
              className="rounded-lg font-bold mt-2"
            />
          </div>

          {/* Save  & Cancel Button */}
          
<div className="flex justify-end gap-4 mt-6 self-end">
  <Button
    type="button"
    label="Cancel"
    onClick={() => console.log('Cancelled')}
    height="40px"
    width="160px"
    padding="0px 16px"
    bgcolor={Colors.gray}
    color="#121417"
    textSize="14px"
    className="rounded-lg font-bold"
  />
  <Button
    type="button"
    label="Save"
    onClick={handleSubmit}
    height="40px"
    width="160px"
    padding="0px 16px"
    bgcolor={Colors.blue}
    color="#ffffff"
    textSize="14px"
    className="rounded-lg font-bold"
  />
</div>

        </div>
      </div>
    </>
  );
};

export default EditPatientForm;
