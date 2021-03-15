import NavItem from "./NavItem";

function Navigation(props) {    
    return (
      <nav>            
          <ul>           
           {            
           props.menuItems.map(m => {
               return <NavItem link={m.link} text={m.title} />;
             })
           }
           
          </ul>
      </nav>
    );
}
  
export default Navigation;