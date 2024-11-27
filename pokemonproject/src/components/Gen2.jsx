import React, { useEffect, useState } from 'react';
import axios from 'axios'; // O usa fetch si no quieres instalar axios.
import './CardGroup.css'; // Usa tu estilo actual para las Cards.

function Gen1() {
  const [pokemons, setPokemons] = useState([]);

  // Función para obtener datos de Pokémon aleatorios
  const fetchRandomPokemon = async () => {
    const promises = [];
    for (let i = 0; i < 10; i++) {

      const randomId = Math.floor(Math.random() * 100) + 152; // Gen 2 tiene 100 Pokémon
      promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`));
    }
    const results = await Promise.all(promises);
    setPokemons(results.map((res) => res.data));
  };

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  return (
    <div className="card-group">
      <h1>Pokémon de la Generación 2</h1>
      <div className="card-container">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="card-pokemon">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
            <p>Tipo: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gen1;
