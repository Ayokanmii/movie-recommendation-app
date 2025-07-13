import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // You can improve this logic
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
