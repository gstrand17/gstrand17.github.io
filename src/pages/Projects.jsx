// import React from 'react';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Medusa from '../assets/Medusa.jpeg';
import './Projects.css';
import Essay1 from'../Quest 2 Ensayo 1 Eng-Spn.pdf'
import Essay2 from '../Quest 2 Ensayo 2 Spn.pdf'
import Essay3 from '../Quest 2 Ensayo 3 Eng.pdf'
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
                        <h2 className="proj-h2">Spanish Essays and Projects from SPN2520: Ficción o Realidad</h2>

                        <div className="assignment-box">
                            <a className="assignment-title" href={Essay1}
                               download="Graciela-Strand-Essay-1-2025">
                                Ensayo 1: The Foundation and Perpetuation of Catholicism
                            </a>
                            <p className="assignment-text">
                                In this essay, I practice expressing my ideas in Spanish while discussing how religion
                                has shaped Latin culture. I assert that the purpose of the religious mentality
                                has shifted over time to accomplish different goals. As a Christian myself, I strived to
                                take an objective approach and use the lense of the philosopher Harari, who famously
                                describes religion as a shared fiction.
                            </p>
                        </div>

                        <div className="assignment-box">
                            <a className="assignment-title" href={Essay2}
                               download="Graciela-Strand-Essay-2-2025.pdf">
                                Ensayo 2: Genocide Framed as Fiction
                            </a>
                            <p className="assignment-text">
                                In this essay, I recount the devastating genocide of Guatemalan indigenous people and
                                trial the denied the occurance of this tragedy. I describe how high corruption can change
                                a narrative and how media portrayal of an event can illegitimize it.
                            </p>
                        </div>

                        <div className="assignment-box">
                            <a className="assignment-title" href={Essay3}
                               download="Graciela-Strand-Essay-3-2025">
                                Ensayo 3: Debunking and Debating the Meritocracy Myth
                            </a>
                            <p className="assignment-text">
                                In this essay, I take on the shared belief in Latin culture that hard work is the only
                                way to get ahead. Hard work is essential, but if your country isn&#39;t supporting the
                                middle class, there is no possibility for social mobility.
                            </p>
                        </div>

                        <div className="assignment-box">
                            <p className="assignment-title">Presentación: “Tema X”</p>
                            <iframe
                                src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
                                    window.location.origin + "/Quest Project Presentation.pptx"
                                )}`}
                                width="100%"
                                height="500px"
                                frameBorder="0"
                                className="ppt-embed"
                            />
                        </div>

                    </div>
                )}
            </div>
            <Contact/>

        </>
    )
}

export default Projects