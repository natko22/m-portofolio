import { useState, useEffect } from "react";

export const useGalleryImages = (folder, categoryName) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
                /\.(jpg|jpeg|png|webp)$/i
              )
            );
            break;
          case "editorial":
            imageFiles = importAll(
              require.context(
                "../assets/editorial",
                false,
                /\.(jpg|jpeg|png|webp)$/i
              )
            );
            break;
          case "videos":
            imageFiles = importAll(
              require.context("../assets/videos", false, /\.(mp4|webm)$/i)
            );
            isVideo = true;
            break;
          case "photoshoots":
            imageFiles = importAll(
              require.context(
                "../assets/photoshoots",
                false,
                /\.(jpg|jpeg|png|webp)$/i
              )
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
              title: "Backstage Video",
              description: "",
              type: "local",
            },
            {
              title: "Sweet Ephemeral",
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
                  alt: `${categoryName} Makeup ${index + 1}`,
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
          setIsLoading(false);
        }
      } catch (error) {
        console.error(`Error loading images from ${folder}:`, error);
        setImages([]);
        setIsLoading(false);
      }
    };

    loadImages();
  }, [folder, categoryName]);

  return { images, isLoading };
};
