import React from "react";
import styles from "./services.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import HeroSection from "./herosection/HeroSection";
import ServiceSection from "./servicesection/ServiceSection";
import ServicesInAction from "./serviceinaction/service_in_action";

const ServicesScreen = () => {
  return (
    <main className={styles.servicesScreen}>
      <CustomContainer>
        <HeroSection />
        <ServiceSection />
        <ServicesInAction />
      </CustomContainer>
    </main>
  );
};

export default ServicesScreen;
