import Navbar from "./Navbar.jsx";
import resume from '../Resume.pdf'
// import ResumeText from './ResumeText.jsx'
import './Resume.css'
import python0 from "../assets/python.png";
import c0 from "../assets/c++.png";
import html0 from "../assets/html.png";
import css0 from "../assets/css.png";
import js0 from "../assets/js.png";
import java0 from "../assets/java.png";
import sql0 from "../assets/sql.png";

const Resume = () =>{
    return (
        <>
            <nav>
                <Navbar/>
            </nav>
            <h1 className="resume-h1"> Resume</h1>
            <p className="resume-p"> (Last updated: May 2025)</p>
            <div className="resume-button-wrapper">
                <a href="../Resume2.pdf" download="Graciela-Strand-Resume.pdf">
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

            {/*<section id="Resume">*/}
            {/*    <div style={{textAlign: 'center'}}>*/}
            {/*        <a href={resume} download={'GracielaStrand_Resume'} target='blank'>*/}
            {/*            <button type='download' style={{backgroundColor:'pink', color:'white'}}>*/}
            {/*                Download Resume*/}
            {/*            </button>*/}
            {/*        </a>*/}
            {/*    </div>*/}

            {/*<ResumeText*/}
            {/*    section={'Education'}*/}
            {/*    title={'Bachelor of Science in Computer Science'}*/}
            {/*    date={'May 2026'}*/}
            {/*    subtitle={'University of Florida, Gainesville, FL'}*/}
            {/*/>*/}
            {/*</section>*/}
        </>
    )
}

export default Resume;