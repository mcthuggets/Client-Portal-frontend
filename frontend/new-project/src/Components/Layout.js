import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <><div>

    <Sidebar /> </div><div className="app-container">
      <div className='main-content'>{children}</div>
    </div></>
  );
};

export default Layout;
