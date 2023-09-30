import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";

function Bridal() {
  const importAll = (r) => r.keys().map(r);
  const bridalImages = importAll(
    require.context(
      "../assets/bridal",
      false,
      /\.(jpg|jpeg|png|NEF|webp|JPG|PNG)$/
    )
  );

  const images = bridalImages.map((image, index) => ({
    id: index,
    original: image,
  }));

  return (
    <div className="gallery-container">
      <h2>BRIDAL MAKE UP</h2>
      <LightGallery speed={500} download={false}>
        {images.map((image) => (
          <a key={image.id} href={image.original} className="gallery-item">
            <img
              alt={`Bridal Makeup ${image.id + 1}`}
              src={image.original}
              className="gallery-image"
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}

export default Bridal;
