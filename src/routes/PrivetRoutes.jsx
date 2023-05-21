import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
const PrivetRoutes = ({ children }) => {
  let location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  }
  return (
    <>
      <Navigate to="/login" state={{ from: location }} replace />
      {toast.error("You need to login to view this page")}
    </>
  );
};

export default PrivetRoutes;
