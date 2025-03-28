import { NextResponse } from 'next/server';
import { tareas } from '../route';

export async function GET(request,{params}) {
    const {id} = await params;

    const tarea = tareas.find(tarea => tarea.id === parseInt(id));
    if (tarea) {
      return NextResponse.json(tarea);
    }
    return NextResponse.json({ error: 'Tarea no encontrada' }, { status: 404 });
}
export async function DELETE(request,{params}) {
    const { id } = await params;
    const index = tareas.findIndex(t => t.id === parseInt(id));
    if (index !== -1) {
      tareas.splice(index, 1);
      return NextResponse.json({ message: 'Tarea eliminada' }, { status: 201 });
    }
    return NextResponse.json({ error: 'Tarea no encontrada' }, { status: 404 });
  }