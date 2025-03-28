import Navbar from "@/componentes/navbar"
import Link from "next/link"

async function getLibros() {
    const res = await fetch("http://localhost:5000/libro")
    if (!res.ok) throw new Error("Failed to fetch libros")
    return res.json()
  }
  
  export default async function Home() {
    const libros = await getLibros()
    return (
      <div className="container mx-auto px-4">
        {/* <Navbar/> */}
        <h1 className="text-3xl font-bold my-4">Libros Disponibles</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {libros.map((libro) => (
            <Link href={`/bibliotecatic/libros/${libro.id}`} key={libro.id}>
              <div className="border p-4 rounded-lg hover:shadow-lg transition">
                <img src={libro.portadaUrl || "/file.svg"} alt={libro.titulo} className="w-full h-48 object-cover" />
                <h2 className="text-xl font-semibold mt-2">{libro.titulo}</h2>
                <p className="text-gray-600">por {libro.autor?.nombre && `Autor: ${libro.autor.nombre}`}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>  )}