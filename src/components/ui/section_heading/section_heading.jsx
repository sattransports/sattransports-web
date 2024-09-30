import React from "react";
import styles from "./section_heading.module.scss"; // Import the corresponding SCSS file for styling.
import fonts from "@/styles/fonts"; // Import custom fonts (assuming they're managed in this file).

const SectionHeading = ({ head = "", variant = 1 }) => {
  return (
    <div
      className={`${styles.sectionHead} ${styles[`v${variant}`]}`} // Apply variant-based class for different styles.
      data-aos="fade-up" // Data attribute for AOS (Animate on Scroll).
    >
      {/* Render heading and hr only if the 'head' prop is provided */}
      {head && (
        <div>
          <h1 className={fonts.sofadi}>{head}</h1>{" "}
          {/* Apply custom font class to the heading */}
          <hr /> {/* Horizontal line under the heading */}
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
