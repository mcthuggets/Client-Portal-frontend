import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';
import { useAuthContext } from './AuthContext';

import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import MyPolicy from './Components/MyPolicy';
import ClientDetails from './Components/ClientDetails';

const App = () => {
  const { authenticated } = useAuthContext();

  return (
    <Router>
      <Routes>
        <Route path="/" element={authenticated ? <Dashboard /> : <Login />} />
        {authenticated ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/policies" element={<MyPolicy />} />
            <Route path="/clientdetails" element={<ClientDetails />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
