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
                          ISP
                        </button>

                        <div className={`slider ${category}`}></div>
                    </div>
                </div>

                {/* Conditional Content */}
                {category === "coding" && <CodingProjects />}

                {category === "spanish" && (
                    <div className="spanish-projects">
                        <h2 className="proj-h2">International Scholars Program</h2>
                        <div className="assignment-box">
                            <a className="assignment-title" href="#">Final Reflection
                            </a>
                            <p className="assignment-text">
                                     Before participating in the International Scholars Program at the University of Florida,
                                I was largely disconnected from global learning. My exposure to other cultures was
                                limited, and my understanding of international issues was minimal. I was just beginning
                                my journey with Spanish, had little awareness of Latin American politics, and had only
                                recently started exploring global music. Initially, my interest in Spanish came from its
                                practicality and the opportunities it could open, as well as the beauty of the language
                                itself. Choosing to pursue a Spanish minor alongside my computer science major
                                introduced me to courses that went far beyond language basics. Through classes like
                                Language & Culture and Ficción vs. Realidad, I was exposed to real anthropology and
                                political history which challenged me to think more critically about the world and my
                                place in it. That’s when learning about the world stopped feeling distant and started
                                feeling relevant to my own life.<br></br><br></br>
                                      My perspective shifted significantly when I entered SPN2240, an intensive communication
                                course focused entirely on speaking. This was the moment Spanish stopped feeling like
                                an academic subject and started becoming a real tool for connection. Instead of
                                rehearsed sentences or simple phrases, I was expressing personal opinions, forming
                                arguments, and engaging in meaningful discussions about real-world topics. That
                                transition was powerful. For the first time, I felt capable of using Spanish to
                                communicate ideas that actually mattered. This confidence extended beyond the classroom
                                into my personal life. I began speaking exclusively in Spanish with my Cuban abuela,
                                and that has remained the case ever since. Our conversations became more natural and
                                meaningful, strengthening not only my language skills but also our relationship. From
                                this class moving forward, Spanish became less about correctness, and more about
                                personal expression and real connection.<br></br><br></br>
                                     That understanding was tested and expanded during my study abroad experience in Spain.
                                Unlike the classroom environment, there was no structure or safety net; I had to
                                navigate everyday life entirely in Spanish. Whether it was communicating with my host
                                mom in the mornings and evenings or handling daily tasks, I was constantly using the
                                language in real, unscripted situations. This was both challenging and intimidating.
                                Despite having the ability to communicate, I found myself feeling hesitant at times,
                                which forced me to confront my own lack of confidence. At the same time, I was taking
                                a Flamenco course taught in Spanish, where I had to understand both historical concepts
                                and physical instruction in a foreign language. This pushed me even further outside of
                                my comfort zone. Over time, that constant exposure transformed my mindset. When I
                                returned home, situations that once felt intimidating no longer did. I could speak with
                                confidence, adapt to conversations more easily, and engage without fear. Study abroad
                                shifted my journey in language learning to language living.<br></br><br></br>
                                     Through these experiences, I have grown significantly in both personal and intercultural
                                ways. I have become more open and comfortable engaging with people from different
                                backgrounds. When I meet someone from Spain or Korea, I now approach conversations with
                                genuine curiosity and confidence, eager to share my experiences while learning from
                                theirs. My adaptability has also improved, as I am more willing to step into unfamiliar
                                situations and communicate without overthinking. Additionally, my engagement with global
                                cultures has extended into my personal interests. I have incorporated elements of
                                Flamenco into my choreography and continue to immerse myself in Spanish-language media,
                                including music, films, and news. Global awareness once felt unfamiliar, but now it’s
                                something I actively seek out and thoroughly enjoy.<br></br><br></br>
                                     Looking forward, the skills I have developed through the International Scholars Program
                                will have a direct impact on my future career in software development. The tech industry
                                is inherently global, with teams often spanning multiple countries and cultures. Even
                                during my internship, I collaborated with individuals from Asia and Europe, which tested
                                me on the importance of cultural awareness and communication in professional settings.
                                My experiences have given me a strong foundation to navigate these environments
                                effectively, allowing me to connect with coworkers from diverse backgrounds and
                                contribute to collaborative workspaces. Furthermore, my ability to speak Spanish opens
                                doors to new opportunities, including working with Spanish-speaking clients or in
                                regions where the language is essential. More importantly, I leave this program
                                maintaining my mindset focused on connection, but adding deeper layers of understanding,
                                adaptability, and continuous learning. These are skills that will not only support my
                                career and also shape the way I engage with the world moving forward.


                            </p>
                        </div>

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
                                trial the denied the occurance of this tragedy. I describe how high corruption can
                                change
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
                            <p className="assignment-title">Final Research Group Presentation</p>
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