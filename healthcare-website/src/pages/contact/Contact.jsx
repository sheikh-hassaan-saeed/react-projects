import React, { useState } from 'react'
import './Contact.css'
import axios from 'axios'
const Contact = () => {

    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setContactForm({ ...contactForm, [e.target.name]: e.target.value })
    }


    const handleContactSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:5000/api/contact", contactForm)
        alert("Your Inquery Submitted!")

        setContactForm({ name: '', email: '', message: '' })
    }

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>
                Have questions about our lab tests or booking process?
                We’d love to hear from you. Send us a message and our team will get back to you within 24 hours.
            </p>

            <div className="contact-content">
                <form className="contact-form" onSubmit={handleContactSubmit}>
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" name='name' onChange={handleChange} required />

                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" name='email' onChange={handleChange} required />

                    <label>Message</label>
                    <textarea rows="5" placeholder="Write your message here..." name='message' onChange={handleChange} required></textarea>

                    <button type="submit" >Send Message</button>
                </form>

                <div className="contact-info">
                    <h3>Reach Us Directly</h3>
                    <div className="info-details">
                        <p><strong>Email:</strong> support@docxlabs.com</p>
                        <p><strong>Phone:</strong> +1 (415) 123-4567</p>
                        <p><strong>Address:</strong> San Francisco, CA</p>
                    </div>
                    <div className="map-placeholder">
                        <p>Google Map Placeholder</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact