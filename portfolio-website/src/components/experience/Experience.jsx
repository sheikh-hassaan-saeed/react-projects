import React from 'react'
import './Experience.css'
import checkmark from '../../assets/checkmark.png'
const Experience = () => {
    return (
        <section id='skills'>
            <div className="section3">
                <p className='section3-p'>Explore My</p>
                <h1 className='section3-h1'>Skills</h1>
            </div>
            <div className="main-article-container">
                <div className="article-container">
                    {[
                        { name: "HTML", level: "Experienced" },
                        { name: "CSS", level: "Experienced" },
                        { name: "JAVASCRIPT", level: "Experienced" },
                        { name: "REACT", level: "Experienced" },

                    ].map((skill) =>
                        <article>
                            <img src={checkmark} />
                            <div>
                                <h3>{skill.name}</h3>
                                <p>{skill.level}</p>
                            </div>
                        </article>
                    )}
                </div>

                <div className="article-container-2">
                    {[
                        { name: "Git & GitHub", level: "Experienced" },

                    ].map((skill) =>
                        <article>
                            <img src={checkmark} />
                            <div>
                                <h3>{skill.name}</h3>
                                <p>{skill.level}</p>
                            </div>
                        </article>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Experience