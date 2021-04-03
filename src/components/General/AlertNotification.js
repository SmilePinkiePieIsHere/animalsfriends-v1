import { Alert, Button } from "react-bootstrap";
import { useState } from "react";

function AlertNotification({
    text,
    variant,
    show,
    onSuccess
}) {
    const [popUp, setShow] = useState(show);

    const onSubmit = () => {
      onSuccess();
    }
  
    return (
      <>
        <Alert show={show} variant={variant}>
          <Alert.Heading>{text}</Alert.Heading>          
          <div className="d-flex justify-content-end">
            {/* <Button onClick={() => setShow(false)} variant="outline-success">Не</Button> */}
            <Button onClick={onSubmit} variant="outline-success">Да</Button>
          </div>
        </Alert>        
      </>
    );
  }
  
  export default AlertNotification;