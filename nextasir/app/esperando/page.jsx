import { Suspense } from "react";

var sleep = function(ms){ return  new Promise(resolve => setTimeout(resolve, ms));};
export default function Page() {
    return (
    <>
    <h2>Esperando 3min</h2>
    <Suspense fallback="Cargando...">
        {sleep(3000)}
        <h1>HAY PROBLEMA</h1>
    </Suspense>
    </>
    );
    
};