// Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaGlobe } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="align-items-center">
          {/* Iconos de redes sociales */}
          <Col sm={4} className="text-center text-sm-start mb-3 mb-sm-0">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              <FaInstagram size={24} />
            </a>
          </Col>

          {/* Logo y Enlace a iescuravalera.es */}
          <Col sm={8} className="text-center text-sm-end">
            <a href="https://iescuravalera.es" target="_blank" rel="noopener noreferrer" className="text-light d-flex align-items-center justify-content-center justify-content-sm-end">
              <img 
                src="/public/logo.png" 
                alt="Logo de IES Cura Valera" 
                style={{ width: '40px', height: '40px', marginRight: '8px' }}
              />
              iescuravalera.es
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
