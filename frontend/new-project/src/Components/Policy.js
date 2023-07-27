import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ClientDetails from './ClientDetails';
import Payments from './Payments';
import Claims from './Claims';
import '../Css/Sidebar.css';
import MyPolicy from './MyPolicy';
import Property from './SubComponents/Property';

const Policy = () => {
  return (
    <div>
      {/* <div className="navbar">
        <ul>
          <li>
            <Link to= "/policy/policies">Policy</Link>
          </li> 
           <li>
            <Link to="/policy/claims">Claims</Link>
          </li>      
          <li>
            <Link to="/policy/payments">Payments</Link>
          </li>
          <li>
            <Link to="/policy/clientdetails">Client Details</Link>
          </li>
    
        </ul>
      </div> */}

      <div className="main-content">

        <Routes>
          <Route path='/policies' element={<MyPolicy/>}/>
          <Route path="/clientdetails" element={<ClientDetails />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/claims" element={<Claims />} />
          <Route path='./property' element={<Property/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default Policy;
