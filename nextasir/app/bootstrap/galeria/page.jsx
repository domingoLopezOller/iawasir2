'use client'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src="/header.jpg" width="400" height="350" alt="Puerta del instituto" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://www.spain.info/export/sites/segtur/.content/images/galerias/alhambra/alhambra-granada-shutterstock_158639000.jpg" unoptimized="true" width="400" height="350" alt="Puerta del instituto" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://turismo.huercal-overa.es/wp-content/uploads/2021/08/Castillo-Huercal-Overa.jpg" width="400" height="350" alt="Puerta del instituto" unoptimized="true" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;