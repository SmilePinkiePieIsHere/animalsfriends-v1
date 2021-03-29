import { Component } from "react";
import { Container, Row, Col, Alert, Form, Button } from "react-bootstrap";
import { withCookies } from "react-cookie";

import * as usersService from "../../../services/usersService";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            isLogedIn: false
        }
    }

    onSubmitHandler(e) {
        e.preventDefault();

        const { cookies, history, match } = this.props;

        var user = e.target.username.value;
        var pass = e.target.password.value;

        if (user.length < 3 && pass.length < 3) {
            <Alert variant='danger'>Името и паролата трябва да са над 3 символа дълги!</Alert>
        }

        usersService.default.loginUser(user, pass, function (data) {

            if (!data.error_description) {
                const expires_in = new Date(new Date().getTime() + (data.expires_in * 1000));
                cookies.set('access_token', data.access_token, { expires: expires_in });
                cookies.set('refresh_token', data.refresh_token);
                cookies.set('username', user);

                history.push(match.url);
            }
            else {
                alert(data.error_description);
            }
        });

        this.setState({
            isLogedIn: true
        });
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

            // <form onSubmit={this.onSubmitHandler.bind(this)}>
            //     <p className="field">
            //         <label htmlFor="name">Име</label>
            //         <span className="input">
            //             <input type="text" name="username" id="name" placeholder="Име" />
            //             <span className="actions"></span>
            //         </span>
            //     </p>
            //     <p className="field">
            //         <label htmlFor="name">Парола</label>
            //         <span className="input">
            //             <input type="text" name="password" id="pass" placeholder="Парола" />
            //             <span className="actions"></span>
            //         </span>
            //     </p>
            //     <input className="button" type="submit" className="submit" value="Влез" />
            // </form>
        );
    };
}

export default withCookies(Login);