'use client';
import { useEffect, useState } from 'react';

export default function RandomPokemonCard() {
    const [pokemons, setPokemon] = useState([]);
   
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
    if (!pokemons) return <div>Cargando...</div>;
       
    return (
        <div style={{border: "1px solid #red", padding:"10px", textAlign:"center"}}>
          <img src={pokemons.img} alt={pokemons.nombre} style={{width:"550px"}} />
          <h3>{pokemons.nombre ? pokemons.nombre.toUpperCase() : "Cargando..." }</h3>
          <a href={`/pokemon/${pokemons.numero}`}>Saber más</a>
        </div>
        );
       }
       

    