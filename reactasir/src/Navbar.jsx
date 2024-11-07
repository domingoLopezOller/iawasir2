import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaEnvelope, FaServicestack } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#"><FaHome /> Inicio</a>
      <a className="navbar-brand" href="#"><FaEnvelope /> Contacto</a>
      <a className="navbar-brand" href="#"><FaServicestack /> Servicios</a>
    </nav>
  );
};

export default Navbar;
