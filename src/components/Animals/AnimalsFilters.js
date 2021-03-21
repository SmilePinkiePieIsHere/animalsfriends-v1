import { NavLink } from 'react-router-dom';

function AnimalsFilters () {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/animals?status=all">All</NavLink></li>
                <li><NavLink to="/animals?status=needhome">За осиновяване</NavLink></li>
                <li><NavLink to="/animals?status=inmedicalcare">В лечебница</NavLink></li>               
            </ul>            
        </nav>
    );
};

export default AnimalsFilters;