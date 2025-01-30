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
      <div className="dashboard-user-info">
        <h1>BIENVENIDO</h1>
      </div>
    </header>
  );
};

export default Header;