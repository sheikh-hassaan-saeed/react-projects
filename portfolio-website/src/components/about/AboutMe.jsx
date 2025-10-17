import React from 'react'
import './AboutMe.css'
import experience from '../../assets/experience.png'
import education from '../../assets/education.png'
import arrow from '../../assets/arrow.png'
const AboutMe = () => {
    return (
        <div className="about-container">

            <p>Get To Know More</p>
            <h1>About ME</h1>
            <div className="about-details">

                <div className="boxes">
                    <img src={experience} />
                    <h3>Experience</h3>
                    <p>3+ months</p>
                    <p>Frontend Development</p>
                </div>

                <div className="boxes">
                    <img src={education} />
                    <h3>Education</h3>
                    <p>Bsc. Computer Science</p>
                    <p>High School Graduate</p>

                </div>


            </div>

            <div className="text-container">
                <p>
                    Hi, I’m Hassaan — a <strong>Front-End Developer</strong> with holding an experience from a
                    remote internship. Along the way, I have earned the <strong>Meta Front-End Developer Certificate</strong>,
                    completed <strong>3+ side projects</strong>, and built a track record as a
                    <strong> 5-star freelancer</strong>. Right now, I’m focused on sharpening my
                    <strong> UI/UX skills</strong> and developing <strong>dynamic and scalable front-end projects</strong>.
                    I enjoy problem-solving, learning new tools, new tech stacks, and collaborating with teams.
                </p>
            </div>

            <div className="arrow-container">
                <img src={arrow} />
            </div>
        </div>

    )
}

export default AboutMe