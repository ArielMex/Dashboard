import type React from "react"
import '../styles/Pages.css';

const resources = [
  {
    title: "Manual de Usuario",
    date: "2024-01-20",
    description: "Documentación completa para usuarios finales",
    status: "available",
  },
  {
    title: "Kit de Desarrollo",
    date: "2024-02-01",
    description: "Herramientas y recursos para desarrolladores",
    status: "available",
  },
  {
    title: "Guías de Diseño",
    date: "2024-02-15",
    description: "Lineamientos y componentes de diseño",
    status: "in-progress",
  },
]

const Resources: React.FC = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">RECURSOS</h1>
        <button className="new-button">+ Nuevo Recurso</button>
      </div>
      <div className="cards-grid">
        {resources.map((resource, index) => (
          <div key={index} className="card">
            <h2 className="card-title">{resource.title}</h2>
            <div className="card-date">Actualizado: {resource.date}</div>
            <p className="card-description">{resource.description}</p>
            <span
              className={`card-status ${resource.status === "available" ? "status-completed" : "status-in-progress"}`}
            >
              {resource.status === "available" ? "Disponible" : "En Proceso"}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Resources
