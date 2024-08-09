// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, requiredRole }) => {
  const user = useSelector((state) => state.auth.userInfo)
  console.log(user, "fffffffff")
  if (user.role !== "admin") {
    // Not logged in
    return <Navigate to="/login" />;
  }

  // if (requiredRole && user.role !== requiredRole) {
  //   // Logged in but doesn't have the required role
  //   // Redirect to the appropriate page
  //   return requiredRole === 'admin' ? <Navigate to="/admin" /> : <Navigate to="/" />;
  // }

  return children;
};

export default PrivateRoute;
