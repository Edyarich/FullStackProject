import "./../styles/menu.css"
import logoImage from "../images/great_knight.jpg"
import {Link} from 'react-router-dom'

function Menu() {
    return (
    <>
        <div id="header">
            <div className="header_left">
                <img src={logoImage} id="great_knight" alt="great_knight"/>
            </div>
            <div className="header_right">
                <h1 id="header_title">WILD HORSES</h1>
                <h3 id="header_subtitle">Chess club</h3>
            </div>
        </div>

        <div className="login_button">
            <Link to="/login">Login</Link>
        </div>

        <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/learn">Learn</Link>
            <Link to="/events">Events</Link>
            <Link to="/forum">Forum</Link>
            <Link to="/about_us">About us</Link>
        </div>
    </>
    );
}

export default Menu;