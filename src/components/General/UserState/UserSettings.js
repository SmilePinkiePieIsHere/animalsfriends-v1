import { useEffect, useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';

function UserSettings(props) {          
    const [cookies, setCookie] = useCookies(['username']);
    const [state, setState] = useState({
        isLogedIn: false
    });

    useEffect(() => {        
        setState(oldState => ({isLogedIn: cookies.username != undefined}));   
    }, [props.currentPage])

    const logOut = (e) => {  
        e.preventDefault();  
        
        cookies.remove('access_token');
        cookies.remove('refresh_token');
        cookies.remove('username');
        
        setState(oldState => ({isLogedIn: false}));       
    }    

    return (
        <Nav>            
            {!state.isLogedIn ? (
                <Link to="/login">Вход</Link>
            ) : (
                <NavDropdown title={cookies.username} id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to="/animals/add">Добави Животно</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logOut} >Изход</NavDropdown.Item>
                </NavDropdown>
            )}
        </Nav>
    );
}

export default UserSettings;