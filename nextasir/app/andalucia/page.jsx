'use client'
import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';
import Image from 'next/image';

function UncontrolledExample() {
  return (
    <div style={{width:500, height:450}}>
    <Carousel>
      <Carousel.Item>
      <Image src="/almeria.jpg" alt="almeria" width="600" height="450" />
        <Carousel.Caption style={{background: "red"}}>
          <h3>  Almeria</h3>
          <h3><Link href="/andalucia/almeria">¿Saber más?</Link></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/granada.jpg"  alt="esto es granada" width="600" height="450"/> 
        <Carousel.Caption style={{background: "red"}}>
          <h3>Granada</h3>
          <h3><Link href="/andalucia/granada">¿Saber más?</Link></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/valencia.jpg" alt="valencia" width="600" height="450" /> 
        <Carousel.Caption style={{background: "red"}}>
          <h3>Valencia</h3>
          <h3><Link href="/andalucia/valencia">¿Saber más?</Link></h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;