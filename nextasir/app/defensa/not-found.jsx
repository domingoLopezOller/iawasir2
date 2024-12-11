"use client"
import Image from "next/image";
import Link from "next/link";

export default function Error() {

    return (
        <>
        <div>
            <Image src="/noPokemon.png" width="500" height="350" alt="No hay pokemon" unoptimized="true" />
            <h2>Ese Pokemon no existe!</h2>
            <Link href="/defensa"><button> Volver a la página principal  </button></Link>
        </div>
    
        </>
    );
}