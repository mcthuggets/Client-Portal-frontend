import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import Layout from './Layout';
import Dashboard from './Dashboard';
import Policy from './Policy';
import MyPolicy from './MyPolicy';
import ClientDetails from './ClientDetails';
import Payments from './Payments';
import Claims from './Claims';
import Login from './Login'; // Import your Login component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="policy">
            <Route index element={<Policy />} />
            <Route path="policies" element={<MyPolicy />} />
            <Route path="clientdetails" element={<ClientDetails />} />
            <Route path="payments" element={<Payments />} />
            <Route path="claims" element={<Claims />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
