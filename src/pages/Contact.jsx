import './Contact.css'
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";

function Contact() {
    const clicklinkedin = () => {
        window.open("https://www.linkedin.com/in/graciela-strand/", "_blank");
    };
    const clickgithub = () => {
        window.open("https://github.com/gstrand17", "_blank");
    };
    const clickgmail = () => {
        window.location.href = "mailto:gracielastrand@gmail.com";
    };

    return (
        <>
            <div className="contact-row">
                <button onClick={clicklinkedin} className="contact-button">
                    <img className="contact-image" src={linkedin} alt="Linkedin"/>
                </button>
                <button onClick={clickgithub} className="contact-button">
                    <img className="contact-image" src={github} alt="Github"/>
                </button>
                <button onClick={clickgmail} className="contact-button">
                    <img className="contact-image" src={gmail} alt="Gmail"/>
                </button>
             </div>
        </>
    )
}

export default Contact