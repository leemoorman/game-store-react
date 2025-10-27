import {Link} from "react-router-dom";
import "./../css/Header.css";
import Navigation from "./Navigation"

const Header = () =>{
    return(
        <header id="main-header">
            <div class="top-bar">
                <div class="logo"><Link to="/">COLUMBIA GAME HUB</Link></div>
                <input type="text" placeholder="Search" />
            </div>
            <Navigation />
        </header>
    );
};

export default Header;