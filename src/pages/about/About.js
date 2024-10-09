import React from 'react';
import '../../styles/about/About.css';

const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-header">
        <div className="header-left">
          <h1>WHO WE ARE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="header-right">
          <h1 className="salinlahi-title">SALINLAHI</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2 className="team-header">THE TEAM</h2>
        <div className="team-members">
          <div className="team-member">
            <div className="member-image" />
            <h3 className="member-name">ELMALIA JANE S. DIAZ</h3>
            <p className="member-role">ROLE</p>
          </div>
          <div className="team-member">
            <div className="member-image" />
            <h3 className="member-name">KARL VINCENT N. ANTONIO</h3>
            <p className="member-role">ROLE</p>
          </div>
          <div className="team-member">
            <div className="member-image" />
            <h3 className="member-name">LHIZEL N. TABUAL</h3>
            <p className="member-role">ROLE</p>
          </div>
          <div className="team-member">
            <div className="member-image" />
            <h3 className="member-name">MERWIL G. VARONA</h3>
            <p className="member-role">ROLE</p>
          </div>
          {/* Awanggan Rectangle */}
          <div className="awanggan-rectangle" />
        </div>
      </div>
    </div>
  );
};

export default About;
