"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import LibroForm from "@/componentes/libroForm"

async function getLibros() { //GET libros no necesita token
  const res = await fetch("http://localhost:5000/libro")
  if (!res.ok) throw new Error("Failed to fetch libros")
  return res.json()
}

async function getAutores() { //GET autores no necesita token
  const res = await fetch("http://localhost:5000/autor")
  if (!res.ok) throw new Error("Failed to fetch autores")
  return res.json()
}

async function addLibro(formData) { //POST libros ncesita token
  const token = localStorage.getItem("token")
  if (!token) throw new Error("No token found")
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
      Authorization: `Bearer ${token}`,
    },
  })
  if (!res.ok) throw new Error("Failed to add libro")
}

async function deleteLibro(id) { //DELETE libros necesita token
  const token = localStorage.getItem("token")
  if (!token) throw new Error("No token found")

  const res = await fetch(`http://localhost:5000/libro/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!res.ok) throw new Error("Failed to delete libro")
}

export default function AdminLibros() {
  const [libros, setLibros] = useState([])
  const [autores, setAutores] = useState([])
  const router = useRouter()

  useEffect(() => {//Vamos a leer el token y si tienes el token podrás estar en esta parte
    const token = localStorage.getItem("token")
    if (!token) {
      alert("No estás autenticado. Por favor, inicia sesión.")
      router.push("/bibliotecatic")
      return
    }

    Promise.all([getLibros(), getAutores()])
      .then(([librosData, autoresData]) => {
        setLibros(librosData)
        setAutores(autoresData)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
        if (error.message === "No token found" || error.message.includes("Failed to fetch")) {
          alert("Tu sesión ha expirado o no tienes permisos. Por favor, inicia sesión de nuevo.")
          localStorage.removeItem("token")
          router.push("/bibliotecatic")
        }
      })
  }, [router])

  const handleAddLibro = async (formData) => { //Gestión de añadir nuevo libro
    try {
      await addLibro(formData)
      const updatedLibros = await getLibros()
      setLibros(updatedLibros)
    } catch (error) {
      console.error("Error adding libro:", error)
      if (error.message === "No token found" || error.message === "Failed to add libro") {
        alert("No se pudo agregar el libro. Tu sesión puede haber expirado.")
        router.push("/bibliotecatic")
      }
    }
  }

  const handleDeleteLibro = async (id) => { //Gestión de borrar un libro
    try {
      await deleteLibro(id)
      const updatedLibros = await getLibros()
      setLibros(updatedLibros)
    } catch (error) {
      console.error("Error deleting libro:", error)
      if (error.message === "No token found" || error.message === "Failed to delete libro") {
        alert("No se pudo eliminar el libro. Tu sesión puede haber expirado.")
        router.push("/bibliotecatic")
      }
    }
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">Administrar Libros</h1>
      <LibroForm onSubmit={handleAddLibro} autores={autores} />
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
                <button onClick={() => handleDeleteLibro(libro.id)} className="bg-red-500 text-white px-4 py-2 rounded">
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

