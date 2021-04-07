import { Component } from "react";
import { Container, Row, Col, Alert, Form, Button } from "react-bootstrap";
import { withCookies } from "react-cookie";

import endpoints from "../../../services/endpoints.js";
import { postData } from "../../../services/services";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            isValid: false
        }
    }

    onSubmitHandler(e) {
        e.preventDefault();
        
        if (e.currentTarget.checkValidity() === false) {   
          e.stopPropagation();
        }
        else {
            const { cookies, history } = this.props;
            let user = {
                username: e.target.username.value,
                password: e.target.password.value
            }      
            
            postData(endpoints.userLogin, user, function (data){            
                if (!data.error_description) {
                    const expires_in = new Date(new Date().getTime() + (data.expires_in * 1000));
                    cookies.set('access_token', data.access_token, { expires: expires_in });
                    cookies.set('refresh_token', data.refresh_token);
                    cookies.set('username', user.username);
                    
                    history.goBack();
                }
                else {
                    alert(data.error_description);
                }
            })
        }

        this.setState({
            isValid: true
        });
        
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        <Form className="form-view" noValidate validated={this.state.isValid} onSubmit={this.onSubmitHandler.bind(this)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Потребителско име:</Form.Label>
                                <Form.Control required type="text" name="username" placeholder="Име" />
                                <Form.Control.Feedback type="invalid">Моля, въведете потребителско име.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Парола:</Form.Label>
                                <Form.Control required type="password" name="password" placeholder="Парола" />
                                <Form.Control.Feedback type="invalid">Моля, въведете парола.</Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="primary" type="submit">Влез</Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        );
    };
}

export default withCookies(Login);