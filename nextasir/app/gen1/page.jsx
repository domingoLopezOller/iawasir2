'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Gen3(){
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchGen3Pokemons() {
          const startId= 2;
          const endId=150;
          try {
            const ids =  Array.from({ length: 10 }, () => 
              Math.floor(Math.random() * (endId - startId + 1)) + startId
            );
            const promises = ids.map((id) => 
              fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then((res) => res.json())
                .then((data) => ({
                  numero: data.id,
                  nombre: data.name,
                  img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
                }))
            );
            
            const results = await Promise.all(promises);
            setPokemons(results);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        }
    
        fetchGen3Pokemons();
      }, []);
    
      if (loading) return <div><Image src="/cargando.png" width="700" height="700" alt="cargando"/></div>;
      if (error) return <div>Error: {error}</div>;
    
      return (
        <div>
          <h1>Pokemones Gen 1</h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {pokemons.map((pokemon) => (
              <div
                key={pokemon.numero}
                style={{
                  border: "1px solid gray",
                  borderRadius: "10px",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                <img src={pokemon.img} alt={pokemon.nombre} style={{ width: "450px" }} />
                <h3>{pokemon.nombre.toUpperCase()}</h3>
                <a href={`/pokemon/${pokemon.numero}`}>Saber más</a>
              </div>
            ))}
          </div>
        </div>
      );
    }