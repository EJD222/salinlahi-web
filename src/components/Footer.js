import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/images/logo/salinlahi_logo_1.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inner">
        <div className="footer-columns">
          
          {/* Logo Column */}
          <div className="footer-column">
            <img src={logo} alt="Salinlahi Logo" className="footer-logo" />
            <h2 className="logo-name">Salinlahi</h2>
          </div>

          {/* About & Contact Column */}
          <div className="footer-column">
            <h3>About</h3>
            <p>Salinlahi is a project dedicated to preserving cultural heritage and history.</p>
            <h3>Contact</h3>
            <p>Email: info@salinlahi.com</p>
          </div>

          {/* Download App Column */}
          <div className="footer-column">
            <h3>Download Our App</h3>
            <p className="download-text">Download the Salinlahi app to explore more.</p>
          </div>

          {/* Social Media Column */}
          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/Awanggan052120" className="social-icon" aria-label="Facebook">
                <FacebookIcon fontSize="small" />
              </a>
              <a href="https://www.instagram.com/awanggan2020/" className="social-icon" aria-label="Instagram">
                <InstagramIcon fontSize="small" />
              </a>
              <a href="mailto:info@salinlahi.com" className="social-icon" aria-label="Email">
                <EmailIcon fontSize="small" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright">
          © 2024 <span className="salinlahi">Salinlahi</span>. A project by <span className="project-link">Codebusters</span> and <span className="project-link">Awanggan</span>.
        </div>
      </div>
    </div>
  );
};

export default Footer;
