import React from "react"; // React import.
import { Image } from "react-bootstrap"; // Bootstrap Image component.
import styles from "./why_choose_us.module.scss"; // SCSS module for styling.
import SectionHeading from "@/components/ui/section_heading/section_heading"; // Section heading component.
import { features } from "@/constants/contact"; // Feature data from constants.

// Individual feature card component.
const FeatureCard = ({ title, description, imageSrc, imageAlt, reverse }) => {
  return (
    <div
      className={`${styles.featureCard} ${reverse ? styles.reverse : ""}`} // Apply reverse class if `reverse` is true.
      data-aos={reverse ? "fade-left" : "fade-right"} // Animation based on the reverse prop.
    >
      <Image
        loading="lazy"
        src={imageSrc}
        alt={imageAlt} // Alt text for accessibility.
        className={styles.image}
        data-aos="zoom-in" // Zoom-in animation.
      />
      <div className={styles.content} data-aos="fade-up">
        {" "}
        {/* Fade-up animation */}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

// Main "Why Choose Us" section component.
const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUs}>
      <SectionHeading head="Why Choose Us" /> {/* Section heading */}
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} reverse={index % 2 !== 0} /> // Feature cards with alternating layout.
      ))}
    </section>
  );
};

export default WhyChooseUs;
