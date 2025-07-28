import React, { useState } from 'react';

const CompleteProfile: React.FC = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [contact, setContact] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');

  const handleSave = () => {
    const profileData = {
      age,
      gender,
      contact,
      medicalHistory
    };
    console.log('Profile Data:', profileData);
    // TODO: Replace with actual API call
    // axios.post('/api/profile', profileData)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-2">Complete Your Profile</h1>
        <p className="text-center text-gray-600 mb-6">
          Please provide additional details to enhance your profile and ensure personalized care.
        </p>

        {/* Age */}
        <div className="mb-4">
          <label className="block text-gray-800 font-medium mb-1">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-gray-800 font-medium mb-1">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="transgender">Transgender</option>
            <option value="non-binary">Non-Binary</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>

        {/* Contact Number */}
        <div className="mb-6">
          <label className="block text-gray-800 font-medium mb-1">Contact Number</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter your contact number"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Medical History */}
        <div className="mb-2">
          <h2 className="text-lg font-semibold mb-1">Medical History</h2>
          <p className="text-gray-600 mb-3">
            Add your medical history to help doctors provide the best care. Include any allergies,
            existing conditions, and current medications.
          </p>
          <textarea
            value={medicalHistory}
            onChange={(e) => setMedicalHistory(e.target.value)}
            placeholder="Type medical history here..."
            className="w-full h-24 border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => alert('Add medical history logic')}
            className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-300 transition"
          >
            Add Medical History
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-400 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-500 transition"
          >
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile;
