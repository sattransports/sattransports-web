import React from "react"; // React import.
import styles from "./marquee.module.scss"; // SCSS module for styling.

// MarqueeComponent for displaying scrolling text with icons.
const MarqueeComponent = () => {
  const items = [
    "Daily Office Commute",
    "Night Shift Commute",
    "Corporate Event",
    "Fleet Management",
    "Micro",
    "Rental",
    "Mini Intercity",
    "Sedan Mini",
  ];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeContent}>
          {items.map((item, index) => (
            <React.Fragment key={item}>
              <div className={styles.marqueeItem}>{item}</div>{" "}
              {/* Marquee text */}
              {index < 7 && ( // Render star image between items except after the last one.
                <img
                  loading="lazy"
                  src="/assets/home/star.svg"
                  alt="" // Decorative image, no alt text needed.
                  className={styles.marqueeImage}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeComponent;
