import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';

import endpoints from "../../services/endpoints.js";
import { postAuthData } from "../../services/services.js";

function Register({
    history
}) {
    const [cookies, setCookie] = useCookies();
    const [user, setUser] = useState({
        username: '',
        password: '',
        password2: ''
    });  

    const submitHandler = (event) => {
        event.preventDefault();

        debugger;
        var form = event.target;
        setUser({
            password: form.name.username.value,
            password: form.name.password.value,
            password2: form.name.passwordConfirmation.value
        });

        if(user.password === user.password2){

            postAuthData(endpoints.userRegister, user, function (data){    
                debugger;           
                //parrentScope.successAlert();
                const expires_in = new Date(new Date().getTime() + (data.expires_in * 1000));
                setCookie('access_token', data.access_token, { expires: expires_in });
                setCookie('refresh_token', data.refresh_token);
                setCookie('username', user.username);                
    
                history.goBack();

                // setTimeout(() => {
                //     history.push("/animals");
                //   }, 3000);
               
            }, function (error){   
                debugger;
                //parrentScope.errorAlert();
            })  
        }
        else {
            alert("Паролите не съвпадат!");
        }
    }

    return (
        <Form className="form-view" onClick={submitHandler}> 
        {/* noValidate validated={this.state.isValid}  */}
            <Form.Group>
                <Form.Control required type="text" name="username" placeholder="Потребителско име"/>
                <Form.Control.Feedback type="invalid">Моля, въведете потребителско име.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control required type="password" name="password" placeholder="Парола"/>
                <Form.Control.Feedback type="invalid">Моля, въведете парола.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicPassword2">
                <Form.Control required type="password" name="passwordConfirmation" placeholder="Повторете паролата" />
                <Form.Control.Feedback type="invalid">Моля, въведете парола.</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">Регистрация</Button>
        </Form>
    );
}

export default Register;

// const bindCheckBox = (values, defaultValue) => {
    //     debugger;
    //     var test = defaultValue;
    //     return values.map(v => (
    //         <Form.Check
    //             required
    //             key={v.key}
    //             type="radio"
    //             label={v.value}
    //             name="genderChecker"
    //             value={v.key === defaultValue}
    //             id={v.key}
    //         />
    //       ));
    // }   

    {/* <Form.Group>
                            {bindCheckBox(genderOptions, animalGender)}  
                        </Form.Group> */}