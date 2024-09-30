import React from "react"; // React import.
import styles from "./hero_section.module.scss"; // SCSS module for styling.
import { Image } from "react-bootstrap"; // Bootstrap Image component.

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <Image
        loading="lazy"
        src="/assets/services/svcherobg.png"
        alt="Background image for hero section"
        className={styles.heroImage}
      />
      <div className={styles.heroContent}>
        <h1>Our Services</h1>
        <p>
          At SAT Transport, we offer a wide range of transportation solutions
          designed to meet the needs of both individuals and businesses. Our
          commitment to safety, reliability, and customer satisfaction makes us
          the go-to choice for seamless travel experiences. Explore our top
          services below:
        </p>
        <br />
        <p>
          A key component of our offerings is our{" "}
          <strong>Employee Transportation Services (ETS)</strong>, which cater
          to the specific transportation needs of corporate clients. As a
          premier provider of ETS in South India, we ensure timely and secure
          commutes for thousands of employees daily.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
