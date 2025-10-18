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
          <div className="more-menu-icon flex flex-col gap-1 mt-[2px]">
            <span className="menu-icon w-5 h-[2px] bg-[rgba(10,124,62,0.5)]"></span>
            <span className="menu-icon w-5 h-[2px] bg-[rgba(10,124,62,0.5)]"></span>
            <span className="menu-icon w-5 h-[2px] bg-[rgba(10,124,62,0.5)]"></span>
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