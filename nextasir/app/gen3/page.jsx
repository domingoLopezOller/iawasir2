'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Error from "../not-found";

export default function Gen3(){
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchGen3Pokemons() {
          const startId= 252;
          const endId=400;
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
       <Error/>
      );
    }