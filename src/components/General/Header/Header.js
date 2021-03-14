import Navigation from "./Navigation";
import style from "./Header.module.css";

let mainMenu = [
    { title: 'За нас', description: "Leviosa" },
    { title: 'Животните', description: "Gero" },
    { title: 'Каузи', description: "Aslan" }
];

function Header() {
    return(
        <header>
            <img src="" alt="Logo"/>
            <Navigation menuItems={this.props.mainMenu}/>
        </header>
        );
}

export default Header;
