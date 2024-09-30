import React from "react"; // Importing React.
import { Image } from "react-bootstrap"; // Bootstrap Image component.
import styles from "./clients.module.scss"; // SCSS module for styling.
import SectionHeading from "@/components/ui/section_heading/section_heading"; // Section heading component.
import CustomContainer from "@/components/ui/custom_container/custom_container"; // Custom container for layout.
import clients from "@/constants/clients"; // Clients data.

// Client section component that displays the client logos and some call to action.
const ClientSection = () => {
  return (
    <CustomContainer>
      <section className={styles.clientSection}>
        {/* Heading for the section */}
        <SectionHeading head="Our Valued Clients" />

        {/* Introduction text about the clients */}
        <div className={styles.introText}>
          <p>
            At SAT, we hold our clients in the highest regard, recognizing that
            their trust and satisfaction are the cornerstone of our success.
            Every partnership we forge is built on a foundation of mutual
            respect, reliability, and dedication to excellence. We pride
            ourselves on maintaining long-lasting relationships, ensuring that
            our transportation solutions consistently meet the unique needs of
            each company we serve.
          </p>
        </div>

        {/* Sub-heading introducing the clients */}
        <h2 className={styles.subHeading}>Our Clients Include:</h2>

        {/* Grid to display the logos of the clients */}
        <div className={styles.clientsGrid}>
          {clients.map((client, index) => (
            <div
              key={index}
              className={styles.clientLogo}
              data-aos="slide-up" // AOS animation on scroll.
              data-aos-delay={`${index * 100}`} // Delay increases per client for staggered animation.
            >
              <div className={styles.logoContainer}>
                <div className={styles.logoItem}>
                  <Image
                    loading="lazy"
                    src={client.src}
                    alt={`Client logo ${index + 1}`} // Alt text for accessibility.
                    className={styles.logoImage}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action section */}
        <div className={styles.callToAction}>
          <SectionHeading head="Join Us on the Journey" />
          <p>
            At SAT, we believe that every successful journey is built on strong,
            lasting partnerships. By choosing us, you're choosing a team that
            values efficiency, reliability, and innovation just as much as you
            do. We invite you to join our growing network of esteemed partners,
            where trust and exceptional service are the driving forces behind
            everything we do.
          </p>
        </div>
      </section>
    </CustomContainer>
  );
};

export default ClientSection;
