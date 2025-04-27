import React, { useState } from "react";
import Editorial from "./Editorial";
import Celebrity from "./Celebrity";
import Creative from "./Creative";
import Published from "./Published";
import "../styles/gallery-tabs.css";

function GalleryTabs() {
  // State to track which gallery is visible
  const [activeTab, setActiveTab] = useState("editorial");

  // Categories for the tabs
  const categories = [
    { id: "editorial", label: "Editorial" },
    { id: "celebrity", label: "Celebrity" },
    { id: "creative", label: "Creative" },
    { id: "published", label: "Published" },
  ];

  return (
    <>
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
      <div style={{ display: activeTab === "editorial" ? "block" : "none" }}>
        <Editorial />
      </div>
      <div style={{ display: activeTab === "celebrity" ? "block" : "none" }}>
        <Celebrity />
      </div>
      <div style={{ display: activeTab === "creative" ? "block" : "none" }}>
        <Creative />
      </div>
      <div style={{ display: activeTab === "published" ? "block" : "none" }}>
        <Published />
      </div>
    </>
  );
}

export default GalleryTabs;
