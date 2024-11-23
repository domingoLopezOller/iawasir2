// Sidebar.jsx
import React, { useState } from 'react';
import { Select, MenuItem } from '@mui/material';
import heroes from '../heroes.json'; // Importa el array de héroes

function Sidebar() {
  const [hero, setHero] = useState('');

  return (
    <aside className="sidebar">
      <h3>Selecciona tu Héroe</h3>
      <Select
  value={hero}
  onChange={(e) => setHero(e.target.value)}
  displayEmpty
  fullWidth
>
  <MenuItem value="" disabled>Selecciona tu héroe</MenuItem>
  {heroes
    .filter(heroObj => heroObj.publisher === "Marvel Comics")
    .map((heroObj, index) => (
      <MenuItem key={index} value={heroObj.superhero.toLowerCase()}>
        {heroObj.superhero}
      </MenuItem>
    ))}
</Select>

      

      <h3>Video de Marvel</h3>
      <iframe
        width="100%"
        height="200"
        src="https://www.youtube.com/embed/6ZVtQC8UFUc?si=Dkgq1f0rUbPoi1AG"
        title="Video de Marvel"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </aside>
  );
}

export default Sidebar;
