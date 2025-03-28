
import { Suspense } from "react"
import { FetchPokemon } from "@/componentes/FetchPokemon"
import ErrorBoundary from "./error"

const Page = ({}) => {
  return (
    <ErrorBoundary>
        <Suspense fallback={<h2>Cargando....</h2>}><FetchPokemon/></Suspense>
    </ErrorBoundary>
  )
}

export const metadata = {
    title: "Página leyendo Pokemon NEXT",
    description: "Accediendo a POKAPI",
  };

export default Page