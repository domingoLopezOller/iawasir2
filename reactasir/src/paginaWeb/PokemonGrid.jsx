import React, { useEffect, useState } from "react";
import { Pokemon } from "./pokemos";
import { useLocation } from "react-router-dom";

export const PokemonGrid = 
() => {
    const [ids, setIds ] = useState([]);
    const location = useLocation();

    const generarIdsAleatorios = (cantidad) => {
        const nuevosIds =  Array.from({ length: cantidad }, () => Math.floor(Math.random() * 898) + 1);
        setIds(nuevosIds);
    };

    useEffect(() => {
            generarIdsAleatorios(10);
    }, [location.pathname]);

    return (
        <div>
           <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 3fr)', gap:'10px'}}>
             {ids.map( id => (
                <Pokemon key={id}
                    id={id} />
             ))}   
             </div>  
        </div>
    );
};
