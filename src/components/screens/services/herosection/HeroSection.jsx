import React from "react";
import styles from "./herosection.module.scss";
import { Image } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd56400d33e3a8488e671386d5ba64b4d24e0fe946fee33becc8a723ca2d5aee?placeholderIfAbsent=true&apiKey=71133375415a4aeab1b4d2d16190b188"
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
      </div>
    </section>
  );
};

export default HeroSection;
