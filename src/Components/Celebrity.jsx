import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";

function Celebrity() {
  const importAll = (r) => r.keys().map(r);
  const celebrityImages = importAll(
    require.context(
      "../assets/celebrity",
      false,
      /\.(jpg|jpeg|png|NEF|webp|JPG|PNG)$/
    )
  );

  const images = celebrityImages.map((image, index) => ({
    id: index,
    original: image,
  }));

  return (
    <div className="gallery-container">
      <h2>CELEBRITY MAKE UP</h2>
      <LightGallery speed={500} download={false}>
        {images.map((image) => (
          <a key={image.id} href={image.original} className="gallery-item">
            <img
              alt={`Celebrity Makeup ${image.id + 1}`}
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

export default Celebrity;
