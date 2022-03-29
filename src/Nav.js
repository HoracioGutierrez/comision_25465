import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className='nav'>
            <NavLink to="/categoria/clothing" className='nav__link'>Clothing</NavLink>
            <NavLink to="/categoria/food" className='nav__link'>Food</NavLink>
            <NavLink to="/categoria/electronics" className='nav__link'>Electronics</NavLink>
        </nav>
    );
}

export default Nav;