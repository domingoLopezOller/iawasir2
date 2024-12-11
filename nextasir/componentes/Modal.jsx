'use client';

import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { redirect } from 'next/navigation';


function ModalComponent({ title, bodyContent,numero }) {
  
  const [show, setShow] = useState(false);
   useEffect(() => {
       setShow(true)
     }, [])
  const handleClose = () => redirect("/defensa");
  const handleShow = () => setShow(true);
  const anterior =`/defensa/${numero-1}`;
  const posterior =`/defensa/${numero+1}`;
  return (
    <Modal show={show} size="lg" onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{bodyContent}</Modal.Body>
      <Modal.Footer>
        <Link href={anterior} > Anterior </Link> - <Link href={posterior} > Posterior </Link>
        <Link href="/defensa" passHref>
          <Button variant="secondary" onClick={handleClose}> Cerrar </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;