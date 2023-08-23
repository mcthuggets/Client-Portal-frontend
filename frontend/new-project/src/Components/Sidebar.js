import React from "react";
import { Link } from "react-router-dom";
import "../Css/Sidebar.css";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlinePolicy } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import axios from 'axios';
import { useAuthContext } from "../AuthContext";

const Sidebar = () => {
  const { authenticated,setAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        'https://localhost:7207/Client/logout',
        null,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
  
      if (response.status === 200) {
        console.log('Logout successful');
      } else {
        console.log('Logout failed');
      }
    } catch (error) {
      console.error('An error occurred during logout:', error);
    }
    
    finally {
      
      Cookies.remove("token");
      Cookies.remove("policies")
      setAuthenticated(false);
     navigate("/");
      
    }
  };


  return (
    <div className="sidebar">
      <div className="sticky">
        <a href="/dashboard">
          <img
            src="https://www.fanews.co.za/images/cmsimages/big/brolink-logo_news_22667_17270.jpg"
            style={{ width: "200px", height: "50px", margin: "10px" }}
            alt="logo"
          />
        </a>

        <ul>
          <li>
            <Link to="/dashboard">
              <MdOutlineDashboard className="sidebar-icon" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/policies">
              <MdOutlinePolicy />
              Policy
            </Link>
          </li>
          <li>
            <Link to="/ClientDetails">
              <MdOutlinePolicy />
              Account
            </Link>
          </li>
          <li>
            
          <button className="logout-button" onClick={handleLogout}>
              <BiLogOutCircle className="sidebar-icon" /> Logout
            </button>
          
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
