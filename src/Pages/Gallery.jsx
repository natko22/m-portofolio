// Gallery.js
import React from "react";
import Creative from "../Components/Creative";
import Editorial from "../Components/Editorial";
import Celebrity from "../Components/Celebrity";

function Gallery() {
  return (
    <div>
      <Editorial />
      <Celebrity />
      <Creative />
    </div>
  );
}

export default Gallery;
