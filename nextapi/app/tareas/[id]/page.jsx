'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Page = ({ params }) => {
    
    const [tarea, setTarea] = useState(null);
    const [error, setError] = useState(null);
    const [eliminada, setEliminada] = useState(false);

    useEffect(() => {
        const fetchTarea = async () => {
            try {
                const { id } = await params;
                const res = await fetch(`/api/tareas/${id}`);
                if (!res.ok) {
                    throw new Error('Tarea no encontrada');
                }
                const data = await res.json();
                setTarea(data);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchTarea();
    }, []);
async function borrarTarea() {
        try {
          const { id } = await params;
          const res = await fetch(`/api/tareas/${id}`, {
            method: 'DELETE',
          });
          if (!res.ok) {
            throw new Error('No se ha podido borrar la tarea');
          }
          setEliminada(true);
        } catch (err) {
          setError(err.message);
        }
      }
      if (error) {
        return (<>
            <h1>{error}</h1>
            <Link href='/tareas'>Volver atrás </Link>
            </>
        )
    } 
if(eliminada){
        return (<>
            <h1>Se ha eliminado correctamente</h1>
            <Link href='/tareas'>Volver atrás </Link>
            </>
        )
    }
    if (!tarea) return <div>Cargando...</div>;
    return (
        <div>
        <h1>{tarea.id} - {tarea.texto}</h1>
        <a onClick={borrarTarea}> Borrar Tarea </a>
        </div>
    )
}
export default Page;