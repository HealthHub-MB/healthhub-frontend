// import React,{JSX} from 'react';
// import { Navigate } from 'react-router-dom';


// const PublicOnlyRoute = ({ children }: { children: JSX.Element }) => {
//  const user = JSON.parse(localStorage.getItem('user') || '{}');
//  if (user?.token && user?.role === 'doctor') return <Navigate to="/doctor-dashboard" replace />;
//  if (user?.token && user?.role === 'patient') return <Navigate to="/patient-dashboard" replace />;
//  return children;
// };

// export default PublicOnlyRoute;