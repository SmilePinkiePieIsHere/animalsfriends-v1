import { React } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';

import endpoints from "../../../services/endpoints.js";
import { postData } from "../../../services/services";

function Register({
    history
}) {
    const [cookies, setCookie] = useCookies();

    const submitHandler = (e) => {
        e.preventDefault();
        debugger;
        let form = e.target;
       
        let userTemp = {
            username: form.username.value,
            password: form.password.value,
            password2: form.passwordConfirmation.value
        }
       
        if (userTemp.password === userTemp.password2) {
            postData(endpoints.userRegister, userTemp, function (data) {
                debugger;
                if (!data.error_description) {
                    //parrentScope.successAlert();

                    const expires_in = new Date(new Date().getTime() + (data.expires_in * 1000));
                    setCookie('access_token', data.access_token, { expires: expires_in });
                    setCookie('refresh_token', data.refresh_token);
                    setCookie('username', userTemp.username);
    
                    history.goBack();

                     // setTimeout(() => {
                //     history.push("/animals");
                //   }, 3000);
                }
                else {
                    alert(data.error_description);
                }               

            }, function (error) {
                debugger;
                //parrentScope.errorAlert();
            })
        }
        else {
            alert("Паролите не съвпадат!");
        }
    }

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={6}>
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
