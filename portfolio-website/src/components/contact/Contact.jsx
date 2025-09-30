import React from 'react'
import './Contact.css'
import email from '../../assets/email.png'
import linkedin from '../../assets/linkedin.png'
const Contact = () => {
    return (
        <>
            <p className='contact-p1'>Get in Touch</p>
            <h1 className='contact-h1'>Contact Me</h1>

            <div className="contact-container">
                <div className="elements-container">
                    <div className="email">
                        <img src={email} />
                        <p>sheikhhassaansaeed@gmail.com</p>
                    </div>

                    <div className="linkedin">
                        <a href='https://www.linkedin.com/in/sheikh-hassaan-saeed/' target='_blank' rel='noopener noreferer'><img src={linkedin} /></a>
                        <p>Linkedin</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact