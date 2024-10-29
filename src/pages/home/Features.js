import React from 'react';
import '../../styles/home/Features.css';

function Features() {

  const BaybayinIcon = 'assets/images/logo/salinlahi_mascot.png'
  const ToolsIcon = 'assets/images/logo/salinlahi_mascot.png'
  const CultureIcon = 'assets/images/logo/salinlahi_mascot.png'

  return (
    <div className="features-section container">
      <h2 className="text-center">Explore Our App Features</h2>
      <div className="row">
        {/* Baybayin Learning Feature */}
        <div className="col-md-4 text-center feature">
          <img src={BaybayinIcon} alt="Baybayin Learning" className="feature-icon" />
          <h3>Learn Baybayin</h3>
          <p>Master the ancient Filipino script, Baybayin, with step-by-step lessons and tools.</p>
        </div>

        {/* Interactive Tools Feature */}
        <div className="col-md-4 text-center feature">
          <img src={ToolsIcon} alt="Interactive Tools" className="feature-icon" />
          <h3>Interactive Tools</h3>
          <p>Engage with games, quizzes, and flashcards to reinforce your learning and have fun along the way.</p>
        </div>

        {/* Filipino Culture Exploration Feature */}
        <div className="col-md-4 text-center feature">
          <img src={CultureIcon} alt="Filipino Culture" className="feature-icon" />
          <h3>Explore Filipino Culture</h3>
          <p>Immerse yourself in Filipino culture by learning about its history, traditions, and language.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
