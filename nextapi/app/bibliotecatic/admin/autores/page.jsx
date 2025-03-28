import AutorForm from "@/componentes/autorForm"


async function getAutores() {
  const res = await fetch("http://localhost:5000/autor", { cache: "no-store" })
  if (!res.ok) throw new Error("Failed to fetch autores")
  return res.json()
}

export default async function AdminAutores() {
  const autores = await getAutores()

  async function addAutor(formData) {
    "use server"
    const res = await fetch("http://localhost:5000/autor", {
      method: "POST",
      body: JSON.stringify({
        nombre: formData.get("nombre"),
        biografia: formData.get("biografia"),
        fotoUrl: formData.get("fotoUrl"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!res.ok) throw new Error("Failed to add autor")
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">Administrar Autores</h1>
      <AutorForm onSubmit={addAutor} />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Lista de Autores</h2>
        <ul className="space-y-4">
          {autores.map((autor) => (
            <li key={autor.id} className="flex items-center justify-between border p-4 rounded">
              <div>
                <h3 className="text-xl">{autor.nombre}</h3>
                <p className="text-gray-600">{autor.biografia.substring(0, 100)}...</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
