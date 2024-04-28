
import './Navbar.scss';
import { Link } from "react-router-dom";

function Navbar () {

    const navbarIcons = { width: '2rem', height: '2rem' };

    return <>
    
    <div className="navbar">

        <Link className='navitem' to="/">
            <img src="home-logo.png" style={navbarIcons} alt="home-logo" />
            Home
        </Link>
        <Link className='navitem' to="/items">
            <img src="items-logo.png" style={navbarIcons} alt="items-logo" />
            Items
        </Link>
        <Link className='navitem' to="/tasks">
            <img src="tasks-logo.png" style={navbarIcons} alt="tasks-logo" />
            Tasks
        </Link>
        <Link className='navitem' to="/contact">
            <img src="contact-logo.png" style={navbarIcons} alt="contact-logo" />
            Contact
        </Link>

    </div>
    <div className="navbar-filler"></div>
    </>
}

export default Navbar;