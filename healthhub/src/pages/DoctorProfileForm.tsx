import React, { useState } from 'react';
import Button from '../components/Button'; // adjust the path as needed
import axios from 'axios';
import DashboardHeader from '../components/DashboardHeader';

const DoctorProfileForm = () => {
  const [formData, setFormData] = useState({
    specialization: '',
    gender: '',
    officeAddress: '',
    phoneNumber: '',
    bio: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/doctors/profile', formData); // update this URL
      console.log('Form submitted:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
    <DashboardHeader />
    <div className="flex justify-center items-start px-40 py-5 w-full max-w-[1280px] mx-auto ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-5 w-[960px] max-w-full"
      >
        <h2 className="text-[28px] font-bold text-center w-full text-[#121417]">
          Complete Your Doctor Profile
        </h2>

        {/* Specialization Dropdown */}
        <div className="w-full max-w-[480px]">
          <label className="block text-[#121417] font-medium text-[16px] mb-2">
            Specialization
          </label>
          <select
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            className="w-full px-4 py-4 border border-[#DBE0E6] rounded-[12px] text-[#121417] placeholder-[#637587] text-[16px] bg-white"
          >
            <option value="">Select specialization</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Neurology">Neurology</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Psychiatry">Psychiatry</option>
            <option value="General Medicine">General Medicine</option>
          </select>
        </div>

        {/* Gender */}
        <div className="w-full max-w-[480px]">
          <label className="block text-[#121417] font-medium text-[16px] mb-2">
            Gender
          </label>
          <input
            type="text"
            name="gender"
            placeholder="Enter your gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-4 py-4 border border-[#DBE0E6] rounded-[12px] text-[#121417] placeholder-[#637587] text-[16px]"
          />
        </div>

        {/* Office Address */}
        <div className="w-full max-w-[480px]">
          <label className="block text-[#121417] font-medium text-[16px] mb-2">
            Office Address
          </label>
          <input
            type="text"
            name="officeAddress"
            placeholder="Enter your office address"
            value={formData.officeAddress}
            onChange={handleChange}
            className="w-full px-4 py-4 border border-[#DBE0E6] rounded-[12px] text-[#121417] placeholder-[#637587] text-[16px]"
          />
        </div>

        {/* Phone Number */}
        <div className="w-full max-w-[480px]">
          <label className="block text-[#121417] font-medium text-[16px] mb-2">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-4 border border-[#DBE0E6] rounded-[12px] text-[#121417] placeholder-[#637587] text-[16px]"
          />
        </div>

        {/* Bio */}
        <div className="w-full max-w-[480px]">
          <label className="block text-[#121417] font-medium text-[16px] mb-2">
            Bio/Introduction (Optional)
          </label>
          <textarea
            name="bio"
            placeholder="Write a short bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full px-4 py-4 h-[144px] border border-[#DBE0E6] rounded-[12px] text-[#121417] placeholder-[#637587] text-[16px] resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <Button
            type="submit"
            label="Submit"
            width="480px"
            padding="0.75rem 2rem"
            bgcolor="#94C2F0"
            color="#121417"
            textSize="14px"
            className="font-bold"
          />
        </div>
      </form>
    </div>
    </>
  );
};

export default DoctorProfileForm;
