import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>
                Have questions about our lab tests or booking process?
                We’d love to hear from you. Send us a message and our team will get back to you within 24 hours.
            </p>

            <div className="contact-content">
                <form className="contact-form">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" required />

                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" required />

                    <label>Message</label>
                    <textarea rows="5" placeholder="Write your message here..." required></textarea>

                    <button type="submit">Send Message</button>
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