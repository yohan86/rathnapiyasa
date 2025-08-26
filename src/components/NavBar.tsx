import { NavLink } from "react-router-dom";

const NavBar:React.FC = ()=> {
  return (
    <nav className="flex flex-col md:flex-row gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

export default NavBar;