import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Tarjeta({imagen,titulo,texto}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {texto}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;