'use client'
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { useState } from "react";
import  Button from "react-bootstrap/Button";
import  Modal  from "react-bootstrap/Modal";

//Detalle de cada provincia
function DetalleProvincia({nombre}){
    if (nombre==="almeria"){
        return (<>
        <h4>Descripcion de interes de la ciudad de: ... {nombre}...</h4>
        <Image src="/almeria.jpg" alt="almeria" width="600" height="450"/>
        </>   
        )
    }
    else if (nombre==="granada"){
        return (<>
        <h4>Descripcion de interes de la ciudad de: ... {nombre}...</h4>
        <Image src="/granada.jpg" alt="almeria" width="600" height="450"/>
        </>   
        )
    }
    else if (nombre==="malaga"){
        return (<>
        <h4>Descripcion de interes de la ciudad de: ... {nombre}...</h4>
        <Image src="/malaga.jpg" alt="malaga" width="600" height="450"/>
        </>   
        )
    }
    else if (nombre==="huelva"){
        return (<>
        <h4>Descripcion de interes de la ciudad de: ... {nombre}...</h4>
        <Image src="/huelva.jpg" alt="huelva" width="600" height="450"/>
        </>   
        )
    }
    else{
        return notFound();
    }
}


export function Detalle({nombre}) {
    const [show, setShow] = useState(false);

    const HandleClose = () => (redirect('/bootstrap/andalucia'));
    // useEffect (() => {
    // setShow(true)
    // }; [])
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Launch demo modal
        </Button>

        <div
        className="modal show"
        style={{display:'block', position: 'initial', alignItems:"center"}} 
        >
            <Modal show={show}
            size='lg'
            // fullscreen={true}
            onHide={HandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>BIENVENIDO A LA CIUDAD DE</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {DetalleProvincia({nombre})}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={HandleClose}>
                        Cerrar ventama
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        </>
    )
}