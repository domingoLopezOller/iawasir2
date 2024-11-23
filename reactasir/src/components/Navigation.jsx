// Navigation.jsx
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaHome, FaEnvelope, FaWrench } from 'react-icons/fa';

function Navigation() {
  return (
    <Navbar bg="warning" variant="dark" className="navigation">
      <Nav className="mx-auto">
        <Nav.Link href="#"><FaHome /> Inicio</Nav.Link>
        <Nav.Link href="#"><FaEnvelope /> Contacto</Nav.Link>
        <Nav.Link href="#"><FaWrench /> Servicios</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
