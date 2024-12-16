import { NextResponse } from 'next/server';
export let tareas = [   { id: 1, texto: 'Aprender Next.js' },  { id: 2, texto: 'Crear un CRUD' }, ];

export async function GET() { // GET(request,{params})
  return NextResponse.json(tareas,{ status: 200 });
}

export async function POST(request) {
    const { texto } = await request.json();
    const nuevaTarea = { id: tareas.length+1, texto };
    tareas.push(nuevaTarea);
    return NextResponse.json(nuevaTarea, { status: 201 });
  }

  export async function PUT(request) {
    const { id, texto } = await request.json();
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
      tarea.texto = texto;
      return NextResponse.json(tarea,{ status: 201 });
    }
    return NextResponse.json({ error: 'Tarea no encontrada' }, { status: 404 });
  }
  export async function DELETE(request) {
    const { id } = await request.json();
    const index = tareas.findIndex(t => t.id === id);
    if (index !== -1) {
      tareas.splice(index, 1);
      return NextResponse.json({ message: 'Tarea eliminada' },{ status: 201 });
    }
    return NextResponse.json({ error: 'Tarea no encontrada' }, { status: 404 });
  }