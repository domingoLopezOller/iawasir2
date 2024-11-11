import React, { useState, useEffect } from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import heroesData from "../../src/heroes.json"; // Asegúrate de que la ruta sea correcta

const HeroSelector = () => {
  const [selectedHero, setSelectedHero] = useState("");
  const [heroInfo, setHeroInfo] = useState(null);

  // Asignar el primer héroe al seleccionar por defecto
  useEffect(() => {
    if (heroesData && heroesData.length > 0) {
      const defaultHero = heroesData[0].superhero;
      setSelectedHero(defaultHero);
      // Configurar la información del héroe por defecto
      const defaultHeroInfo = heroesData.find((hero) => hero.superhero === defaultHero);
      setHeroInfo(defaultHeroInfo || null);
    }
  }, []);

  const handleChange = (event) => {
    const heroName = event.target.value;
    setSelectedHero(heroName);
    const heroData = heroesData.find((hero) => hero.superhero === heroName);
    setHeroInfo(heroData || null);  // Asegurarse de que los datos se actualicen correctamente
  };

  return (
    <div className="hero-selector-container">
      <FormControl fullWidth>
        <InputLabel id="hero-select-label">Selecciona un héroe</InputLabel>
        <Select
          labelId="hero-select-label"
          value={selectedHero}
          onChange={handleChange}
          label="Selecciona un héroe"
        >
          {heroesData.map((hero, index) => (
            <MenuItem key={index} value={hero.superhero}>
              <img
                src={`/images/${hero.image}`} // Asumiendo que las imágenes están en la carpeta public/images
                alt={hero.superhero}
                style={{ width: 30, height: 30, marginRight: 10 }} // Tamaño y espaciado de la imagen
              />
              {hero.superhero}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Mostrar la información del héroe seleccionado */}
      {heroInfo && (
        <div className="hero-info">
          <h2>{heroInfo.superhero}</h2>
          <img
            src={`/images/${heroInfo.image}`} // Mostrar la imagen del héroe seleccionado
            alt={heroInfo.superhero}
            style={{ width: 200, height: 200, objectFit: "cover" }} // Tamaño y ajuste de la imagen
          />
          <p><strong>Publisher:</strong> {heroInfo.publisher}</p>
          <p><strong>Alter Ego:</strong> {heroInfo.alter_ego}</p>
          <p><strong>First Appearance:</strong> {heroInfo.first_appearance}</p>
          <p><strong>Characters:</strong> {heroInfo.characters}</p>
        </div>
      )}
    </div>
  );
};

export default HeroSelector;

