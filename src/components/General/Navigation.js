import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

function Navigation(props) { 
    return (
        <Nav className="mr-auto">
            {
                props.menuItems.map(m => {        
                    return <NavLink key={m.id} to={m.link} activeClassName="active" className="nav-item" >{m.title}</NavLink >
                })
            }
        </Nav>
    );
}

export default Navigation;