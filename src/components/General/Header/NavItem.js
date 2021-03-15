import { Link } from "react-router-dom";

function NavItem(props) {
    return (
        <li className="listItem"><Link to={props.link}>{props.text}</Link></li>
    );
}

export default NavItem;