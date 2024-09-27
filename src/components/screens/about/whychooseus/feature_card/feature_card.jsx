import React from "react";
import { Image } from "react-bootstrap";
import styles from "./feature_card.module.scss";

const FeatureCard = ({ title, description, imageSrc, imageAlt, reverse }) => {
  return (
    <div
      className={`${styles.featureCard} ${reverse ? styles.reverse : ""}`}
      data-aos={reverse ? "fade-left" : "fade-right"}
    >
      <img
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className={styles.image}
        data-aos="zoom-in"
      />
      <div className={styles.content} data-aos="fade-up">
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
