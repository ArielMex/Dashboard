import type React from "react"
import type { UserRole } from "../types/user"
import '../styles/Pages.css'

interface TeamsPageProps {
  userRole: UserRole
  userId: string
}

const teams = [
  {
    id: "1",
    title: "Equipo de Desarrollo",
    date: "2024-01-10",
    description: "Equipo principal de desarrollo de software",
    status: "active",
    members: ["1", "2", "3"],
  },
  {
    id: "2",
    title: "Equipo de Diseño",
    date: "2024-01-15",
    description: "Equipo de diseño de interfaz y experiencia de usuario",
    status: "active",
    members: ["1", "4", "5"],
  },
  {
    id: "3",
    title: "Equipo de QA",
    date: "2024-02-01",
    description: "Equipo de control de calidad y pruebas",
    status: "in-progress",
    members: ["2", "3", "6"],
  },
]

const TeamsPage: React.FC<TeamsPageProps> = ({ userRole, userId }) => {
  const filteredTeams = userRole === "user" ? teams.filter((team) => team.members.includes(userId)) : teams

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">EQUIPOS</h1>
      </div>
      <div className="cards-grid">
        {filteredTeams.map((team) => (
          <div key={team.id} className="card">
            <div className="user-card-header">
              <h2 className="card-title">{team.title}</h2>
              <span className="user-participation">Miembro</span>
            </div>
            <div className="card-date">Creado: {team.date}</div>
            <p className="card-description">{team.description}</p>
            <div className="card-actions">
              <span className={`card-status status-${team.status}`}>
                {team.status === "active" ? "Activo" : "En Progreso"}
              </span>
              <button className="view-details-button">Ver Equipo</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamsPage

