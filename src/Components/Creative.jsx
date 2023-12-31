import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";

function Creative() {
  const importAll = (r) => r.keys().map(r);
  const creativeImages = importAll(
    require.context(
      "../assets/creative",
      false,
      /\.(jpg|jpeg|png|NEF|webp|JPG|PNG|JPEG)$/
    )
  );

  const images = creativeImages.map((image, index) => ({
    id: index,
    original: image,
  }));

  return (
    <div className="gallery-container">
      <h2>CREATIVE MAKE UP</h2>
      <LightGallery speed={500} download={false}>
        {images.map((image) => (
          <a key={image.id} href={image.original} className="gallery-item">
            <img
              alt=""
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

export default Creative;
