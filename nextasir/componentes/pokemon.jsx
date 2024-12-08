'use client';
import { useEffect, useState } from 'react';

export default function RandomPokemonCard() {
    const [pokemons, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    useEffect(() => {
    const fetchRandomPokemon = async () => { 
      const randomId = Math.floor(Math.random() * 1000) + 1;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      const data = await response.json();
      setPokemon({
        numero: data.id,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        nombre: data.name,
      });
    };

    fetchRandomPokemon();
    }, []);
    if (loading) {
      return <div>Cargando...</div>; // Componente de carga
    }
    if (error) {
    return <div>Error: {error}</div>; // Manejo de errores
    }
        return (
        <div style={{border: "1px solid #ccc", padding:"10px", textAlign:"center"}}>
          <img src={pokemons.img} alt={pokemons.nombre} style={{width:"150px"}} />
          <h3>{pokemons.nombre.toUpperCase()}</h3>
          <a href={`/pokemon/${pokemon.numero}`}>Saber más</a>
        </div>
        );
       }
       

    