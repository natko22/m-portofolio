import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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
        <a href="mailto:mantokamari@gmail.com" className="icon">
          <FontAwesomeIcon className="nav-icons" icon={faEnvelope} />
        </a>
      </div>

      <div className={`links-container ${showMenu ? "show" : ""}`}>
        <div className="menu-toggle" onClick={toggleMenu}>
          {!showMenu ? (
            <>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </>
          ) : (
            <FontAwesomeIcon className="close-icon" icon={faTimes} />
          )}
        </div>
        <div className={`menu-items ${showMenu ? "show" : ""}`}>
          <Link className="links" to="/" onClick={toggleMenu}>
            HOME
          </Link>
          <Link className="links" to="/gallery" onClick={toggleMenu}>
            GALLERY
          </Link>
          <Link className="links" to="/videos" onClick={toggleMenu}>
            AUDIOVISUAL
          </Link>
          <Link className="links" to="/about" onClick={toggleMenu}>
            ABOUT ME
          </Link>
        </div>
      </div>
      <div className="name-title">Manto Kamari</div>
    </div>
  );
}

export default Navbar;
