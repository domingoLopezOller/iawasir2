'use client'
import Image from 'next/image';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

//Detalle de cada provincia
function DetalleProvincia({nombre}){
    if(nombre==="almeria"){
        return (<>
        <h4> Descripción de interés de la ciudad de: ... {nombre}...</h4>
        <Image src="https://t3.ftcdn.net/jpg/02/48/54/30/360_F_248543017_qg21vktvFRHXWIV54pqIGZ26uSpX0qgg.jpg" unoptimized="true" width="500" height="450" alt={nombre} />
        </>)
    }
    else if(nombre==="granada"){
        return (<>
        <h4> Descripción de interés de la ciudad de: ... {nombre}...</h4>
        <Image src="https://www.spain.info/export/sites/segtur/.content/images/galerias/alhambra/alhambra-granada-shutterstock_158639000.jpg" unoptimized="true" width="500" height="450" alt={nombre} />
        </>)
    }
    else if(nombre==="malaga"){
        return (<>
        <h4> Descripción de interés de la ciudad de: ... {nombre}...</h4>
        <Image src="https://static3.depositphotos.com/1007315/247/i/450/depositphotos_2475162-stock-photo-malaga-cityscape.jpg" width="500" height="450" alt={nombre} unoptimized="true" />
        </>)
    }
    else if(nombre==="huelva"){
        return (<>
        <h4> Descripción de interés de la ciudad de: ... {nombre}...</h4>
        <Image src="https://turismoalmadendelaplata.es/wp-content/uploads/2024/07/portada-8.jpg" unoptimized="true" width="500" height="450" alt={nombre} />
        </>)
    }
    else if(nombre==="jaen"){
        return (<>
        <h4> Descripción de interés de la ciudad de: ... {nombre}...</h4>
        <Image src="https://www.aceitunasguerra.com/wp-content/uploads/2017/07/Olivos-y-aceitunas-en-Jae%CC%81n1-1.jpg" unoptimized="true" width="500" height="450" alt={nombre} /> 
        </>)
    }
    else if(nombre==="cadiz"){
        return (<>
        <h4> Descripción de interés de la ciudad de: ... {nombre}...</h4>
        <Image src="https://www.cadizturismo.com/storage/app/media/uploaded-files/p-cadiz_turismo.jpg" unoptimized="true" width="500" height="450" alt={nombre} />
        </>)
    }
    else if(nombre==="sevilla"){
        return (<>
        <h4> Descripción de interés de la ciudad de: ... {nombre}...</h4>
        <Image src="https://cdn.pixabay.com/photo/2020/05/12/18/29/city-5164368_1280.jpg" unoptimized="true" width="500" height="450" alt={nombre} />
        </>)
    }
    else if(nombre==="cordoba"){
        return (<>
        <h4> Descripción de interés de la ciudad de: ... {nombre}...</h4>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/1/15/Mosque_Cordoba.jpg" unoptimized="true" width="500" height="450" alt="Puerta del instituto" />
        </>)
    }
    else{
        return notFound();
    }
    
}

 function Example({nombre}) {
  
  const [show, setShow] = useState(false);
   useEffect(() => {
       setShow(true)
     }, [])
  const handleClose = () => redirect("/andalucia");
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} size="lg"  onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>INFORMACIÓN DE LA CIUDAD {nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{DetalleProvincia({nombre})}
            <Link href="#">Más detalle</Link>
        </Modal.Body>
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

export default Example;