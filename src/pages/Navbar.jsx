import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (

        <nav className="navbar">
            <p className="nav-title"><a href='/Home'>Graciela Strand</a></p>
            <ul className="nav-list">
                <li className="nav-item">
                    <a href='/#about'>About</a>
                </li>
                <li className="nav-item">
                    <Link to='/projects'>Projects</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Gallery">Gallery</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Resume">Resume</Link>
                </li>

            </ul>
        </nav>
    );
};

export default Navbar;