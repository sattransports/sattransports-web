import React from "react"; // React import.
import Slider from "react-slick"; // Slick carousel package.
import { Image } from "react-bootstrap"; // Bootstrap image component.
import styles from "./client_carousel.module.scss"; // SCSS module for styling.
import "slick-carousel/slick/slick.css"; // Slick carousel base CSS.
import "slick-carousel/slick/slick-theme.css"; // Slick carousel theme CSS.
import CustomContainer from "@/components/ui/custom_container/custom_container"; // Custom container for layout.
import clients from "@/constants/clients"; // Client data for the carousel.

// Client Carousel component for showcasing clients in a slider.
const ClientCarousel = () => {
  const settings = {
    infinite: true, // Infinite loop for the carousel.
    speed: 500, // Transition speed.
    slidesToShow: 3, // Number of slides visible.
    slidesToScroll: 1, // Number of slides to scroll at a time.
    autoplay: true, // Autoplay enabled.
    autoplaySpeed: 2000, // 2-second autoplay interval.
    arrows: true, // Arrows for navigation.
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 slides on screens <= 768px.
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 slide on screens <= 480px.
        },
      },
    ],
  };

  return (
    <section id="home-client-section" className={styles.clientSection}>
      <CustomContainer>
        <div className={styles.container}>
          {/* Slick slider with custom settings */}
          <Slider {...settings} className={styles.carousel}>
            {clients.map((client, index) => (
              <div key={index} className={styles.clientItem}>
                <div className={styles.clientImg}>
                  {/* Image component for client logos */}
                  <Image
                    src={client.src}
                    alt={`client-image-${index + 1} ${client.alt}`} // Alt text for accessibility.
                    width={200}
                    height={200}
                    className={styles.image}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ClientCarousel;
