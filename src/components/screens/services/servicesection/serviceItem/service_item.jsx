import React from "react";
import styles from "./service_item.module.scss";

function ServiceItem({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition,
}) {
  return (
    <div className={`${styles.serviceItem} ${styles[imagePosition]}`}>
      <div className={styles.imageContainer}>
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default ServiceItem;
