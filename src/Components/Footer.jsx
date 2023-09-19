import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <Link to="/" target="_top" className="name">
          Manto Kamari © 2023
        </Link>
        <a
          href="https://www.instagram.com/mantomakeupartist/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
