'use client';
import Link from "next/link";

function PokemonModal({ pokemon }){
if (!pokemon) {
  return <div>Cargando...</div>;
}
    return(
      <div>
        <img
        src={pokemon.img}
        alt={pokemon.nombre}
        style={{width: '350px', height:'350px',marginBottom:'2rem'}}
        />
        <h3>{pokemon.nombre.toUpperCase()}</h3>
        <Link href={'/pokemon/${pokemon.numero}'}>
        <button style={{padding: '0.5rem 1rem', border:'none', borderRadius:'4px', backgroundColor:'#red', cursor:'pointer'}}>
          ...Saber mas?
        </button>
        </Link> 
      </div>
    )
}
export default PokemonModal;