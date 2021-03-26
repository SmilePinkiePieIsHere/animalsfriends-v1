import { Navbar } from "react-bootstrap";
import {Link } from "react-router-dom";
import Navigation from "../Navigation";
import style from "./Header.scss";

let mainMenuItems = [
    { id: 1, title: 'За нас', link: '/for-us' },
    { id: 2, title: 'Животните', link: '/animals' },
    { id: 3, title: 'Блог', link: '/posts' }
];

function Header() {
    return (
        <header className="wrapper-header" >
            <Navbar>
                <img src="" alt="Logo" />
                <Link to="/animals/add">Add Animal</Link>
                <Navigation menuItems={mainMenuItems} />
            </Navbar>
        </header>
    );
}

export default Header;
