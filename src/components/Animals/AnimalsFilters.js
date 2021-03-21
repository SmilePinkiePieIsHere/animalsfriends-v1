import { NavLink } from 'react-router-dom';
import Navigation from "../General/Navigation";

let mainMenuItems = [
    { id: 21, title: 'Всички', link: '/animals' },
    { id: 22, title: 'За осиновяване', link: '/animals?status=needhome' },
    { id: 23, title: 'В лечебница', link: '/animals?status=inmedicalcare' }
];

function AnimalsFilters () {
    return (
        <nav className="navbar">
            <ul>
                <Navigation menuItems={mainMenuItems} />                           
            </ul>            
        </nav>
    );
};

export default AnimalsFilters;