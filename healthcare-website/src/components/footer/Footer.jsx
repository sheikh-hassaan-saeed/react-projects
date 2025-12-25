import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-brand">
                    <h2 className="footer-logo">DocX<span>Labs</span></h2>
                    <p className="footer-desc">
                        Leading the way in medical excellence with advanced diagnostics
                        and compassionate patient care.
                    </p>
                    <div className="social-icons">
                        {/* Replace with actual icons like FontAwesome or Lucide */}
                        <a href="#" aria-label="Facebook">FB</a>
                        <a href="#" aria-label="Twitter">TW</a>
                        <a href="#" aria-label="LinkedIn">LN</a>
                        <a href="#" aria-label="Instagram">IG</a>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Services</h3>
                        <Link to="/care">Medical Care</Link>
                        <Link to="/tests">Laboratory Tests</Link>
                        <Link to="/labs">Medical Labs</Link>
                        <Link to="/packages">Health Packages</Link>
                    </div>

                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/appointment">Book Appointment</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>

                    <div className="footer-column">
                        <h3>Support</h3>
                        <Link to="/faq">FAQs</Link>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>&copy; 2025 DocX Labs. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <span>Built with Excellence</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;