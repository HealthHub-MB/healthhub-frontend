
import { JSX} from 'react';
import LoginPage from '../pages/LoginPage.tsx'
import RegisterForm from '../pages/RegisterFrom'
import DoctorProfileForm from '../pages/DoctorProfileForm'
import CompleteProfile from '../pages/CompleteProfile'
import AddMedicalHistory from '../pages/AddMedicalHistory'
import EditPatientFrom from '../pages/EditPatientForm'
import EditDoctorForm from '../pages/EditDoctorFrom'
import AvailabilityManager from '../pages/AvailabilityManager'
import DoctorDashBoard from '../pages/DocotorDashBoard.tsx';
import PatientDashBoard from '../pages/PatientDashBoard.tsx';
import Appoitments from '../pages/Appoitments.tsx';
import FindADocotor from '../pages/FindADocotor.tsx';
import PatientHealthRecord from '../pages/PatientHealthRecord.tsx';
import BookAppoitments from '../pages/BookAppoitments.tsx';
import HealthRecords from '../pages/HealthRecords.tsx';


export interface AppRoute {
    
      path: string;
      element: JSX.Element;
    }

export const appRoutes: AppRoute[] = [
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterForm/>,
  },
  {
    path: '/doctorProfileForm', element: <DoctorProfileForm/>
  },
  {
    path: '/completeProfile', element: <CompleteProfile/>
  },
  {
    path: '/addMedicalHistory', element: <AddMedicalHistory/>
  },
  {
    path: '/editPatientFrom', element: <EditPatientFrom/>
  },
  {
    path: '/editDoctorForm', element: <EditDoctorForm/>
  },
  {
    path: '/availabilityManager', element: <AvailabilityManager/>
  },
  {
    path: '/doctor-dashboard', element: <DoctorDashBoard/>
  },
  {
    path: '/patient-dashboard', element: <PatientDashBoard/>
  },
  {
    path: '/find-a-doctor', element: <FindADocotor/>
  },
  {
    path: '/appoitments', element: <Appoitments/>
  },
   {
    path: '/patient-health-record', element: <PatientHealthRecord/>
  },
   {
    path: '/book-appoitments', element: <BookAppoitments/>
  },
  {
    path: '/health-records', element: <HealthRecords/>
  }
];
