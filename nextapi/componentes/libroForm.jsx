"use client"

import { useState } from "react"


export default function LibroForm({ onSubmit, autores }) {
  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [portadaUrl, setPortadaUrl] = useState("")
  const [autorId, setAutorId] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("titulo", titulo)
    formData.append("descripcion", descripcion)
    formData.append("portadaUrl", portadaUrl)
    formData.append("autorId", autorId)
    onSubmit(formData)
    setTitulo("")
    setDescripcion("")
    setPortadaUrl("")
    setAutorId("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="titulo" className="block">
          Título
        </label>
        <input
          type="text"
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label htmlFor="descripcion" className="block">
          Descripción
        </label>
        <textarea
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label htmlFor="portadaUrl" className="block">
          URL de la portada
        </label>
        <input
          type="url"
          id="portadaUrl"
          value={portadaUrl}
          onChange={(e) => setPortadaUrl(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label htmlFor="autorId" className="block">
          Autor
        </label>
        <select
          id="autorId"
          value={autorId}
          onChange={(e) => setAutorId(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        >
          <option value="">Seleccione un autor</option>
          {autores.map((autor) => (
            <option key={autor.id} value={autor.id}>
              {autor.nombre}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Guardar Libro
      </button>
    </form>
  )
}
