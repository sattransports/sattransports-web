import React from "react";
import { Image } from "react-bootstrap";
import styles from "./feature_card.module.scss";

const FeatureCard = ({ title, description, imageSrc, imageAlt, reverse }) => {
  return (
    <div className={`${styles.featureCard} ${reverse ? styles.reverse : ""}`}>
      <Image
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
