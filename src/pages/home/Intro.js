import React from "react"
import "../../styles/home/Intro.css"
import GetAppIcon from "@mui/icons-material/GetApp"

function Intro() {
  const SalinlahiMascot = "assets/images/logo/salinlahi_mascot.png"

  return (
    <div className="intro-container">
      <div className="container text-center intro-section">
        <div className="row">
          <div className="col-lg-6 col-md-6 d-flex align-items-start justify-content-center welcome-text">
            <div>
              <h2>Magandang araw!</h2>
              <h1>Welcome to Salinlahi!</h1>
              <p>
                Experience the beauty of Baybayin at your fingertips.
                <b> Download the Salinlahi App now </b>and start your journey in
                preserving and learning this ancient script of the Philippines!
              </p>
              <button
                className="download-button"
                onClick={() => window.location.href = "https://salinlahi-baybayin.com/Salinlahi.apk"}
              >
                <GetAppIcon style={{ marginRight: "5px" }} />
                Download the Salinlahi App
              </button>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 d-flex justify-content-center justify-content-lg-end">
            <img
              src={SalinlahiMascot}
              alt="Salinlahi Mascot"
              className="salinlahi-mascot"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro