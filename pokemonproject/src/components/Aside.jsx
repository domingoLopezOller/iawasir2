import React from "react";
import HeroSelector from "./HeroeSelector";  // Importa el nuevo componente
import "./Aside.css";

const Aside = () => {
  return (
    <aside className="aside-container">
      <HeroSelector /> {/* Usamos el componente HeroSelector aquí */}

      <div className="video-container">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Cambia este link por el video que deseas mostrar
          title="Video de YouTube"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </aside>
  );
};

export default Aside;
