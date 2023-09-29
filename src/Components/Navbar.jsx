import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="icons-container">
        <a
          href="https://www.instagram.com/mantomakeupartist/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FontAwesomeIcon className="nav-icons" icon={faInstagram} />
        </a>
        <a href="mantokamari@gmail.com" className="icon">
          <FontAwesomeIcon className="nav-icons" icon={faEnvelope} />
        </a>
      </div>

      <div className="links-container">
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/gallery">
          Gallery
        </Link>
        <Link className="links" to="/services">
          Services
        </Link>
        <Link className="links" to="/about">
          About me
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
