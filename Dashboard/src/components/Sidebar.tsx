import React from 'react';
import '../styles/Sidebar.css';

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (page: string) => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onNavigate }) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="sidebar-close-button" onClick={onClose}>
        &times;
      </button>
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
      <div className="sidebar-footer">
        <button className="sidebar-logout-button">Cerrar Sesión</button>
      </div>
    </aside>
  )
}

export default Sidebar


