'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [message, setMessage] = useState('Cargando…')

  useEffect(() => {
    fetch('http://localhost:4000/productos')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => setMessage('Error al cargar el mensaje'))
  }, [])
return ( <p> Mensaje del servidor: {message} </p> )
}