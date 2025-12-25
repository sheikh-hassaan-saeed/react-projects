import React from 'react'
import './AboutMe.css'
import experience from '../../assets/experience.png'
import education from '../../assets/education.png'
import arrow from '../../assets/arrow.png'

const AboutMe = () => {
    return (
        <section className="about-section">
            <div className="about-header">
                <span className="pre-title">Get To Know More</span>
                <h2 className="section-title">About Me</h2>
            </div>

            <div className="about-content">
                <div className="info-cards">
                    <div className="info-card">
                        <div className="icon-wrapper">
                            <img src={experience} alt="Experience" />
                        </div>
                        <h3>Experience</h3>
                        <p>Frontend Development: 3+ months</p>
                        <p>Freelancing Projects: 8+ months</p>
                    </div>

                    <div className="info-card">
                        <div className="icon-wrapper">
                            <img src={education} alt="Education" />
                        </div>
                        <h3>Education</h3>
                        <p>Bsc. Computer Science</p>
                        <p>Meta Certified Developer</p>
                    </div>
                </div>

                <div className="bio-text">
                    <p>
                        Hi, I'm <span>Hassaan</span>. I'm a <strong>Front-End Developer</strong> with a passion for building
                        clean, user-centric interfaces. Having earned the <strong>Meta Front-End Developer Certificate</strong>
                        and completed <strong>5+ professional projects</strong>, I've built a track record as a
                        <strong> 5-star freelancer</strong>.
                    </p>
                    <p>
                        Currently, I’m focused on sharpening my <strong>UI/UX skills</strong> and developing
                        <strong> dynamic, scalable web applications</strong>. I thrive in collaborative
                        environments and love tackling complex problem-solving challenges.
                    </p>
                </div>
            </div>

            <div className="scroll-arrow">
                <img src={arrow} alt="Scroll down" className="bounce" />
            </div>
        </section>
    )
}

export default AboutMe;