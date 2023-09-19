import React from "react";
import myImage from "../assets/bd04ad_ce107648610c45c9b6e5704d81900a7c~mv2.webp";
import Image from "../assets/bd04ad_0c220c5c2b02435f9ecc657b22f0c749~mv2.webp";

function Gallery() {
  return (
    <div>
      <img className="img-gallery" src={myImage} alt="afro-woman" />
      <img className="img-gallery" src={Image} alt="afro-woman" />
    </div>
  );
}

export default Gallery;
