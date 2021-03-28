import { Component, Fragment } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withCookies } from 'react-cookie';

class UserSettings extends Component {          
    constructor(props) {
        super(props);        
        
        let user = this.props.allCookies.username;
        this.state = {
            isNotLogedIn: typeof (user) == "undefined" || user == "undefined",
            username: user
        }
    }

    logOut(e) {  
        e.preventDefault();      
        const { cookies, history, match } = this.props;

        cookies.remove('access_token');
        cookies.remove('refresh_token');
        cookies.remove('username');
        
        this.setState({isNotLogedIn: true});  
        
        //history.push("/for-us");   
    }

    render() {
        const renderUserPanel = () => {            
            if (this.state.isNotLogedIn) {
                return <Link to="/login">Вход</Link>;
            } else {
                return (
                    <NavDropdown title={this.state.username} id="basic-nav-dropdown">
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