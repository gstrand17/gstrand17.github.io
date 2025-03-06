import Navbar from "./Navbar.jsx";
import resume from './resumefile.pdf'
import ResumeText from './ResumeText.jsx'
import './Resume.css'

const Resume = () =>{
    return (
        <>
        <nav>
            <Navbar />
        </nav>
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