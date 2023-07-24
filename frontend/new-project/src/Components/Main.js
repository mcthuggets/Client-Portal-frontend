import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './Dashboard';
import Policy from './Policy';
import Broker from './Broker';
import ClientDetails from './ClientDetails';
import Payments from './Payments';
import Claims from './Claims';
import MyPolicy from './MyPolicy';
import Property from './SubComponents/Property';

const Main = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          
          <Route path="/" element={<Dashboard />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/broker" element={<Broker />} />
          <Route path='/policy/policies' element={<MyPolicy/>}/>
          <Route path="/policy/clientdetails" element={<ClientDetails />} />
          <Route path="/policy/payments" element={<Payments />} />
          <Route path="/policy/claims" element={<Claims />} />
          <Route path='/policy/property' element={<Property/>}/>
        </Routes>
      </Layout>
    </Router>
  );
};

export default Main;
