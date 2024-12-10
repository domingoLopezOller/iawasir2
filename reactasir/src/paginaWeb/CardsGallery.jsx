import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid, Grid2 } from '@mui/material';
import {} from './noticias.json'
// Las imágenes y sus descripciones
const imageCards = [
  {
    title: 'La Alhambra de Granada',
    description: 'Palacio medieval y una de las joyas del arte islámico.',
    image: 'https://unchamodeviaje.wordpress.com/wp-content/uploads/2018/10/img_1500.jpg?w=825',
  },
  {
    title: 'La Alcazaba de Almería',
    description: 'Fortaleza medieval.',
    image: 'https://sevillasecreta.co/wp-content/uploads/2023/05/Mejores-playas-de-Andalucia.jpg',
  },
  {
    title: 'Qué ver en Málaga',
    description: 'Una de las ciudades más bellas de Andalucía.',
    image: 'https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1614412603884-7O69W92V61LACNH6T5D5/que-ver-en-malaga.jpg?format=1000w',
  },
];
function ImageCards() {
    return (
      <div style={{ padding: '1rem' }}>
        <Grid2 container spacing={1}>
          {imageCards.map((card, index) => (
            <Grid2 item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                <Button variant="primary" style={{color:'white', backgroundColor:'blue'}}>Ver más</Button>
                </CardActions>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </div>
    );
  }
  
  export default ImageCards;