import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgZoom from "lightgallery/plugins/zoom";

function Bridal() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  // Import all images from the bridal folder
  const importAll = (r) => r.keys().map(r);
  const bridalImages = importAll(
    require.context("../assets/bridal", false, /\.(jpg|jpeg|png|NEF|webp|JPG)$/)
  );

  const images = bridalImages.map((image, index) => ({
    id: index + 1,
    original: image,
    description: `Bridal Makeup ${index + 1}`,
  }));

  return (
    <div className="gallery-container">
      <LightGallery onInit={onInit} speed={500} plugins={[lgZoom]}>
        <h2>Bridal Make Up</h2>
        {images.map((image) => (
          <img
            key={image.id}
            alt={image.description}
            src={image.original}
            loading="lazy"
          />
        ))}
      </LightGallery>
    </div>
  );
}

export default Bridal;
