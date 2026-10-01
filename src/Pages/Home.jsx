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
      name: "KALTBLUT",
      feature: "Metamorphosis",
      url: "https://www.kaltblut-magazine.com/myl-berlin-metamorphosis-spring-summer-2025/",
    },
    {
      name: "HARPER'S BAZAAR",
      url: "https://bazaarvietnam.vn/ve-dep-co-dien-kieu-quy-toc-xua/",
    },
    {
      name: "KROBOS",
      url: "https://krobos.de/",
    },
    {
      name: "KALTBLUT",
      feature: "Thomas Hanisch",
      url: "https://www.kaltblut-magazine.com/thomas-hanisch-fall-winter-2026-exos/?fbclid=PAZnRzaAP0WxlleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacij4Xrhg3qE-VXje_0hrFiA7Ju-zQDsoPRe3XGwRHaZcHOZdDqc22Qoebz6g_aem_ecBAuRjYpAOFdtUYyAE-JQ",
    },
    {
      name: "BERLIN FASHION FILM FESTIVAL",
      url: "https://berlinfashionfilm.awardsengine.com/?action=ows%3Aentries.details&e=168495&project_year=2024",
    },
    {
      name: "INSTYLE GREECE",
      url: "https://www.instyle.gr/epikairotita/neo-tefchos-instyle-exclusive-synentefxeis-kai-oti-pr-8/",
    },
    {
      name: "KALTBLUT",
      feature: "Cunty Covergirl",
      url: "https://www.kaltblut-magazine.com/cunty-covergirl/",
    },
    {
      name: "FASHIONSNAP",
      url: "https://www.fashionsnap.com/collection/myl-berlin/2025ss/",
    },
    {
      name: "FASHION STREET BERLIN",
      url: "https://www.fashionstreet-berlin.de/trey-spring-summer-2025-bfw-berlin/309070/",
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
            <p className="hero-specialties">
              Bridal · Editorial · Private Events
            </p>
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
                Makeup and hair artistry for every story — from bridal
                mornings to editorial sets
                {/* From your most important day to your boldest shoot — beauty, done right */}
              </motion.p>
              <motion.div
                className="cta-button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <a
                  href="mailto:mantwkamari@gmail.com?subject=Bridal Booking Inquiry&body=Hi Manto, I'm interested in booking bridal hair and makeup. Please let me know your availability and rates."
                  className="btn"
                >
                  Book a Bridal Consultation
                </a>
                <Link to="/gallery" className="btn btn-secondary">
                  View Full Gallery
                </Link>
              </motion.div>
            </div>
          </motion.div>
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
          <div className="brand-marquee">
            <div className="brand-marquee-track">
              {brands.map((brand, index) => (
                <div className="brand-logo" key={`brand-${index}`}>
                  {brand.url ? (
                    <a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brand-link"
                      onClick={(e) => e.currentTarget.blur()}
                    >
                      <span className="brand-name">{brand.name}</span>
                      {brand.feature && (
                        <span className="brand-feature">{brand.feature}</span>
                      )}
                    </a>
                  ) : (
                    <span>{brand.name}</span>
                  )}
                </div>
              ))}
              {brands.map((brand, index) => (
                <div
                  className="brand-logo"
                  key={`brand-dup-${index}`}
                  aria-hidden="true"
                >
                  {brand.url ? (
                    <a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brand-link"
                      tabIndex={-1}
                      onClick={(e) => e.currentTarget.blur()}
                    >
                      <span className="brand-name">{brand.name}</span>
                      {brand.feature && (
                        <span className="brand-feature">{brand.feature}</span>
                      )}
                    </a>
                  ) : (
                    <span>{brand.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
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
                  <div
                    className="slider-image-bg"
                    style={{
                      backgroundImage: `url(${sliderImages[currentSlide].image})`,
                    }}
                    aria-hidden="true"
                  />
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
    </div>
  );
}

export default Home;
