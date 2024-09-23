import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./clientcarousel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const ClientCarousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const clients = [
    {
      src: "/assets/clients/citibank.png",
      alt: "Ascensus",
    },
    {
      src: "/assets/clients/convergys.png",
      alt: "Genpact",
    },
    {
      src: "/assets/clients/dgrisk.png",
      alt: "Guidehouse",
    },
    {
      src: "/assets/clients/foodhub.png",
      alt: "Guidehouse",
    },
  ];

  return (
    <section id="home-client-section" className={styles.clientSection}>
      <CustomContainer>
        <div className={styles.container}>
          <Slider {...settings} className={styles.carousel}>
            {clients.map((client, index) => (
              <div key={index} className={styles.clientItem}>
                <div className={styles.clientImg}>
                  <Image
                    src={client.src}
                    alt={`client-image-${index + 1} ${client.alt}`}
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
