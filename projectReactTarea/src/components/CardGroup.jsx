import React from "react";
import MyCard from "./MyCard.jsx";

function CardGroup({ cardsData }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {cardsData.map((card, index) => (
        <div className="col" key={index}>
          <MyCard
            color={card.color}
            titulo={card.title}
            imagen={card.imagen}
            text={card.text}
          />
        </div>
      ))}
    </div>
  );
}

export default CardGroup;
