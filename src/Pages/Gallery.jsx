// Gallery.js
import React from "react";
import Bridal from "../Components/Bridal";
import Creative from "../Components/Creative";
import Editorial from "../Components/Editorial";
import Beauty from "../Components/Beauty";
import Celebrity from "../Components/Celebrity";

function Gallery() {
  return (
    <div>
      <Editorial />
      <Celebrity />
      <Bridal />
      <Creative />
      <Beauty />
    </div>
  );
}

export default Gallery;
