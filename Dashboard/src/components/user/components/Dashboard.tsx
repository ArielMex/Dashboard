import type React from "react"
import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import DashboardPage from "../components/DashboardPage"
import ProjectsPage from "../components/ProjectsPage"
import TeamsPage from "../components/TeamsPage"
import ResourcesPage from "../components/ResourcesPage"
import type { User } from "../types/user"
import "./Dashboard.css"


// Usuario de ejemplo (en una aplicación real vendría de tu sistema de autenticación)
const currentUser: User = {
  id: "1",
  name: "Usuario Ejemplo",
  role: "user",
}

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState("dashboard")

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPage userRole={currentUser.role} />
      case "projects":
        return <ProjectsPage userRole={currentUser.role} userId={currentUser.id} />
      case "teams":
        return <TeamsPage userRole={currentUser.role} userId={currentUser.id} />
      case "resources":
        return <ResourcesPage userRole={currentUser.role} />
      default:
        return <DashboardPage userRole={currentUser.role} />
    }
  }

  return (
    <div className="dashboard">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNavigate={setCurrentPage}
        userRole={currentUser.role}
      />
      <div className="dashboard-main-content">
        <Header onMenuClick={toggleSidebar} userName={currentUser.name} />
        {renderPage()}
      </div>
    </div>
  )
}

export default Dashboard