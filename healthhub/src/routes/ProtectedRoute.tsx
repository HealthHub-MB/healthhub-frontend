import { JSX } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  children,
  allowedRoles,
}: {
  children: JSX.Element;
  allowedRoles: string[];
}) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  console.log("user",user)

  if (!user?.token) return <Navigate to="/" replace />;
  if (!allowedRoles.includes(user.role)) return <Navigate to="/register" replace />;

  return children;
};


export default ProtectedRoute;
