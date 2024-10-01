import React from "react"; // React import.
import styles from "./service_section.module.scss"; // SCSS module for styling.
import CustomContainer from "@/components/ui/custom_container/custom_container"; // Custom container for layout.
import { services } from "@/constants/services"; // Importing services data.
import { Image } from "react-bootstrap";

// ServiceItem component to display individual service information.
function ServiceItem({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition,
}) {
  return (
    <div className={`${styles.serviceItem} ${styles[imagePosition]}`}>
      <div
        className={styles.imageContainer}
        data-aos={imagePosition === "left" ? "fade-right" : "fade-left"} // Add AOS animation
      >
        <Image
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className={styles.image} // Service image with lazy loading.
        />
      </div>
      <div
        className={styles.textContainer}
        data-aos="fade-up" // Add AOS animation for text
      >
        <h2 className={styles.title}>{title}</h2> {/* Service title */}
        <p className={styles.description}>{description}</p>{" "}
        {/* Service description */}
      </div>
    </div>
  );
}

// ServiceSection component to render all services in a list.
function ServiceSection() {
  return (
    <section className={styles.serviceSection}>
      <CustomContainer>
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} /> // Render each service.
        ))}
      </CustomContainer>
    </section>
  );
}

export default ServiceSection;
