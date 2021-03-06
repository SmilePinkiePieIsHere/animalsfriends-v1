import { useEffect, useState, Fragment } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';

import "./UserSettings.scss";

function UserSettings(props) {    
    const [cookies, setCookie, removeCookie] = useCookies();
    const [state, setState] = useState({
        isLogedIn: false
    });

    useEffect(() => {        
        setState(oldState => ({isLogedIn: cookies.username !== undefined}));   
    }, [props.currentPage])

    const logOut = (e) => {  
        e.preventDefault(); 

        removeCookie('access_token');
        removeCookie('refresh_token');
        removeCookie('username');
        
        setState(oldState => ({isLogedIn: false}));       
    }    

    return (
        <Nav className="user-settings" >            
            {!state.isLogedIn ? (
                <Fragment>
                    <Link to="/login" className="nav-item">Вход</Link>
                    <Link to="/register" className="nav-item">Регистрация</Link>
                </Fragment>
            ) : (
                <NavDropdown title={cookies.username} id="nav-dropdown" className="nav-item" >
                    <Link className="dropdown-item" to="/animals/add">Добави Животно</Link>
                    <Link className="dropdown-item" to="/blog/add">Добави Публикация</Link>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logOut} >Изход</NavDropdown.Item>
                </NavDropdown>
            )}
        </Nav>
    );
}

export default UserSettings;