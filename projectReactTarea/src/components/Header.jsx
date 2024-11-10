import React from 'react';
import './Header.css'; // Importa el archivo CSS personalizado

const Header = () => {
  return (
    <header className="header-container">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src="/home/ubuntu/2doAsir/iawasir2/projectReactTarea/public/LogoIESCuraValera-969x1024 (1).png" //  logo
            alt="Logo del Instituto"
            className="logo mr-3"
          />
          <div>
            <h1 className="title">IES Cura Valera, Huércal-Overa</h1>
            <p className="subtitle">Junta de Andalucía</p>
          </div>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar"
            className="form-control search-input"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
