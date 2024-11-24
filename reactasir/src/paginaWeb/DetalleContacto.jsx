import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router-dom';

const detalleDesarrollador = {
    Domingo:{
      avatar: 'static/images/avatar/1.jpg',
      nombre: 'Domingo'
},
    Jazmin:{
      avatar: 'static/images/avatar/2.jpg',
      nombre: 'Jazmin'
}
};

export default function DetalleContacto(){
    const {nombre} = useParams();
    const desarrollador = detalleDesarrollador [nombre.toLowerCase()];

    if (!desarrollador) {
        return <h3>Desarrollador no encontrado</h3>;
    }


return (
    <div style={{textAlign:'center', marginTop:'20px' }}>
        <h2>Informacion del contacto</h2>
        <Stack direction="row" justifyContent="center">
        <avatar
         alt={'Avatar de ${desarrollador.nombre}'}
         src={desarrollador.avatar}
         sx={{width: 100, height:100}}
        />
        </Stack>
    </div>
);
}