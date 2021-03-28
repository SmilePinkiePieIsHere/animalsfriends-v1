import { Component, Fragment } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withCookies } from 'react-cookie';

class UserSettings extends Component {
    constructor(props) {
        super(props);
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
                        <NavDropdown.Item><Link to="/logout">Изход</Link></NavDropdown.Item>
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