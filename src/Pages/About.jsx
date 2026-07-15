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
          <p className="aboutme-eyebrow">Freelance Makeup Artist</p>
          <h1 className="aboutme-name-centered">
            <span className="name-wrapper">Manto Kamari</span>
          </h1>

          <p className="aboutme-location">
            Berlin & Greece • Available Worldwide
          </p>

          <div className="integrated-quote">
            Beauty has no single standard. Every face tells a different story,
            and my role is to bring out what makes each one unique.
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
              I'm Manto Kamari. I'm a Make-up Artist and Hair Stylist based in
              Berlin. I have over 8 years of experience in beauty, bridal,
              fashion, TV, commercial, and e-commerce makeup.
            </p>
            <p>
              I believe makeup is not about changing people. It's about helping
              them feel confident and bringing out their natural beauty. Every
              face is different, and that's what makes my job so special.
            </p>
            <p>
              I've worked with people from many different countries, cultures,
              and skin tones, and that has taught me that every client needs
              something different. I choose the right techniques and products to
              fit each person's features and skin, so the final look feels
              beautiful, comfortable, and natural.
            </p>
            <p>
              Whether I'm working with a bride, a model, or a brand, I always
              focus on the little details. I want every person who sits in my
              chair to feel relaxed, understood, and happy with the final
              result. For me, makeup isn't just a job — it's a way to help
              people feel like the best version of themselves.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Divider */}
      <hr className="section-divider" />

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

      {/* Divider */}
      <hr className="section-divider" />

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
