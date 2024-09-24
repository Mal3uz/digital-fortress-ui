
import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="logo">
        {isCollapsed ? (
          <FiChevronRight size={20} onClick={toggleSidebar} />
        ) : (
          <>
            <div className="logo-company"></div>
            <FiChevronLeft size={20} onClick={toggleSidebar} />
          </>
        )}
      </div>
      <nav className="menu">
        <a href="/" className="menu-item active">Dashboard</a>
        <a href="/" className="menu-item">Task</a>
        <a href="/" className="menu-item">Projects</a>
        <a href="/" className="menu-item">Schedule</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
