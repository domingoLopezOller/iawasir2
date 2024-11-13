"use client"
import Link from "next/link";
import { useEffect } from "react"

export default function Error({ error, reset }) {
     useEffect(() => {
         console.error(error)
     },[error])

    return (
        <div>
            <h2>Something went wrong!</h2>
            <Link href="/"><button>
                 Try again
            </button></Link>
        </div>
    );
}