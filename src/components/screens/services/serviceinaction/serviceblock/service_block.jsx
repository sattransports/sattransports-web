import React from "react";
import styles from "./service_block.module.scss";

const ServiceBlock = ({ width, height }) => {
  return <div className={styles.serviceBlock} style={{ width, height }} />;
};

export default ServiceBlock;
