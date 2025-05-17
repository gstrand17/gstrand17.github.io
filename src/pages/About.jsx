// import { useState } from 'react'
//import React from 'react';
//import { Link } from 'react-router-dom';
import './About.css'


function About() {
    //const [count, setCount] = useState(0)

    return (
        <>
            <div className="about" id="about">
                <h1 className="about-h1">About Me</h1>
                <p className="about-p">Hi there, it&apos;s nice to meet you! I&apos;m a 4th year Computer Science major,
                    Spanish minor at the University of Florida. </p>
                <div className="about-row">
                    <p className="about-p2">I began coding in middle school, but fell in love with it in high school
                        when I began taking courses under Mrs. Altamirano-Rochford (or Mrs. Dee, for short). She taught
                        me that software development is more than coding and debugging; it&apos;s all about communication
                        and collaboration. As a language-learner, I enjoy the syntax-memorization side of coding
                        to be intriguing too. I didn&apos;t expect to go down this path, as I was a dedicated studio dancer
                        all my life, but with coding, I found a new way to be creative and connect with people!</p>
                    <div className="about-box">
                        <p>Professional Interests</p>
                        <ul>
                            <li>Software Engineering</li>
                            <li>Product Management</li>
                            <li>Web Development</li>
                            <li>AI and Machine Learning</li>
                        </ul>
                    </div>
                    <div className="about-box">
                        <p>Hobbies</p>
                        <ul>
                            <li>Dancing</li>
                            <li>Practicing Spanish</li>
                            <li>Cooking</li>
                            <li>Bracelet-making</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About