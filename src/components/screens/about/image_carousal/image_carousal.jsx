import React, { useState, useEffect } from "react"; // React hooks.
import styles from "./image_carousal.module.scss"; // SCSS module for styling.
import { images } from "@/constants/contact"; // Image data from constants.

// Carousel component to display a slideshow of images.
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current image index.

  // Function to go to the next image.
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image.
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    // Automatically advance to the next image every 3 seconds.
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    // Cleanup the interval when the component unmounts.
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once on mount.

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselWrapper}>
        <div
          className={styles.imageContainer}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Slide effect for images.
          }}
        >
          {images.map((image, index) => (
            <div className={styles.imageBlock} key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />{" "}
              {/* Image block with alt text for accessibility */}
            </div>
          ))}
        </div>
        <button className={styles.prevButton} onClick={prevImage}>
          &#10094; {/* Left arrow button */}
        </button>
        <button className={styles.nextButton} onClick={nextImage}>
          &#10095; {/* Right arrow button */}
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
