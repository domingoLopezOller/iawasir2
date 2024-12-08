import { Suspense } from "react";

var sleep = function(ms){ return  new Promise(resolve => setTimeout(resolve, ms));};
export default function Page() {
    return (
    <>
    <h2>Esperando 3min</h2>
    <Suspense fallback="Cargando...">
        {sleep(3000)}
        <h1>PAGINA QUE ESPERA 3 SEGUNDOS PARA Q SE MUESTRE</h1>
    </Suspense>
    </>
    );
    
};