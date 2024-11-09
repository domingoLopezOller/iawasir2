// src/paginaWeb/ImageGalleryComponent.jsx
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Importa los estilos por defecto de la galería

const images = [
  {
    original: 'https://unchamodeviaje.wordpress.com/wp-content/uploads/2018/10/img_1500.jpg?w=825',
  },
  {
    original: 'https://aunclicdelaaventura.com/wp-content/uploads/2021/09/Ciudades-mas-bonitas-de-Andalucia-Granada.jpg',
  },
  {
    original: 'https://sevillasecreta.co/wp-content/uploads/2023/05/Mejores-playas-de-Andalucia.jpg',
  },
  {
    original: 'https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1614412603884-7O69W92V61LACNH6T5D5/que-ver-en-malaga.jpg?format=1000w',
  },
  {
    original: 'https://media.traveler.es/photos/61376e83ccdecaa3de6712b9/1:1/w_1335,h_1335,c_limit/131800.jpg',
  },
  { 
   original: 'https://www.ruralidays.com/viajar/wp-content/uploads/2017/05/Qu%C3%A9-hacer-en-Andaluc%C3%ADa-Catedral-Manquita-de-M%C3%A1laga.jpg'
  },
];

function ImageGalleryComponent() {
  return (
    <div style={{ width: '20vw', margin: '0 auto' }}>
      <ImageGallery
        items={images}
        showPlayButton={true}
        showFullscreenButton={false}
        showThumbnails={true}
        showNav={true}
        showBullets={false}
        autoPlay={true}
        slideInterval={5000}
        slideDuration={1000}
        thumbnailPosition="top"
      />
    </div>
  );
}

export default ImageGalleryComponent;
