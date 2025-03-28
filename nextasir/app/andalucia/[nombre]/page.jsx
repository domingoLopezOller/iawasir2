import Example from "@/componentes/DetalleCiudad";

export default async function Page({params}) {
    let {nombre}=await(params);
    return (
        <Example nombre={nombre}/>
    );
}