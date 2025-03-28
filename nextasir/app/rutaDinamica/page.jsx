import Link from "next/link";

export default function Page() {
    return (<>
        <h1>Directorio raiz de Ruta Dinámica</h1>
        <Link href="/rutaDinamica/1">Producto 1</Link>
        <Link href="/rutaDinamica/2">Producto 2</Link>
        <Link href="/rutaDinamica/3">Producto 3</Link>
        <Link href="/rutaDinamica/4">Producto 4</Link>
        </>
    );
}