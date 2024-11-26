import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa los estilos de FontAwesome
import { Link } from 'react-router-dom'; // Importa Link para navegación

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        {/* Inicio */}
        <li>
          <span className="inicio">
            <Link to="/"> {/* Enlace a la página de inicio */}
              <i className="fas fa-house"></i>
              <p>Inicio</p>
            </Link>
          </span>
        </li>

        {/* Gen1 */}
        <li>
          <span className="gen1">
            <Link to="/gen1"> {/* Enlace a la página de Gen1 */}
              <i className="fas fa-dragon"></i>
              <p>Gen 1</p>
            </Link>
          </span>
        </li>

        {/* Gen2 */}
        <li>
          <span className="gen2">
            <Link to="/gen2"> {/* Enlace a la página de Gen2 */}
              <i className="fas fa-leaf"></i>
              <p>Gen 2</p>
            </Link>
          </span>
        </li>

        {/* Gen3 */}
        <li>
          <span className="gen3">
            <Link to="/gen3"> {/* Enlace a la página de Gen3 */}
              <i className="fas fa-water"></i>
              <p>Gen 3</p>
            </Link>
          </span>
        </li>

        {/* Contacto */}
        <li>
          <span className="contacto">
            <Link to="/contacto"> {/* Enlace a la página de Contacto */}
              <i className="fas fa-envelope"></i>
              <p>Contacto</p>
            </Link>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
