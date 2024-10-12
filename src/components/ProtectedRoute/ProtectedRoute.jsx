import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({
  children,
  requiredStateKeys = [],
  redirectTo = '/',
}) => {
  const location = useLocation();
  const state = location.state || {};

  const hasRequiredState = requiredStateKeys.every(key => state[key]);

  if (!hasRequiredState) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};
export default ProtectedRoute;
