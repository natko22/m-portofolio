import React from "react";
import Bridal from "../Components/Bridal"; // Import your Bridal component

function Gallery() {
  return (
    <div>
      <h2>My Makeup Gallery</h2>
      {/* Bridal Makeup Section */}
      <h3>Bridal Makeup</h3>
      <Bridal /> {/* Render the Bridal component here */}
      {/* Add other sections as needed */}
    </div>
  );
}

export default Gallery;
