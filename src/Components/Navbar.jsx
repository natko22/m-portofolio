import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      {/* <div className="logo-container">
        <img className="logo" src={Logo} alt="logo" />
      </div> */}

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
        <Link className="links" to="/contact">
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
