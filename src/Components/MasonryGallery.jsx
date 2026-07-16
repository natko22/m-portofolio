/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useCallback, useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import lightGallery from "lightgallery";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-video.css";
import lgVideo from "lightgallery/plugins/video";

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
        plugins: [lgVideo],

        // NAVIGATION
        controls: true,
        escKey: true,

        // MOBILE SETTINGS
        swipeToClose: true,
        closable: true,
        enableSwipe: true,
        enableDrag: true,
        mobileSettings: {
          controls: true,
          showCloseIcon: true,
          download: false,
        },

        // REMOVE ZOOM
        zoom: false,
        showZoomInOutIcons: false,
        actualSize: false,

        // COUNTER
        counter: true,

        // VIDEO SETTINGS
        videojs: true,
        videojsOptions: {
          muted: false,
          controls: true,
        },
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
    600: 2,
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
            href={image.isVideo ? "#" : image.original}
            className="masonry-item"
            data-src={image.original}
            {...(image.isVideo && {
              "data-video": JSON.stringify({
                source: [{ src: image.original, type: "video/mp4" }],
                attributes: {
                  preload: "metadata",
                  controls: true,
                  playsinline: true,
                },
              }),
            })}
            onClick={(e) => {
              // Prevent default link behavior on mobile
              if (image.isVideo) {
                e.preventDefault();
              }
            }}
          >
            <div className="masonry-image-container">
              {!loadedImages.has(image.id) && (
                <div className="image-skeleton"></div>
              )}

              {image.isVideo ? (
                <video
                  className={`masonry-image ${
                    loadedImages.has(image.id) ? "loaded" : ""
                  }`}
                  muted
                  playsInline
                  preload="metadata"
                  onLoadedMetadata={() => handleImageLoad(image.id)}
                  style={{ width: "100%", height: "auto", display: "block" }}
                >
                  <source src={image.original} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={image.original}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className={`masonry-image ${
                    loadedImages.has(image.id) ? "loaded" : ""
                  }`}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => handleImageLoad(image.id)}
                />
              )}
              <div className="masonry-overlay">
                <p className="masonry-overlay-text">
                  {image.isVideo ? "Play video" : "View full size"}
                </p>
              </div>
            </div>
          </a>
        ))}
      </Masonry>
    </div>
  );
}

export default MasonryGallery;
