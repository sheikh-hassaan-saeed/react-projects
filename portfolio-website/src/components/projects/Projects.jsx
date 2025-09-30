import React from 'react'
import './Projects.css'
import project1 from '../../assets/project-1.png'
import project2 from '../../assets/project-2.png'
import project3 from '../../assets/project-3.png'


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
                        <h2>Project 1</h2>
                        <div className="buttons">
                            <button className='project-btn1'>Github</button>
                            <button className='project-btn2'>Live Demo</button>
                        </div>
                    </div>

                    <div className="projects-container">
                        <img src={project1} />
                        <h2>Project 1</h2>
                        <div className="buttons">
                            <button className='project-btn1'>Github</button>
                            <button className='project-btn2'>Live Demo</button>
                        </div>
                    </div>

                    <div className="projects-container">
                        <img src={project1} />
                        <h2>Project 1</h2>
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