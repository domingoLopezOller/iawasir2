import { FetchPokemon } from "@/componentes/FetchPokemon";
import Rutas from "@/componentes/nav";
import PokemonModal from "@/componentes/pokemon_modal";
import Image from "next/image";
import { Navbar } from "react-bootstrap";
import PokemonPage from "./pokemon/page";
import PokemonList from "@/componentes/pokemon_list";
import RandomPokemonCard from "@/componentes/pokemon";

export default function Home(){
  return(
    <div>
      <RandomPokemonCard/>
    </div>
  )
  
}