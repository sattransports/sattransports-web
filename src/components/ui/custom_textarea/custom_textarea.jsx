import React from "react";
import styles from "./custom_textarea.module.scss";

const CustomTextArea = (props) => {
  const { variant = 1 } = props;

  return (
    <textarea
      {...props}
      className={`${styles.customInput} ${styles[`v${variant}`]}`}
    />
  );
};

export default CustomTextArea;
