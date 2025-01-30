import type React from "react"
import '../styles/Pages.css';

const dashboardItems = [
  {
    title: "Resumen de Proyectos",
    date: "2024-02-01",
    description: "Vista general de todos los proyectos activos y completados",
    status: "updated",
  },
  {
    title: "Métricas de Equipo",
    date: "2024-02-01",
    description: "Indicadores de rendimiento y productividad",
    status: "live",
  },
  {
    title: "Recursos Disponibles",
    date: "2024-02-01",
    description: "Listado de recursos y herramientas disponibles",
    status: "updated",
  },
]

const Content: React.FC = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">DASHBOARD</h1>
        <button className="new-button">+ Nuevo Widget</button>
      </div>
      <div className="cards-grid">
        {dashboardItems.map((item, index) => (
          <div key={index} className="card">
            <h2 className="card-title">{item.title}</h2>
            <div className="card-date">Actualizado: {item.date}</div>
            <p className="card-description">{item.description}</p>
            <span className={`card-status ${item.status === "live" ? "status-completed" : "status-in-progress"}`}>
              {item.status === "live" ? "En Vivo" : "Actualizado"}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Content