import React from "react"
import "../styles/Footer.css"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import EmailIcon from "@mui/icons-material/Email"

const Footer = () => {
  const logo = "/assets/images/logo/salinlahi_logo_1.png"

  return (
    <div className="footer-container">
      <div className="footer-inner">
        <div className="footer-columns">

          <div className="footer-column">
            <img src={logo} alt="Salinlahi Logo" className="footer-logo" />
            <h2 className="logo-name">Salinlahi</h2>
          </div>

          <div className="footer-column">
            <h3>About</h3>
            <p>
              Salinlahi is a project dedicated to bringing Baybayin closer to
              Filipinos.
            </p>
            <h3>Contact</h3>
            <p>Email: awangan.baybayin@gmail.com</p>
          </div>

          <div className="footer-column">
            <h3>Download Our App</h3>
            <p className="download-text">
              Download the Salinlahi app to explore more.
            </p>
          </div>

          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/Awanggan052120"
                className="social-icon"
                aria-label="Facebook"
              >
                <FacebookIcon fontSize="small" />
              </a>
              <a
                href="https://www.instagram.com/awanggan2020/"
                className="social-icon"
                aria-label="Instagram"
              >
                <InstagramIcon fontSize="small" />
              </a>
              <a
                href="mailto:awangan.baybayin@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <EmailIcon fontSize="small" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          © 2024 <span className="salinlahi">Salinlahi</span>. A project by{" "}
          <span className="project-link">Codebusters</span> and{" "}
          <span className="project-link">Awanggan</span>.
        </div>
      </div>
    </div>
  )
}

export default Footer