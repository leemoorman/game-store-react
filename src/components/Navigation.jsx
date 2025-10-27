import {Link} from "react-router-dom";
import "./../css/Navigation.css";

const Navigation = () =>{
    return(
        <nav id="main-nav">
            <ul>
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