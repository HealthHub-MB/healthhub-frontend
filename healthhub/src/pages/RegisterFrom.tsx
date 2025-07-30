import React, { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Colors from '../constants/colorConstants';


interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  role: 'doctor' | 'patient';
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: '',
    email: '',
    password: '',
    role: 'patient',
  });
   const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (role: 'doctor' | 'patient') => {
    setFormData((prev) => ({ ...prev, role }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  console.log('formData',formData)
  try {
    const response = await fetch('http://localhost:8080/api/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      alert('Registered successfully!');
      
      if (formData.role === 'patient') {
        navigate('/completeprofile');
      } else if (formData.role === 'doctor') {
        navigate('/doctorprofile');
      }
    } else {
      alert(result.message || 'Registration failed');
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred');
  }
};

 const onButtonClick = () =>{
    console.log("Hello")
    navigate('/');
  }

  return (<>
  <DashboardHeader buttonText = "Login"  onButtonClick={onButtonClick}/>
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 flex flex-col gap-6 items-start "
        style={{ width: '960px', maxWidth: '960px', height: '695px' }}>
        
     <div className="flex flex-col items-center px-4 pb-3" style={{ width: '960px', height: '67px' }}>
          <h1
            className="text-center font-bold"
            style={{
              width: '928px',
              height: '35px',
              fontSize: '28px',
              lineHeight: '35px',
              color: '#121417',
              fontFamily: 'Inter',
            }}
          >
            Create Your Account
          </h1>
        </div>

      {/* Full Name */}
       <div className="flex flex-wrap items-end content-start gap-4 px-4 py-3" style={{ width: '480px', height: '112px' }}>
          <div className="flex flex-col w-[448px] h-[88px]">
            <label className="mb-2 font-medium" style={{ fontFamily: 'Inter', fontSize: '16px', color: '#121417' }}>
              Full Name
            </label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          className="w-full p-4 border border-[#DEE0E3] rounded-xl focus:outline-none"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      </div>

      {/* Email */}
      <div className="flex flex-wrap items-end content-start gap-4 px-4 py-3" style={{ width: '480px', height: '112px' }}>
          <div className="flex flex-col w-[448px] h-[88px]">
            <label className="mb-2 font-medium" style={{ fontFamily: 'Inter', fontSize: '16px', color: '#121417' }}>
               Email
            </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full p-4 border border-[#DEE0E3] rounded-xl focus:outline-none"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      </div>

      {/* Password */}
      <div className="flex flex-wrap items-end content-start gap-4 px-4 py-3" style={{ width: '480px', height: '112px' }}>
          <div className="flex flex-col w-[448px] h-[88px]">
            <label className="mb-2 font-medium" style={{ fontFamily: 'Inter', fontSize: '16px', color: '#121417' }}>
              Password
            </label>
        <input
          type="password"
          name="password"
          placeholder="Create a password"
          className="w-full p-4 border border-[#DEE0E3] rounded-xl focus:outline-none"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      </div>

      {/* Role */}
      <div className="flex gap-4">
        <button
          type="button"
          className={`p-2 px-4 rounded-md ${formData.role === 'patient' ? 'font-bold':'bg-white'}`}
          onClick={() => handleRoleChange('patient')}
        >
          I am a Patient
        </button>
        <button
          type="button"
          className={`p-2 px-4 rounded-md ${formData.role === 'doctor' ? 'font-bold':'bg-white'}`}
          onClick={() => handleRoleChange('doctor')}
        >
          I am a Doctor
        </button>
      </div>

      {/* Submit Button */}
      {/* <button
        type="submit"
        className="w-full p-3 rounded-md bg-[#94C2F0] font-semibold text-[#121417] hover:bg-blue-400 transition"
      >
        Sign Up
      </button> */}
      <Button
            type="submit"
            label="Sign Up"
            height="40px"
            width="429px"
            padding="0px 16px"
            bgcolor={Colors.blue}
            color="#121417"
            textSize="14px"
            //className="bg-sky-500 hover:bg-sky-700"
          />
    </form>
    </>
  );
};

export default RegisterForm;
