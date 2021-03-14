import Navigation from "./Navigation";
import style from "./Header.module.css";

let mainMenuItems = [
    { title: 'За нас'},
    { title: 'Животните'},
    { title: 'Каузи'}
];

function Header() {
    console.log('Header');
    console.log(mainMenuItems);

    return(
        <header>
            <img src="" alt="Logo"/>
            <Navigation menuItems={mainMenuItems} />
        </header>
        );
}

export default Header;
