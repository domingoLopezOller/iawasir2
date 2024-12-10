"use client"
import { blue } from "@mui/material/colors";
import Link from "next/link";
import { useEffect } from "react"

export default function Error({ error, reset }) {
     useEffect(() => {
         console.error(error)
     },[error])

    return (
        <div>
            <h1>Pagina no encontrada</h1>
            <img src="404.png" alt="error"></img>
            <p/>
            <Link href="/home">
            <button onClick={reset}>  Home </button>
            </Link>
        </div>
    );
}