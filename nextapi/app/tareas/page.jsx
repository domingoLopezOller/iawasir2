'use client'

import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Page() {
    const [tareas, setTareas] = useState([])
  const [nuevaTarea, setNuevaTarea] = useState('')
  const [tareaEditando, setTareaEditando] = useState(null)
  useEffect(() => {
    fetchTareas()
  }, [])
  const fetchTareas = async () => {
    // const res = await fetch('http://localhost:3000/api/tareas')
    // const data = await res.json();     setTareas(data)
    const res = await axios.get('http://localhost:3000/api/tareas');
    setTareas(res.data)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (nuevaTarea.trim()) {
    //   const res = await fetch('/api/tareas', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ texto: nuevaTarea })
    //   })
    //   const nuevaTareaObj = await res.json()
    const nuevaTareaObj = await axios.post('http://localhost:3000/api/tareas', { texto: nuevaTarea });
    
      setTareas([...tareas, nuevaTareaObj.data])
      setNuevaTarea('')
    }
  }
  const handleEditar = async (tarea) => {
    if (tareaEditando && tareaEditando.texto !== tarea.texto) {
    //   const res = await fetch('/api/tareas', {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ id: tarea.id, texto: tareaEditando.texto })
    //   })
    //   const tareaActualizada = await res.json()
const tareaActualizada = await axios.put('http://localhost:3000/api/tareas',{ id: tarea.id, texto: tareaEditando.texto });
//const tareaActualizada = res.data;
      setTareas(tareas.map(t => t.id === tarea.id ? tareaActualizada.data : t))
    }
    setTareaEditando(null)
  }
  const handleEliminar = async (id) => {
    // await fetch('/api/tareas', {
    //   method: 'DELETE',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ id })
    // })
    await axios.delete('http://localhost:3000/api/tareas',{data: {id}});
    setTareas(tareas.filter(t => t.id !== id))
  }
    return (
        <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Lista de Tareas</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Nueva tarea"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Agregar</button>
      </form>
      <ul>
        {tareas.map(tarea => (
          <li key={tarea.id} className="mb-2 flex items-center">
            {tareaEditando && tareaEditando.id === tarea.id ? (
              <input
                type="text"
                value={tareaEditando.texto}
                onChange={(e) => setTareaEditando({ ...tareaEditando, texto: e.target.value })}
                className="border p-1 mr-2"
              />
            ) : (
              <span className="mr-2">{tarea.texto}</span>
            )}
            {tareaEditando && tareaEditando.id === tarea.id ? (
              <button onClick={() => handleEditar(tarea)} className="bg-green-500 text-white p-1 rounded mr-2">Guardar</button>
            ) : (
              <button onClick={() => setTareaEditando(tarea)} className="bg-yellow-500 text-white p-1 rounded mr-2">Editar</button>
            )}
            <button onClick={() => handleEliminar(tarea.id)} className="bg-red-500 text-white p-1 rounded">Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
    );
}