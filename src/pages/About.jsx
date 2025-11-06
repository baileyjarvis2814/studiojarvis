import React from "react";
import "./About.css";
import headshot from "../assets/jarvis-headshot.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="container about-container">
        <div className="about-text">
          <h1>About me</h1>
          <p>
            I’m <span className="highlight">Jarvis Bailey</span>, a passionate
            voice actor and developer with a love for storytelling and sound.
            My work spans from character-driven performances to commercial and
            narration projects, all backed by a strong technical understanding
            of production.
          </p>
          <p>
            When I’m not behind the mic, I’m building creative web experiences
            like this site — blending my love for design, tech, and performance.
            I aim to bring authenticity and emotion to every project I take on.
          </p>
        </div>

        <div className="about-image">
          <img
            src={headshot}
            alt="Jarvis Bailey headshot"
            className="profile-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
