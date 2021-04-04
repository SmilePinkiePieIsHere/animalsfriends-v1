import { Fragment } from "react";
import { Alert, Button } from "react-bootstrap";

import style from "./AlertNotification.scss";

function AlertNotification({
    heading,
    text,
    variant,
    show,
    onClose
}) {
   
    const onSubmitHandler = () => {
      onClose();
    }
  
    return (
      <Fragment>
        <Alert className="wrap-alert" show={show} variant={variant} onClose={onSubmitHandler} dismissible>
          <Alert.Heading>{heading}</Alert.Heading>
          <p>{text}</p>   
        </Alert>        
      </Fragment>
    );
  }

  export default AlertNotification;