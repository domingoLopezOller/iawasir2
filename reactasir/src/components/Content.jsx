import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

function Content() {
  // Cards
  const cards = [
    {
      title: "Parque Natural de Cabo de Gata",
      description: "Un parque natural con impresionantes playas y paisajes volcánicos.",
      img: "https://www.cabogataalmeria.com/storage/media/slider/cala-san-pedro.jpg"
    },
    {
      title: "Alcazaba de Almería",
      description: "Una fortaleza árabe que data del siglo X, con vistas impresionantes de la ciudad.",
      img: "https://bicheando.emociom.com/uploads/seccion/4834/3295.jpg" 
    },
    {
      title: "Desierto de Tabernas",
      description: "El único desierto en Europa continental, famoso por sus paisajes únicos y rodajes de películas.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Amanecer_en_el_desierto.jpg/1200px-Amanecer_en_el_desierto.jpg" 
    }
  ];

  return (
    <section className="content">
      <Row>
        {cards.map((card, index) => (
          <Col key={index} sm={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={card.img} alt={card.title} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Button variant="primary">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Content;
