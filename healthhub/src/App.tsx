import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { appRoutescopy } from './routes/appRoutescopy';


const App = () => {
  return (
    <Router>
      <Routes>
        {appRoutescopy.map((route, index) => {
          console.log('Adding route:', route.path); 
          return <Route key={index} path={route.path} element={route.element} />;
        })}
      </Routes>
    </Router>



   
  );
};

export default App;
