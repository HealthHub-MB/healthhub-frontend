import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { appRoutes } from './routes/appRoutes';

const App = () => {
  console.log(appRoutes)
  return (
    <Router>
      <Routes>
        {appRoutes.map((route, index) => (
          <>
          {console.log(route)}
          <Route key={index} path={route.path} element={route.element}/>
          </>

        ))}
      </Routes>
    </Router>
 ) 
};

export default App;
