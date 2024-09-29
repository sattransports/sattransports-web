import React from "react"; // React import.
import styles from "./location.module.scss"; // SCSS module for styling.

// Location section component that displays a map and location details.
const LocationSection = () => {
  return (
    <section className={styles.locationSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img
              loading="lazy"
              src="/assets/contact/location.png" // Path to the location image.
              alt="Location map" // Alt text for accessibility.
              className={styles.image}
            />
          </div>
          <div className={styles.textWrapper}>
            <h2>Our Location</h2>
            <p>Jl. Raya Sesetan No.210, Sesetan, Denpasar, Bali</p>{" "}
            {/* Location address */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
