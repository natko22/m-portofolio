import React from "react";
import LightGallery from "lightgallery/react";
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-thumbnail.css";

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
    id: index,
    original: image,
  }));

  return (
    <div className="gallery-container">
      <LightGallery speed={500} download={false} counter={true}>
        <h2>EDITORIAL MAKE UP</h2>

        {images.map((image) => (
          <img key={image.id} alt={image.description} src={image.original} />
        ))}
      </LightGallery>
    </div>
  );
}

export default Editorial;
