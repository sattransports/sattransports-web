import React from "react";
import styles from "./custom_input.module.scss"; // SCSS module for styling

const CustomInput = (props) => {
  const { variant = 1 } = props; // Default variant is set to 1

  return (
    <input
      {...props}
      className={`${styles.customInput} ${styles[`v${variant}`]}`} // Apply variant-based styles
    />
  );
};

export default CustomInput;
