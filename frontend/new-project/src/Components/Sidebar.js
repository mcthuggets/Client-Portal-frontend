import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
      <a href='/'><img src="https://www.fanews.co.za/images/cmsimages/big/brolink-logo_news_22667_17270.jpg"style={{width:"120px", height:"30px"}} alt="logo"/></a>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/policy">Policy</Link>
        </li>
        <li>
          <Link to="/broker">Broker</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
