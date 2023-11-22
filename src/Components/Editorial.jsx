import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";

function Editorial() {
  const importAll = (r) => r.keys().map(r);
  const editorialImages = importAll(
    require.context(
      "../assets/editorial",
      false,
      /\.(jpg|jpeg|png|NEF|webp|JPG|PNG)$/
    )
  );

  const images = editorialImages.map((image, index) => ({
    id: index,
    original: image,
  }));

  return (
    <div className="gallery-container">
      <h2>EDITORIAL MAKE UP</h2>
      <LightGallery speed={500} download={false}>
        {images.map((image) => (
          <a key={image.id} href={image.original} className="gallery-item">
            <img
              alt=""
              // {`Editorial Makeup ${image.id + 1}`}
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

export default Editorial;
