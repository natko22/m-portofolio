import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgZoom from "lightgallery/plugins/zoom";

function Beauty() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  // Import all images from the bridal folder
  const importAll = (r) => r.keys().map(r);
  const beautyImages = importAll(
    require.context("../assets/beauty", false, /\.(jpg|jpeg|png|NEF|webp|JPG)$/)
  );

  const images = beautyImages.map((image, index) => ({
    id: index + 1,
    original: image,
    description: `Beauty Makeup ${index + 1}`,
  }));

  return (
    <div className="gallery-container">
      <LightGallery onInit={onInit} speed={500} plugins={[lgZoom]}>
        <h2>BEAUTY MAKE UP</h2>
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

export default Beauty;
