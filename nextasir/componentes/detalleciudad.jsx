'use client'
import Image from "next/image";
import { useState } from "react";
import  Button  from "react-bootstrap/Button";
import  Modal  from "react-bootstrap/Modal";

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

function DetalleCiudad({nombre}) {
    const [show, setShow] = useState(false);
// useEffect (() => {
    // setShow(true)
    // }; [])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

 return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Launch demo modal
    </Button>
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
        <Modal.Title>Informacion del pokemon{nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{DetalleProvincia({nombre})}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
    </Modal>
    </>
 );
}
export default DetalleCiudad;