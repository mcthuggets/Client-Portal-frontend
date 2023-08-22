import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard'; // Import your Dashboard component
import MyPolicy from './Components/MyPolicy'; // Import your MyPolicy component
// import ClientDetails from './Components/ClientDetails'; // Import your ClientDetails component
// import Payments from './Components/Payments'; // Import your Payments component
// import Claims from './Components/Claims'; // Import your Claims component
// import Sidebar from './Components/Sidebar';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/policies" element={<MyPolicy />} />
          {/* <Route path="/clientdetails" element={<ClientDetails />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/claims" element={<Claims />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
