import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { authenticated } = useAuthContext();

  if (!authenticated) {
    return <Navigate to="/" />;
  }

  return <Element {...rest} />;
};

export default PrivateRoute;