import axios from "axios";

const  client = axios.create({
  baseURL: "http://localhost:3000/api/productos"
});

async function fetchData({id}){
    const res = await client.get(`/${id}`);
      const data = await res.data;
      const pokemon = {
        numero: data.id,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        imgJuego: data.sprites.front_default,
        imgCvg: data.sprites.other.dream_world.front_default,
        nombre: data.name,
        experiencia: data.base_experience,
        hp: data.stats[0].base_stat,
        ataque: data.stats[1].base_stat,
        defensa: data.stats[2].base_stat,
        especial: data.stats[3].base_stat,
      };
      return pokemon;
}
export default async function Page({params}) {
    const { id } = await params
    let pokemon= await fetchData({id})
      return <>
        <h1>POKEMON EN NEXTJS</h1>
        <div>
            <h3> Número: {pokemon.numero} - {pokemon.nombre}</h3>
            <img src={pokemon.img} alt="pokemon"/>
            <p>HP: {pokemon.hp} Ataque: {pokemon.ataque} Defensa: {pokemon.defensa}</p>
        </div>
        </>
  }