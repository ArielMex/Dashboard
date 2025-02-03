import type React from "react"
import type { UserRole } from "../types/user"
import '../styles/Pages.css'

interface DashboardPageProps {
  userRole: UserRole
}

const dashboardItems = [
  {
    id: "1",
    title: "Mis Proyectos Activos",
    date: "2024-02-01",
    description: "Resumen de los proyectos en los que estás trabajando actualmente",
    status: "updated",
    count: 3,
  },
  {
    id: "2",
    title: "Próximas Reuniones",
    date: "2024-02-01",
    description: "Lista de las próximas reuniones programadas",
    status: "live",
    count: 2,
  },
  {
    id: "3",
    title: "Recursos Recientes",
    date: "2024-02-01",
    description: "Últimos recursos añadidos o actualizados",
    status: "updated",
    count: 5,
  },
]

const DashboardPage: React.FC<DashboardPageProps> = ({ userRole }) => {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">DASHBOARD</h1>
      </div>
      <div className="cards-grid">
        {dashboardItems.map((item) => (
          <div key={item.id} className="card">
            <h2 className="card-title">{item.title}</h2>
            <div className="card-date">Actualizado: {item.date}</div>
            <p className="card-description">{item.description}</p>
            <div className="card-actions">
              <span className={`card-status ${item.status === "live" ? "status-completed" : "status-in-progress"}`}>
                {item.count} {item.title.toLowerCase()}
              </span>
              <button className="view-details-button">Ver Detalles</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage
