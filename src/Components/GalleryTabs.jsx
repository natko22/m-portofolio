import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MasonryGallery from "./MasonryGallery";
import { useGalleryImages } from "../hooks/useGalleryImage";
import "../styles/gallery-tabs.css";

function GalleryTabs() {
  const [activeTab, setActiveTab] = useState("editorial");

  // Load images for each category
  const editorialImages = useGalleryImages("editorial", "Editorial");
  const celebrityImages = useGalleryImages("celebrity", "Celebrity");
  const creativeImages = useGalleryImages("creative", "Creative");
  const publishedImages = useGalleryImages("published-photos", "Published");

  const categories = [
    { id: "editorial", label: "Editorial", images: editorialImages },
    { id: "celebrity", label: "Celebrity", images: celebrityImages },
    { id: "creative", label: "Creative", images: creativeImages },
    { id: "published", label: "Published", images: publishedImages },
  ];

  const activeCategory = categories.find((c) => c.id === activeTab);

  return (
    <div className="gallery-wrapper">
      {/* Tab Navigation */}
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

      {/* Gallery Content with Smooth Fade Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <MasonryGallery
            images={activeCategory.images}
            category={activeCategory.label}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default GalleryTabs;
