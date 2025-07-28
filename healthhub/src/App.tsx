
import './App.css'
import './pages/LoginPage'
import LoginPage from './pages/LoginPage'
import RegisterForm from './pages/RegisterFrom'
import DoctorProfileForm from './pages/DoctorProfileForm'
import CompleteProfile from './pages/CompleteProfile'
import AddMedicalHistory from './pages/AddMedicalHistory'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
 

  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
   <LoginPage/>
    
  
    </>

  )
}

export default App
