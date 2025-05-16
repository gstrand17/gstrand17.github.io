import Navbar from "./Navbar.jsx";
import resume from '../../public/Resume.pdf'
// import ResumeText from './ResumeText.jsx'
import './Resume.css'

const Resume = () =>{
    return (
        <>
            <nav>
                <Navbar/>
            </nav>
            <h1 className="resume-h1"> Resume</h1>
            <p className="resume-p"> (Last updated: May 2025)</p>
            <div className="resume-button-wrapper">
                <a href="../../public/Resume.pdf" download="Graciela-Strand-Resume.pdf">
                    <button className="resume-button">
                        Download Resume
                    </button>
                </a></div>

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