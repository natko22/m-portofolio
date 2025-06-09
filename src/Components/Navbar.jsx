import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
      {/* REMOVED: Social icons container - moved to contact section */}

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
            to="/clients"
            onClick={() => {
              closeMenu();
            }}
          >
            CLIENTS
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
    </div>
  );
}

export default Navbar;
