import React from "react";
import styles from "./custom_textarea.module.scss"; // SCSS module for styling

const CustomTextArea = (props) => {
  const { variant = 1 } = props; // Default variant is set to 1

  return (
    <textarea
      {...props}
      className={`${styles.customInput} ${styles[`v${variant}`]}`} // Apply variant-based styles
    />
  );
};

export default CustomTextArea;
