import { useState } from 'react'
import headshot from '../assets/headshot.jpeg'
import './Home.css'


function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <img src={headshot} className="pfp"></img>
            </div>
            <h1>Graciela Strand</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
        )
}

export default Home