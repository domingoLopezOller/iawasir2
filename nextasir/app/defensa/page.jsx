"use client"; // Asegura que este componente se renderiza en el lado del cliente

import { useEffect, useState } from "react";
import { fetchData, fetchData2 } from "@/componentes/funciones";
import Tarjeta from "@/componentes/Tarjeta"; // Asegúrate de ajustar la ruta según sea necesario
import Image from "next/image";

export default function RandomPokemonPage() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    // Genera un número aleatorio entre 1 y 1000
    const randomId = Math.floor(Math.random() * 1000) + 1;

    // Obtiene los datos del Pokémon aleatorio
    async function getPokemon() {
      try {
        let pokemonData = await fetchData2({ id: randomId });
        console.log(pokemonData);
        setPokemon(pokemonData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    getPokemon();
  }, []);

  if (!pokemon) {
    return <img src="/Loading_2.gif"/> ;
  }

  return (
    <>
      <Tarjeta 
        nombre={pokemon.nombre}
        id={pokemon.numero}
        imgSrc={pokemon.img}
      />
    </>
  );
}
