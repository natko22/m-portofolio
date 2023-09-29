import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgZoom from "lightgallery/plugins/zoom";

function Editorial() {
  // Import all images from the bridal folder
  const importAll = (r) => r.keys().map(r);
  const editorialImages = importAll(
    require.context(
      "../assets/editorial",
      false,
      /\.(jpg|jpeg|png|NEF|webp|JPG|PNG)$/
    )
  );

  const images = editorialImages.map((image, index) => ({
    id: index + 1,
    original: image,
    description: `Editorial Makeup ${index + 1}`,
  }));

  return (
    <div className="gallery-container">
      <LightGallery speed={500} plugins={[lgZoom]}>
        <h2>EDITORIAL MAKE UP</h2>

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

export default Editorial;
