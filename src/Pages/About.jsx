import React from "react";

function About() {
  const ProfilePhoto = require("../assets/13.JPG");
  return (
    <div className="about-me-container">
      <div>
        <img className="profile-photo" src={ProfilePhoto} alt="" />
      </div>
      <div className="about-me-box">
        <h1 className="aboutme">Manto Kamari</h1>
        <h3 className="aboutme-h3">
          Freelance Make Up Artist based in Berlin and Greece. Available
          worldwide 🌍
        </h3>
        <p className="aboutme-p"></p>
      </div>
    </div>
  );
}

export default About;
