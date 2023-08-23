import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuthContext} from './AuthContext';

import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import MyPolicy from './Components/MyPolicy';
import ClientDetails from './Components/ClientDetails';
import Cookies from 'js-cookie';
const App=()=> {
 
  
  
  const {authenticated,setAuthenticated}=useAuthContext();
  
  return (
  
      <Router>
      <Routes>
      {(authenticated) ? (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/policies" element={<MyPolicy />} />
            <Route path="/clientdetails" element={<ClientDetails />} />
          </>
        ) : (
          <>
          <Route path="/" element={<Login />} />
          
          </>
        )}
        </Routes>
      </Router>

  );
}

export default App;
