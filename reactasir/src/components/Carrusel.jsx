// Content.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';

function Content() {
  return (
    <section className="content-section p-4">
      <h2 className="text-center mb-4">Galería de Almería</h2>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.cabogataalmeria.com/storage/media/slider/cala-san-pedro.jpg"
            alt="Cabo de Gata"
          />
          <Carousel.Caption>
            <h3>Cabo de Gata</h3>
            <p>Una de las joyas naturales de Almería.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bicheando.emociom.com/uploads/seccion/4834/3295.jpg"
            alt="Alcazaba de Almería"
          />
          <Carousel.Caption>
            <h3>Alcazaba de Almería</h3>
            <p>Fortaleza histórica en el corazón de la ciudad.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Amanecer_en_el_desierto.jpg/1200px-Amanecer_en_el_desierto.jpg"
            alt="Desierto de Tabernas"
          />
          <Carousel.Caption>
            <h3>Playa de los Genoveses</h3>
            <p>El desierto más grande de Europa.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Content;
