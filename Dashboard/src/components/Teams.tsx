import type React from "react"
import '../styles/Pages.css';

const teams = [
  {
    title: "Equipo de Desarrollo",
    date: "2024-01-10",
    description: "Equipo principal de desarrollo de software",
    status: "active",
  },
  {
    title: "Equipo de Diseño",
    date: "2024-01-15",
    description: "Equipo de diseño de interfaz y experiencia de usuario",
    status: "active",
  },
  {
    title: "Equipo de QA",
    date: "2024-02-01",
    description: "Equipo de control de calidad y pruebas",
    status: "in-progress",
  },
]

const Teams: React.FC = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">EQUIPOS</h1>
        <button className="new-button">+ Nuevo Equipo</button>
      </div>
      <div className="cards-grid">
        {teams.map((team, index) => (
          <div key={index} className="card">
            <h2 className="card-title">{team.title}</h2>
            <div className="card-date">Creado: {team.date}</div>
            <p className="card-description">{team.description}</p>
            <span className={`card-status status-${team.status}`}>
              {team.status === "active" ? "Activo" : "En Progreso"}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Teams