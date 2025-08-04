import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../../components/Button';
import Colors from '../../constants/colorConstants';
import DashboardHeader from '../../components/DashboardHeader';

interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  reason: string;
}

interface ProfileFormData {
  fullName: string;
  age: string;
  gender: string;
  contactNumber: string;
  conditions: string;
  allergies: string;
  medications: Medication[];
}

const EditPatientForm: React.FC = () => {
  const [formData, setFormData] = useState<ProfileFormData>({
    fullName: '',
    age: '',
    gender: '',
    contactNumber: '',
    conditions: '',
    allergies: '',
    medications: [{ name: '', dosage: '', frequency: '', reason: '' }],
  });

  const [originalData, setOriginalData] = useState<ProfileFormData | null>(null);
  const [isEditable, setIsEditable] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/patients/profile', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const data = res?.data?.data;
        console.log('data',data)
        const fetchedData: ProfileFormData = {
          fullName: localStorage.getItem('name')|| '',
          age: data?.age || '',
          gender: data?.gender || '',
          contactNumber: data?.contactNumber || '',
          conditions: data?.medicalHistory?.condition || '',
          allergies: data?.medicalHistory?.allergies || '',
          medications: data?.medicalHistory?.medications?.length
            ? data?.medicalHistory?.medications
            : [{ name: '', dosage: '', frequency: '', reason: '' }],
        };
        console.log("getapidata:",fetchedData)
        setFormData(fetchedData);
        setOriginalData(fetchedData);
      })
      .catch((err) => {
        console.error('Failed to fetch profile:', err);
      });
  }, []);

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

  const handleSave = async () => {
    try {
      await axios.put('http://localhost:8080/api/patients/profile', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Medical history updated successfully!');
      setIsEditable(false);
      setOriginalData(formData);
      localStorage.setItem('name', formData.fullName)
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update medical history.');
    }
  };

  const handleCancel = () => {
    if (originalData) setFormData(originalData);
    setIsEditable(false);
  };

  return (
    <>
      <DashboardHeader isPatient={true} />
      <div className="flex justify-center items-start px-40 py-5 w-full min-h-screen">
        <div className="flex flex-col w-[960px] max-w-[960px]">

          {/* Centered title */}
          <h1 className="text-[28px] font-bold text-center text-[#121417] mb-6">
            My Profile
          </h1>

          <p className="ttext-[16px] font-bold text-center text-[#121417] mb-6">Personal Information</p>

          {[
            { label: 'Full Name', field: 'fullName', type: 'text' },
            { label: 'Age', field: 'age', type: 'number' },
            { label: 'Contact Number', field: 'contactNumber', type: 'tel' },
          ].map(({ label, field, type }) => (
            <div key={field} className="mb-4 w-[480px]">
              <label className="block mb-2 font-medium">{label}</label>
              <input
                type={type}
                disabled={!isEditable}
                value={(formData as any)[field]}
                onChange={(e) => handleChange(field as keyof ProfileFormData, e.target.value)}
                placeholder={`Enter your ${label.toLowerCase()}`}
                className="w-full p-4 border border-[#DEE0E3] rounded-xl"
              />
            </div>
          ))}

          <div className="mb-4 w-[480px]">
            <label className="block mb-2 font-medium">Gender</label>
            <select
              disabled={!isEditable}
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

          {['conditions', 'allergies'].map((field) => (
            <div key={field} className="mb-4 w-[480px]">
              <label className="block mb-2 font-medium">
                {field === 'conditions' ? 'Existing Conditions' : 'Allergies'}
              </label>
              <textarea
                disabled={!isEditable}
                value={(formData as any)[field]}
                onChange={(e) => handleChange(field as keyof ProfileFormData, e.target.value)}
                placeholder={`Describe your ${field}`}
                className="w-full p-4 border border-[#DEE0E3] rounded-xl"
              />
            </div>
          ))}

          <div className="mb-4">
            <label className="block mb-2 font-medium">Medications</label>
            {formData.medications.map((med, index) => (
              <div key={index} className="mb-4 p-4 rounded-lg">
                <div className="flex gap-4 mb-2">
                  <input
                    disabled={!isEditable}
                    placeholder="Medication Name"
                    value={med.name}
                    onChange={(e) => handleMedicationChange(index, 'name', e.target.value)}
                    className="w-1/2 p-2 border rounded-md border-[#DEE0E3]"
                  />
                  <input
                    disabled={!isEditable}
                    placeholder="Dosage"
                    value={med.dosage}
                    onChange={(e) => handleMedicationChange(index, 'dosage', e.target.value)}
                    className="w-1/2 p-2 border rounded-md border-[#DEE0E3]"
                  />
                </div>
                <div className="flex gap-4">
                  <input
                    disabled={!isEditable}
                    placeholder="Frequency"
                    value={med.frequency}
                    onChange={(e) => handleMedicationChange(index, 'frequency', e.target.value)}
                    className="w-1/2 p-2 border rounded-md border-[#DEE0E3]"
                  />
                  <input
                    disabled={!isEditable}
                    placeholder="Reason"
                    value={med.reason}
                    onChange={(e) => handleMedicationChange(index, 'reason', e.target.value)}
                    className="w-1/2 p-2 border rounded-md border-[#DEE0E3]"
                  />
                </div>
              </div>
            ))}
            {isEditable && (
              <div className="flex justify-end mt-2">
                <Button
                  label="Add Medication"
                  onClick={addMedication}
                  bgcolor={Colors.gray}
                  color="#121417"
                  textSize="14px"
                  width="150px"
                  height="40px"
                  padding="0px 16px"
                  className="rounded-lg font-bold"
                />
              </div>
            )}
          </div>

          {/* Bottom right buttons */}
          <div className="flex justify-end gap-4 mt-8 self-end">
            {isEditable ? (
              <>
                <Button
                  label="Cancel"
                  onClick={handleCancel}
                  height="40px"
                  width="150px"
                  padding="0px 16px"
                  bgcolor={Colors.gray}
                  color="#121417"
                  textSize="14px"
                  className="rounded-lg font-bold"
                />
                <Button
                  label="Save"
                  onClick={handleSave}
                  height="40px"
                  width="160px"
                  padding="0px 16px"
                  bgcolor={Colors.blue}
                  color="#ffffff"
                  textSize="14px"
                  className="rounded-lg font-bold"
                />
              </>
            ) : (
              <Button
                label="Edit"
                onClick={() => setIsEditable(true)}
                height="40px"
                width="160px"
                padding="0px 16px"
                bgcolor={Colors.blue}
                color="#ffffff"
                textSize="14px"
                className="rounded-lg font-bold"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPatientForm;
