import React from "react";

function About() {
  const ProfilePhoto = require("../assets/profile-photo.JPG");
  return (
    <div className="about-me-box">
      <h1 className="aboutme">Manto Kamari</h1>
      <img className="profile-photo" src={ProfilePhoto} alt="" />
      <h3>
        Freelance Make Up Artist based in Berlin and Greece. Available worldwide
        🌍
      </h3>
      <p className="aboutme-p">
        Dedicated to delivering top-notch beauty services, I have been a part of
        this industry since 2000. My unwavering commitment is to provide clients
        with a comprehensive range of services to enhance their look and
        confidence. Recognizing the demands of modern life, I've designed my
        services to be hassle-free and accessible. With my professional
        expertise, I pledge to cater to your every requirement. I exclusively
        utilize premium equipment, cutting-edge techniques, and state-of-the-art
        technology to ensure that every service I offer is administered with the
        utmost precision and care. For any inquiries, please don't hesitate to
        reach out.
      </p>
    </div>
  );
}

export default About;
