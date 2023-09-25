// Bridal.js
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// Import all images from the bridal folder
const importAll = (r) => r.keys().map(r);
const bridalImages = importAll(
  require.context("../assets/bridal", false, /\.(jpg|jpeg|png|NEF|webp|JPG)$/)
);
console.log("bridalImages", bridalImages);

// Create an array of image objects
const images = bridalImages.map((image, index) => ({
  id: index + 1,
  original: image,
  description: `Bridal Makeup ${index + 1}`,
}));
console.log(images);

function Bridal() {
  return (
    <div>
      <h2>Bridal Make Up</h2>
      <div className="image-gallery-wrapper">
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={true}
          // slideInterval={1000}
          slideOnThumbnailOver={false}
          showIndex={true}
        />
      </div>
    </div>
  );
}

export default Bridal;
