import React from "react";

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const token =
    localStorage.getItem("token");

  // IF NOT LOGGED IN
  if (!token) {

    return <Navigate to="/login" />;
  }

  // IF LOGGED IN
  return children;
};

export default ProtectedRoute;