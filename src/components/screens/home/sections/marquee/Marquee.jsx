import React from "react";
import styles from "./marquee.module.scss"; // Import your SCSS styles

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
      {/* Container for marquee */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeContent}>
          {items.map((item, index) => (
            <React.Fragment key={item}>
              <div className={styles.marqueeItem}>{item}</div>
              {index < 7 && (
                <img
                  loading="lazy"
                  src="/assets/star.svg"
                  alt=""
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
