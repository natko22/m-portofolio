import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/services">Services</Link>
      <Link to="/about">About me</Link>
      <Link to="/contact">Contact Me</Link>
    </div>
  );
}

export default Navbar;
