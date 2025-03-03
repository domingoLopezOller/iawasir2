import DetalleCiudad from "@/componentes/detalleciudad";

export default async function Page({params}) {
    let {nombre}=await (params);
    return(
        <DetalleCiudad nombre={nombre} />
    );
}