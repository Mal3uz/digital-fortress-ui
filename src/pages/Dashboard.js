import React, { useState } from 'react';
import '../styles/Dashboard.scss';
import { FiSearch, FiBell, FiSettings } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';  // Import Sidebar

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const projects = [
    { id: 1, name: 'Sisyphus', url: 'sisyphus.com', date: '22 Jan 2022', tags: ['Active', 'Customer data', 'Admin'] },
    { id: 2, name: 'Sisyphus', url: 'sisyphus.com', date: '20 Jan 2022', tags: ['Active', 'Customer data', 'Admin'] },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} /> {/* Use Sidebar */}

      <div className="main-content">
        <div className="top-bar">
          <div className="search">
            <FiSearch size={18} />
            <input type="text" placeholder="Search anything" />
          </div>
          <div className="top-actions">
            <FiBell size={18} />
            <FiSettings size={18} />
            <div className="profile-pic">👤</div>
          </div>
        </div>

        <div className="dashboard-table">
          <h2>Dashboard</h2>
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Last assessed</th>
                <th>License use</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td>
                    <div className="project-info">
                      <div className="image"></div>
                      <div>
                        <span className="project-name">{project.name}</span>
                        <span className="project-url">{project.url}</span>
                      </div>
                    </div>
                  </td>
                  <td className="project-date">{project.date}</td>
                  <td>
                    <span>{project.status}</span>
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </td>
                  <td>
                    <button className="action-btn edit-btn icon-edit"></button>
                    <button className="action-btn delete-btn icon-delete"></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button className="pagination-btn">Previous</button>
            <span className="number-page">Page 1 of 10</span>
            <button className="pagination-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
