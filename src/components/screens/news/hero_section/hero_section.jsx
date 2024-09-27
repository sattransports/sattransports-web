import React from "react";
import styles from "./hero_section.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <SectionHeading head="Our Latest News/Events" />
      <CustomContainer>
        <p>
          We are excited to share the latest developments and updates happening
          at SAT Travels. From our expanding client base to new partnerships,
          here's a quick overview of recent highlights:
        </p>
      </CustomContainer>
    </section>
  );
};

export default HeroSection;
