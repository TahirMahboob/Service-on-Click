// // PrivateRoute.js
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useContext } from 'react';
// import UserContext from '../../src/components/Context/UserContext';

// const PrivateRoute = ({ children }) => {
//   const { user } = useContext(UserContext);

//   return user?.token ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;

// 2nd 
// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import UserContext from '../../src/components/Context/UserContext';

// const PrivateRoute = ({ children, requiredRole }) => {
//   const { user } = useContext(UserContext);

//   if (!user.token) {
//     // Not logged in
//     return <Navigate to="/login" />;
//   }

//   if (requiredRole && user.role !== requiredRole) {
//     // Logged in but doesn't have the required role
//     return <Navigate to="/" />;
//   }

//   return children;
// };

// export default PrivateRoute;


// PrivateRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../../src/components/Context/UserContext';

const PrivateRoute = ({ children, requiredRole }) => {
  const { user } = useContext(UserContext);

  if (!user.token) {
    // Not logged in
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    // Logged in but doesn't have the required role
    // Redirect to the appropriate page
    return requiredRole === 'admin' ? <Navigate to="/admin" /> : <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
