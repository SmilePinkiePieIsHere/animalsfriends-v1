import Navigation from "./Navigation";
import style from "./Header.module.css";

let mainMenuItems = [
    { title: 'За нас', link: '/for-us'},
    { title: 'Животните', link: '/our-animals'},
    { title: 'Каузи', link: '/causes'}
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
