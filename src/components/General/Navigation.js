import { Link } from "react-router-dom";

function Navigation(props) {
    return (
        <nav className="navbar">
            <ul>
                {
                    props.menuItems.map(m => {
                        return <li key={m.id} className="nav-item"><Link to={m.link}>{m.title}</Link></li>;
                    })
                }
            </ul>
        </nav>
    );
}

export default Navigation;