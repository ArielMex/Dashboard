import type React from "react"
import type { UserRole } from "../types/user"
import '../styles/Pages.css'

interface ResourcesPageProps {
  userRole: UserRole
}

const resources = [
  {
    id: "1",
    title: "Manual de Usuario",
    date: "2024-01-20",
    description: "Documentación completa para usuarios finales",
    status: "available",
    type: "document",
  },
  {
    id: "2",
    title: "Kit de Desarrollo",
    date: "2024-02-01",
    description: "Herramientas y recursos para desarrolladores",
    status: "available",
    type: "software",
  },
  {
    id: "3",
    title: "Guías de Diseño",
    date: "2024-02-15",
    description: "Lineamientos y componentes de diseño",
    status: "in-progress",
    type: "document",
  },
]

const ResourcesPage: React.FC<ResourcesPageProps> = ({ userRole }) => {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">RECURSOS</h1>
      </div>
      <div className="cards-grid">
        {resources.map((resource) => (
          <div key={resource.id} className="card">
            <h2 className="card-title">{resource.title}</h2>
            <div className="card-date">Actualizado: {resource.date}</div>
            <p className="card-description">{resource.description}</p>
            <div className="card-actions">
              <span
                className={`card-status ${resource.status === "available" ? "status-completed" : "status-in-progress"}`}
              >
                {resource.status === "available" ? "Disponible" : "En Proceso"}
              </span>
              {resource.status === "available" && (
                <button className="view-details-button">
                  {resource.type === "document" ? "Ver Documento" : "Descargar"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResourcesPage

