import React from "react";
import Card from 'react-bootstrap/Card';
import './MyCard.css';
import "bootstrap/dist/css/bootstrap.min.css";

function MyCard({ color, titulo, imagen, text }) {
  return (
    <Card className={`h-100 ${color}`} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
}

export default MyCard;