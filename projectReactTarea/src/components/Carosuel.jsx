import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Asegúrate de importar el JS de Bootstrap
import './Carosuel.css';

const CarouselComponent = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://media.gettyimages.com/id/182727232/es/foto/el-alhambra.jpg?s=2048x2048&w=gi&k=20&c=1AjCB24FTvLrWhgzEBWC07KQPmTxVAzoQTkXmlyvQz8=" className="d-block w-100" alt="Primera imagen" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Primera diapositiva</h5>
            <p>Descripción para la primera diapositiva.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1523949473921-P9M4S22TVYZUFCMKS9HJ/setas-sevilla.jpg?format=1500w" className="d-block w-100" alt="Segunda imagen" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Segunda diapositiva</h5>
            <p>Descripción para la segunda diapositiva.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://www.renfe.com/content/dam/renfe/es/Viajeros/Secciones/Experiencias/esc%C3%A1pate-en-tren/p-pueblos-andalucia.jpg" className="d-block w-100" alt="Tercera imagen" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Tercera diapositiva</h5>
            <p>Descripción para la tercera diapositiva.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
