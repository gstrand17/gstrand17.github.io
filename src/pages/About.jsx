// import { useState } from 'react'
//import React from 'react';
//import { Link } from 'react-router-dom';
import './About.css'
import {Educators} from "./Educators.jsx";

function About() {
    return (
        <>
            <div className="about" id="about">
                <h1 className="about-h1">About Me</h1>
                <p className="about-p2">Hi there, my name is Graciela! I&apos;m a 4th-year computer science major and
                    Spanish minor at the University of Florida. I’m grateful for the mentors and influences who helped
                    shape my academic and personal direction, grounding me in the values that guide me today. My personal
                    philosophy, academic interests, professional aspirations are all centered around my passion of
                    communication and collaboration. I’ve found that the key to tackling ambitious projects and breaking
                    through difficult barriers is surrounding yourself with people who bring diverse skill sets, cultural
                    backgrounds, and perspectives.</p>
                <p className="about-h2">Academically<br/></p>
                <p className="about-p">I was first introduced to computer science in middle school, but my interest was
                    piqued in high school, where I explored Python, Java, and basic web development. Those early
                    experiences introduced me to the logic, structure, and creativity of programming and confirmed that
                    this was a field I wanted to pursue at a deeper level.In college, my skills broadened as I moved from introductory work in Python and
                    C++ to using C, Java, JavaScript, and SQL in more advanced settings. Studying data structures and
                    algorithms helped me understand how efficiency and structure shape the quality of a solution.
                    Systems programming and computer organization pushed me to think about how software interacts with
                    hardware and why certain design choices matter. Programming language concepts helped me see how
                    syntax and semantics influence problem-solving across different languages. With that foundation, I
                    approached software engineering, database development, HCI, and machine learning with a stronger
                    understanding of how the entire computing stack fits together. These experiences ultimately shaped me
                    into a developer who approaches new challenges with clarity, adaptability, and intent.</p>
                <p className="about-p">I began studying Spanish in high school, where I was incredibly inspired and
                    eager to continue learning. My family invested in weekly spanish tutoring for me (still going to
                    this day) and workbooks, where I conjugated verbs for fun. Choosing a minor at UF was easy! I
                    enrolled in Spanish courses as soon as I could, starting at the intermediate level. Easily, my
                    favorite course has been an intensive conversational class that pushed me to articulate complex
                    ideas and speak more confidently. From there, I advanced into grammar/composition-focused coursework.
                    I had the opportunity to study abroad in Spain, where I continued refining my language skills through
                    more grammar and cultural study, taught entirely in Spanish. Although I still don&apos;t understand
                    every native speaker&apos;s accent and haven&apos;t learned the entire spanish dictionary, I often
                    surprise people with my level of proficiency and I am forever determined to reach full spanish
                    fluency, even beyond classes at UF. </p>
                <p className="about-h2">Professionally<br/></p>
                <p className="about-p">I&apos;m passionate about creating user-friendly applications that solve real-world
                    problems. Getting my start in the fintech space, I&apos;m eager to soak up all there is to learn about
                    designing secure, reliable technology while sharpening my coding best practices.
                    I thrive in team environments and love learning from others, as I believe
                    that collaboration is key to success in the tech industry. Once I&apos;ve deepened my foundation in software
                    dev, I&apos;m also interested in exploring product management so I can better understand
                    how to build products that meet user needs and drive business growth. Additionally, becoming a product
                    manager would give me the opportunity to guide, support strengths of, and lead team members toward
                    building something exceptional together. </p>
            </div>
            {/*<div className="about-inf">*/}
            {/*    <h1 className="about-h1">Educator Influences</h1>*/}
            {/*    <Educators />*/}
            {/*</div>*/}
        </>
    )
}

export default About