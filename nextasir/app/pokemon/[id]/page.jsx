async function fetchData(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error("No se pudo cargar el Pokémon");
  const data = await res.json();
  return {
    numero: data.id,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
    nombre: data.name,
    experiencia: data.base_experience,
    hp: data.stats[0].base_stat,
    ataque: data.stats[1].base_stat,
    defensa: data.stats[2].base_stat,
    especial: data.stats[3].base_stat,
  };
}
  export default async function PokemonPage({ params }) {
    const { id } = params;
    if (id < 1 || id > 1000) {
      return notFound();
    }
  
    const pokemon = await fetchData(id);
  
    return (
      <div>
        <h1>Detalles del Pokémon</h1>
        <div style={{ textAlign: 'center', marginTop: '1rem'}}>
          <h3>
            #{pokemon.numero} - {pokemon.nombre.toUpperCase()}
          </h3>
          <img src={pokemon.img} alt={pokemon.nombre} style={{ width: '500px', height: '450px' }}/>
          <p>HP: {pokemon.hp} | Ataque: {pokemon.ataque} | Defensa: {pokemon.defensa} | Especial: {pokemon.especial}</p>
          <p>Experiencia base: {pokemon.experiencia}</p>
          <a href="/home" style={{color:"blue", textDecoration: "underline"}}>Volver</a>
          <p/>
          <a href="/pokemon" style={{color:"blue", textDecoration: "underline"}}>Anterior</a>
          <p/>
          <a href="/pokemon" style={{color:"blue", textDecoration: "underline"}}>Siguiente</a>
        </div>
      </div>
    );
  }
  