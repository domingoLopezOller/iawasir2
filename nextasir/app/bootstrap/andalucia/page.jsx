'use client';
import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';
import Image from 'next/image';

function UncontrolledExample() {
  return (
    <div style={{width:500, height:450}}>
    <Carousel>
      <Carousel.Item>
        <Image src="/almeria.jpg" width="500" height="500" alt="almeria"/>
        <Carousel.Caption style={{background: "red"}}>
          <h3>First slide label</h3>
          <h3><Link href="/bootstrap/andalucia/almeria">¿Saber más?</Link></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
            <Image src="/granada.jpg"  alt="esto es granada" width="500" height="500"/>
        <Carousel.Caption style={{background: "red"}}>
          <h3>Second slide label</h3>
          <h3><Link href="/bootstrap/andalucia/granada">¿Saber más?</Link></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
            <Image src="/valencia.jpg" alt="granada" width="500" height="500" /> 
        <Carousel.Caption style={{background: "red"}}>
          <h3>Third slide label</h3>
          <h3><Link href="/bootstrap/andalucia/valencia">¿Saber más?</Link></h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </div>
  );
}

export default UncontrolledExample;