import Navbar from "./Navbar.jsx";
import resume from '../Resume.pdf'
import './Resume.css'
// import python0 from "../assets/python.png";
// import c0 from "../assets/c++.png";
// import html0 from "../assets/html.png";
// import css0 from "../assets/css.png";
// import js0 from "../assets/js.png";
// import java0 from "../assets/java.png";
// import sql0 from "../assets/sql.png";
import Contact from "./Contact.jsx";

function Resume () {
    return (
        <>
            <nav>
                <Navbar/>
            </nav>
            <div className="resume">
                <h1 className="resume-h1"> Resume</h1>
                <p className="resume-p"> (Last updated: Sept 2025)</p>
                <div className="resume-button-wrapper">
                    <a href="../Resume.pdf" download="Graciela-Strand-Resume.pdf">
                        <button className="resume-button">
                            Download Resume
                        </button>
                    </a></div>

                <div className="soft-skills">
                    <h2 className="soft-h2">Soft Skills</h2>
                    <h3 className="soft-h3">NACE Fluencies</h3>

                    <div className="soft-grid">

                        <div className="soft-card">
                            <h4>Communication</h4>
                            <p>
                                While working as an RA, I regularly interacted with a custodial staff member who spoke
                                only Spanish. Through my language learning at the University of Florida, I was able to
                                build a relationship with her and communicate effectively. One day, she expressed
                                frustration about a persistent mess on another floor but was unable to clearly convey
                                the issue to the RA responsible for that floor. I stepped in to translate her concerns
                                accurately and respectfully, ensuring her voice was heard. As a result, the RA addressed
                                the issue with residents, leading to improved cleanliness and a better living
                                environment for both staff and students.
                            </p>
                        </div>

                        <div className="soft-card">
                            <h4>Teamwork</h4>
                            <p>
                                In my SPT 2520: Ficción vs. Realidad class at UF, I worked in a group of three on a
                                project about the beauty standards and their political significance in Venezuela and
                                Colombia. My teammates were more fluent in Spanish and more familiar with the subject
                                matter, which initially made it difficult to contribute at their pace. Instead of
                                withdrawing, I organized our workflow by assigning roles based on each person’s
                                strengths and by setting expectations to document research/sources in a shared file.
                                This created accountability while allowing me to engage with the material at my own
                                pace. As a result, we collaborated successfully and I confidently delivered my part of
                                the presentation in Spanish.
                            </p>
                        </div>

                        <div className="soft-card">
                            <h4>Professionalism</h4>
                            <p>
                                During my summer software development internship, I worked closely with teammates based
                                in India, where I quickly noticed differences in communication style and workplace
                                expectations. In one instance, I received feedback that I was being too verbose when
                                asking questions. While this was initially difficult to hear, I recognized the cultural
                                context behind it and chose to adapt. I refined my communication to be more concise and
                                direct while still maintaining clarity. By adjusting my approach, I improved
                                collaboration with my team and ensured my communication style aligned better with their
                                workflow, contributing to a more efficient and respectful working environment.
                            </p>
                        </div>

                        <div className="soft-card">
                            <h4>Critical Thinking</h4>
                            <p>
                                While studying abroad in Spain, I took a Flamenco course taught entirely in Spanish,
                                where I had to learn choreography through verbal instruction I did not always fully
                                understand. Instead of relying on direct translation, I analyzed patterns in demonstrated
                                movement and used repetition to connect unfamiliar terminology to physical actions. I
                                also paid close attention to tone, rhythm, and context to interpret instructions more
                                accurately. By adapting my learning approach in real time, I was able to successfully
                                keep up with the class and perform the choreography. This experience strengthened my
                                ability to problem-solve in unfamiliar environments and apply critical thinking beyond
                                traditional academic settings.
                            </p>
                        </div>

                    </div>
                </div>


                <div className="pdf-box">
                    <iframe src={resume} type="application/pdf"></iframe>
                </div>
            </div>
            {/*<div className="about-photos">*/}
            {/*    <img className="about-image" src={python0} alt="Python"></img>*/}
            {/*    <img className="about-image" src={c0} alt="C++"></img>*/}
            {/*    <img className="about-image" src={html0} alt="HTML"></img>*/}
            {/*    <img className="about-image" src={css0} alt="CSS"></img>*/}
            {/*    <img className="about-image" src={js0} alt="JavaScript"></img>*/}
            {/*    <img className="about-image" src={java0} alt="Java"></img>*/}
            {/*    <img className="about-image" src={sql0} alt="SQL"></img>*/}
            {/*</div>*/}
            <Contact/>
        </>
    )
}

export default Resume;