import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
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
