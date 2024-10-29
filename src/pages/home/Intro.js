import React from 'react';
import '../../styles/home/Intro.css';
import SaLinlahiMascot from '../../assets/images/logo/salinlahi_mascot.png';
import GetAppIcon from '@mui/icons-material/GetApp'; // Import Material UI Download icon

function Intro() {
  return (
    <div className="intro-container">
      <div className="container text-center intro-section">
        <div className="row">
          {/* Text Section */}
          <div className="col-lg-6 col-md-6 d-flex align-items-start justify-content-center welcome-text">
            <div>
              <h2>Magandang araw!</h2>
              <h1>Welcome to Salinlahi!</h1>
              <p>
                Experience the beauty of Baybayin at your fingertips. 
                <b> Download the Salinlahi App now </b>and start your journey in preserving 
                and learning this ancient script of the Philippines!
              </p>*
              <button className="download-button">
                <GetAppIcon style={{ marginRight: '5px' }} /> {/* Material UI Download Icon */}
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
    </div>
  );
}

export default Intro;
