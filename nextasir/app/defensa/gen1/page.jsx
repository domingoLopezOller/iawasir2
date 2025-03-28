"use client"; // Asegura que este componente se renderiza en el lado del cliente

import {useEffect, useState } from "react";
import { fetchData } from "@/componentes/funciones";
import Tarjeta from "@/componentes/Tarjeta"; // Asegúrate de ajustar la ruta según sea necesario



export default function RandomPokemonGen1Page() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getRandomPokemonsGen1 = async () => {
      try {
        // Obtén la lista de Pokémon de la generación 1
        const response = await fetch('https://pokeapi.co/api/v2/generation/1/');
        const data = await response.json();
        const pokemonSpecies = data.pokemon_species;

        // Selecciona 10 Pokémon aleatorios de la lista de la generación 1
        const pokemonPromises = [];
        for (let i = 0; i < 10; i++) {
          const randomIndex = Math.floor(Math.random() * pokemonSpecies.length);
          const randomPokemonUrl = pokemonSpecies[randomIndex].url;
          const urlParts = randomPokemonUrl.split('/');
          const randomId = urlParts[urlParts.length - 2]; // Extrae el ID del Pokémon

          // Utiliza la función fetchData para obtener los datos del Pokémon
          pokemonPromises.push(fetchData({ id: randomId }));
        }

        const pokemonsData = await Promise.all(pokemonPromises);
        setPokemons(pokemonsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getRandomPokemonsGen1();
  }, []);

  if (pokemons.length === 0) {
    return <img src="/Loading_2.gif"/> ;
  }

  return (
    <>
    
      <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {pokemons.map((pokemon, index) => (
          <Tarjeta 
            key={index}
            nombre={pokemon.nombre}
            id={pokemon.numero}
            imgSrc={pokemon.img} 
          />
        ))}
      </section>

    </>
  );
}
