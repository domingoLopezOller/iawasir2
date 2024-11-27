import { Suspense } from "react"
import { FetchPokemon } from "@/componentes/FetchPokemon"
import ErrorBoundary from "./error"

const Page = ({}) => {
  return (
    <ErrorBoundary>
        <Suspense fallback={<h2>Cargando Pokemon 2....</h2>}><FetchPokemon/></Suspense>
    </ErrorBoundary>
  )
}

export default Page