import React from "react";
import styles from "./custom_input.module.scss";

const CustomInput = (props) => {
  const { variant = 1 } = props;

  return (
    <input
      {...props}
      className={`${styles.customInput} ${styles[`v${variant}`]}`}
    />
  );
};

export default CustomInput;
