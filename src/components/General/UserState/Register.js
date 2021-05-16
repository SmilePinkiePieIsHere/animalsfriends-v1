import { React, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';

import AlertNotification from "../../General/AlertNotification";

import endpoints from "../../../services/endpoints.js";
import { postData } from "../../../services/services";

function Register({
    history
}) {
    const [cookies, setCookie] = useCookies();
    const [isValid, setIsValid] = useState(false);
    const [state, setState] = useState({
        alertShow: false,
        alertTitle: '',
        alertText: '',
        alertClass: ''
    }
    );

    const alertDetails = (shouldShow, message, classAlert) => {
        setState({
            alertShow: shouldShow,
            alertText: message,
            alertClass: classAlert
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (e.currentTarget.checkValidity() === false) {
            e.stopPropagation();
        } 
        else {
            let form = e.target;
            let userTemp = {
                username: form.username.value,
                passwordhash: form.password.value,
                passwordhash2: form.passwordConfirmation.value
            }

            if (userTemp.passwordhash === userTemp.passwordhash2) {
                postData(endpoints.userRegister, userTemp, function (data) {
                    if (!data.error_description) {
                        const expires_in = new Date(new Date().getTime() + (data.expires_in * 1000));
                        setCookie('access_token', data.access_token, { expires: expires_in });
                        setCookie('refresh_token', data.refresh_token);
                        setCookie('username', userTemp.username);

                        alertDetails(true, "Успешно се регистрирахте!", "success");
                        setTimeout(() => {
                            history.goBack();
                        }, 3000);
                    }
                    else {
                        alert(data.error_description);
                    }

                }, function (error) {
                    alertDetails(true, "Грешка от страна на сървъра при регистрация!", "danger");

                    setTimeout(() => {
                        alertDetails(false, "Паролите не съвпадат!", "danger");
                    }, 3000);
                })
            }
            else {
                form.password.value = "";
                form.passwordConfirmation.value = "";

                alertDetails(true, "Паролите не съвпадат!", "danger");

                setTimeout(() => {
                    alertDetails(false, "Паролите не съвпадат!", "danger");
                }, 3000);
            }
        }

        setIsValid(true);
    }

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={6}>
                    {
                        state.alertShow
                            ? (<AlertNotification text={state.alertText} heading={state.alertTitle} variant={state.alertClass} show={state.alertShow} />)
                            : null
                    }
                    <Form className="form-view" noValidate validated={isValid} onSubmit={submitHandler}>
                        <Form.Group>
                            <Form.Control required type="text" name="username" placeholder="Потребителско име" />
                            <Form.Control.Feedback type="invalid">Моля, въведете потребителско име.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control required type="password" name="password" placeholder="Парола" />
                            <Form.Control.Feedback type="invalid">Моля, въведете парола.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword2">
                            <Form.Control required type="password" name="passwordConfirmation" placeholder="Повторете паролата" />
                            <Form.Control.Feedback type="invalid">Моля, въведете парола.</Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit">Регистрация</Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default Register;
