import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './AuthContext';

function PrivateRoute({ element, ...rest }) {
    const { authenticated } = useAuthContext();
  
    return authenticated ? (
      <Route {...rest} element={element} />
    ) : (
      <Navigate to="/" replace />
    );
  }

export default PrivateRoute;