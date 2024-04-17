import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";

function PublishedPhotos() {
  const importAll = (r) => r.keys().map(r);
  const publishedImages = importAll(
    require.context(
      "../assets/published-photos",
      false,
      /\.(jpg|jpeg|png|NEF|webp|JPG|PNG)$/
    )
  );

  const images = publishedImages.map((image, index) => ({
    id: index,
    original: image,
  }));

  const handleTouchMove = (event) => {
    event.stopPropagation(); // This stops the touch event from bubbling up to parent elements
  };

  return (
    <div
      className="gallery-container"
      id="published"
      onTouchMove={handleTouchMove}
    >
      <h2>PUBLISHED</h2>
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

export default PublishedPhotos;
