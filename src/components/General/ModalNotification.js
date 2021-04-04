import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function ModalNotification({
    text,
    variant,
    show,
    onSuccess,
    onCancel
}) {
    
    const onSubmitHandler = () => {
      onSuccess();
    }

    const onCancelHandler = () => {
      onCancel();
    }
  
    return (
      <Modal show={show}>
        <Modal.Header closeButton>         
        </Modal.Header>

        <Modal.Body>
          <p>{text}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={onCancelHandler}>Не</Button>
          <Button onClick={onSubmitHandler} variant="outline-success">Да</Button>
        </Modal.Footer>
      </Modal> 
    );
  }
  
  export default ModalNotification;