import React from "react";
import ServiceBlock from "./serviceblock/service_block";
import styles from "./service_in_action.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";

const ServicesInAction = () => {
  return (
    <section className={styles.servicesInAction}>
      <SectionHeading head="Join the SAT Taxi Team" />
      <CustomContainer>
        <div className={styles.row}>
          <ServiceBlock width="295px" height="200px" />
          <ServiceBlock width="610px" height="200px" />
          <ServiceBlock width="295px" height="200px" />
        </div>
        <div className={styles.row}>
          <ServiceBlock width="715px" height="500px" />
          <div className={styles.column}>
            <ServiceBlock width="100%" height="300px" />
            <ServiceBlock width="100%" height="175px" />
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ServicesInAction;
