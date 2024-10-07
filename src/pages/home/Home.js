import React from 'react';
import Features from './Features';
import Intro from './Intro'; // Import the new Intro component

function Home() {
  return (
    <>
      {/* Intro Section */}
      <Intro />
      {/* Separate Features Section */}
      <div className="features-section">
        <Features />
      </div>
    </>
  );
}

export default Home;
