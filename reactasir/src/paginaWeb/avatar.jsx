import React from 'react';
import { useParams } from 'react-router-dom';

function MySkills() {
  const { nombre } = useParams();

  const avatarUrl = nombre === "Domingo"
    ? "https://api.dicebear.com/9.x/avataaars/svg?seed=Domingo"
    : "https://api.dicebear.com/9.x/avataaars/svg?seed=Jazmin";

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Información de contacto:</h2>
      <img
        src={avatarUrl}
        alt={`Avatar de ${nombre}`}
        style={{ width: "350px", height: "350px", borderRadius: "50%" }}
      />
      <h3>Desarrollador: {nombre}</h3>
    </div>
  );
}

export default MySkills;
