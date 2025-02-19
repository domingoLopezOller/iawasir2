"use client"
import { useState, useEffect } from "react"
import LibroForm from "@/componentes/libroForm"

async function getLibros() {
  const res = await fetch("http://localhost:5000/libro")
  if (!res.ok) throw new Error("Failed to fetch libros")
  return res.json()
}

async function getAutores() {
  const res = await fetch("http://localhost:5000/autor")
  if (!res.ok) throw new Error("Failed to fetch autores")
  return res.json()
}

async function addLibro(formData) {
  console.log(JSON.stringify({
    titulo: formData.get("titulo"),
    descripcion: formData.get("descripcion"),
    portadaUrl: formData.get("portadaUrl"),
    autorId: parseInt(formData.get("autorId"), 10),
  }),);
  const res = await fetch("http://localhost:5000/libro", {
    method: "POST",
    body: JSON.stringify({
      titulo: formData.get("titulo"),
      descripcion: formData.get("descripcion"),
      portadaUrl: formData.get("portadaUrl"),
      autor: formData.get("autorId"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  if (!res.ok) throw new Error("Failed to add libro")
}

async function deleteLibro(id) {
  const res = await fetch(`http://localhost:5000/libro/${id}`, {
    method: "DELETE",
  })
  if (!res.ok) throw new Error("Failed to delete libro")
}

export default function AdminLibros() {
  const [libros, setLibros] = useState([])
  const [autores, setAutores] = useState([])

  useEffect(() => {
    Promise.all([getLibros(), getAutores()]).then(([librosData, autoresData]) => {
      setLibros(librosData)
      setAutores(autoresData)
    })
  }, [])

  const handleAddLibro = async (formData) => {
    await addLibro(formData)
    const updatedLibros = await getLibros()
    setLibros(updatedLibros)
  }

  const handleDeleteLibro = async (id) => {
    await deleteLibro(id)
    const updatedLibros = await getLibros()
    setLibros(updatedLibros)
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">Administrar Libros</h1>
      <LibroForm onSubmit={handleAddLibro} autores={autores}  />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Lista de Libros</h2>
        <ul className="space-y-4">
          {libros.map((libro) => (
            <li key={libro.id} className="flex items-center justify-between border p-4 rounded">
              <div>
                <h3 className="text-xl">{libro.titulo}</h3>
                <p className="text-gray-600">{libro.autor?.nombre && `Autor: ${libro.autor.nombre}`}</p>
              </div>
              <div>
                <button
                  onClick={() => handleDeleteLibro(libro.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
