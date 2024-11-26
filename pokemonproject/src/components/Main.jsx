import React from 'react';
import Aside from './Aside'; // Importa el componente Aside
import Section from './Section'; // Importa el componente Section
import CarouselBootstrap from './Carosuel'; // Importa el componente Carousel
import './Main.css'; // El archivo CSS para aplicar estilos

const Main = () => {
  return (
    <main className="main-content">
      <div className="aside-section">
        <Aside />   {/* El aside se colocará a la izquierda */}
        <Section /> {/* El section se colocará a la derecha */}
      </div>
      <CarouselBootstrap /> {/* El carrusel se mostrará debajo del section */}
    </main>
  );
};

export default Main;