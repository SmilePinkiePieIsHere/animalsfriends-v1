function NavItem(props) {
    return (
        <li className="listItem"><a href="#">{props.children}</a></li>
    );
}

export default NavItem;