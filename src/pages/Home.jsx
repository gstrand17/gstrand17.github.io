import spain from '../assets/spain2.jpg'
import citi from '../assets/citi.jpg'
import './Home.css'


function Home() {
    //const [count, setCount] = useState(0)

    return (
        <>
            <section className="hero">
                <img src={spain} alt="Spain" className="hero-image"/>
                <div className="hero-text">
                    <h1>Graciela Strand</h1>
                    <p>Software Engineer</p>
                    <p>Aspiring Product Manager</p>
                </div>
            </section>
            <div className="intro">
                <div className="intro-square">
                    <h1 className="intro-h1">Welcome!<br/><i>¡Bienvenidos!</i></h1>
                <p className="intro-p">I created this webpage primarily to showcase my skills, achievements, and
                    experiences as a software developer. As a senior at the University of Florida, I chose to join the
                    International Scholars Program and expanded this site into an e-portfolio to reflect on my global
                    learning. Through language study and intercultural experiences, I’ve learned how much understanding
                    different cultures strengthens my ability to connect and communicate with others. Although the ISP
                    program is only one part of my journey, the global curiosity and communication skills it inspired
                    will continue to guide me moving forward.</p>
                </div>
                <img src={citi} className="intro-img"></img>
            </div>
        </>
    )
}

export default Home