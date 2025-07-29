import React from 'react';
import Button from '../components/Button'; // Adjust the path as needed
import DashboardHeader from '../components/DashboardHeader';
import { useNavigate } from 'react-router-dom';
import Colors from '../constants/colorConstants';

const CompleteProfile = () => {


  const navigate = useNavigate();
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
            onClick={() => navigate('/addmedicalhistory')}
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
            type="submit"
            label="Save Profile"
            bgcolor={Colors.gray}
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

