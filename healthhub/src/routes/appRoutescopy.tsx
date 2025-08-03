import { JSX } from "react";
import LoginPage from "../pages/signuplogin/LoginPage.tsx";
import RegisterForm from "../pages/signuplogin/RegisterFrom.tsx";
import DoctorProfileForm from "../pages/signuplogin/DoctorProfileForm.tsx";
import CompleteProfile from "../pages/signuplogin/CompleteProfile.tsx";
import AddMedicalHistory from "../pages/signuplogin/AddMedicalHistory.tsx";
import EditPatientFrom from "../pages/patient/EditPatientForm.tsx";
import EditDoctorForm from "../pages/doctor/EditDoctorFrom.tsx";
import AvailabilityManager from "../pages/doctor/AvailabilityManager.tsx";
import DoctorDashBoard from "../pages/doctor/DocotorDashBoard.tsx";
import PatientDashBoard from "../pages/patient/PatientDashBoard.tsx";
import Appoitments from "../pages/doctor/Appoitments.tsx";
import FindADocotor from "../pages/patient/FindADocotor.tsx";
import BookAppoitments from "../pages/patient/BookAppoitments.tsx";
import HealthRecords from "../pages/patient/HealthRecords.tsx";
import PatientAppoitments from "../pages/patient/PatientAppoitments.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import PublicOnlyRoute from "./PublicOnlyRoute.tsx";
import PatientHealthRecord from "../pages/doctor/PatientHealthRecord.tsx"
import DoctorAvailability from "../pages/doctor/DoctorAvailability.tsx";
import AppoitmentSlots from "../pages/patient/AppoitmentSlots.tsx";
import ViewDoctorDetails from "../pages/patient/ViewDoctorDetails.tsx";
export interface AppRoute {
  path: string;
  element: JSX.Element;
}

export const appRoutescopy: AppRoute[] = [
  {
    path: "/",
    element: (
      <PublicOnlyRoute>
        <LoginPage />
      </PublicOnlyRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicOnlyRoute>
        <RegisterForm />
      </PublicOnlyRoute>
    ),
  },
  {
    path: "/doctorProfileForm",
    element: (
      <PublicOnlyRoute>
        <DoctorProfileForm />
      </PublicOnlyRoute>
    ),
  },
  {
    path: "/completeProfile",
    element: (
      <PublicOnlyRoute>
        <CompleteProfile />
      </PublicOnlyRoute>
    ),
  },
  {
    path: "/addMedicalHistory",
    element: (
      <PublicOnlyRoute>
        <AddMedicalHistory />
      </PublicOnlyRoute>
    ),
  },
  {
    path: "/editPatientFrom",
    element: (
      <ProtectedRoute allowedRoles={["patient"]}>
        <EditPatientFrom />
      </ProtectedRoute>
    ),
  },
  {
    path: "/editDoctorForm",
    element: (
      <ProtectedRoute allowedRoles={["doctor"]}>
        <EditDoctorForm />
      </ProtectedRoute>
    ),
  },
 {
  path: "/patient-health-record/:patientId",
  element: (
    <ProtectedRoute allowedRoles={["doctor"]}>
      <PatientHealthRecord />
    </ProtectedRoute>
  ),
},

  {
    path: "/availabilityManager",
    element: (
      <ProtectedRoute allowedRoles={["doctor"]}>
        <AvailabilityManager />
      </ProtectedRoute>
    ),
  },
  
{
    path: "/doctor-dashboardp",
    element: (
      <ProtectedRoute allowedRoles={["doctor"]}>
        <DoctorDashBoard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/doctor-availability",
    element: (
      <ProtectedRoute allowedRoles={["doctor"]}>
        <DoctorAvailability availabilityData={undefined} />
      </ProtectedRoute>
    ),
  },
  {
    path: "/patient-dashboard",
    element: (
      <PublicOnlyRoute>
        <PatientDashBoard />
      </PublicOnlyRoute>
    ),
  },
  {
    path: "/patient-dashboardp",
    element: (
      <ProtectedRoute allowedRoles={["patient"]}>
        <PatientDashBoard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/appoitment-slot/:doctorId",
    element: (
      <ProtectedRoute allowedRoles={["patient"]}>
        <AppoitmentSlots />
      </ProtectedRoute>
    ),
  },
  {
    path: "/find-a-doctor",
    element: (
      <ProtectedRoute allowedRoles={["patient"]}>
        <FindADocotor />
      </ProtectedRoute>
    ),
  },
  {
    path: "/appoitments",
    element: (
      <ProtectedRoute allowedRoles={["doctor"]}>
        <Appoitments />
      </ProtectedRoute>
    ),
  },
  {
    path: "/book-appoitments",
    element: (
      <ProtectedRoute allowedRoles={["patient"]}>
        <BookAppoitments />
      </ProtectedRoute>
    ),
  },
  {
    path: "/health-records",
    element: (
      <ProtectedRoute allowedRoles={["patient"]}>
        <HealthRecords />
      </ProtectedRoute>
    ),
  },
  {
    path: "/patient-appoitments",
    element: (
      <ProtectedRoute allowedRoles={["patient"]}>
        <PatientAppoitments />
      </ProtectedRoute>
    ),
  },
   {
    path: "/view-doctor-details/:doctorId",
    element: (
      <ProtectedRoute allowedRoles={["patient"]}>
        <ViewDoctorDetails />
      </ProtectedRoute>
    ),
  },
];



