import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import List from './pages/List';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todolist" element={<Dashboard />} />
        <Route path="/userlist" element={<List />} />
        <Route path="*" element={<PageNotFound />} /> {/* Catch-all */}
      </Routes>
    </Router>
  );
};

export default App;
