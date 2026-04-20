import Navbar from "./Navbar.jsx";
import './Gallery.css'
import SevillaFC from "../assets/SevillaFC.jpg"
import alhambra from "../assets/Alhambra.jpg"
import classphoto from "../assets/class.jpg"
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
            <h1 className="gallery-h1"> Global Experiences</h1>
            <h2 className="gallery-h2">Explore some of the fun cultural activites I participated in, near and far,
                during my time in college</h2>
            <div className="gallery-container">
                {/* LARGE CARD */}
                <GalleryCardLarge
                    img={classphoto}
                    description="<b>Language Learning: Spanish Classes</b><br>Studying Spanish at the University of
                    Florida has been the highlight of my college experience. Coming from demanding computer science
                    courses each day, walking into Spanish class has always felt like a breath of fresh air. I’ve
                    genuinely loved every class in my Spanish minor. Each instructor clearly cared about teaching
                    and brought energy into the classroom, which made it easy to stay engaged. I especially remember
                    my time in Dr. Villa’s class, where her passion for education was always on display. Professors
                    like Dr. Moreland and Dr. Sajid-Lopez also knew how to keep things fun, often turning simple
                    speaking exercises into moments where the whole class would burst into laughter.<br></br>
                    Beyond just being enjoyable, these classes helped me grow in a very real way. My confidence in
                    speaking Spanish has improved significantly, along with my understanding of grammar in everyday
                    conversation and writing. In my final Spanish grammar course, I really noticed that growth. I was
                    able to follow entire lectures in Spanish and respond to questions on the spot without hesitation.
                    What used to feel intimidating became natural, and I no longer felt nervous speaking in a public setting.<br></br>
                    Spanish has also extended beyond the classroom for me. I used it while studying abroad and continue
                    to use it to communicate with Spanish-speaking staff in my building. Those real interactions have
                    made the language feel practical and meaningful in my daily life. I also appreciated how
                    intermediate courses taught Spanish through cultural context, especially through short films from
                    different countries that exposed us to different dialects, vocabulary, and traditions. <br></br>
                    Overall, Spanish matters to me because it helps me connect with more people, especially my Cuban
                    family, and adds a meaningful, personal dimension to my college experience. This coursework helped
                    me build the skills to make those connections, now and in the future."
                />
                <div className="gallery-card-large">
                    <iframe
                        src="https://www.youtube.com/embed/yZ_BvmW0TtA"
                        title="KUSA Performance"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
                    <p className="gallery-description"><b>Global Campus Activity: KUSA&#39;s Spring Cultural Showcase
                        2024</b>
                        <br></br>Performing in shows with the Korean Undergraduate Student Association have been some of
                        my favorite events in college. I’ve performed in five showcases, and in
                        four of them, I danced with Assemble Ballet Company as a guest performer. Even though I wasn’t
                        an official member of KUSA, these performances gave me a unique opportunity to blend two important
                        parts of who I am: my lifelong dedication to ballet and my appreciation for Korean music. <br></br>
                        <br></br>Performing at KUSA is an invigorating experience. Although it’s gaining popularity, K-pop is
                        still not widely embraced in the U.S., and ballet often fades from people’s lives after high
                        school due to its demanding nature. Being on that stage allowed me to fully embrace both
                        passions without hesitation. It felt like a space where those interests not only coexisted,
                        but were celebrated. Performing choreography I created myself made that experience even more
                        meaningful, as I was able to express my own interpretation of the music through movement. <br></br>
                        <br></br>Choreographing to K-pop is also a unique and rewarding challenge. Instead of focusing on lyrics,
                        I focused on rhythm, tone, and the overall feeling of the music. The language barrier actually
                        adds something special—the vocals become another instrument, allowing for more creative and
                        syncopated movement. One of my most memorable performances was set to BTS’s “Black Swan,”
                        which blends orchestral elements with themes from classical ballet. It created the perfect
                        foundation for a ballet-modern fusion piece, and the audience’s reaction—especially to the
                        opening swan solo—was unforgettable.<br></br>
                        <br></br>Beyond performing, watching KUSA shows has been just as impactful. Each showcase centers around
                        Korean festivals like Seollal or Chuseok, using skits, traditional dances, and guest performances
                        to celebrate Korean culture. I’ve always been struck by the joy and commitment KUSA brings to
                        honoring these traditions, and I’m grateful to have been a small part of that experience.</p>
                </div>

                {/* ROW OF TWO SMALL CARDS */}
                <div className="small-row">
                    <GalleryCardSmall
                        img={SevillaFC}
                        caption="<b>Study Abroad: Futbol in Sevilla</b><br>Crazier than any Florida Gators game I’ve
                        been to, my experience at a Spanish fútbol match during study abroad was unforgettable. The
                        energy in the stadium was nonstop. One section of fans didn’t stop cheering, chanting, and
                        jumping the entire game. We watched Sevilla FC take on FC Barcelona from the home section,
                        which made things even more intense. One of my friends accidentally wore a Barcelona jersey
                        and wasn’t allowed in for safety reasons. She had to quickly buy Sevilla gear to blend in. That
                        moment alone showed how serious fans are. People say fútbol is a religion in Spain, and after
                        that night, I completely understand why."
                    />
                    <GalleryCardSmall
                        img={alhambra}
                        caption="<b>Study Abroad: La Alhambra</b><br>My favorite stop during my study abroad was La
                        Alhambra in Granada. This breathtaking landmark is often called the “eighth wonder of the
                        world,” and it absolutely lived up to that reputation. I first visited with classmates, but
                        I loved it so much that when my parents came to Spain, I convinced them to go back with me a
                        second time. I was completely entranced by the intricate Islamic carvings covering nearly every
                        wall and the incredible attention to detail in the architecture. The gardens in full bloom felt
                        endless. Beyond its beauty, the Alhambra stands as a powerful reminder of Spain’s rich and
                        complex history."
                    />
                </div>
                <div className="gallery-card-large">
                    <iframe
                        src="https://www.youtube.com/embed/1KHRKUlcp08"
                        title="Flamenco"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
                    <p className="gallery-description"><b>International Coursework: Flamenco Dancing in Sevilla</b>
                        <br></br>During my study abroad in the summer of 2024, I had the opportunity to take a Flamenco
                        course in Spain that became one of the most memorable parts of my experience. Not only did this
                        class teach the history of Flamenco, but we also spent half of each class actively learning choreography.
                        The intricate hand movements, intensity in the arms and upper body, and quick footwork immediately
                        intrigued me as a dancer. The structure of the movement often conflicted with the traditional 8-count
                        choreography I was used to, yet it perfectly matched the emotion and spirit of the music. <br></br><br></br>
                        One of the most challenging parts of the class was learning dance entirely in Spanish. I had never
                         really thought about what movement instruction would sound like in another language until
                        I had to pick it up on the spot. It pushed me to listen more carefully and connect words to
                        physical actions in real time, which was both difficult and rewarding. At the same time, it
                        helped reinforce my Spanish skills in a very practical way.<br></br><br></br>
                        In class, we mainly focused on a traditional partner dance from Sevilla called Sevillanas.
                        I wouldn’t be surprised if the entire city of Seville knows this dance, because I was surprised
                        to find that my host mom could jump in and dance it with me effortlessly, as if it were second
                        nature. Moments like that made the experience feel immersive and authentic. <br></br> <br></br>
                        Beyond the dancing, we learned that Flamenco did not actually originate in Spain, but from the
                        poetic traditions of nomadic groups. We explored how it evolved into a defining part of Spanish
                        culture, including its emotional singing style, rhythmic clapping, and distinct costuming.
                        This class not only expanded my dance experience, but also challenged me to engage with history
                        and instruction in Spanish, making it both intellectually and creatively rewarding.</p>
                </div>
            </div>
            <Contact/>
        </>
    )
}

export default Gallery;