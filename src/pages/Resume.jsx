import Navbar from "./Navbar.jsx";
import resume from '../Resume.pdf'
import './Resume.css'
import python0 from "../assets/python.png";
import c0 from "../assets/c++.png";
import html0 from "../assets/html.png";
import css0 from "../assets/css.png";
import js0 from "../assets/js.png";
import java0 from "../assets/java.png";
import sql0 from "../assets/sql.png";
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
                <div className="about-photos">
                    <img className="about-image" src={python0} alt="Python"></img>
                    <img className="about-image" src={c0} alt="C++"></img>
                    <img className="about-image" src={html0} alt="HTML"></img>
                    <img className="about-image" src={css0} alt="CSS"></img>
                    <img className="about-image" src={js0} alt="JavaScript"></img>
                    <img className="about-image" src={java0} alt="Java"></img>
                    <img className="about-image" src={sql0} alt="SQL"></img>
                </div>

                <div className="pdf-box">
                    <iframe src={resume} type="application/pdf"></iframe>
                </div>
            </div>


            <Contact/>
        </>
    )
}

export default Resume;