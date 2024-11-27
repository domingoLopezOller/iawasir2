import Link from "next/link";

export default async function Page({params}) {
    let {id}=await params;
    let {forma}=await params;
    return (<>
        <h2>Detalle del producto {id}</h2>
        <h3>Producto de la forma {forma}</h3>
        <Link href="/rutaDinamica">Volver atrás</Link>
        </>
    );
}