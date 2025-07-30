import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { appRoutes } from './routes/appRoutes';


const App = () => {
  return (
    <Router>
      <Routes>
        {appRoutes.map((route, index) => {
          console.log('Adding route:', route.path); 
          return <Route key={index} path={route.path} element={route.element} />;
        })}
      </Routes>
    </Router>



   
  );
};

export default App;
