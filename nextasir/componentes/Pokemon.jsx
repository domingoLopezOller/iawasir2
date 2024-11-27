'use client'
import { useEffect, useState } from 'react';

export default function PokemonPage() {
  const [pokemons, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemo');
        if (!response.ok) {
          throw new Error('Error al cargar los Pokemon');
        }
        const data = await response.json();
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);
  if (loading) {
    return <div>Cargando...</div>; // Componente de carga
}

if (error) {
    return <div>Error: {error}</div>; // Manejo de errores
}

return (
    <div>
        <h1>Lista de Pokemon</h1>
        <ul>
            {pokemons.results.map((pokemon, index) => (
                <li key={index}>{pokemon.name}</li>
            ))}
        </ul>
    </div>
);
}