import React from "react";
import styles from "./location.module.scss";

const LocationSection = () => {
  return (
    <section className={styles.locationSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e528b6870229ffbfd7b1d87073690b77dc7e130e820f8184b61c3b0767abe48?placeholderIfAbsent=true&apiKey=71133375415a4aeab1b4d2d16190b188"
              alt="Location map"
              className={styles.image}
            />
          </div>
          <div className={styles.textWrapper}>
            <h2>Our Location</h2>
            <p>Jl. Raya Sesetan No.210, Sesetan, Denpasar, Bali</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
