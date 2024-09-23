import React from "react";
import styles from "./custom_button.module.scss";

const CustomButton = ({ children, variant = 1 }) => {
  return (
    <button className={`${styles.customButton} ${styles[`v${variant}`]}`}>
      {children}
    </button>
  );
};

export default CustomButton;
