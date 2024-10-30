import React from "react"
import "../../styles/about/About.css"
import { AwangganImages } from "../../../src/values/Media.js"

const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-header">
        <div className="header-left">
          <h1>AWANGGAN</h1>
          <p>
            Aming ipinakikilala sa inyo ang Awanggan-Walang Hanggan! Ang aming
            kapisanan ay naghahatid ng libre at tunay na serbisyo, at aral
            patungkol sa sinaunang-sulat sa Katagalugan, ang Baybayin. Kami rin
            ay rehistrado na sa ilalim ng Kagawaran ng Kalakalan at Industriya.
          </p>
          <p>
            Ipadala lang ang inyong mga katanungan sa aming Facebook Page o
            Contact Us Page upang amin kayong matulungan.
          </p>
          <h1>VISION</h1>
          <p>
            Layunin ng Awanggan na maipalaganap ang Baybayin sa iba't ibang dako
            ng mundo at maisabuhay ng bawat indibidwal ang pagyakap sa ating
            Kultura. Dahil naniniwala kaming isa ang Baybayin sa magiging daan
            tungo sa pagiging bagong bersyon nating mga Pilipino.
          </p>
          <h1>MISSION</h1>
          <p>
            Dahil ito sa aming WALANG HANGGANG dedikasyon na maipalaganap ang
            Baybayin at ang mga kwentong bumabalot dito. Binuhay tayo ng
            Kasaysayan sa maling paraan. Kaya nandito kami upang buksan ang mga
            mata ninyo sa mga pagkakamaling ito.
          </p>
        </div>
        <div className="header-right">
          <h1 className="salinlahi-title">SALINLAHI</h1>
          <p>
            Salinlahi is an innovative web and mobile application dedicated to
            the art of Baybayin, the ancient script of the Philippines. The name
            is rooted in the Tagalog term for "generation," representing our
            commitment to preserving and passing on Baybayin to future
            generations. Additionally, "Salin" translates to "translate" in
            Tagalog, emphasizing our mission to translate the beauty of Baybayin
            into the modern era.
          </p>
          <h1>DEVELOPERS/RESEARCHERS</h1>
          <p>
            Salinlahi is a capstone project developed by Codebusters, a team
            consisting of Elmalia Jane S. Diaz, Lhizel N. Tabual, Karl Vincent
            N. Antonio, and Merwil G. Varona, Information Technology students
            from Angeles University Foundation, dedicated to Awanggan.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2 className="team-header">TEAM AWANGGAN </h2>
        <div className="team-members">
          <img
            src={AwangganImages.awanngan1}
            alt="Elmalia Jane S. Diaz"
            className="member-image"
          />
          <img
            src={AwangganImages.awanngan2}
            alt="Karl Vincent N. Antonio"
            className="member-image"
          />
          <img
            src={AwangganImages.awanngan3}
            alt="Lhizel N. Tabual"
            className="member-image"
          />
          <img
            src={AwangganImages.awanngan4}
            alt="Merwil G. Varona"
            className="member-image"
          />
          <img
            src={AwangganImages.awanngan5}
            alt="Merwil G. Varona"
            className="member-image"
          />
        </div>
      </div>
    </div>
  )
}

export default About