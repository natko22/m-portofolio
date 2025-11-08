import { useMemo } from "react";

export const useGalleryImages = (folder, categoryName) => {
  return useMemo(() => {
    try {
      const importAll = (r) => r.keys().map(r);

      let images;

      switch (folder) {
        case "editorial":
          images = importAll(
            require.context(
              "../assets/editorial",
              false,
              /\.(jpg|jpeg|png|webp)$/i
            )
          );
          break;
        case "celebrity":
          images = importAll(
            require.context(
              "../assets/celebrity",
              false,
              /\.(jpg|jpeg|png|webp)$/i
            )
          );
          break;
        case "creative":
          images = importAll(
            require.context(
              "../assets/creative",
              false,
              /\.(jpg|jpeg|png|webp)$/i
            )
          );
          break;
        case "published-photos":
          images = importAll(
            require.context(
              "../assets/published-photos",
              false,
              /\.(jpg|jpeg|png|webp)$/i
            )
          );
          break;
        default:
          images = [];
      }

      return images.map((image, index) => ({
        id: `${categoryName}-${index}`,
        original: image,
        alt: `${categoryName} Makeup ${index + 1}`,
      }));
    } catch (error) {
      console.error(`Error loading images from ${folder}:`, error);
      return [];
    }
  }, [folder, categoryName]);
};
