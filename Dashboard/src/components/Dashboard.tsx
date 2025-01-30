import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content';
import Project from "./Project";
import Teams from "./Teams";
import Resources from "./Resources";
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState("dashboard")

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Content />
      case "projects":
        return <Project />
      case "teams":
        return <Teams />
      case "resources":
        return <Resources />
      // case "settings": //Removed case
      //   return <SettingsPage />
      default:
        return <Content />
    }
  }

  return (
    <div className="dashboard">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onNavigate={setCurrentPage} />
      <div className="dashboard-main-content">
        <Header onMenuClick={toggleSidebar} />
        {renderPage()}
      </div>
    </div>
  )
}

export default Dashboard



