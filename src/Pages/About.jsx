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
        <p className="aboutme-h3">
          Freelance Make Up Artist based in Berlin and Greece.
        </p>
        <p className="aboutme-h3-centered">Available worldwide 🌍</p>

        <p className="aboutme-p">Studied at I.I.E.K. MORFI, KEPANSI</p>
      </div>
    </div>
  );
}

export default About;
