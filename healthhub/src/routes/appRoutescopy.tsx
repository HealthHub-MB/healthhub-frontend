import { JSX } from "react";
import LoginPage from "../pages/LoginPage.tsx";
import RegisterForm from "../pages/RegisterFrom";
import DoctorProfileForm from "../pages/DoctorProfileForm";
import CompleteProfile from "../pages/CompleteProfile";
import AddMedicalHistory from "../pages/AddMedicalHistory";
import EditPatientFrom from "../pages/EditPatientForm";
import EditDoctorForm from "../pages/EditDoctorFrom";
import AvailabilityManager from "../pages/AvailabilityManager";
import DoctorDashBoard from "../pages/DocotorDashBoard.tsx";
import PatientDashBoard from "../pages/PatientDashBoard.tsx";
import Appoitments from "../pages/Appoitments.tsx";
import FindADocotor from "../pages/FindADocotor.tsx";
import BookAppoitments from "../pages/BookAppoitments.tsx";
import HealthRecords from "../pages/HealthRecords.tsx";
import PatientAppoitments from "../pages/PatientAppoitments.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import PublicOnlyRoute from "./PublicOnlyRoute.tsx";

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
    path: "/availabilityManager",
    element: (
      <ProtectedRoute allowedRoles={["doctor"]}>
        <AvailabilityManager />
      </ProtectedRoute>
    ),
  },
  {
    path: "/doctor-dashboard",
    element: (
      <PublicOnlyRoute>
        <DoctorDashBoard />
      </PublicOnlyRoute>
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
];
