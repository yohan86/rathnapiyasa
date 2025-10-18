import { useState } from "react";
import { NavLink } from "react-router-dom";
interface navBarProps{
  menuIcon:boolean;
}
const NavBar = ({menuIcon}:navBarProps)=> {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  return (
    <div className={activeMenu ? "menu-wrapper md:mt-5 active" : "menu-wrapper md:mt-5"}>
     
      {menuIcon && (
        <div className="toggle-menu"  onClick={()=> setActiveMenu(!activeMenu)}>
          <div className="mr-2">Menu</div>
          <div className="more-menu-icon relative">
            <span className="menu-icon first"></span>
            <span className="menu-icon middle"></span>
            <span className="menu-icon last"></span>
          </div>
        </div>
        
      ) }
      <nav className="main-menu flex items-end md:items-start">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/aboutus">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contactUs">Contact</NavLink>
      </nav>
    
    </div>
  )
}

export default NavBar;