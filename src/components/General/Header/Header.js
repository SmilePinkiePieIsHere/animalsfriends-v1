import { Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import Navigation from "../Navigation";
import UserSettings from "../UserState/UserSettings";

import style from "./Header.scss";

let mainMenuItems = [
    { id: 1, title: 'За нас', link: '/for-us' },
    { id: 2, title: 'Животните', link: '/animals' },
    // { id: 3, title: 'Блог', link: '/posts' }
];

function Header() {    
    console.log(useLocation().pathname);
    return (
        <header className="wrapper-header" >
            <Navbar bg="light" expand="lg">               
                <UserSettings test={useLocation().pathname} />         
                <Navigation menuItems={mainMenuItems} />     
            </Navbar>
        </header>
    );
}

export default Header;
