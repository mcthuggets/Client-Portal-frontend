import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const AuthContext = createContext();

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider = ({ children }) => {

  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    if (Cookies.get("token") != null) {
      setAuthenticated(true);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuthContext };
