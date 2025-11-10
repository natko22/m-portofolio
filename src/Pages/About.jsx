import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/about.css";

function About() {
  const ProfilePhoto = require("../assets/aboutme-photo.JPG");

  return (
    <div className="about-page-container">
      {/* Hero Section - Split Layout */}
      <motion.section
        className="about-hero-centered"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="profile-frame-centered"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            className="profile-photo-centered"
            src={ProfilePhoto}
            alt="Manto Kamari"
          />
        </motion.div>

        <motion.div
          className="about-intro-centered"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="aboutme-name-centered">
            <span className="name-wrapper">Manto Kamari</span>
          </h1>
          <p className="aboutme-tagline-centered">Freelance Makeup Artist</p>

          <p className="aboutme-location">
            Berlin & Greece • Available Worldwide
          </p>

          <div className="integrated-quote">
            With over 5 years of experience creating looks that enhance natural
            beauty and bring creative visions to life across editorial, bridal,
            and celebrity artistry.
          </div>
        </motion.div>
      </motion.section>

      {/* About My Work Section - Clean, No Card */}
      <motion.section
        className="about-story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="story-content">
          <h2 className="story-title">About My Work</h2>
          <div className="story-text">
            <p>
              With over 5 years of professional experience, I specialize in
              creating makeup looks that enhance natural beauty while bringing
              creative visions to life. My work spans editorial shoots,
              celebrity clients, bridal artistry, and published campaigns across
              8 countries.
            </p>
            <p>
              I believe makeup is more than technique—it's about understanding
              each person's unique features and creating looks that make them
              feel confident and beautiful.
            </p>
          </div>
        </div>
      </motion.section>

      {/* What I Do Section - No Card */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2 className="section-title">What I Do</h2>
        <div className="specialties-container">
          {[
            {
              title: "Editorial & Fashion",
              desc: "Bold, creative concepts for fashion shoots and media",
            },
            {
              title: "Bridal Makeup",
              desc: "Timeless, elegant looks for your special day",
            },
            {
              title: "Celebrity & Events",
              desc: "Red carpet and high-profile event makeup",
            },
            {
              title: "Creative Direction",
              desc: "Concept development and artistic collaboration",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="specialty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * index + 0.6, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section - No Card */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <h2 className="cta-title">Ready to Create Magic Together?</h2>
        <p className="section-content" style={{ marginBottom: "35px" }}>
          Let's bring your vision to life
        </p>

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
      </motion.section>
    </div>
  );
}

export default About;
