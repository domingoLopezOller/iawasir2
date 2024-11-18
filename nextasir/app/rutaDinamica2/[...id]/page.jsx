export default async function Page({params}) {
    let {id}=await params;//En id hay un vector con los parámetros introducidos
    if(id.length==1){
        return (<>
        <h1>RUTA PRIMER PARÁMETRO: {id[0]}</h1>
        </>)
    }
    else if (id.length==2){
        return (<>
        <h1>RUTA PRIMER PARÁMETRO: {id[0]}</h1>
        <h1>RUTA SEGUNDO PARÁMETRO: {id[1]}</h1>
        </>)
    }
    else {
        return (<>
            <h1>RUTA PRIMER PARÁMETRO: {id[0]}</h1>
            <h1>RUTA SEGUNDO PARÁMETRO: {id[1]}</h1>
            <h1>RUTA TERCER PARÁMETRO: {id[2]}</h1>
            </>
        )
    }
}