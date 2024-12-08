'use client'
import PokemonList from "@/componentes/pokemon_list";
import PokemonModal from "@/componentes/pokemon_modal";
import { useEffect, useState } from "react";

export default function Gen1Page(){
    const [pokemon, setPokemons] = useState([]);
    useEffect(() => {
        const fetchGen1Pokemons = async () => {
          const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
          const data = await response.json();
          const shuffled = [...data.results].sort(()=> Math.random() - 0.5).slice(0,10);
          setPokemons(shuffled);
        };
        fetchGen1Pokemons();

    }, []);
    return(
        <div>
            <h1>Pokemones de primera generación</h1>
            <PokemonList generation={1}/>
        </div>
    )
}