// import { useState } from 'react'
import headshot from '../assets/headshot.jpeg'
import spain from '../assets/spain2.jpg'
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


        </>
    )
}

export default Home