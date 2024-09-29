import React from "react"; // React import.
import styles from "./custom_button.module.scss"; // SCSS module for button styling.

// CustomButton component with optional variant prop.
const CustomButton = ({ children, variant = 1 }) => {
  return (
    <button className={`${styles.customButton} ${styles[`v${variant}`]}`}>
      {children}
    </button>
  );
};

export default CustomButton;
