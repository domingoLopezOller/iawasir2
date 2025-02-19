async function getLibro(id) {
    const res = await fetch(`http://localhost:5000/libro/${id}`)
    if (!res.ok) return null
    return res.json()
  }
  export default async function LibroDetalle({ params }) {
    const libro = await getLibro(params.id)
    if (!libro) { notFound() }
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-4">{libro.titulo}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={libro.portadaUrl || "/placeholder.svg"} alt={libro.titulo} className="w-full h-auto" />
            <p className="mt-4">{libro.descripcion}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Autor</h2>
            <img src={libro.autor.fotoUrl || "/placeholder.svg"}  alt={libro.autor.nombre}
              className="w-48 h-48 rounded-full my-4 object-cover" />
            <h3 className="text-xl">{libro.autor.nombre}</h3>
            <p>{libro.autor.biografia}</p>
          </div>       
       </div>    
  </div>  )}
  