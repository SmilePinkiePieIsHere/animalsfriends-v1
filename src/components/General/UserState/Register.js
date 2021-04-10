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
    const [state, setState] = useState({
            alertShow: false,
            alertTitle: '',
            alertText: '',            
            alertClass: ''
        }
    );

    const successAlert = () => {  
        setState({
            alertShow: true,
            alertText: "Успешно се регистрирахте!",            
            alertClass: 'success'
        });
    }

    const errorAlert = (errorMsg) => {  
        setState({
            alertShow: true,
            alertText: errorMsg,            
            alertClass: 'danger'
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        
        let form = e.target;       
        let userTemp = {
            username: form.username.value,
            password: form.password.value,
            password2: form.passwordConfirmation.value
        }
       
        if (userTemp.password === userTemp.password2) {
            postData(endpoints.userRegister, userTemp, function (data) {               
                if (!data.error_description) {
                    const expires_in = new Date(new Date().getTime() + (data.expires_in * 1000));
                    setCookie('access_token', data.access_token, { expires: expires_in });
                    setCookie('refresh_token', data.refresh_token);
                    setCookie('username', userTemp.username);
    
                    successAlert();
                    setTimeout(() => {
                        history.goBack();
                    }, 3000);
                }
                else {
                    alert(data.error_description);
                }               

            }, function (error) {
                errorAlert("Грешка от страна на сървъра при регистрация!");
            })
        }
        else {
            errorAlert("Паролите не съвпадат!");
        }
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
                    <Form className="form-view" onSubmit={submitHandler}>
                        {/* noValidate validated={this.state.isValid}  */}
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
