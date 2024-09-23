import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
     
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#press">Press</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#help-center">Help Center</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe to get the latest updates</p>
          <form className="footer-newsletter">
            <input type="email" placeholder="Enter email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-socials">
            <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Printify. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
