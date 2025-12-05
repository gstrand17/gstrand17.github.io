import Navbar from "./Navbar.jsx";
// import ResumeText from './ResumeText.jsx'
import './Gallery.css'
import SevillaFC from "../assets/SevillaFC.jpg"
import Cena from "../assets/Cena.jpg"
import Nocha from "../assets/Nocha-Buena.jpeg"
import Alhambra from "../assets/Alhambra.jpg"
import Contact from "./Contact.jsx";

// TYPE 1 CARD — IMAGE + SMALL CAPTION
export function GalleryCardSmall({ img, caption }) {
    return (
        <div className="gallery-card-small">
            <img src={img} alt="gallery" className="gallery-img-small" />
            <p className="gallery-caption"
                dangerouslySetInnerHTML={{ __html: caption }}
                />
        </div>
    );
}


// TYPE 2 CARD — IMAGE LEFT + LARGE DESCRIPTION
export function GalleryCardLarge({ img, description }) {
    return (
        <div className="gallery-card-large">
            <img src={img} alt="gallery" className="gallery-img-large" />
            <p className="gallery-description"
               dangerouslySetInnerHTML={{ __html: description }}
                />
        </div>
    );
}

function Gallery() {
    return (
        <>
            <nav>
                <Navbar/>
            </nav>
            <h1 className="gallery-h1"> Gallery</h1>
            <h2 className="gallery-h2">Cultural experiences near and far</h2>
            <div className="gallery-container">
                {/* LARGE CARD */}
                <div className="gallery-card-large">
                    <iframe
                        src="https://www.youtube.com/embed/yZ_BvmW0TtA"
                        title="KUSA Performance"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
                    <p className="gallery-description"><b>Ballet Performance at KUSA&#39;s Spring Cultural Showcase 2024</b>
                        <br></br>I&#39;ve participated in UF&#39;s Korean Undergraduate Student Association&#39;s performances four times.
                            In this video, I choreographed a ballet piece to a Korean song, blending my love of ballet with my admiration of
                        Korean music.</p>
                </div>
                {/* ROW OF TWO SMALL CARDS */}
                <div className="small-row">
                    <GalleryCardSmall
                        img={Alhambra}
                        caption="<b>La Alhambra of Granada</b><br>This gorgeous palace is widely called the 10th wonder
                        of the world. I was so astounded by the Islamic architecture and seemingly endless gardens that I visited twice."
                    />
                    <div className="gallery-card-small">
                        <iframe
                            src="https://www.youtube.com/embed/1KHRKUlcp08"
                            title="Flamenco"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                        <p className="gallery-caption"><b>Flamenco Dancing in Seville</b>
                            <br></br>During my study abroad in Spain, I took a class in flamenco history and dance. Here is the local partnering dance that we learned, &#34;Sevillanas&#34;.</p>
                    </div>
                </div>
                <GalleryCardLarge
                    img={Nocha}
                    description="<b>New Years Eve with my Cuban family</b><br>Growing up, I didn’t have much connection
                    to my Cuban culture. Though my mom, grandmother and uncles all spoke Spanish, we only spoke English
                    at home. Over the years, my extended Cuban family came to the USA a few at a time and now, only very
                    distant relatives remain overseas. The Cubans always gather for holidays at my mom’s cousin’s house,
                    which is about an hour drive from my home. My parents were used to hosting our immediate family for
                    holidays, so we never thought to make the drive and spend a holiday with a language barrier. Things
                    changed when I decided to learn Spanish. Now 2 out of 4 members of my family unit can
                    confidently socialize in Spanish. In 2024, we decided to join our Cuban family for New Year’s Eve.
                    In the photo, you can see my mom's cousin, my parents, my brother, his fiance, and I gathered around
                    the star of the meal, the roast pork. I felt more connected to my culture that night than I ever have
                    felt before, as I chatted with family in the language I've worked so hard to learn and danced the
                    night away."
                />
                {/* ROW OF TWO SMALL CARDS */}
                <div className="small-row">
                    <GalleryCardSmall
                        img={SevillaFC}
                        caption="<b>Sevilla FC versus FC Barcelona</b><br>Crazier than any Florida Gators football game,
                        my experience at a Spanish futbol game during study abroad was unforgettable."
                    />
                    <GalleryCardSmall
                        img={Cena}
                        caption="<b>Christmas Eve Dinner</b><br>The batton of cooking the Nocha Buena dinner has been
                        passed down to me. On the plate, I cooked the arroz congri with yuca. Next to learn is how to make the roast pork."
                    />
                </div>
            </div>
            <Contact/>
        </>
    )
}

export default Gallery;