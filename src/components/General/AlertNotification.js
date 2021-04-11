import { Fragment } from "react";
import { Alert } from "react-bootstrap";

import "./AlertNotification.scss";

function AlertNotification({
    heading,
    text,
    variant,
    show,
    onClose
}) {
  
    return (
      <Fragment>
        <Alert className="wrap-alert" show={show} variant={variant}>
          <Alert.Heading>{heading}</Alert.Heading>
          <p>{text}</p>   
        </Alert>        
      </Fragment>
    );
  }

  export default AlertNotification;