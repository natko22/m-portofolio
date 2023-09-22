import React from "react";

// Import your bridal images
import bride1 from "../assets/bridal/bride1.jpg";
import bride2 from "../assets/bridal/bride2.jpg";
import bride3 from "../assets/bridal/bride3.jpg";
import bride4 from "../assets/bridal/bride4.webp";
import bride5 from "../assets/bridal/bride5.webp";
import bride6 from "../assets/bridal/bride6.webp";

function Bridal() {
  // Create an array of bridal image URLs
  const bridalImages = [
    bride1,
    bride2,
    bride3,
    bride4,
    bride5,
    bride6,
    // Add more image URLs here
  ];

  return (
    <div>
      <h2>Bridal Makeup</h2>
      <div className="photo-grid">
        {bridalImages.map((imageURL) => (
          <img src={imageURL} alt={`Bridal Makeup`} />
        ))}
      </div>
    </div>
  );
}

export default Bridal;
