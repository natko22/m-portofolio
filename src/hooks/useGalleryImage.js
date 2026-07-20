import { useState, useEffect, useRef } from "react";

export const useGalleryImages = (folder, categoryName, enabled = true) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(enabled);
  const hasLoadedRef = useRef(false);

  useEffect(() => {
    if (!enabled || hasLoadedRef.current) return;

    const loadImages = async () => {
      setIsLoading(true);

      try {
        const importAll = (r) => r.keys().map(r);
        let imageFiles;
        let isVideo = false;

        switch (folder) {
          case "covers":
            imageFiles = importAll(
              require.context(
                "../assets/covers",
                false,
                /\.(jpg|jpeg|png|webp)$/i,
              ),
            );
            break;
          case "editorial":
            imageFiles = importAll(
              require.context(
                "../assets/editorial",
                false,
                /\.(jpg|jpeg|png|webp)$/i,
              ),
            );
            break;
          case "videos":
            // Served from public/videos (not bundled by webpack) since these
            // are large binary files that don't need JS-module processing.
            imageFiles = [
              "RUSH1.mp4",
              "RUSH2.mp4",
              "RUSH3.mp4",
              "ephemeral.mp4",
              "maincut4_3.mp4",
            ].map((name) => `${process.env.PUBLIC_URL}/videos/${name}`);
            isVideo = true;
            break;
          case "photoshoots":
            imageFiles = importAll(
              require.context(
                "../assets/photoshoots",
                false,
                /\.(jpg|jpeg|png|webp)$/i,
              ),
            );
            break;
          default:
            imageFiles = [];
        }

        if (isVideo) {
          // Define custom metadata for each video IN THE SAME ORDER as the files
          const videoMetadata = [
            {
              title: "Faces Magazine 1",
              description: "BERLIN RUSH by Stela Alusi",
              type: "local",
            },
            {
              title: "Faces Magazine 2",
              description: "BERLIN RUSH by Stela Alusi",
              type: "local",
            },
            {
              title: "Faces Magazine 3",
              description: "BERLIN RUSH by Stela Alusi",
              type: "local",
            },

            {
              title: "Sweet Ephemeral",
              description: "",
              type: "local",
            },
            {
              title: "Backstage Video",
              description: "",
              type: "local",
            },
            {
              title: "Yung Street - A Ku Zolo (Official Music Video)",
              description:
                "🏆 Best Makeup and Costume - Bangkok Movie Awards\n🎬 Award Winner - Europe Music Video Awards 2025",
              type: "youtube",
              youtubeId: "92Rgd4Tti3U",
            },
          ];

          const videoData = imageFiles.map((src, index) => ({
            id: `${categoryName}-${index}`,
            original: src,
            alt: `${categoryName} Video ${index + 1}`,
            title: videoMetadata[index]?.title || `Video ${index + 1}`,
            description: videoMetadata[index]?.description || "",
            isVideo: true,
            type: "local",
            width: 1920,
            height: 1080,
            aspectRatio: 16 / 9,
          }));

          // Add YouTube videos
          const youtubeVideos = videoMetadata
            .filter((m) => m.type === "youtube")
            .map((metadata, index) => ({
              id: `${categoryName}-youtube-${index}`,
              original: null,
              alt: metadata.title,
              title: metadata.title,
              description: metadata.description,
              isVideo: true,
              type: "youtube",
              youtubeId: metadata.youtubeId,
              width: 1920,
              height: 1080,
              aspectRatio: 16 / 9,
            }));

          setImages([...videoData, ...youtubeVideos]);
          hasLoadedRef.current = true;
          setIsLoading(false);
        } else {
          // Load images and get dimensions
          const imagePromises = imageFiles.map((src, index) => {
            return new Promise((resolve) => {
              const img = new Image();
              img.onload = () => {
                resolve({
                  id: `${categoryName}-${index}`,
                  original: src,
                  // alt: `${categoryName} Makeup ${index + 1}`,
                  isVideo: false,
                  width: img.naturalWidth,
                  height: img.naturalHeight,
                  aspectRatio: img.naturalWidth / img.naturalHeight,
                });
              };
              img.onerror = () => {
                console.warn(`Failed to load: ${src}`);
                resolve(null);
              };
              img.src = src;
            });
          });

          const loadedImages = await Promise.all(imagePromises);
          setImages(loadedImages.filter((img) => img !== null));
          hasLoadedRef.current = true;
          setIsLoading(false);
        }
      } catch (error) {
        console.error(`Error loading images from ${folder}:`, error);
        setImages([]);
        setIsLoading(false);
      }
    };

    loadImages();
  }, [folder, categoryName, enabled]);

  return { images, isLoading };
};
