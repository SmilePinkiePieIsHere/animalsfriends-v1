import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function ModalNotification({
    text,
    variant,
    show,
    onSuccess,
    onCancel
}) {
    // const [popUp, setPopUp] = useState(false);

    // useEffect(() => {
    //   setPopUp(show);
    // }, [show]);
    
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
        // <Alert show={show} variant={variant}>
        //   <Alert.Heading>{text}</Alert.Heading>          
        //   <div className="d-flex justify-content-end">
        //     {/* <Button onClick={() => setShow(false)} variant="outline-success">Не</Button> */}
        //     <Button onClick={onSubmit} variant="outline-success">Да</Button>
        //   </div>
        // </Alert>   
    );
  }
  
  export default ModalNotification;