import React from 'react';
import MyCard from './MyCard'; // Asegúrate de que MyCard contenga las cartas
import './Section.css'; // Archivo de estilos si necesitas personalizar más

const cardsData = [
  { imagen: "/imagendepprueba.jpg", title: "KEVINDEB", text: "This is a wider card with supporting text below as a natural lead-in to additional content." },
  { imagen: "/imagendepprueba.jpg", title: "KEVINPUBL", text: "This card has supporting text below as a natural lead-in to additional content." },
  { imagen: "/imagendepprueba.jpg", title: "KEVINTEAM", text: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action." }
];

const Section = () => {
  return (
    <section className="section-content">
      <div className="container mt-4">
        <div className="row">
          {cardsData.map((card, index) => (
            <div className="col" key={index}>
              <MyCard
                imagen={card.imagen}
                titulo={card.title}
                text={card.text}
                color="azul" // Puedes cambiar el color según sea necesario
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
