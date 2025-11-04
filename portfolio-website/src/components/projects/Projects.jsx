import React from 'react'
import './Projects.css'
import project1 from '../../assets/docx.jpg'
import project2 from '../../assets/project-2.png'
import project3 from '../../assets/project-3.png'
import mechanic from '../../assets/logo.png'

const Projects = () => {
    return (
        <section id='projects'>
            <div className="projects-text">
                <p>Browse My Recent</p>
                <h1>Projects</h1>
            </div>
            <div className="container">
                <div className="main-container">

                    <div className="projects-container">
                        <img src={project1} />
                        <h2>DocX Laboratories</h2>
                        <p>MERN Lab Site with Live Booking and Profile Rendering</p>
                        <div className="buttons">
                            <button className='project-btn1'><a href='https://github.com/sheikh-hassaan-saeed/react-projects/tree/main/healthcare-website' target='_blank'>Github</a></button>
                            <button className='project-btn2'> <a href='https://medical-website-six-sage.vercel.app/' target='_blank'>Live Demo</a></button>
                        </div>
                    </div>

                    <div className="projects-container">
                        <img src={mechanic} />
                        <h2>Automotive Website</h2>
                        <p>Car Workshop Website with Integrated Booking System</p>
                        <div className="buttons">
                            <button className='project-btn1'><a href='https://github.com/sheikh-hassaan-saeed/automotive-website' target='_blank'>Github</a></button>
                            <button className='project-btn2'> <a href='https://automotive-website-nu.vercel.app/' target='_blank'>Live Demo</a></button>
                        </div>
                    </div>

                    <div className="projects-container" id='thirdproject'>
                        <img src={project3} />
                        <h2>Empleesy (Coming Soon!)</h2>
                        <div className="buttons">
                            <button className='project-btn1'>Github</button>
                            <button className='project-btn2'>Live Demo</button>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}

export default Projects