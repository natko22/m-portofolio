import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="links-container">
      <Link className="links" to="/home">
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
  );
}

export default Navbar;
