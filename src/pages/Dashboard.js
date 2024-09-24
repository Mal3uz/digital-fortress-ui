import React, { useState } from 'react';
import '../styles/Dashboard.scss';
import { FiSearch, FiBell, FiSettings } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 1;

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const projects = [
    { id: 1, name: 'SisyphusA', url: 'sisyphus.com', date: '22 Jan 2022', tags: ['Active', 'Customer data', 'Admin'] },
    { id: 2, name: 'SisyphusB', url: 'sisyphus.com', date: '20 Jan 2022', tags: ['Active', 'Customer data', 'Admin'] },
    { id: 3, name: 'Project Z', url: 'projectz.com', date: '18 Jan 2022', tags: ['Active', 'Customer data', 'Admin'] },
  ];

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <div className="dashboard-container">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

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
              {currentProjects.map((project) => (
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
            <button
              className="pagination-btn"
              onClick={handlePreviousClick}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="number-page">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="pagination-btn"
              onClick={handleNextClick}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
