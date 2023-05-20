import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
const PrivetRoutes = ({ children }) => {
  let location = useLocation();
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoutes;
