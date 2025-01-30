import type React from "react"
import '../styles/Pages.css';

const projects = [
  {
    title: "Sistema de Inventario",
    date: "2024-01-15",
    description: "Desarrollo de un sistema de gestión de inventario para la empresa",
    status: "pending",
  },
  {
    title: "Portal de Clientes",
    date: "2024-01-13",
    description: "Implementación del nuevo portal de autoservicio para clientes",
    status: "completed",
  },
  {
    title: "App Móvil",
    date: "2024-04-03",
    description: "Desarrollo de aplicación móvil para acceso a servicios",
    status: "pending",
  },
]

const Project: React.FC = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">PROYECTOS</h1>
        <button className="new-button">+ Nuevo Proyecto</button>
      </div>
      <div className="cards-grid">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h2 className="card-title">{project.title}</h2>
            <div className="card-date">Inicio: {project.date}</div>
            <p className="card-description">{project.description}</p>
            <span className={`card-status ${project.status === "completed" ? "status-completed" : "status-pending"}`}>
              {project.status === "completed" ? "Completado" : "Pendiente"}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project