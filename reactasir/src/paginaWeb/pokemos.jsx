import React, {useState,useEffect} from 'react'
import Tarjeta from './Cards';

export const Pokemon = ({id}) => 
  { const [pokemon, setPokemon] = useState([]);

useEffect(() => { 
fetch("https://pokeapi.co/api/v2/pokemon/"+id) // hacemos la petición get 
.then(res => res.json()) // cuando hayamos terminado (then) parseamos a json la respuesta de la petición 
.then(data => 
  setPokemon( 
{ numero: data.id, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+data.id+".png", 
  imgJuego: data.sprites.front_default, 
  imgCvg: data.sprites.other.dream_world.front_default, 
  nombre: data.name, 
  experiencia: data.base_experience,
  hp: data.stats[0].base_stat, 
  ataque: data.stats[1].base_stat, 
  defensa: data.stats[2].base_stat, 
  especial: data.stats[3].base_stat, 
} )
); // cuando hayamos terminado (then) actualizamos el estado nombre 
}, [id]); 

return ( 
<Tarjeta 
  title={pokemon.title}
  text={pokemon.text}
  imgSrc={pokemon.img}
  hp={pokemon.hp}
  ataque={pokemon.ataque}
  defensa={pokemon.defensa}
  />
 );
};