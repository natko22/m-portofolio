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

  const closeMenu = (e) => {
    setShowMenu(false);
    e.stopPropagation();
  };

  return (
    <div className="navbar-container">
      <div className="icons-container">
        <a
          href="https://www.instagram.com/mantokamarimakeupartist/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FontAwesomeIcon className="nav-icons" icon={faInstagram} />
        </a>
        <a
          href="mailto:mantwkamari@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
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
          <Link
            className="links"
            to="/"
            onClick={() => {
              closeMenu();
            }}
          >
            HOME
          </Link>
          <Link
            className="links"
            to="/gallery"
            onClick={() => {
              closeMenu();
            }}
          >
            GALLERY
          </Link>
          <Link
            className="links"
            to="/published"
            onClick={() => {
              closeMenu();
            }}
          >
            PUBLISHED PHOTOS{" "}
          </Link>
          <Link
            className="links"
            to="/videos"
            onClick={() => {
              closeMenu();
            }}
          >
            AUDIOVISUAL
          </Link>
          <Link
            className="links"
            to="/about"
            onClick={() => {
              closeMenu();
            }}
          >
            ABOUT ME
          </Link>
        </div>
      </div>
      <div className="name-title">Manto Kamari</div>
    </div>
  );
}

export default Navbar;
