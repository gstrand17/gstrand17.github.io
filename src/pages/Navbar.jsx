import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (

        <nav className="navbar">
            <p className="nav-title">Graciela Strand</p>
            <ul className="nav-list">
                <li className="nav-item">
                    <a href='#home'>Home</a>
                </li>
                <li className="nav-item">
                    <a href='#about'>About</a>
                </li>
                <li className="nav-item">
                    <a href='#projects'>Projects</a>
                </li>
                {/*<li className="nav-item">*/}
                {/*    <Link to='/resume'>Resume</Link>*/}
                {/*</li>*/}
            </ul>
        </nav>
    );
};

export default Navbar;