import { Component } from "react";
import { Container, Row, Col, Alert, Form, Button } from "react-bootstrap";
import { withCookies } from "react-cookie";

import endpoints from "../../../services/endpoints.js";
import postData from "../../../services/services";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    onSubmitHandler(e) {
        e.preventDefault();

        const { cookies, history, match, location } = this.props;
        var user = e.target.username.value;
        var pass = e.target.password.value;

        if (user.length < 3 && pass.length < 3) {
            <Alert variant='danger'>Името и паролата трябва да са над 3 символа дълги!</Alert>
        }  

        let userTest = {
            username: user,
            password: pass
        }  

         debugger
        
        postData(endpoints.userLogin, userTest, function (data){
            debugger;
            if (!data.error_description) {
                const expires_in = new Date(new Date().getTime() + (data.expires_in * 1000));
                cookies.set('access_token', data.access_token, { expires: expires_in });
                cookies.set('refresh_token', data.refresh_token);
                cookies.set('username', ''); //user.username
                
                history.goBack();
            }
            else {
                alert(data.error_description);
            }
        })
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        <Form className="form-view" onSubmit={this.onSubmitHandler.bind(this)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Потребителско име:</Form.Label>
                                <Form.Control type="text" name="username" placeholder="Име" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Парола:</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Парола" />
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