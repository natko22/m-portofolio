import React, { useState, useCallback, useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import lightGallery from "lightgallery";

// Only import the base CSS - no zoom
import "lightgallery/css/lightgallery.css";

function MasonryGallery({ images, category = "Gallery" }) {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const galleryRef = useRef(null);
  const lightGalleryInstance = useRef(null);

  const handleImageLoad = useCallback((imageId) => {
    setLoadedImages((prev) => new Set([...prev, imageId]));
  }, []);

  useEffect(() => {
    if (galleryRef.current && !lightGalleryInstance.current) {
      lightGalleryInstance.current = lightGallery(galleryRef.current, {
        selector: ".masonry-item",
        speed: 500,
        download: false,

        // NAVIGATION - Enable all methods
        controls: true, // Show prev/next arrows
        escKey: true, // ESC to close

        // MOBILE SETTINGS
        swipeToClose: true, // Swipe down to close
        closable: true, // Click outside to close
        enableSwipe: true, // Enable swipe navigation
        enableDrag: true, // Enable drag navigation

        // REMOVE ZOOM
        zoom: false, // Disable zoom completely

        // TOOLBAR - Hide zoom button
        showZoomInOutIcons: false,
        actualSize: false,

        // COUNTER - Show "1 / 10"
        counter: true,
      });
    }

    return () => {
      if (lightGalleryInstance.current) {
        lightGalleryInstance.current.destroy();
        lightGalleryInstance.current = null;
      }
    };
  }, [images]);

  const breakpointColumns = {
    default: 4,
    1200: 3,
    900: 2,
    600: 1,
  };

  return (
    <div className="masonry-gallery-container" ref={galleryRef}>
      <Masonry
        breakpointCols={breakpointColumns}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {images.map((image) => (
          <a
            key={image.id}
            href={image.original}
            className="masonry-item"
            data-src={image.original}
          >
            <div className="masonry-image-container">
              <img
                src={image.original}
                alt={image.alt}
                className={`masonry-image ${
                  loadedImages.has(image.id) ? "loaded" : ""
                }`}
                loading="lazy"
                decoding="async"
                onLoad={() => handleImageLoad(image.id)}
              />
              <div className="masonry-overlay">
                <p className="masonry-overlay-text">View full size</p>
              </div>
            </div>
          </a>
        ))}
      </Masonry>
    </div>
  );
}

export default MasonryGallery;
