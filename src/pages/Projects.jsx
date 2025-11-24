// import React from 'react';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Medusa from '../assets/Medusa.jpeg';
import './Projects.css';
import {CodingProjects} from "./CodingProjects.jsx";
import { useState } from "react";
import Navbar from "./Navbar.jsx";
import Contact from "./Contact.jsx";


function Projects() {
    const [category, setCategory] = useState('coding');

    return (
        <>
            <nav>
                <Navbar/>
            </nav>
            <div className='proj' id='projects'>
                <div>
                    <h1 className="proj-h1">Projects</h1>
                </div>
                {/* Toggle Switch */}
                <div className="toggle-wrapper">
                    <div className="toggle-container">
                        <button
                          className={category === "coding" ? "active" : ""}
                          onClick={() => setCategory("coding")}
                        >
                          Coding
                        </button>

                        <button
                          className={category === "spanish" ? "active" : ""}
                          onClick={() => setCategory("spanish")}
                        >
                          Spanish
                        </button>

                        <div className={`slider ${category}`}></div>
                    </div>
                </div>

                {/* Conditional Content */}
                {category === "coding" && <CodingProjects />}

                {category === "spanish" && (
                    <div className="spanish-projects">
                      {/* Your Spanish projects here */}
                      <h2>Spanish Projects</h2>
                      <p>List or cards of Spanish projects…</p>
                    </div>
                )}
            </div>
            <Contact />

        </>
    )
}

export default Projects