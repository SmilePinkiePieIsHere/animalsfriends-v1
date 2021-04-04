import { Nav, NavItem } from "react-bootstrap";
//import { LinkContainer } from 'react-router-bootstrap';
import { Link } from "react-router-dom";

function Navigation(props) {  
    function clickedNav(e) {           
       e.preventDefault();

       console.log(props);
    }

    return (
        <Nav className="mr-auto">
            {
                props.menuItems.map(m => {        
                    return <Link key={m.id} to={m.link}>{m.title}</Link>
                    //  ( <LinkContainer to={m.link}>
                    //             <NavItem eventKey={m.id}>{m.title}</NavItem>
                    //         </LinkContainer>)
                  //<Link key={m.id} to={m.link}>{m.title}</Link> //<Nav.Link key={m.id} to={m.link} onClick={clickedNav} >{m.title}</Nav.Link> 
                })
            }
        </Nav>
    );
}

export default Navigation;