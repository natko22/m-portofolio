import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import bgImage from "../assets/home-page-photo.jpeg";

// Import your cover images here
import cover1 from "../assets/covers/10.webp";
import cover2 from "../assets/covers/12.webp";
// import cover3 from "../assets/covers/cover3.jpg";

function Home() {
  // Refs for scroll animations
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: false, amount: 0.3 });

  // Slider images
  const sliderImages = [
    { id: 1, image: cover1, alt: "Cover 1" },
    { id: 2, image: cover2, alt: "Cover 2" },
    // { id: 3, image: cover3, alt: "Cover 3" },
  ];

  // State for slider
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slider
  useEffect(() => {
    if (sliderImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [sliderImages.length]);

  // Featured works data with imported images
  // const featuredWorks = [
  //   // {
  //   //   id: 1,
  //   //   image: editorialImage,
  //   //   title: "Editorial Beauty",
  //   //   category: "Fashion",
  //   // },
  // ];

  // Testimonials data
  // const testimonials = [
  //   {
  //     id: 1,
  //     text: "Manto created a look that perfectly captured my vision. Absolutely stunning work!",
  //     client: "Emma S., Bride",
  //   },
  //   {
  //     id: 2,
  //     text: "Working with Manto on our editorial shoot was incredible. Her creativity and precision are unmatched.",
  //     client: "Vogue Greece",
  //   },
  //   {
  //     id: 3,
  //     text: "The most talented makeup artist I've worked with in 15 years of modeling.",
  //     client: "Sophia K., Model",
  //   },
  // ];

  // State for rotating testimonials
  // const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Function to handle testimonial display
  // const showTestimonial = (index) => {
  //   setCurrentTestimonial(index);
  // };

  // Auto-rotate testimonials
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const nextIndex = (currentTestimonial + 1) % testimonials.length;
  //     showTestimonial(nextIndex);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [currentTestimonial, testimonials.length]);

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
      name: "Faces",
      url: "https://facesmag.com/fashion-editorials-en/berlin-rush-by-stela-alusi/",
    },
    { name: "Elle", url: null },
    { name: "Harper's", url: null },
    { name: "Glamour", url: null },
  ];

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
