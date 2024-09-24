import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">Digital Fortress</Link>
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
