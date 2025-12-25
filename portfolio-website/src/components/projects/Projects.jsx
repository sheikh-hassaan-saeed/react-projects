import React from 'react'
import './Projects.css'
import project1 from '../../assets/docx.jpg'
import mechanic from '../../assets/logo.png'
import empleesy from '../../assets/empleesy-pic.png'

const Projects = () => {
    const projectList = [
        {
            title: "DocX Laboratories",
            image: project1,
            desc: "MERN Lab Site with Live Booking and Profile Rendering",
            github: "https://github.com/sheikh-hassaan-saeed/react-projects/tree/main/healthcare-website",
            live: "https://medical-website-six-sage.vercel.app/"
        },
        {
            title: "Automotive Website",
            image: mechanic,
            desc: "Car Workshop Website with Integrated Booking System",
            github: "https://github.com/sheikh-hassaan-saeed/automotive-website",
            live: "https://automotive-website-nu.vercel.app/"
        },
        {
            title: "Empleesy",
            image: empleesy,
            desc: "A complete employee management dashboard with real-time data",
            github: "https://github.com/sheikh-hassaan-saeed/react-projects/tree/main/empleesy",
            live: "https://react-projects-sigma-eight.vercel.app/"
        }
    ];

    return (
        <section id='projects' className="projects-section">
            <div className="section-header">
                <p className="subtitle">Browse My Recent</p>
                <h1 className="title">Portfolio Projects</h1>
            </div>

            <div className="projects-grid">
                {projectList.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-img-wrapper">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-info">
                            <h2>{project.title}</h2>
                            <p>{project.desc}</p>
                            <div className="project-buttons">
                                <a href={project.github} target='_blank' rel="noreferrer" className="btn btn-github">GitHub</a>
                                <a href={project.live} target='_blank' rel="noreferrer" className="btn btn-live">Live Demo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;