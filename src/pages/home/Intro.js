import React from 'react';
import '../../styles/home/Intro.css';
import SaLinlahiMascot from '../../assets/images/logo/salinlahi_mascot.png';
import GetAppIcon from '@mui/icons-material/GetApp'; // Import Material UI Download icon

function Intro() {
  return (
    <div className="container text-center intro-section">
      <div className="row">
        {/* Text Section */}
        <div className="col-lg-6 col-md-6 d-flex align-items-start justify-content-center welcome-text">
          <div>
            <h2>Magandang araw!</h2>
            <h1>Welcome to Salinlahi!</h1>
            <p>
              <b>"Salinlahi"</b> signifies our dedication to preserving and passing on the ancient Baybayin script, rooted in the Tagalog term for "generation." 
              It also highlights our mission to translate the Baybayin, as <b>"salin"</b> means <b>"to translate."</b>
            </p>
            <button className="download-button">
              <GetAppIcon style={{ marginRight: '8px' }} /> {/* Material UI Download Icon */}
              Download the Salinlahi App
            </button>
          </div>
        </div>

        {/* Mascot Image */}
        <div className="col-lg-6 col-md-6 d-flex justify-content-center justify-content-lg-end">
          <img src={SaLinlahiMascot} alt="Salinlahi Mascot" className="salinlahi-mascot" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
