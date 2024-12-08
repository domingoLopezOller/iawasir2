'use client';
import { useEffect, useState } from "react";
import PokemonModal from "./pokemon_modal";
import { Col, Container, Row } from "react-bootstrap";

function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
  
    useEffect(() => {
      // Fetch data for the first 10 Pokémon
      async function fetchPokemons() {
        const promises = Array.from({ length: 10 }, (_, i) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
            .then(res => res.json())
            .then(data => ({
              numero: data.id,
              img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
              nombre: data.name,
              hp: data.stats[0].base_stat,
              ataque: data.stats[1].base_stat,
              defensa: data.stats[2].base_stat,
            }))
        );
  
        const results = await Promise.all(promises);
        setPokemons(results);
    }
  
      fetchPokemons();
    },[]);
  
    return (
      <Container>
        <Row>
          {pokemons.map((pokemon) => (
            <Col key={pokemon.numero}>
              <PokemonModal pokemon={pokemon} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  
  export default PokemonList;