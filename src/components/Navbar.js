
import './Navbar.scss';
import { Link } from "react-router-dom";

function Navbar () {

    // const navbarIcons = { width: '2rem', height: '2rem' };

    return <>
    
    <div className="navbar">

        <Link className='navitem' to="/">
            {/* <img src="home-logo.png" style={navbarIcons} alt="home-logo" /> */}
            <span class="material-symbols-outlined"> home </span>
            Home
        </Link>
        <Link className='navitem' to="/items">
            {/* <img src="items-logo.png" style={navbarIcons} alt="items-logo" /> */}
            <span class="material-symbols-outlined"> photo_library </span>
            Items
        </Link>
        <Link className='navitem' to="/tasks">
            {/* <img src="tasks-logo.png" style={navbarIcons} alt="tasks-logo" /> */}
            <span class="material-symbols-outlined"> inventory </span>
            Tasks
        </Link>
        <Link className='navitem' to="/contact">
            {/* <img src="contact-logo.png" style={navbarIcons} alt="contact-logo" /> */}
            <span class="material-symbols-outlined"> mail </span>
            Contact
        </Link>

    </div>
    <div className="navbar-filler"></div>
    </>
}

export default Navbar;