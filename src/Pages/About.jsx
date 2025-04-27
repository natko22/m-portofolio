import React from "react";
import "../styles/about.css";

function About() {
  const ProfilePhoto = require("../assets/aboutme-photo.JPG");

  return (
    <div className="about-page-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="profile-frame">
          <img
            className="profile-photo"
            src={ProfilePhoto}
            alt="Manto Kamari"
          />
        </div>
        <div className="about-intro">
          <h1 className="aboutme-name">
            <span className="name-wrapper">Manto Kamari</span>
          </h1>
          <p className="aboutme-tagline">
            Freelance Make Up Artist based in Berlin and Greece
          </p>
          <p className="aboutme-available">Available worldwide 🌍</p>
        </div>
      </section>

      {/* Content Wrapper */}
      <div className="about-content-wrapper">
        {/* Philosophy */}
        <section className="about-section">
          <h2 className="section-title">My Philosophy</h2>
          <p className="section-content">
            I believe makeup is about enhancing natural beauty and expressing
            personality. With over 5 years of experience and formal training
            from I.I.E.K. MORFI in KEPANSI, I bring a unique blend of technical
            skill and artistic vision to every client.
          </p>
        </section>

        {/* Specialties */}
        <section className="about-section">
          <h2 className="section-title">Specialties</h2>
          <div className="specialties-container">
            <div className="specialty">
              <h3>Bridal</h3>
              <p>Creating timeless looks for your special day</p>
            </div>
            <div className="specialty">
              <h3>Editorial</h3>
              <p>Bold, creative concepts for fashion and media</p>
            </div>
            <div className="specialty">
              <h3>Natural</h3>
              <p>
                Enhancing your features while maintaining a natural appearance
              </p>
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="about-section">
          <h2 className="section-title">My Journey</h2>
          <div className="journey-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Education</h3>
                <p>Studied at I.I.E.K. MORFI, KEPANSI</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Professional Experience</h3>
                <p>5+ years working with clients across Europe</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Current</h3>
                <p>Freelance artist based in Berlin and Greece</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
