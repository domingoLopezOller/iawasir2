// src/paginaWeb/ImageGalleryComponent.jsx
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Importa los estilos por defecto de la galería

const images = [
  {
    original: 'https://unchamodeviaje.wordpress.com/wp-content/uploads/2018/10/img_1500.jpg?w=825',
    title: 'Alhambra, Granada',
    description: 'Un lugar historico lleno de historia y arquitectura', 
  },
  {
    original: 'https://aunclicdelaaventura.com/wp-content/uploads/2021/09/Ciudades-mas-bonitas-de-Andalucia-Granada.jpg',
    title: 'Vista de Granada',
    description: 'Uno de los paisajes mas bonitos de Andalucia',
  },
  {
    original: 'https://sevillasecreta.co/wp-content/uploads/2023/05/Mejores-playas-de-Andalucia.jpg',
    title:'Playas de Andalucia',
    description:'Hermosas playas para disfrutar del verano',
  },
  {
    original: 'https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1614412603884-7O69W92V61LACNH6T5D5/que-ver-en-malaga.jpg?format=1000w',
    title:'Malaga',
    description:'Una ciudad vibrante con una rica oferta cultural',
  },
  { 
   original: 'https://www.ruralidays.com/viajar/wp-content/uploads/2017/05/Qu%C3%A9-hacer-en-Andaluc%C3%ADa-Catedral-Manquita-de-M%C3%A1laga.jpg',
   title:'Catedral de Malaga',
   description:'Un simbolo historico de la ciudad',
  },
];

function ImageGalleryComponent() {
  const renderCustomItem = (item) => {
    return(
      <div style={{position: 'relative', textAlign:'initial'}}>
        <img src={item.original} alt={item.title} style={{width: '50%', height:'50%', objectFit:'cover'}}/>
        
        <div style={{position: 'absolute',bottom:'0',width:'50%',backgroundColor:'#CBA238',padding:'10px', boxSizing:'border-box' }}>
          <h3 style={{margin: 0, fontSize:'1.2em', fontWeight:'bold'}}>{item.title}</h3>
          <p style={{margin: '5px 0 0', fontSize: '0.9em'}}>{item.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div style={{ width: '50vw', margin: '0 auto' }}>
      <ImageGallery
        items={images}
        renderItem={renderCustomItem}
        showPlayButton={true}
        showFullscreenButton={false}
        showThumbnails={true}
        showNav={true}
        showBullets={false}
        autoPlay={true}
        slideInterval={4000}
        slideDuration={1000}
        thumbnailPosition="top"
      />
    </div>
  );
}

export default ImageGalleryComponent;
