import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa los estilos de FontAwesome

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <span className="inicio">
            <a href="#">
              <i className="fas fa-house"></i>
              <p>Home</p>
            </a>
          </span>
        </li>
        <li>
          <span className="blog">
            <a href="#">
              <i className="fas fa-building"></i>
              <p>Contact</p>
            </a>
          </span>
        </li>
        <li>
          <span className="sobremi">
            <a href="#">
              <i className="fab fa-servicestack"></i>
              <p>Services</p>
            </a>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
