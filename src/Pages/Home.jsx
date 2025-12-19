import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import bgImage from "../assets/home-page-photo.jpeg";

// Import your cover images here
import cover1 from "../assets/covers/10.webp";
import cover3 from "../assets/covers/11.webp";
import cover2 from "../assets/covers/12.webp";

function Home() {
  // Detect mobile for disabling
  const [isMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768;
    }
    return false;
  });

  // Refs for scroll animations
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: false, amount: 0.3 });

  // Slider images
  const sliderImages = [
    { id: 1, image: cover1, alt: "Cover 1" },
    { id: 2, image: cover2, alt: "Cover 2" },
    { id: 3, image: cover3, alt: "Cover 3" },
  ];

  // State for slider
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slider
  useEffect(() => {
    if (sliderImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [sliderImages.length]);

  // Services offered
  const services = [
    "Bridal",
    "Editorial",
    "Fashion Shows",
    "Special Events",
    "Masterclasses",
  ];

  // Brands that have featured Manto's work
  const brands = [
    {
      name: "FACES",
      url: "https://facesmag.com/fashion-editorials-en/berlin-rush-by-stela-alusi/",
    },
    {
      name: "OFF TOWN",
      url: "https://www.magcloud.com/browse/issue/3197263?__r=2937742",
    },
    {
      name: "KALTBLUT",
      url: "https://www.kaltblut-magazine.com/myl-berlin-metamorphosis-spring-summer-2025/",
    },
  ];

  // Service animation variants - disabled on mobile
  const serviceItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: isMobile
        ? { duration: 0, delay: 0 }
        : { delay: i * 0.1 + 0.2, duration: 0.5 },
    }),
  };

  // Slider animation variants
  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.1,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div>
      {/* Hero Section with Title and Large Image */}
      <motion.section
        className="hero-section-new"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="hero-content-wrapper">
          {/* Title Section */}
          <motion.div
            className="hero-title-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="hero-main-title">Manto Kamari</h1>
            <p className="hero-subtitle">Makeup & Hair Stylist</p>
          </motion.div>

          {/* Large Hero Image */}
          <motion.div
            className="hero-large-image-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          >
            <img
              src={bgImage}
              alt="Manto Kamari"
              className="hero-large-image"
            />
            <div className="hero-image-overlay">
              <motion.p
                className="hero-overlay-tagline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Transforming faces into art with precision and passion
              </motion.p>
              <motion.div
                className="cta-button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
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
        </div>
      </motion.section>
      {/* Featured Work Slider */}
      {sliderImages.length > 0 && (
        <motion.section
          className="featured-slider-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="content-section">
            <h2 className="section-title">Featured Work</h2>
            <div className="slider-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className="slider-image-wrapper"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <img
                    src={sliderImages[currentSlide].image}
                    alt={sliderImages[currentSlide].alt}
                    className="slider-image"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="view-more">
              <Link to="/gallery">View Full Gallery</Link>
            </div>
          </div>
        </motion.section>
      )}
      {/* Services - animations disabled on mobile */}
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
                initial={isMobile ? "visible" : "hidden"}
                animate={
                  isMobile ? "visible" : isServicesInView ? "visible" : "hidden"
                }
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
      ></motion.section>
      >
      {/* <div className="content-section">
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
        </div> */}
      {/* Social Proof - brand animations disabled on mobile */}
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
                initial={
                  isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={
                  isMobile
                    ? { duration: 0 }
                    : { duration: 0.5, delay: 0.6 + index * 0.1 }
                }
              >
                {brand.url ? (
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand-link"
                  >
                    {brand.name}
                  </a>
                ) : (
                  <span>{brand.name}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;
