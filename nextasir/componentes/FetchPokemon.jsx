export const FetchPokemon = async () => {
    let pokemons;
      const response = await fetch('https://pokeapi.co/api/v2/pokemo');
    
      if (!response.ok) {
        throw new Error('Error al cargar los pokemons');
      }
      const data = await response.json();
      pokemons=data.results;
      return (
        <div>
            <h1>Lista de Pokemon</h1>
            <ul>
                {pokemons.map((pokemon,index) => (
                <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
      )
  };