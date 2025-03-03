import { useState } from "react"

export default function AutorForm({ onSubmit }) {
    const [nombre, setNombre] = useState("")
    const [biografia, setBiografia] = useState("")
    const [fotoUrl, setFotoUrl] = useState("")
    const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("nombre", nombre)
    formData.append("biografia", biografia)
    formData.append("fotoUrl", fotoUrl)
    onSubmit(formData)
    setNombre("")
    setBiografia("")
    setFotoUrl("")
    }
    
}
