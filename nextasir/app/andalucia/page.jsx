'use client'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Link from 'next/link';

function CarouselFadeExample() {
  return (
    <div style={{width:500, height:450}}>
    <Carousel fade>
      <Carousel.Item>
        <Image src="https://t3.ftcdn.net/jpg/02/48/54/30/360_F_248543017_qg21vktvFRHXWIV54pqIGZ26uSpX0qgg.jpg" width="500" height="450" alt="Almería" unoptimized="true" />
        <Carousel.Caption>
          <h3>ALMERÍA</h3>
          <Link href="/andalucia/almeria"><h4>¿Quieres saber más?</h4></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://www.spain.info/.content/imagenes/cabeceras-grandes/andalucia/alhambra-granada-20044065-istock.jpg" width="500" height="450" alt="Almería" unoptimized="true" />
        <Carousel.Caption>
          <h3>GRANADA</h3>
          <Link href="/andalucia/granada"><h4>¿Quieres saber más?</h4></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://cdn.pixabay.com/photo/2020/05/12/18/29/city-5164368_1280.jpg" width="500" height="450" alt="Almería" unoptimized="true" />
        <Carousel.Caption>
        <h3>SEVILLA</h3>
          <Link href="/andalucia/sevilla"><h4>¿Quieres saber más?</h4></Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFadeExample;