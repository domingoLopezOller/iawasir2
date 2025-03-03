import {Detalle} from '@/componentes/detalle'

export default async function Page({params}) {
    const {nombre} = await params
    return <Detalle nombre={nombre}/>
}