import type React from "react"
import "../styles/Sidebar.css"
// import type { UserRole } from "../../types/user"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (page: string) => void
  // userRole: UserRole
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onNavigate/*, userRole */}) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="sidebar-close-button" onClick={onClose}>
        &times;
      </button>
      <div className="sidebar-content">
        <h2 className="sidebar-title">Gestión de Proyectos</h2>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="#" onClick={() => onNavigate("dashboard")}>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" onClick={() => onNavigate("projects")}>
                Proyectos
              </a>
            </li>
            <li>
              <a href="#" onClick={() => onNavigate("teams")}>
                Equipos
              </a>
            </li>
            <li>
              <a href="#" onClick={() => onNavigate("resources")}>
                Recursos
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="sidebar-footer">
        <button className="sidebar-logout-button">Cerrar Sesión</button>
      </div>
    </aside>
  )
}

export default Sidebar