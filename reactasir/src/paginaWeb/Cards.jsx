import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  } from './noticias.json';
function Tarjeta () 
{
  return (
    <Card style={{ width: '30rem', margin: '30px', display:'grid', gap: '20px' }}>
      <Card.Img variant="top" src={imgSrc} alt={`Imagen de $ {title}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text> {text} 
        </Card.Text>
         <p>HP: {hp}</p>
         <p>Ataque: {ataque}</p>
         <p>Defensa: {defensa}</p>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  );
}


export default Tarjeta;  
