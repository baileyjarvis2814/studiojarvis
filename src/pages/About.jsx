import React from "react";
import "./About.css";
import headshot from "../assets/jarvis-headshot.jpg";
// import studioSample from "../assets/studio-sample.mp3"; // place your mp3 file in /src/assets

export default function About() {
  return (
    <section className="about-container">
      <div className="about-content">
        <img src={headshot} alt="Jarvis Bailey Headshot" className="about-headshot" />
        <div className="about-text">
          <h1 className="about-title">About Jarvis Bailey</h1>
          <p>
            I'm a passionate voice actor and sound enthusiast who brings characters, stories, and brands to life through clear, emotionally grounded performances. 
            My background in both voice and sound editing allows me to approach every project with both artistic and technical precision.
          </p>

          <h2 className="about-subtitle">🎙 Studio Equipment</h2>
          <ul className="about-list">
            <li>Hypercardioid XLR Shotgun Mic – <strong>SYNCO D2</strong></li>
            <li>Condenser Microphone – <strong>Sterling Audio ST151</strong></li>
            <li>Audio Interface – <strong>Scarlett 2i2</strong></li>
          </ul>

          <h2 className="about-subtitle">🧰 Software & Setup</h2>
          <ul className="about-list">
            <li><strong>DAW:</strong> Reaper, Audacity</li>
            <li><strong>Acoustic Treatment:</strong> SoundAssured foam & moving blankets</li>
            <li><strong>Teleconferencing:</strong> Zoom, Skype, and Discord</li>
          </ul>

          <h2 className="about-subtitle">⭐️ Special skills</h2>
          <ul className="about-list">
            <li> <strong>Video editing:</strong> Vegas, Capcut, Inshot, Adobe</li>
            <li> <strong>Voice:</strong> Creatures, Animals, Singing(Baritone)</li>
            <li> <strong>Misc:</strong> Cosplay, Sewing, Baking, EMT-Basic, Intermediate Japanese </li>
          </ul>

        </div>
      </div>
    </section>
  );
}
