import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import "../styles/about.css";

function About() {
  const ProfilePhoto = require("../assets/aboutme-photo.JPG");
  const [currentQuote, setCurrentQuote] = useState(0);

  const inspirationalQuotes = [
    "Beauty is about being comfortable in your own skin",
    "Makeup is art, beauty is spirit",
    "Confidence is the best makeup you can wear",
    "Every face tells a story, I help write the perfect chapter",
  ];

  const expertise = [
    "Color Theory",
    "Contouring & Highlighting",
    "Bridal Makeup",
    "Editorial Concepts",
    "Special Effects",
  ];

  const funFacts = [
    { fact: "I own over 200 lipsticks in every shade imaginable" },
    { fact: "I've worked in 8 different countries" },
    { fact: "I can't start my day without Greek coffee" },
    { fact: "I'm constantly learning new techniques through online courses" },
    { fact: "I always play music during makeup sessions - it sets the mood!" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspirationalQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [inspirationalQuotes.length]);

  return (
    <div className="about-page-container">
      {/* Hero Section with Subtle Animation */}
      <motion.section
        className="about-hero-centered"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="profile-frame-centered"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img
            className="profile-photo-centered"
            src={ProfilePhoto}
            alt="Manto Kamari"
          />
        </motion.div>

        <motion.div
          className="about-intro-centered"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="aboutme-name-centered">
            <span className="name-wrapper">Manto Kamari</span>
          </h1>
          <p className="aboutme-tagline-centered">Freelance Makeup Artist</p>
          <p className="aboutme-location">Based in Berlin & Greece</p>
          <div className="aboutme-availability">
            <FontAwesomeIcon icon={faGlobe} className="globe-icon" />
            <span>Available Worldwide</span>
          </div>

          <motion.div
            key={currentQuote}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="integrated-quote"
          >
            {inspirationalQuotes[currentQuote]}
          </motion.div>
        </motion.div>
      </motion.section>

      <div className="about-content-wrapper">
        {/* Philosophy */}
        <motion.section
          className="about-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="section-title">My Philosophy</h2>
          <p className="section-content">
            I believe makeup is about enhancing natural beauty and expressing
            personality. With over 5 years of professional experience and formal
            training, I bring a unique blend of technical skill and artistic
            vision to every client.
          </p>
        </motion.section>
        {/* Fun Facts - Subtle Animation */}
        <motion.section
          className="about-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="section-title">A Little About Me</h2>
          <div className="fun-facts-grid">
            {funFacts.map((item, index) => (
              <motion.div
                key={index}
                className="fun-fact-card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index + 0.6, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <p>{item.fact}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        {/* Expertise - Subtle Animation */}
        <motion.section
          className="about-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="section-title">My Expertise</h2>
          <div className="expertise-list">
            {expertise.map((skill, index) => (
              <motion.div
                key={index}
                className="expertise-item"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index + 0.7, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <h3>{skill}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>
        {/* Specialties */}
        <motion.section
          className="about-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2 className="section-title">Specialties</h2>
          <div className="specialties-container">
            {[
              {
                title: "Bridal",
                desc: "Creating timeless looks for your special day",
              },
              {
                title: "Editorial",
                desc: "Bold, creative concepts for fashion and media",
              },
              {
                title: "Natural",
                desc: "Enhancing your features while maintaining a natural appearance",
              },
            ].map((specialty, index) => (
              <motion.div
                key={index}
                className="specialty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index + 0.8, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <h3>{specialty.title}</h3>
                <p>{specialty.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="cta-section"
        >
          <h2 className="cta-title">Ready to Create Magic Together?</h2>
          <p className="section-content" style={{ marginBottom: "35px" }}>
            Let's bring your vision to life
          </p>

          {/* Contact Options */}
          <div className="contact-options">
            <motion.a
              href="mailto:mantwkamari@gmail.com"
              className="contact-btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email Me</span>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/mantokamarimakeupartist/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faInstagram} />
              <span>Follow on Instagram</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
