import { useEffect, useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';

import "./UserSettings.scss";

function UserSettings(props) {    
    const [cookies, removeCookie] = useCookies();
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
                <Link to="/login" className="nav-item">Вход</Link>
            ) : (
                <NavDropdown title={cookies.username} id="nav-dropdown" className="nav-item" >
                    <Link className="dropdown-item" to="/animals/add">Добави Животно</Link>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logOut} >Изход</NavDropdown.Item>
                </NavDropdown>
            )}
        </Nav>
    );
}

export default UserSettings;