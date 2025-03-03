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
    
   }
   