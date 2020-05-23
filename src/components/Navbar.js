import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo2.png'
function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <img src={logo} alt="site cocktail logo" className="logo" />
                <div className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
