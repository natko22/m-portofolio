import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";

function Beauty() {
  const importAll = (r) => r.keys().map(r);
  const beautyImages = importAll(
    require.context(
      "../assets/beauty",
      false,
      /\.(jpg|jpeg|png|NEF|webp|JPG|PNG)$/
    )
  );

  const images = beautyImages.map((image, index) => ({
    id: index,
    original: image,
  }));

  return (
    <div className="gallery-container">
      <h2>BEAUTY MAKE UP</h2>
      <LightGallery speed={500} download={false}>
        {images.map((image) => (
          <a key={image.id} href={image.original} className="gallery-item">
            <img
              alt={`Beauty Makeup ${image.id + 1}`}
              src={image.original}
              className="gallery-image"
              loading="lazy"
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}

export default Beauty;
