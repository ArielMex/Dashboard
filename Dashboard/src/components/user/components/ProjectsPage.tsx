import type React from "react"
import type { UserRole } from "../types/user"
import '../styles/Pages.css'

interface ProjectsPageProps {
  userRole: UserRole
  userId: string
}

const projects = [
  {
    id: "1",
    title: "Sistema de Inventario",
    date: "2024-01-15",
    description: "Desarrollo de un sistema de gestión de inventario para la empresa",
    status: "pending",
    assignedTo: ["1", "2"],
  },
  {
    id: "2",
    title: "Portal de Clientes",
    date: "2024-01-13",
    description: "Implementación del nuevo portal de autoservicio para clientes",
    status: "completed",
    assignedTo: ["1", "3"],
  },
  {
    id: "3",
    title: "App Móvil",
    date: "2024-04-03",
    description: "Desarrollo de aplicación móvil para acceso a servicios",
    status: "pending",
    assignedTo: ["2", "4"],
  },
]

const ProjectsPage: React.FC<ProjectsPageProps> = ({ userRole, userId }) => {
  const filteredProjects =
    userRole === "user" ? projects.filter((project) => project.assignedTo.includes(userId)) : projects

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">PROYECTOS</h1>
      </div>
      <div className="cards-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="card">
            <div className="user-card-header">
              <h2 className="card-title">{project.title}</h2>
              <span className="user-participation">Participante</span>
            </div>
            <div className="card-date">Inicio: {project.date}</div>
            <p className="card-description">{project.description}</p>
            <div className="card-actions">
              <span className={`card-status ${project.status === "completed" ? "status-completed" : "status-pending"}`}>
                {project.status === "completed" ? "Completado" : "Pendiente"}
              </span>
              <button className="view-details-button">Ver Detalles</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage

