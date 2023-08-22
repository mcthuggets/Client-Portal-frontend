import React from "react";
import { Link } from "react-router-dom";
import "../Css/Sidebar.css";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlinePolicy } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";

const Sidebar = () => {
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
            <Link to="/">
              <BiLogOutCircle className="sidebar-icon" />  
            Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
