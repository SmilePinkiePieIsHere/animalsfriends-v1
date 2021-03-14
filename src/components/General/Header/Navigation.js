import NavItem from "./NavItem";

function Navigation(props) {
    return (
      <nav>
          <ul>
           {
             this.props.menuItems.map(m => {
               return <NavItem text={m.title} />
             })
           }
           
          </ul>
      </nav>
    );
}
  
  export default Navigation;