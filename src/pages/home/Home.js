import React from "react"
import Features from "./Features"
import Intro from "./Intro"

function Home() {
  return (
    <>
      <Intro />
      <div className="features-section">
        <Features />
      </div>
    </>
  )
}

export default Home