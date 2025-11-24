import Navbar from "./Navbar.jsx";
// import ResumeText from './ResumeText.jsx'
import './Gallery.css'
import Familia from "../assets/Sagrada-Familia.jpg"
import Portugal from "../assets/Portugal.png"
import Ronda from "../assets/Ronda.jpg"
import Nocha from "../assets/Nocha-Buena.jpeg"
import Contact from "./Contact.jsx";

// TYPE 1 CARD — IMAGE + SMALL CAPTION
export function GalleryCardSmall({ img, caption }) {
    return (
        <div className="gallery-card-small">
            <img src={img} alt="gallery" className="gallery-img-small" />
            <p className="gallery-caption">{caption}</p>
        </div>
    );
}


// TYPE 2 CARD — IMAGE LEFT + LARGE DESCRIPTION
export function GalleryCardLarge({ img, description }) {
    return (
        <div className="gallery-card-large">
            <img src={img} alt="gallery" className="gallery-img-large" />
            <p className="gallery-description">{description}</p>
        </div>
    );
}

function Gallery (){
    return (
        <>
            <nav>
                <Navbar/>
            </nav>
            <h1 className="gallery-h1"> Gallery</h1>
            <div className="gallery-container">
                {/* LARGE CARD */}
                <GalleryCardLarge
                    img={Ronda}
                    description="This forest trail winds through ancient pines and moss-covered stones. The air stays cool year-round, carrying the scent of evergreens and damp earth. Walking through it feels like stepping back in time, where everything moves slowly and quietly."
                />
                {/* ROW OF TWO SMALL CARDS */}
                <div className="small-row">
                    <GalleryCardSmall
                        img={Familia}
                        caption="A quiet sunrise behind distant mountains."
                    />
                    <GalleryCardSmall
                        img={Portugal}
                        caption="Soft waves rolling into an empty shoreline."
                    />
                </div>
                <GalleryCardLarge
                    img={Nocha}
                    description="This forest trail winds through ancient pines and moss-covered stones. The air stays cool year-round, carrying the scent of evergreens and damp earth. Walking through it feels like stepping back in time, where everything moves slowly and quietly."
                />
                {/* ROW OF TWO SMALL CARDS */}
                <div className="small-row">
                    <GalleryCardSmall
                        img={Ronda}
                        caption="A quiet sunrise behind distant mountains."
                    />
                    <GalleryCardSmall
                        img={Ronda}
                        caption="Soft waves rolling into an empty shoreline."
                    />
                </div>
            </div>
        <Contact />
        </>
    )
}

export default Gallery;