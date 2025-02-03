import React from 'react';
import '../styles/Header.css';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="dashboard-header">
      <button className="dashboard-menu-button" onClick={onMenuClick}>
        ☰
      </button>
      <h1>Panel de Control</h1>
      <div className="dashboard-user-info">
        <span>Bienvenido, Usuario</span>
      </div>
    </header>
  );
};

export default Header;