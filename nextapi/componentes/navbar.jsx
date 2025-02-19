"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })

      if (response.ok) {
        const { token } = await response.json()
        localStorage.setItem("token", token)
        setIsLoggedIn(true)
        router.push("/bibliotecatic/admin/libros")
      } else {
        alert("Login failed")
      }
    } catch (error) {
      console.error("Login error:", error)
      alert("An error occurred during login")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    router.push("/bibliotecatic/")
  }

  return (
    <nav style={{ backgroundColor: 'grey' }}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/bibliotecatic/" className="text-xl font-bold">
          BibliotecaTIC
        </Link>
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Link href="/bibliotecatic/admin/libros">
                Admin Libros
              </Link>
              <Link href="/bibliotecatic/admin/autores" >
                Admin Autores
              </Link>
              <button onClick={handleLogout} >
                Logout
              </button>
            </>
          ) : (
            <form onSubmit={handleLogin} className="flex items-center gap-4">
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="submit" className="bg-blue-500 px-4 py-1 rounded">
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  )
}

