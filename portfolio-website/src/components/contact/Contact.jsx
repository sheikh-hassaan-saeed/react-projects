import React from 'react'
import './Contact.css'
import email from '../../assets/email.png'
import linkedin from '../../assets/linkedin.png'

const Contact = () => {
    return (
        <section id='contact'>
            <p className='contact-p1'>Get in Touch</p>
            <h1 className='contact-h1'>Contact Me</h1>

            <div className="contact-container">
                <div className="elements-container">
                    <div className="email">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sheikhhassaansaeed@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src={email} alt="Email icon" />
                        </a>
                        <p>sheikhhassaansaeed@gmail.com</p>
                    </div>

                    <div className="linkedin">
                        <a href='https://www.linkedin.com/in/sheikh-hassaan-saeed/' target='_blank' rel='noopener noreferrer'>
                            <img src={linkedin} alt="LinkedIn profile" />
                        </a>
                        <p>Linkedin</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact