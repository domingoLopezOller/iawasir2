import { fetchData } from "@/componentes/funciones"
import { notFound } from "next/navigation"

export default async function Page({params}) {
    const { id } = await params
    if (id<=0 || id>1000){
      return notFound();
    }
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