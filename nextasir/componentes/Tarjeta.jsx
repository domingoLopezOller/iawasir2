"use client"; 

import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Tarjeta({ nombre, id, imgSrc }) {
  return (
    <Card style={{ width: '18rem', textAlign: 'center' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <h2>{nombre}</h2>
        <h2>{id}</h2>
        <Link href={`/defensa/${id}`} passHref> <Button variant="primary">Saber más</Button> </Link>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;