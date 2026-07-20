import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MasonryGallery from "./MasonryGallery";
import VideoGallery from "./VideoGallery";
import { useGalleryImages } from "../hooks/useGalleryImage";
import "../styles/gallery-tabs.css";

function GalleryTabs() {
  const [activeTab, setActiveTab] = useState("covers");

  const { images: coversImages, isLoading: coversLoading } = useGalleryImages(
    "covers",
    "Covers",
    activeTab === "covers"
  );

  const { images: editorialImages, isLoading: editorialLoading } =
    useGalleryImages("editorial", "Editorial", activeTab === "editorial");

  const { images: videosImages, isLoading: videosLoading } = useGalleryImages(
    "videos",
    "Videos",
    activeTab === "videos"
  );

  const { images: photoshootsImages, isLoading: photoshootsLoading } =
    useGalleryImages("photoshoots", "Photoshoots", activeTab === "photoshoots");

  const categories = [
    {
      id: "covers",
      label: "Covers",
      images: coversImages,
      isLoading: coversLoading,
    },
    {
      id: "editorial",
      label: "Editorial",
      images: editorialImages,
      isLoading: editorialLoading,
    },
    {
      id: "videos",
      label: "Videos",
      images: videosImages,
      isLoading: videosLoading,
    },
    {
      id: "photoshoots",
      label: "Photoshoots",
      images: photoshootsImages,
      isLoading: photoshootsLoading,
    },
  ];

  const activeCategory = categories.find((c) => c.id === activeTab);

  return (
    <div className="gallery-wrapper">
      <div className="gallery-tabs">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`tab-button ${
              activeTab === category.id ? "active" : ""
            }`}
            onClick={() => setActiveTab(category.id)}
            aria-label={`Show ${category.label} gallery`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Gallery Content */}
      <div className="gallery-content-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {activeCategory.isLoading ? (
              <div className="gallery-loading-brief">
                <div className="loading-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            ) : activeTab === "videos" ? (
              <VideoGallery
                videos={activeCategory.images}
                category={activeCategory.label}
              />
            ) : (
              <MasonryGallery
                images={activeCategory.images}
                category={activeCategory.label}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default GalleryTabs;
