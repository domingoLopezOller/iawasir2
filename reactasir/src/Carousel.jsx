import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{width:"90%"}}>
      <Carousel.Item>
        <img width="700px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Alcazaba_de_Almer%C3%ADa.jpg/640px-Alcazaba_de_Almer%C3%ADa.jpg" alt="Alcazaba de Almería"/>
        <Carousel.Caption>
          <h3>Alcazaba de almeria</h3>
          <p>Castillo y murallas del Cerro de San Cristóbal de la ciudad española de Almería</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="700px" src="https://turismoalmanzora.com/wp-content/uploads/imagen-de-albox.jpg" alt="Santuario del Saliente"/>
        <Carousel.Caption>
          <h3>Santuario del saliente</h3>
          <p>Situado sobre la cima del Monte Roel en la Sierra de las Estancias y construido en el siglo XVIII, es la joya arquitectónica más importante </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="700px" src="alhambra.jpg" alt="Alhambra" />
        <Carousel.Caption>
          <h3>Alhambraa</h3>
          <p>
          Complejo monumental sobre una ciudad palatina andalusí situada en Granada, España.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;