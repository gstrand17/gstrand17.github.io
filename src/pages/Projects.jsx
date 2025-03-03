import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Medusa from '../assets/Medusa.jpeg';
import './Projects.css';


function Projects() {
    //const [count, setCount] = useState(0)

    return (
        <>
            <div className='proj' id='Projects'>
                <div>
                    <h1>Projects</h1>
                </div>
                <div className="Cards">
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={Medusa} width='60vw' height='60vh'/>
                        <Card.Body>
                            <Card.Title>Divine Slice</Card.Title>
                            <Card.Text>
                                WiNGhacks Project
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>


        </>
    )
}

export default Projects