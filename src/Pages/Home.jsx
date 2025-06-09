import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

import bgImage from "../assets/home-page-photo.jpeg";

import editorialImage from "../assets/editorial/37.webp";
import celebrityImage from "../assets/celebrity/06.jpg.webp";
import creativeImage from "../assets/creative/09.webp";

function Home() {
  // Refs for scroll animations
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: false, amount: 0.3 });

  // Featured works data with imported images
  const featuredWorks = [
    {
      id: 1,
      image: editorialImage,
      title: "Editorial Beauty",
      category: "Fashion",
    },
    {
      id: 2,
      image: celebrityImage,
      title: "Celebrities",
      category: "Celebrity",
    },
    {
      id: 3,
      image: creativeImage,
      title: "Avant-Garde",
      category: "Creative",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      text: "Manto created a look that perfectly captured my vision. Absolutely stunning work!",
      client: "Emma S., Bride",
    },
    {
      id: 2,
      text: "Working with Manto on our editorial shoot was incredible. Her creativity and precision are unmatched.",
      client: "Vogue Greece",
    },
    {
      id: 3,
      text: "The most talented makeup artist I've worked with in 15 years of modeling.",
      client: "Sophia K., Model",
    },
  ];

  // State for rotating testimonials
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Function to handle testimonial display
  const showTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentTestimonial, testimonials.length]);

  // Services offered
  const services = [
    "Bridal",
    "Editorial",
    "Fashion Shows",
    "Special Events",
    "Masterclasses",
  ];

  // Brands that have featured Manto's work
  const brands = ["Vogue", "Elle", "Harper's", "Glamour"];

  // Service animation variants
  const serviceItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div>
      {/* Hero Section with Image */}
      <motion.section
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={bgImage} alt="Manto Kamari" className="hero-image" />

          <div className="hero-overlay">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            >
              Manto Kamari
            </motion.h1>
            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Transforming faces into art with precision and passion
            </motion.p>
            <motion.div
              className="cta-button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="mailto:mantwkamari@gmail.com?subject=Booking Inquiry&body=Hi Manto, I'm interested in booking a makeup session. Please let me know your availability and rates."
                className="btn"
              >
                Book Your Session
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Featured Works */}
      <motion.section
        className="featured-works"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="content-section">
          <h2 className="section-title">Featured Work</h2>
          <div className="featured-grid">
            {featuredWorks.map((work) => (
              <motion.div
                key={work.id}
                className="featured-item"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img src={work.image} alt={work.title} />
                <div className="work-info">
                  <h3>{work.title}</h3>
                  <p>{work.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="view-more">
            <Link to="/gallery">View Full Gallery</Link>
          </div>
        </div>
      </motion.section>

      {/* Services */}
      <motion.section
        className="services"
        ref={servicesRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="content-section">
          <h2 className="section-title">Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-item"
                custom={index}
                variants={serviceItemVariants}
                initial="hidden"
                animate={isServicesInView ? "visible" : "hidden"}
              >
                {service}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonial */}
      <motion.section
        className="testimonial"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="content-section">
          <h2 className="section-title">Client Praise</h2>
          <div className="testimonial-container">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-content ${
                  index === currentTestimonial ? "active" : ""
                }`}
              >
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="testimonial-client">— {testimonial.client}</p>
              </div>
            ))}
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`testimonial-dot ${
                  index === currentTestimonial ? "active" : ""
                }`}
                onClick={() => showTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Social Proof */}
      <motion.section
        className="social-proof"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="content-section">
          <h2 className="section-title">As Seen In</h2>
          <div className="brand-logos">
            {brands.map((brand, index) => (
              <motion.div
                className="brand-logo"
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;
