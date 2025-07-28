import React, { useState } from 'react';
import Button from '../components/Button';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

   
      console.log('Login success:', response.data);
     

    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white px-4">
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-start p-5"
        style={{ width: '960px', maxWidth: '960px', height: '695px' }}
      >
        {/* Title */}
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
            Welcome back
          </h1>
        </div>

        <div className="flex flex-wrap items-end content-start gap-4 px-4 py-3" style={{ width: '480px', height: '112px' }}>
          <div className="flex flex-col w-[448px] h-[88px]">
            <label className="mb-2 font-medium" style={{ fontFamily: 'Inter', fontSize: '16px', color: '#121417' }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full h-[56px] px-4 border border-[#DEE0E3] rounded-lg"
              style={{ fontSize: '16px', color: '#667882', fontFamily: 'Inter' }}
              required
            />
          </div>
        </div>

    
        <div className="flex flex-wrap items-end content-start gap-4 px-4 py-3" style={{ width: '480px', height: '112px' }}>
          <div className="flex flex-col w-[448px] h-[88px]">
            <label className="mb-2 font-medium" style={{ fontFamily: 'Inter', fontSize: '16px', color: '#121417' }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full h-[56px] px-4 border border-[#DEE0E3] rounded-lg"
              style={{ fontSize: '16px', color: '#667882', fontFamily: 'Inter' }}
              required
            />
          </div>
        </div>

      
        <div className="flex justify-center items-start w-[487px] h-[64px]">
          <Button
            type="submit"
            label="Log In"
            height="40px"
            width="429px"
            padding="0px 16px"
            bgcolor="#94C2F0"
            color="#121417"
            textSize="14px"
            className="rounded-lg font-bold"
          />
        </div>

      
        {error && (
          <p className="text-red-600 text-sm mt-2 px-4">
            {error}
          </p>
        )}

      
        <div className="flex flex-col items-center px-4 pt-1 pb-3" style={{ width: '960px', height: '37px' }}>
          <p className="text-center" style={{ fontFamily: 'Inter', fontSize: '14px', color: '#667882' }}>
            Don’t have an account?{' '}
            <a href="/signup" className="underline #667882">
              Sign up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
