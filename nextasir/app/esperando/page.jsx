import { Suspense } from "react";

var sleep = function(ms){ return new Promise(resolve => setTimeout(resolve, ms));};
export default function Page() {

    return (
        <>
        <h2>Esto sí se va a ver </h2>
        <Suspense fallback="Cargando....">
        {sleep(3000)}
        <h1>PÁGINA QUE ESPERARÁ 3 segundos PARA MOSTRARSE</h1>
        </Suspense>
        </>
    );
}