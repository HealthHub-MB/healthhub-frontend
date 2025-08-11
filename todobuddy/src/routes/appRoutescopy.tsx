import { JSX } from "react";
import LoginModal from "../pages/Login"
import Dashboard from "../pages/Dashboard"
export interface AppRoute {
  path: string;
  element: JSX.Element;
}

export const appRoutescopy: AppRoute[] = [
  {
    path: "/",
    element: (
      <LoginModal />
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Dashboard />
    ),
  }
];



