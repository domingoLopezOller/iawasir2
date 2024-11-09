import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Tarjeta({ title, text, imgSrc}) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={"./paisaje.jpeg"} alt="Imagen de Tarjeta" />
      <Card.Body>
        <Card.Title>Tarjeta </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


export default Tarjeta;