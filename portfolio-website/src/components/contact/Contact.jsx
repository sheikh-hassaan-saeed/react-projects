import React from 'react';
import './Contact.css';
import emailIcon from '../../assets/email.png';
import linkedinIcon from '../../assets/linkedin.png';

const Contact = () => {
    return (
        <section id='contact' className="contact-section">
            <div className="contact-header">
                <p className='contact-subtitle'>Get in Touch</p>
                <h1 className='contact-title'>Contact Me</h1>
            </div>

            <div className="contact-wrapper">
                <div className="contact-cards-container">

                    <a href="mailto:sheikhhassaansaeed@gmail.com" className="contact-card">
                        <div className="contact-icon-box">
                            <img src={emailIcon} alt="Email" />
                        </div>
                        <div className="contact-info">
                            <span>Email</span>
                            <p>sheikhhassaansaeed@gmail.com</p>
                        </div>
                    </a>

                    <a href='https://www.linkedin.com/in/sheikh-hassaan-saeed/' target='_blank' rel='noopener noreferrer' className="contact-card">
                        <div className="contact-icon-box">
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </div>
                        <div className="contact-info">
                            <span>LinkedIn</span>
                            <p>View Profile</p>
                        </div>
                    </a>

                </div>
            </div>
        </section>
    );
}

export default Contact;