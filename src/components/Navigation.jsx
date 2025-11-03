import {Link} from "react-router-dom";
import { useState } from "react";
import "./../css/Navigation.css";

const Navigation = () =>{
    const [menuOpen, setMenuOpen] = useState(false);
    const [downMenu, setDownMenu] = useState(true);
    const nav = document.getElementById("toggle-nav");

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
        setDownMenu(!downMenu);
    };

    return(
        <nav id="main-nav">
            <a onClick={toggleMenu} id="toggle-nav" href="#">{downMenu? (<p id="hamburger">&#9776;</p>) : (<p id="close">&#10005;</p>)}</a>
            <ul className={menuOpen? "" : "hide-small"}>
                <li><Link to="/buy-list" className="nav-link">Buy List</Link></li>
                <li><Link to="/upcoming-events" className="nav-link">Upcoming Events</Link></li>
                <li><Link to="/about-us" className="nav-link">About Us</Link></li>
                <li><Link to="/apply-now" className="nav-link">Apply Now</Link></li>
                <li><Link to="/shopping-cart" className="nav-link">Shopping Cart</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;