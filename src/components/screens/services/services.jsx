import React from "react"; // React import.
import styles from "./services.module.scss"; // SCSS module for styling.
import CustomContainer from "@/components/ui/custom_container/custom_container"; // Custom container for layout.
import HeroSection from "./hero_section/hero_section"; // Importing HeroSection component.
import ServiceSection from "./servicesection/service_section"; // Importing ServiceSection component.
import ServicesInAction from "./serviceinaction/service_in_action"; // Importing ServicesInAction component.

// Main Services screen layout
const ServicesScreen = () => {
  return (
    <main className={styles.servicesScreen}>
      <CustomContainer>
        {/* Hero section of the page */}
        <HeroSection />

        {/* Services listed in detail */}
        <ServiceSection />

        {/* Visual representation of services */}
        <ServicesInAction />
      </CustomContainer>
    </main>
  );
};

export default ServicesScreen;
