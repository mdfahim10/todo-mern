import {Link} from 'react-router-dom'
import "../styles/Navbar.css"
export default function NavBar(){
    return (
        <nav className='navbar'>
            <div className='logo'>TO DO APP</div>
            <ul className='nav-links'>
                <li><Link to="/">List</Link></li>
                <li><Link to="/add">Add ToDo</Link></li>
            </ul>
        </nav>
    )
}