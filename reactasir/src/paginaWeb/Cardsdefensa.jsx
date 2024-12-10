import React from "react";

const CardsDefensa = (props) => {
    const {imagen, titulo, texto} = props.data;

    return (
        <div>
            <img>{imagen}</img>
            <h1>{titulo}</h1>
            <p>{texto}</p>
        </div>
    )
}
export default CardsDefensa;