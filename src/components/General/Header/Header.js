import Navigation from "./Navigation";
import style from "./Header.scss";

let mainMenuItems = [
    { id: 1, title: 'За нас', link: '/for-us' },
    { id: 2, title: 'Животните', link: '/animals' },
    { id: 3, title: 'Блог', link: '/posts' }
];

function Header() {
    return (
        <header className="wrapper-header" >
            <img src="" alt="Logo" />
            <Navigation menuItems={mainMenuItems} />
        </header>
    );
}

export default Header;
