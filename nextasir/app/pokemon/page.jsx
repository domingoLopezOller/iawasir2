'use client';
import PokemonList from "@/componentes/pokemon_list";
import PokemonModal from "@/componentes/pokemon_modal";
import { useEffect, useState } from "react";

export default function PokemonPage(){
    const [pokemons, setPokemons] =useState([]);
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState (null);

useEffect(() => {
    async function fetchPokemons() {
        try{
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
            if (!response.ok) {
                throw new Error("Error al cargar los pokemones")
            }
            const data = await response.json();
            setPokemons(
                data.results.map((pokemon, index) => ({
                    numero:index + 1,
                    nombre: pokemon.name,
                    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
                }))
            );

        }catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }
    fetchPokemons();
},[]);


if (loading) return <div>Cargando...</div>;
if (error) return <div>Error: {error}</div>;

return(
    <div>
        <h1>Lista de Pokemon</h1>
        <div style={{display: 'flex', flexWrap:'wrap',gridTemplateColumns: 'repeat(1, 1fr)',gap:'5rem'}}>
            {pokemons.map((pokemon) => (
               <div key={pokemon.numero} style={{ border: "1px solid #ccc", padding: "10px" }}>
               <img src={pokemon.img} alt={pokemon.nombre} style={{ width: "450px" }} />
               <h3>{pokemon.nombre.toUpperCase()}</h3>
               <a href={`/pokemon/${pokemon.numero}`} style={{ color: "blue", textDecoration: "underline" }}>
                 Saber más
               </a>
             </div>
            ))}
        </div>
    </div>
)
}
