import React, { useState, useEffect } from "react";
import styles from "./image_carousal.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/assets/team/image1.png",
    "/assets/team/image2.png",
    "/assets/team/image3.png",
    "/assets/team/image4.png",
    "/assets/team/image5.png",
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <CustomContainer>
      <div className={styles.carousel}>
        <div className={styles.carouselWrapper}>
          <div
            className={styles.imageContainer}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div className={styles.imageBlock} key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <button className={styles.prevButton} onClick={prevImage}>
            &#10094;
          </button>
          <button className={styles.nextButton} onClick={nextImage}>
            &#10095;
          </button>
        </div>
      </div>
    </CustomContainer>
  );
};

export default ImageCarousel;
