import Link from "next/link";

export default async function Page({params}) {
    let {id}=await params;
    if(id>100){
        return <h2>El producto {id} no existe</h2>
    }
    else{
    return (<>
        <h2>Producto {id}</h2>
        <Link href="/rutaDinamica">Volver atrás</Link>
        </>
    );
}
}