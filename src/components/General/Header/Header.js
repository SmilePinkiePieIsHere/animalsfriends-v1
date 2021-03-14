import style from "./Header.module.css";

import { Component } from "react";
import Navigation from "./Navigation";

class Header extends Component {
    render() {
        return(
        <header>
            <img src="" alt="Logo"/>
            <Navigation/>
        </header>
        );
    };
}

export default Header;
