import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/video-gallery.css";

function VideoGallery({ videos, category = "Videos" }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <div className="video-gallery-container">
        <div className="video-grid">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              className="video-card"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedVideo(video)}
            >
              <div className="video-thumbnail">
                {video.type === "youtube" ? (
                  // YouTube thumbnail
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="video-preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  // Local video preview
                  <video
                    className="video-preview"
                    muted
                    playsInline
                    preload="metadata"
                    onLoadedMetadata={(e) => {
                      e.target.currentTime = 1;
                    }}
                  >
                    <source src={`${video.original}#t=0.1`} type="video/mp4" />
                  </video>
                )}
                <div className="video-overlay">
                  <div className="play-icon">▶</div>
                </div>
              </div>
              {video.title && <h3 className="video-title">{video.title}</h3>}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="video-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="video-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="video-modal-close"
                onClick={() => setSelectedVideo(null)}
              >
                ✕
              </button>

              <div className="video-player-container">
                {selectedVideo.type === "youtube" ? (
                  // YouTube embed
                  <iframe
                    className="video-player"
                    src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  // Local video player
                  <video className="video-player" controls autoPlay playsInline>
                    <source src={selectedVideo.original} type="video/mp4" />
                  </video>
                )}
              </div>

              {selectedVideo.description && (
                <div className="video-description">
                  <h3>{selectedVideo.title}</h3>
                  <p>{selectedVideo.description}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default VideoGallery;
