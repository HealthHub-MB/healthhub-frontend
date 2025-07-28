import React, { useState } from 'react';

interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  gender: string;
  contact: string;
  role: 'Doctor' | 'Patient';
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: '',
    email: '',
    password: '',
    gender: '',
    contact: '',
    role: 'Patient',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (role: 'Doctor' | 'Patient') => {
    setFormData((prev) => ({ ...prev, role }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Registered successfully!');
      } else {
        alert(result.message || 'Registration failed');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-center">Create Your Account</h2>

      {/* Full Name */}
      <div style={{width: "500px", border:"1px solid black"}}>
        <label className="block text-base font-medium mb-2">Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          className="w-full p-4 rounded-xl bg-[#F2F2F5] focus:outline-none"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-base font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full p-4 rounded-xl bg-[#F2F2F5] focus:outline-none"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-base font-medium mb-2">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Create a password"
          className="w-full p-4 rounded-xl bg-[#F2F2F5] focus:outline-none"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      {/* Role */}
      <div className="flex gap-4">
        <button
          type="button"
          className={`p-2 px-4 rounded-md ${formData.role === 'Patient' ? 'bg-[#F2F2F5] font-bold' : 'bg-gray-100'}`}
          onClick={() => handleRoleChange('Patient')}
        >
          I am a Patient
        </button>
        <button
          type="button"
          className={`p-2 px-4 rounded-md ${formData.role === 'Doctor' ? 'bg-[#F2F2F5] font-bold' : 'bg-gray-100'}`}
          onClick={() => handleRoleChange('Doctor')}
        >
          I am a Doctor
        </button>
      </div>

      {/* Gender */}
      <div>
        <label className="block text-base font-medium mb-2">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-[#F2F2F5] focus:outline-none"
          required
        >
          <option value="">Select your gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Contact */}
      <div>
        <label className="block text-base font-medium mb-2">Contact Number</label>
        <input
          type="tel"
          name="contact"
          placeholder="Enter your contact number"
          className="w-full p-4 rounded-xl bg-[#F2F2F5] focus:outline-none"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full p-3 rounded-md bg-[#94C2F0] font-semibold text-[#121417] hover:bg-blue-400 transition"
      >
        Sign Up
      </button>
    </form>
  );
};

export default RegisterForm;
