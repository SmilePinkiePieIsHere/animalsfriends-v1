import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Navigation from "../Navigation";

import style from "./Header.scss";

let mainMenuItems = [
    { id: 1, title: 'За нас', link: '/for-us' },
    { id: 2, title: 'Животните', link: '/animals' },
    // { id: 3, title: 'Блог', link: '/posts' }
];

function Header() {
    return (
        <header className="wrapper-header" >
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><img src="" alt="Logo" /></Navbar.Brand>
                <Link to="/animals/add">Добави Животно</Link>
                <Navigation menuItems={mainMenuItems} />
                <Form inline>
                    <FormControl type="text" placeholder="Търсене" className="mr-sm-2" />
                    <Button variant="outline-primary">Търсене</Button>
                </Form>
                <Link to="/login">Вход</Link>
            </Navbar>
        </header>
    );
}

export default Header;
