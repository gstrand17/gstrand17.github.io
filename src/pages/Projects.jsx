// import React from 'react';
// import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Medusa from '../assets/Medusa.jpeg';
import './Projects.css';


function Projects() {

    return (
        <>
            <div className='proj' id='projects'>
                <div>
                    <h1 className="proj-h1">Projects</h1>
                </div>
                <div>
                    <p className='proj-p'>Section coming soon...</p>
                    <p className='proj-p'>Check out my Linkedin to see projects for now</p>
                </div>
                {/*<div className="Cards">*/}
                {/*    <Card style={{width: '18rem', backgroundColor: 'white'}}>*/}
                {/*        <Card.Img variant="top" src={Medusa} width='60vw' height='60vh'/>*/}
                {/*        <Card.Body>*/}
                {/*            <Card.Title>Divine Slice</Card.Title>*/}
                {/*            <Card.Text>*/}
                {/*                WiNGhacks Project*/}
                {/*            </Card.Text>*/}
                {/*            <Button variant="primary">Go somewhere</Button>*/}
                {/*        </Card.Body>*/}
                {/*    </Card>*/}
                {/*</div>*/}
            </div>


        </>
    )
}

export default Projects