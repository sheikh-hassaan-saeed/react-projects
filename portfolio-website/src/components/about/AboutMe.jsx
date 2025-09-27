import React from 'react'
import './AboutMe.css'
import experience from '../../assets/experience.png'
import education from '../../assets/education.png'
const AboutMe = () => {
    return (
        <div className="about-container">

            <p>Get To Know More</p>
            <h1>About ME</h1>
            <div className="about-details">

                <div className="boxes">
                    <img src={experience} />
                    <h3>Experience</h3>
                    <p>2+ months</p>
                    <p>Fronend Development</p>
                </div>

                <div className="boxes">
                    <img src={education} />
                    <h3>Education</h3>
                    <p>High School</p>
                    <p>Bsc. Computer Science</p>
                </div>


            </div>

            <div className="text-container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, iusto accusantium accusamus quisquam sint debitis inventore expedita hic! Adipisci, laudantium ea. Ipsum, veritatis similique ex tempora quaerat molestiae eligendi veniam delectus recusandae numquam ducimus totam modi cumque magni debitis magnam adipisci molestias voluptates. Optio minus aut odio atque tenetur unde.</p>
            </div>


        </div>
    )
}

export default AboutMe