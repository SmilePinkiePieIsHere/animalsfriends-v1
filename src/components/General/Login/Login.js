import { Component } from "react";
import { Alert } from "react-bootstrap";

import * as usersService from "../../../services/usersService";

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
        var user = e.target.username.value;
        var pass = e.target.pass.value;

        if (user.length < 3 && pass.length < 3) {
            <Alert variant='danger'>Името и паролата трябва да са над 3 символа дълги!</Alert>
        }

        usersService.default.loginUser(user, pass, function(data) {
            debugger;
            var test = data;
        });

        // debugger;
        //  if(!tokens.error_description){
        //     const expires_in = new Date(new Date().getTime() + (tokens.expires_in * 1000));
        //     Cookies.set('access_token', tokens.access_token, { expires: expires_in });
        //     Cookies.set('refresh_token', tokens.refresh_token);
        //     Cookies.set('username', user.username);
            
        //     window.location.href = '/main';
        // }
        // else {
        //     alert(tokens.error_description);
        // }
    };

    render() {
        return (            
            <form onSubmit={this.onSubmitHandler.bind(this)}>
                <p className="field">
                    <label htmlFor="name">Име</label>
                    <span className="input">
                        <input type="text" name="username" id="name" placeholder="Име" />
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="name">Парола</label>
                    <span className="input">
                        <input type="text" name="name" id="pass" placeholder="Парола" />
                        <span className="actions"></span>
                    </span>
                </p>
                <input className="button" type="submit" className="submit" value="Влез" />
            </form>
        );
    };
}

export default Login;