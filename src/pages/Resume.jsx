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
                                During a 36-hour hackathon, I worked with beginner coders to build a functional webpage
                                under tight time constraints. Early on, I guided the team through foundational concepts
                                and remained available to answer questions throughout development. When we encountered
                                major merge conflicts that stalled progress and increased stress, I communicated calmly
                                and clearly to refocus the team. I either worked through the conflicts step-by-step or
                                called for additional help when needed. By maintaining a composed and supportive
                                approach, I kept the team aligned and productive. As a result, we successfully completed
                                the project and delivered a polished final product.
                            </p>
                        </div>

                        <div className="soft-card">
                            <h4>Teamwork</h4>
                            <p>
                                As the Scrum Master for my senior project, I led weekly team check-in meetings to track
                                progress. During a critical week, one team member became sick and was unable to complete
                                their portion of the work. Although progress slowed, I prioritized team support over
                                getting frustrated. Instead of assigning blame, I facilitated a discussion where the
                                teammate outlined their tasks, and the group collaboratively redistributed the workload.
                                I encouraged open communication and ensured everyone was aligned on next steps. As a
                                result, we maintained momentum, met our deadlines, and strengthened our team dynamic by
                                supporting each other during a challenging situation for one member.
                            </p>
                        </div>

                        <div className="soft-card">
                            <h4>Professionalism</h4>
                            <p>
                                While working the front desk at a residence hall, I gave tours to prospective students
                                and families. During one tour, a parent began criticizing the dorms and referencing
                                negative online reviews. Although I felt personally connected to the space, I remained
                                composed and professional. I acknowledged that some concerns online can be valid but
                                may also be exaggerated. I provided honest insight into daily custodial efforts while
                                explaining that cleanliness also depends on student responsibility. By responding calmly
                                and respectfully, I was able to de-escalate the situation. The parent left more
                                understanding despite initial tension.
                            </p>
                        </div>

                        <div className="soft-card">
                            <h4>Critical Thinking</h4>
                            <p>
                                While working as an RA, I encountered an unexpected emergency while delivering a lost
                                credit card. After knocking on that resident’s door and hearing shouting, I also heard
                                a scream down the hall. I quickly assessed the situations and temporarily redirected
                                my attention, where I found a student passed out in a bathroom. After confirming that
                                911 had been called, I contacted RA backup to ensure continued support. I then returned
                                to the original resident and found she had suffered a fall and also needed medical
                                attention. By prioritizing tasks, coordinating help, and adapting in real time, I was
                                able to manage two simultaneous emergencies. As a result, both students received timely
                                care and were safely transported to the hospital.
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