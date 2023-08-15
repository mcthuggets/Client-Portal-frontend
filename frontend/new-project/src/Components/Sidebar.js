import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Sidebar.css';
import {MdOutlineDashboard} from 'react-icons/md';
import {MdOutlinePolicy} from 'react-icons/md';
import {GrDocumentStore} from 'react-icons/gr';
import {PiClipboardTextBold} from 'react-icons/pi';
import {RiSecurePaymentLine} from 'react-icons/ri';
import {CgProfile} from 'react-icons/cg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      
    <ul >
        <a href='/'><img src="https://www.fanews.co.za/images/cmsimages/big/brolink-logo_news_22667_17270.jpg"style={{width:"120px", height:"30px"}} alt="logo"/></a>
          <li>
            <Link to="/"><MdOutlineDashboard/>Dashboard</Link>
          </li>
        
            <li>
              <Link to= "/policy/policies"><MdOutlinePolicy/>Policy</Link>
            </li> 
            <li>
              <Link to="/policy/claims"><PiClipboardTextBold/>Claims</Link>
            </li> 
            <li>
            <Link to="/policy/payments"><RiSecurePaymentLine/>Payment</Link>
            </li>  
            <li>
              <Link to="/policy/clientdetails"><CgProfile/>My Details</Link>  
          
          </li>
        
        </ul>
   
    </div>
  );
};

export default Sidebar;
