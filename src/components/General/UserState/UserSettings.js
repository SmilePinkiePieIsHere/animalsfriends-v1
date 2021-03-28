import { Component, Fragment } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withCookies } from 'react-cookie';

class UserSettings extends Component {  
    constructor(props) {
        super(props);    
    }

    logOut(e) {  
        e.preventDefault();      
        const { cookies, history } = this.props;

        cookies.remove('access_token');
        cookies.remove('refresh_token');
        cookies.remove('username');
        
        //history.push("/for-us");
    }

    render() {
        let username = this.props.allCookies.username;
        let isLoggedIn = typeof (username) == "undefined" || username == "undefined";

        const renderUserPanel = () => {
            if (isLoggedIn) {
                return <Link to="/login">Вход</Link>;
            } else {
                return (
                    <NavDropdown title={username} id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to="/animals/add">Добави Животно</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={this.logOut.bind(this)} >Изход</NavDropdown.Item>
                    </NavDropdown>);
            }
        }

        return (
            <Nav>
                {renderUserPanel()}
            </Nav>
        );
    };
}

export default withCookies(UserSettings);