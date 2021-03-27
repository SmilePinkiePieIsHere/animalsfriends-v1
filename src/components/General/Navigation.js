import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation(props) {  
    // function clickedNav(e) {           
    //    e.preventDefault();
    // }

    return (
        <Nav className="mr-auto">
            {
                props.menuItems.map(m => {                    
                    //return <Nav.Link key={m.id}><Link to={m.link}>{m.title}</Link></Nav.Link>;
                    //<Nav.Link key={m.id} to={m.link} >{m.title}</Nav.Link>;
                    return <Nav.Link key={m.id} ><Link to={m.link}>{m.title}</Link></Nav.Link>
                })
            }
        </Nav>
    );
}

export default Navigation;