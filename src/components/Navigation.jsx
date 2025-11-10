import {Link} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./../css/Navigation.css";

const Navigation = () =>{
    const [menuOpen, setMenuOpen] = useState(true);
    const [downMenu, setDownMenu] = useState(false);
    const [isDesktop, setIsDesktop] = useState(
        typeof window != "undefined" && window.innerWidth >= 813
    );
    const nav = document.getElementById("toggle-nav");

    useEffect(() => {
        const onResize = () => setIsDesktop(window.innerWidth >= 813);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() =>{
        if(isDesktop) setMenuOpen(true);
        else setMenuOpen(false);
    }, [isDesktop]);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
        setDownMenu(!downMenu);
    };

    return(
        <nav id="main-nav">
            <a onClick={toggleMenu} id="toggle-nav" href="#">{downMenu? (<p id="close">&#10005;</p>) : (<p id="hamburger">&#9776;</p>)}</a>
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